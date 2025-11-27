import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const TourDetails = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tourDays = [
    {
      day: 1,
      title: "Прибытие в Токио",
      description: "Встреча в аэропорту Нарита, трансфер в отель. Вечерняя прогулка по району Синдзюку, знакомство с группой.",
      image: "https://cdn.poehali.dev/files/8b5c091f-7d0b-4acc-b0e4-df8a0a0e0d84.jpg",
      highlights: ["Встреча в аэропорту", "Размещение в отеле", "Вечерний Синдзюку"]
    },
    {
      day: 2,
      title: "Токио: Асакуса и Небесное дерево",
      description: "Храм Сэнсо-дзи, древнейший храм Токио. Прогулка по торговой улице Накамисэ. Подъём на башню Tokyo Skytree. Вечер в районе Акихабара.",
      image: "https://cdn.poehali.dev/files/cb480393-3e94-4ef5-a40f-f18c0ee2f9cb.jpg",
      highlights: ["Храм Сэнсо-дзи", "Tokyo Skytree", "Акихабара"]
    },
    {
      day: 3,
      title: "Токио: Императорский дворец и Гинза",
      description: "Сады Императорского дворца, прогулка по Восточному саду. Район Гинза — шопинг и архитектура. Вечер в Одайбе с видом на Радужный мост.",
      image: "https://cdn.poehali.dev/files/17f6afe0-75de-4f05-8b83-ea6fe38355c0.jpg",
      highlights: ["Императорский дворец", "Гинза", "Одайба"]
    },
    {
      day: 4,
      title: "Никко: Священные горы",
      description: "Переезд в Никко. Храмовый комплекс Тосёгу — золотой павильон Ёмэймон. Водопад Кэгон и озеро Тюдзэндзи. Возвращение в Токио.",
      image: "https://cdn.poehali.dev/files/e8c38ae6-c7ce-4c63-bd1d-e6a1c5c65d7f.jpg",
      highlights: ["Храм Тосёгу", "Водопад Кэгон", "Горные пейзажи"]
    },
    {
      day: 5,
      title: "Хаконе и озеро Аси",
      description: "Переезд в Хаконе. Круиз по озеру Аси с видом на Фудзи. Фуникулёр в долину Овакудани — серные источники. Ночь в традиционном рёкане с онсэном.",
      image: "https://cdn.poehali.dev/files/99cdbe1d-6c5c-49c8-98b4-ae3956803345.jpg",
      highlights: ["Озеро Аси", "Фудзияма", "Онсэн в рёкане"]
    },
    {
      day: 6,
      title: "Камакура: Дайбуцу и храмы",
      description: "Великий Будда Камакуры. Храм Хасэдэра с видом на океан. Бамбуковые рощи храма Хококу-дзи. Вечером переезд в Киото на синкансэне.",
      image: "https://cdn.poehali.dev/files/4490dcc9-4ef2-4060-9755-3f04e0e8840a.jpg",
      highlights: ["Дайбуцу", "Храм Хасэдэра", "Синкансэн в Киото"]
    },
    {
      day: 7,
      title: "Киото: Золотой павильон и Гион",
      description: "Кинкаку-дзи — Золотой павильон в утреннем свете. Сад камней Рёан-дзи. Вечерняя прогулка по Гиону — район гейш. Ужин в традиционной кайсэки-кухне.",
      image: "https://cdn.poehali.dev/files/aa2ac25f-09c8-4804-8c8e-a50b5b06597f.jpg",
      highlights: ["Золотой павильон", "Сад Рёан-дзи", "Гион"]
    },
    {
      day: 8,
      title: "Киото: Фусими Инари и бамбук Арашиямы",
      description: "Тысячи красных ворот тории храма Фусими Инари. Переезд в Арасияму — бамбуковая роща Сагано. Храм Тэнрю-дзи и его сад. Мост Тогэцукё.",
      image: "https://cdn.poehali.dev/files/d0b2cc7f-2ad6-4a3e-9a05-c6e87feea2e7.jpg",
      highlights: ["Фусими Инари", "Бамбуковая роща", "Арашияма"]
    },
    {
      day: 9,
      title: "Нара: Олени и древние храмы",
      description: "Парк Нара — священные олени. Храм Тодай-дзи с гигантским Буддой. Касуга Тайся — святилище с тысячами фонарей. Возвращение в Киото.",
      image: "https://cdn.poehali.dev/files/88dc4e44-1e82-46e7-b63e-56f60fb5af79.jpg",
      highlights: ["Олени Нары", "Тодай-дзи", "Касуга Тайся"]
    },
    {
      day: 10,
      title: "Химэдзи: Замок Белой Цапли",
      description: "Переезд в Химэдзи. Самый красивый замок Японии — Химэдзи-дзё. Сад Коко-эн у подножия замка. Продолжение пути в Каназаву через Альпы.",
      image: "https://cdn.poehali.dev/files/17f6afe0-75de-4f05-8b83-ea6fe38355c0.jpg",
      highlights: ["Замок Химэдзи", "Сад Коко-эн", "Переезд в Каназаву"]
    },
    {
      day: 11,
      title: "Каназава: Сад Кэнроку-эн",
      description: "Один из трёх великих садов Японии — Кэнроку-эн на рассвете. Район самураев Нагамати. Квартал гейш Хигаси Тяя. Дегустация местного сакэ.",
      image: "https://cdn.poehali.dev/files/2c1d8a12-7c6e-4eea-9187-f60318a9cd7c.jpg",
      highlights: ["Сад Кэнроку-эн", "Квартал самураев", "Дегустация сакэ"]
    },
    {
      day: 12,
      title: "Ширакава-го: Альпийская деревня",
      description: "Деревня Ширакава-го — объект ЮНЕСКО. Традиционные дома гассё-дзукури с соломенными крышами. Музей быта горных деревень. Ночь в деревенском минсюку.",
      image: "https://cdn.poehali.dev/files/2c1d8a12-7c6e-4eea-9187-f60318a9cd7c.jpg",
      highlights: ["Ширакава-го", "Дома гассё-дзукури", "Минсюку"]
    },
    {
      day: 13,
      title: "Возвращение в Токио",
      description: "Переезд в Токио на синкансэне. Свободное время для последнего шопинга. Прогулка по Харадзюку и Омотэсандо. Прощальный ужин с группой.",
      image: "https://cdn.poehali.dev/files/8b5c091f-7d0b-4acc-b0e4-df8a0a0e0d84.jpg",
      highlights: ["Синкансэн", "Харадзюку", "Прощальный ужин"]
    },
    {
      day: 14,
      title: "Вылет из Токио",
      description: "Трансфер в аэропорт Нарита. Вылет домой с воспоминаниями о прекрасной Японии.",
      image: "https://cdn.poehali.dev/files/cb480393-3e94-4ef5-a40f-f18c0ee2f9cb.jpg",
      highlights: ["Трансфер в аэропорт", "Вылет домой"]
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

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/aa2ac25f-09c8-4804-8c8e-a50b5b06597f.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg" style={{ fontFamily: 'Cormorant, serif' }}>
            14 дней в Японии
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md">
            Полное погружение в культуру Страны восходящего солнца
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="Calendar" size={20} className="text-primary" />
              <span>14 дней / 13 ночей</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span>6 городов</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="Users" size={20} className="text-primary" />
              <span>До 12 человек</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Программа тура по дням
          </h2>

          <div className="space-y-8">
            {tourDays.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-accent/20">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[300px_1fr] gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-white">День<br/>{item.day}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{item.title}</h3>
                      <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            <Icon name="CheckCircle2" size={16} />
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

      <section className="py-12 md:py-20 px-4 bg-accent/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Что включено в стоимость
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle2" size={24} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Включено</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Проживание в отелях 3-4★ и традиционных рёканах</li>
                      <li>• Все трансферы и переезды по программе</li>
                      <li>• Русскоговорящий гид на всём маршруте</li>
                      <li>• Входные билеты в храмы и достопримечательности</li>
                      <li>• Завтраки ежедневно</li>
                      <li>• Поездки на синкансэне</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="XCircle" size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Дополнительно</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Авиаперелёт Москва — Токио — Москва</li>
                      <li>• Виза в Японию (сейчас не требуется)</li>
                      <li>• Обеды и ужины</li>
                      <li>• Личные расходы и сувениры</li>
                      <li>• Страховка</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
              <p className="text-lg text-muted-foreground mb-2">Стоимость тура</p>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">от 280 000 ₽</p>
              <p className="text-sm text-muted-foreground">на человека при двухместном размещении</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Забронировать тур
                </Button>
              </a>
              <a href="/#tours">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
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
