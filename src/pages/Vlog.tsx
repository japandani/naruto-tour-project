import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Vlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const videos = [
    {
      id: 1,
      title: 'Первый день в Токио',
      description: 'Знакомство со столицей Японии, прогулка по Синдзюку и традиционный ужин',
      thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=450&fit=crop',
      duration: '12:34',
      date: '15 марта 2024'
    },
    {
      id: 2,
      title: 'Священная гора Фудзи',
      description: 'Восхождение на символ Японии и потрясающие виды на рассвете',
      thumbnail: 'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=800&h=450&fit=crop',
      duration: '18:22',
      date: '18 марта 2024'
    },
    {
      id: 3,
      title: 'Киото: город храмов',
      description: 'Золотой павильон, бамбуковый лес и встреча с гейшами',
      thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=450&fit=crop',
      duration: '15:47',
      date: '21 марта 2024'
    },
    {
      id: 4,
      title: 'Традиционная чайная церемония',
      description: 'Погружение в древнее искусство чайной церемонии в аутентичном чайном домике',
      thumbnail: 'https://images.unsplash.com/photo-1545340792-022a6f4e2e5c?w=800&h=450&fit=crop',
      duration: '10:15',
      date: '23 марта 2024'
    },
    {
      id: 5,
      title: 'Цветение сакуры в Осаке',
      description: 'Самое красивое время года в Японии - ханами под цветущими деревьями',
      thumbnail: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=450&fit=crop',
      duration: '14:56',
      date: '25 марта 2024'
    },
    {
      id: 6,
      title: 'Кулинарное путешествие',
      description: 'От уличной еды до мишленовских ресторанов: гастрономия Японии',
      thumbnail: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=450&fit=crop',
      duration: '16:33',
      date: '27 марта 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
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
            <a href="/tour" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Описание Пути</a>
            <a href="/gallery" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Галерея</a>
            <a href="/vlog" className="text-primary transition-colors font-medium text-base xl:text-lg">Vlog</a>
            <a href="/#contact" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Контакты</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="/#contact">
              <Button variant="default" className="hidden sm:block bg-primary hover:bg-primary/90 text-white px-3 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold shadow-lg">
                Связаться с нами
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
              <a href="/tour" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Описание Пути</a>
              <a href="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Галерея</a>
              <a href="/vlog" onClick={() => setMobileMenuOpen(false)} className="text-primary transition-colors font-medium text-lg py-2">Vlog</a>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Контакты</a>
              <a href="/#contact" className="sm:hidden">
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  Связаться с нами
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
      
      <div className="container mx-auto px-4 py-12 md:py-20 pt-32">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Video" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Japan Vlog</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Видео-дневник путешествия
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Смотрите живые моменты нашего путешествия по Японии. 
            Каждое видео — это погружение в культуру, традиции и невероятную атмосферу Страны восходящего солнца
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video) => (
            <Card 
              key={video.id}
              className="group cursor-pointer border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Play" size={28} className="text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-white text-xs font-medium">
                  {video.duration}
                </div>
              </div>
              
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Icon name="Calendar" size={14} />
                  <span>{video.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  {video.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Icon name="Youtube" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Подпишитесь на наш канал
              </h3>
              <p className="text-muted-foreground mb-6">
                Не пропустите новые выпуски о путешествиях по Японии и другим удивительным местам
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                <Icon name="Youtube" size={20} />
                Подписаться
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}