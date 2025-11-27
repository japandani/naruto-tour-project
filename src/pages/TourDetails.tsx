import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const TourDetails = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tourLocations = [
    {
      location: "Токио",
      nights: 4,
      subtitle: "Контрасты мегаполиса",
      description: "Приватный ужин на смотровой площадке Roppongi Hills с сомелье, раскрывающим терруар японских вин. Ночная экскурсия в район Гиндза с визитом в ателье потомственного красильщика. Закрытый аукцион на рынке Цукидзи для избранных. Мастер-класс по каллиграфии в резиденции мастера Укиё-э.",
      image: "https://cdn.poehali.dev/files/8b5c091f-7d0b-4acc-b0e4-df8a0a0e0d84.jpg",
      highlights: ["Roppongi Hills", "Рынок Цукидзи", "Мастер-класс каллиграфии", "Гиндза"]
    },
    {
      location: "Фудзи – Хаконе",
      nights: 2,
      subtitle: "Диалог со стихиями",
      description: "Приватная церемония заваривания матчи на берегу озера Кавагутико. Ночное купание в открытом онсене с видом на Фудзи. Гастрономический ужин в рёкане, отмеченном тремя мишленовскими звездами.",
      image: "https://cdn.poehali.dev/files/99cdbe1d-6c5c-49c8-98b4-ae3956803345.jpg",
      highlights: ["Церемония матчи", "Онсен с видом на Фудзи", "Рёкан 3 звезды Мишлен"]
    },
    {
      location: "Камакура",
      nights: 1,
      subtitle: "Дух самураев",
      description: "Медитация с монахом в храме Кэнтё-дзи. Частный показ в музее самурайских мечей.",
      image: "https://cdn.poehali.dev/files/4490dcc9-4ef2-4060-9755-3f04e0e8840a.jpg",
      highlights: ["Медитация с монахом", "Музей мечей", "Храм Кэнтё-дзи"]
    },
    {
      location: "Киото",
      nights: 3,
      subtitle: "Сердце традиций",
      description: "Чайная церемония в частном саду с потомственным мастером. Прогулка по бамбуковой роще Арасияма до восхода солнца. Урок икебаны в резиденции школы Икэнобо.",
      image: "https://cdn.poehali.dev/files/aa2ac25f-09c8-4804-8c8e-a50b5b06597f.jpg",
      highlights: ["Чайная церемония", "Бамбуковая роща на рассвете", "Урок икебаны"]
    },
    {
      location: "Нара",
      nights: 0,
      subtitle: "В гармонии с природой",
      description: "Кормление священных оленей в парке Тодай-дзи. Обед в храмовом комплексе с монастырской кухней.",
      image: "https://cdn.poehali.dev/files/88dc4e44-1e82-46e7-b63e-56f60fb5af79.jpg",
      highlights: ["Священные олени", "Монастырская кухня", "Парк Тодай-дзи"]
    },
    {
      location: "Канадзава",
      nights: 2,
      subtitle: "Сокровища провинции",
      description: "Экскурсия в квартал гейш Хигаси-Тяя с приватным выступлением. Мастер-класс по золотому лаку Кага. Дегустация саке в историческом хранилище.",
      image: "https://cdn.poehali.dev/files/2c1d8a12-7c6e-4eea-9187-f60318a9cd7c.jpg",
      highlights: ["Квартал гейш", "Золотой лак Кага", "Дегустация саке"]
    },
    {
      location: "Осака",
      nights: 1,
      subtitle: "Энергия города",
      description: "Ужин в ресторане, отмеченном звездой Мишлен, с шеф-поваром. Ночная прогулка на частной яхте по заливу Осака.",
      image: "https://cdn.poehali.dev/files/cb480393-3e94-4ef5-a40f-f18c0ee2f9cb.jpg",
      highlights: ["Ресторан Мишлен", "Частная яхта", "Залив Осака"]
    }
  ];

  const privileges = [
    {
      icon: "Car",
      title: "Персональный транспорт",
      description: "Mercedes-Benz Class V с водителем-гидом на всём маршруте"
    },
    {
      icon: "UtensilsCrossed",
      title: "Гастрономия",
      description: "30+ уникальных локаций, от уличной еды до мишленовских ресторанов"
    },
    {
      icon: "Home",
      title: "Проживание",
      description: "Бутик-отели и рёканы категории 5★"
    },
    {
      icon: "Camera",
      title: "Фотодневник",
      description: "Профессиональный фотограф на 4 дня путешествия"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <a href="/#tours" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Туры</a>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Контакты</a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/aa2ac25f-09c8-4804-8c8e-a50b5b06597f.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg" style={{ fontFamily: 'Cormorant, serif' }}>
            Ваш путь
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl mb-8 drop-shadow-md font-light">
            13 ночей погружения
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="Calendar" size={20} className="text-primary" />
              <span>14 дней / 13 ночей</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span>7 городов</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="Star" size={20} className="text-primary" />
              <span>Эксклюзивный тур</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Маршрут погружения
          </h2>
          <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Каждая локация раскрывает новую грань Японии
          </p>

          <div className="space-y-8">
            {tourLocations.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-accent/20 group">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[350px_1fr] gap-0">
                    <div className="relative h-72 md:h-auto overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.location}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Cormorant, serif' }}>
                          {item.location}
                        </h3>
                        {item.nights > 0 && (
                          <div className="flex items-center gap-2 text-white/90">
                            <Icon name="Moon" size={18} />
                            <span className="text-sm font-medium">{item.nights} {item.nights === 1 ? 'ночь' : item.nights < 5 ? 'ночи' : 'ночей'}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h4 className="text-xl md:text-2xl font-bold mb-4 text-primary italic">
                        {item.subtitle}
                      </h4>
                      <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            <Icon name="Sparkles" size={14} />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Эксклюзивные привилегии
          </h2>
          <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Каждая деталь продумана для вашего комфорта
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {privileges.map((privilege, index) => (
              <Card key={index} className="border-accent/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={privilege.icon as any} size={28} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{privilege.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {privilege.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-2xl p-8 md:p-12 mb-8 border border-primary/20">
              <p className="text-lg text-muted-foreground mb-2">Стоимость эксклюзивного тура</p>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-3" style={{ fontFamily: 'Cormorant, serif' }}>от 450 000 ₽</p>
              <p className="text-sm md:text-base text-muted-foreground mb-4">на человека при двухместном размещении</p>
              <div className="flex flex-wrap gap-3 justify-center text-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-700 rounded-full font-medium">
                  <Icon name="Check" size={16} />
                  Все трансферы
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-700 rounded-full font-medium">
                  <Icon name="Check" size={16} />
                  Входные билеты
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-700 rounded-full font-medium">
                  <Icon name="Check" size={16} />
                  Персональный гид
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 text-green-700 rounded-full font-medium">
                  <Icon name="Check" size={16} />
                  Проживание 5★
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg shadow-xl">
                  <Icon name="Send" size={20} className="mr-2" />
                  Забронировать путь
                </Button>
              </a>
              <a href="/#tours">
                <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-2">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Выбрать даты
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-background/70">© 2025 JAPAN : ДА! Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default TourDetails;
