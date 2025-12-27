import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">JAPAN: ДА!</Link>
          <div className="flex gap-6">
            <Link to="/about" className="text-primary font-semibold">О нас</Link>
            <Link to="/tours" className="text-foreground hover:text-primary transition-colors">Туры</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">Галерея</Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text text-transparent">
            25 лет Пути
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl">
            Ваш проводник — Даниэль
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-foreground mb-8">
              Четверть века личного и профессионального пути по Японии. Это не просто опыт — это глубокая связь с душой страны, которая открывается лишь тем, кто готов слушать и чувствовать.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Даниэль — не гид, а проводник. Он не показывает туристические маршруты, а открывает двери в подлинную, сокровенную Японию, которую не найти в путеводителях. Его уникальная сеть личных связей — от мастеров традиционных ремесел до хранителей древних храмов — позволяет прикоснуться к тому, что скрыто от случайного взгляда.
            </p>

            <div className="my-12">
              <img 
                src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/daniel-kyoto.jpg" 
                alt="Даниэль в Киото" 
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Философия путешествий</h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              В японской культуре есть понятие "Мити" (道) — путь, дорога, но не просто физический маршрут, а путь познания, совершенствования, духовного роста. Каждое наше путешествие — это ваш личный Мити.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Мы не создаем стандартные туры с галочками на карте. Мы создаем целостные, глубокие путешествия-погружения, где каждая деталь выверена для гармонии впечатлений. От неонового ритма Токио до безмолвия киотских садов — вы почувствуете всю многогранность Японии.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-8 my-12 rounded-r-lg">
              <p className="text-xl italic text-foreground">
                "Япония не открывается сразу. Она требует времени, терпения и правильного проводника. За 25 лет я научился читать эту страну как поэму — между строк, в паузах, в недосказанном."
              </p>
              <p className="text-sm text-muted-foreground mt-4">— Даниэль</p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Уникальный подход</h2>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Key" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Личные связи</h3>
                <p className="text-muted-foreground">
                  Доступ к закрытым местам, частным коллекциям, мастерским ремесленников, которые не принимают обычных туристов
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Внимание к деталям</h3>
                <p className="text-muted-foreground">
                  VIP-трансфер, тщательно подобранные отели, аутентичная гастрономия — каждый элемент создает целостный опыт
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Малые группы</h3>
                <p className="text-muted-foreground">
                  Максимум 8-10 человек, что позволяет сохранить атмосферу приватности и индивидуальный подход
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ваш темп</h3>
                <p className="text-muted-foreground">
                  Мы не гонимся за количеством локаций. Важна глубина погружения, а не километраж
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">Свитки опыта</h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              За 25 лет работы мы собрали коллекцию уникальных опытов — "свитков", как их называет Даниэль. Это могут быть:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">Частная чайная церемония с мастером 15-го поколения</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">Посещение закрытой мастерской по изготовлению мечей</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">Медитация с монахами в горном храме до рассвета</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">Частный ужин в 200-летнем рёкане с мастером-шефом</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">Прогулка по Киото на рассвете, когда город принадлежит только вам</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Начните свой путь
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Откройте для себя Японию такой, какой её знает Даниэль
          </p>
          <Link to="/tours">
            <Button size="lg" className="text-lg px-8 py-6">
              Смотреть программы туров
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
