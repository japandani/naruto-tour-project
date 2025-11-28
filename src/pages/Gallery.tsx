import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Gallery = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});

  const galleryImages = [
    {
      url: "https://cdn.poehali.dev/files/0340155d-4625-40f2-9d1e-b0e7062b54fa.jpeg",
      title: "Морские острова",
      description: "Семейные моменты у побережья"
    },
    {
      url: "https://cdn.poehali.dev/files/354621e4-6dd1-4a34-90d2-3c08c1dca019.jpeg",
      title: "Вечерний стадион",
      description: "Незабываемые эмоции под открытым небом"
    },
    {
      url: "https://cdn.poehali.dev/files/d16f7162-159b-4da6-af3a-dd6767d336f3.jpeg",
      title: "Традиционные игры",
      description: "Мастер-класс в японском парке"
    },
    {
      url: "https://cdn.poehali.dev/files/63a5411c-4bf7-4d7a-b081-d988a2020bb6.jpeg",
      title: "Чайная церемония",
      description: "Погружение в традиции Японии"
    },
    {
      url: "https://cdn.poehali.dev/files/f9e53de1-59a4-4d82-9edc-a3a86b58922e.jpeg",
      title: "Деревня Сиракава-го",
      description: "Среди рисовых полей и традиционных домов"
    },
    {
      url: "https://cdn.poehali.dev/files/c4fa33a7-df05-4792-bcdf-a872d31fc27d.jpeg",
      title: "За рулём приключений",
      description: "Путешествие по японским дорогам"
    },
    {
      url: "https://cdn.poehali.dev/files/b9c020f7-a8ee-4854-ad4c-812198638a29.jpeg",
      title: "Наш гид",
      description: "Комфортный трансфер по Японии"
    },
    {
      url: "https://cdn.poehali.dev/files/a5ecbc18-7d24-4808-a2af-78b8cda22299.jpeg",
      title: "Местные жители",
      description: "Встречи с гостеприимными японцами"
    },
    {
      url: "https://cdn.poehali.dev/files/d23c3a64-d493-4a96-920d-befa1219a8d9.jpeg",
      title: "Цветущие холмы",
      description: "Весенние краски Японии"
    },
    {
      url: "https://cdn.poehali.dev/files/8c1f7682-c884-4298-a7f2-c9f070190311.jpeg",
      title: "Традиционный рёкан",
      description: "Ночь в японском стиле"
    },
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === 'Escape') closeImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }
  };

  return (
    <div className="min-h-screen bg-background" onKeyDown={handleKeyDown}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 md:gap-4">
            <img 
              src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f6e8ec5d-14f7-497a-bf69-2d99142f26ed.jpg" 
              alt="Japan логотип"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-primary shadow-md"
            />
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-background tracking-tight" style={{ fontFamily: 'Caveat, cursive' }}>JAPAN : ДА!</h1>
              <p className="text-[10px] md:text-xs text-background/70 tracking-widest uppercase">Экскурсионное бюро</p>
            </div>
          </a>
          <div className="hidden lg:flex gap-6 xl:gap-10">
            <a href="/#home" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Главная</a>
            <a href="/#about" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">О нас</a>
            <a href="/#path" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Ваш Путь</a>
            <a href="/#tours" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Туры</a>
            <a href="/gallery" className="text-primary transition-colors font-medium text-base xl:text-lg">Галерея</a>
            <a href="/#contact" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Контакты</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/">
              <Button variant="default" className="hidden sm:block bg-primary hover:bg-primary/90 text-white px-3 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold shadow-lg">
                На главную
              </Button>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-background p-2 hover:text-primary transition-colors"
              aria-label="Меню"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-foreground/98 backdrop-blur-md border-t border-background/10 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="/#home" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Главная</a>
              <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">О нас</a>
              <a href="/#path" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Ваш Путь</a>
              <a href="/#tours" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Туры</a>
              <a href="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-primary transition-colors font-medium text-lg py-2">Галерея</a>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Контакты</a>
              <a href="/" className="sm:hidden">
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  На главную
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-foreground/5 to-background">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-12 md:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
            Галерея Японии
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
            Моменты, которые становятся воспоминаниями
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onClick={() => openImage(index)}
              >
                {imageLoading[index] !== false && (
                  <div className="absolute inset-0 bg-foreground/10 animate-pulse flex items-center justify-center">
                    <Icon name="Loader2" size={40} className="text-primary animate-spin" />
                  </div>
                )}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onLoad={() => setImageLoading(prev => ({ ...prev, [index]: false }))}
                  style={{ display: imageLoading[index] === false ? 'block' : 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                      {image.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/90">
                      {image.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Закрыть"
          >
            <Icon name="X" size={28} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 z-[110] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
            aria-label="Предыдущее фото"
          >
            <Icon name="ChevronLeft" size={32} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 z-[110] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
            aria-label="Следующее фото"
          >
            <Icon name="ChevronRight" size={32} className="text-white" />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="w-full h-full object-contain rounded-lg animate-scale-in"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-base md:text-lg text-white/90">
                {galleryImages[selectedImage].description}
              </p>
              <p className="text-sm text-white/70 mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Готовы создать свои воспоминания?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg shadow-xl">
                <Icon name="Send" size={20} className="mr-2" />
                Забронировать тур
              </Button>
            </a>
            <a href="/">
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-2">
                <Icon name="Home" size={20} className="mr-2" />
                На главную
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-background/70">© 2026 JAPAN : ДА! Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;