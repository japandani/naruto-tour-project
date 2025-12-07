import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">JAPAN: ДА!</Link>
          <div className="flex gap-6">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">О нас</Link>
            <Link to="/tours" className="text-foreground hover:text-primary transition-colors">Туры</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">Галерея</Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</Link>
            <button onClick={() => setIsContactOpen(true)} className="text-foreground hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text text-transparent">
            JAPAN: ДА!
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Авторские туры в Японию, которые меняют взгляд на мир
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours">
              <Button size="lg" className="text-lg px-8 py-6">
                Смотреть программы
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => setIsContactOpen(true)}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* About Daniel */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                25 лет Пути. Ваш проводник — Даниэль.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Четверть века личного и профессионального пути по Японии. Не гид, а проводник, открывающий двери в подлинную, сокровенную Японию, которую не найти в путеводителях.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ваше путешествие начинается с личной карты его уникальных связей.
              </p>
              <Link to="/about">
                <Button variant="outline" className="mt-6">
                  Узнать больше о Даниэле
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/daniel-portrait.jpg" 
                alt="Даниэль - проводник по Японии" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Не тур. Это ваш личный Мити.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы создаем не стандартные маршруты, а целостные, глубокие путешествия-погружения. От неонового ритма Токио до безмолвия киотских садов — каждая деталь вашей поездки выверена для гармонии впечатлений.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Mountain" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Глубина, а не километраж</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Доступ к закрытой Японии через личные связи
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Искусство деталей</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Комфортабельный VIP-трансфер, тщательный подбор отелей и гастрономии
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ваш путь</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Индивидуальный подход и внимание к интересам каждого путешественника
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flagship Tour */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-orange-500/5 to-red-500/5">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-2 border-primary/50 shadow-2xl overflow-hidden">
            <div className="relative h-[400px]">
              <img 
                src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/tokyo-kyoto-route.jpg" 
                alt="От Токио до Осаки" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  От Токио до Осаки
                </h2>
                <p className="text-xl mb-4 opacity-90">
                  13-дневное погружение по нашему знаковому маршруту
                </p>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Идеальный баланс энергии мегаполисов, духа древних столиц и гармонии природы. Для тех, кто хочет увидеть всю многогранность Японии.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Токио', 'Хаконе/Фудзи', 'Сиракава-го', 'Такаяма', 'Канадзава', 'Киото', 'Хиросима', 'Осака'].map((city) => (
                  <span key={city} className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                    {city}
                  </span>
                ))}
              </div>
              <Link to="/tour-tokyo-osaka">
                <Button size="lg" className="w-full md:w-auto">
                  Узнать программу тура
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Путешественники, которые сказали «ДА!»
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                    А
                  </div>
                  <div>
                    <div className="font-bold">Анна М.</div>
                    <div className="text-sm text-muted-foreground">Апрель 2024</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Это было не просто путешествие — это был опыт, который изменил меня. Даниэль открыл ту Японию, о которой я даже не мечтала."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                    Д
                  </div>
                  <div>
                    <div className="font-bold">Дмитрий С.</div>
                    <div className="text-sm text-muted-foreground">Май 2024</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Продуманность каждой детали поражает. VIP-сервис, уникальные места, невероятная глубина погружения в культуру."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                    Е
                  </div>
                  <div>
                    <div className="font-bold">Елена К.</div>
                    <div className="text-sm text-muted-foreground">Октябрь 2024</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "25-летний опыт Даниэля чувствуется в каждом моменте. Это путешествие останется со мной навсегда."
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/reviews">
              <Button variant="outline" size="lg">
                Читать все истории
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-orange-500 to-red-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать свой Путь?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Расскажите нам о вашей мечте о Японии — и мы создадим путешествие, которое превзойдет ожидания
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => setIsContactOpen(true)}
          >
            Обсудить мой тур
            <Icon name="MessageCircle" className="ml-2" size={24} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">JAPAN: ДА!</h3>
              <p className="text-sm text-muted-foreground">
                Авторские туры в Японию с Даниэлем
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">О нас</Link>
                <Link to="/tours" className="text-sm text-muted-foreground hover:text-primary transition-colors">Туры</Link>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Галерея</Link>
                <Link to="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">Отзывы</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="flex flex-col gap-2">
                <a href="https://t.me/japandani" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
                <button onClick={() => setIsContactOpen(true)} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  Написать нам
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Следите за нами</h4>
              <div className="flex flex-col gap-2">
                <a href="https://t.me/japandani" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ветка сакуры
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 JAPAN: ДА! Все права защищены.
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default Index;
