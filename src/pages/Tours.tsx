import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const Tours = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">JAPAN: ДА!</Link>
          <div className="flex gap-6">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">О нас</Link>
            <Link to="/tours" className="text-primary font-semibold">Туры</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">Галерея</Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text text-transparent">
            Путешествия
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl">
            Авторские туры, созданные с душой и вниманием к каждой детали
          </p>
        </div>
      </section>

      {/* Flagship Tour */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
              Флагманский тур
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              От Токио до Осаки
            </h2>
            <p className="text-xl text-muted-foreground">
              Классический маршрут для первого знакомства с Японией
            </p>
          </div>

          <Card className="border-2 border-primary/50 shadow-2xl overflow-hidden mb-12">
            <div className="relative h-[500px]">
              <img 
                src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/tokyo-night.jpg" 
                alt="От Токио до Осаки" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={20} />
                    <span>13 дней / 12 ночей</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} />
                    <span>8 городов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={20} />
                    <span>до 10 человек</span>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Идеальный баланс энергии мегаполисов, духа древних столиц и гармонии природы. Это путешествие создано для тех, кто хочет увидеть всю многогранность Японии — от неоновых огней Токио до безмолвия киотских храмов, от вершины Фудзи до гастрономических открытий Осаки.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Маршрут</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { city: 'Токио', days: '3 дня', icon: 'Building2' },
                    { city: 'Хаконе / Фудзи', days: '2 дня', icon: 'Mountain' },
                    { city: 'Сиракава-го', days: '1 день', icon: 'Home' },
                    { city: 'Такаяма', days: '1 день', icon: 'TreePine' },
                    { city: 'Канадзава', days: '1 день', icon: 'Castle' },
                    { city: 'Киото', days: '3 дня', icon: 'Shrine' },
                    { city: 'Хиросима', days: '1 день', icon: 'Heart' },
                    { city: 'Осака', days: '1 день', icon: 'UtensilsCrossed' },
                  ].map((stop) => (
                    <div key={stop.city} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <Icon name={stop.icon as any} size={24} className="text-primary" />
                      <div>
                        <div className="font-bold">{stop.city}</div>
                        <div className="text-sm text-muted-foreground">{stop.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Что включено</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'VIP-трансфер на комфортабельном транспорте',
                    'Проживание в отелях 4-5* и традиционных рёканах',
                    'Завтраки и избранные обеды/ужины',
                    'Все входные билеты в музеи и храмы',
                    'Сопровождение Даниэля на протяжении всего тура',
                    'Уникальные встречи с мастерами',
                    'Чайная церемония с мастером',
                    'Страховка на весь период поездки',
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold mb-3">Стоимость тура</h3>
                <p className="text-3xl font-bold text-primary mb-2">от 450 000 ₽</p>
                <p className="text-sm text-muted-foreground">на человека при двухместном размещении</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tour-tokyo-osaka" className="flex-1">
                  <Button size="lg" className="w-full">
                    Подробная программа
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsContactOpen(true)}
                >
                  Забронировать место
                  <Icon name="Calendar" className="ml-2" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tours */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6">Ближайшие даты</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { dates: '18 марта - 1 апреля 2025', seats: 6, status: 'available' },
                { dates: '3 апреля - 15 апреля 2025', seats: 3, status: 'filling' },
                { dates: '17 апреля - 2 мая 2025', seats: 0, status: 'sold-out' },
              ].map((tour, index) => (
                <Card key={index} className={`border-2 ${tour.status === 'sold-out' ? 'opacity-60' : 'hover:border-primary'} transition-all`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name="Calendar" className="text-primary" size={20} />
                      <span className="font-bold">{tour.dates}</span>
                    </div>
                    {tour.status === 'sold-out' ? (
                      <div className="bg-muted text-muted-foreground px-4 py-2 rounded text-center font-semibold">
                        Мест нет
                      </div>
                    ) : tour.status === 'filling' ? (
                      <>
                        <div className="bg-orange-500/10 text-orange-600 px-4 py-2 rounded text-center font-semibold mb-4">
                          Осталось {tour.seats} места
                        </div>
                        <Button className="w-full" onClick={() => setIsContactOpen(true)}>
                          Забронировать
                        </Button>
                      </>
                    ) : (
                      <>
                        <div className="bg-primary/10 text-primary px-4 py-2 rounded text-center font-semibold mb-4">
                          Доступно {tour.seats} мест
                        </div>
                        <Button className="w-full" onClick={() => setIsContactOpen(true)}>
                          Забронировать
                        </Button>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Tours */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/50 to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Индивидуальные туры
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Хотите создать уникальный маршрут? Мы разработаем программу специально для вас с учетом всех ваших интересов и пожеланий.
          </p>
          <Button size="lg" onClick={() => setIsContactOpen(true)}>
            Обсудить индивидуальный тур
            <Icon name="MessageCircle" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default Tours;
