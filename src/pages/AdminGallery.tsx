import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const GALLERY_API = "https://functions.poehali.dev/0ca72437-b8dc-4114-b471-e5ad4f87ce23";

interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
  created_at: string;
  display_order: number;
}

const AdminGallery = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [newPhoto, setNewPhoto] = useState({
    url: "",
    title: "",
    description: ""
  });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      verifyToken(token);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadPhotos();
    }
  }, [isAuthenticated]);

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch(`${GALLERY_API}?action=verify`, {
        headers: {
          "X-Admin-Token": token
        }
      });
      const data = await response.json();
      if (data.valid) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("adminToken");
      }
    } catch (err) {
      console.error("Token verification error:", err);
    }
  };

  const handleLogin = async () => {
    setError("");
    localStorage.setItem("adminToken", password);
    
    try {
      const response = await fetch(`${GALLERY_API}?action=verify`, {
        headers: {
          "X-Admin-Token": password
        }
      });
      const data = await response.json();
      
      if (data.valid) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setError("Неверный пароль");
        localStorage.removeItem("adminToken");
      }
    } catch (err) {
      setError("Ошибка подключения");
    }
  };

  const loadPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(GALLERY_API);
      const data = await response.json();
      setPhotos(data.photos || []);
    } catch (err) {
      setError("Ошибка загрузки фотографий");
    } finally {
      setLoading(false);
    }
  };

  const handleAddPhoto = async () => {
    if (!newPhoto.url || !newPhoto.title) {
      setError("URL и название обязательны");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(GALLERY_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Token": token || ""
        },
        body: JSON.stringify(newPhoto)
      });

      if (response.ok) {
        setNewPhoto({ url: "", title: "", description: "" });
        await loadPhotos();
      } else {
        setError("Ошибка добавления фото");
      }
    } catch (err) {
      setError("Ошибка подключения");
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePhoto = async (id: number) => {
    if (!confirm("Удалить эту фотографию?")) return;

    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(`${GALLERY_API}?id=${id}`, {
        method: "DELETE",
        headers: {
          "X-Admin-Token": token || ""
        }
      });

      if (response.ok) {
        await loadPhotos();
      } else {
        setError("Ошибка удаления фото");
      }
    } catch (err) {
      setError("Ошибка подключения");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
    setPhotos([]);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-foreground/5 to-primary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Icon name="Lock" size={48} className="text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold mb-2">Админ-панель</h1>
              <p className="text-muted-foreground">Введите пароль для доступа</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-600 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                <Icon name="AlertCircle" size={20} />
                {error}
              </div>
            )}

            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              className="mb-4"
            />

            <Button onClick={handleLogin} className="w-full">
              Войти
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-foreground/95 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Settings" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-background">Управление галереей</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="/gallery">
              <Button variant="outline" className="border-background/20 text-background hover:bg-background/10">
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                К галерее
              </Button>
            </a>
            <Button variant="outline" onClick={handleLogout} className="border-background/20 text-background hover:bg-background/10">
              <Icon name="LogOut" size={18} className="mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-600 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
            <Icon name="AlertCircle" size={20} />
            {error}
            <button onClick={() => setError("")} className="ml-auto">
              <Icon name="X" size={16} />
            </button>
          </div>
        )}

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Plus" size={24} className="text-primary" />
              Добавить фотографию
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">URL фотографии</label>
                <Input
                  placeholder="https://cdn.poehali.dev/files/..."
                  value={newPhoto.url}
                  onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Название</label>
                <Input
                  placeholder="Название фотографии"
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Описание</label>
                <Input
                  placeholder="Описание фотографии"
                  value={newPhoto.description}
                  onChange={(e) => setNewPhoto({ ...newPhoto, description: e.target.value })}
                />
              </div>

              {newPhoto.url && (
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Предпросмотр:</p>
                  <img src={newPhoto.url} alt="Preview" className="max-h-64 rounded-lg object-contain" />
                </div>
              )}

              <Button onClick={handleAddPhoto} disabled={loading} className="w-full">
                {loading ? (
                  <>
                    <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                    Добавление...
                  </>
                ) : (
                  <>
                    <Icon name="Upload" size={18} className="mr-2" />
                    Добавить фото
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Images" size={24} className="text-primary" />
              Фотографии ({photos.length})
            </h2>

            {loading && photos.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="Loader2" size={48} className="text-primary animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Загрузка...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="border rounded-lg overflow-hidden group relative">
                    <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{photo.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{photo.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Порядок: {photo.display_order}</span>
                        <span>{new Date(photo.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminGallery;
