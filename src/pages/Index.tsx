import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <h1 className="text-2xl font-bold text-foreground">Наруто</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#tours" className="text-foreground hover:text-primary transition-colors">Туры</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Заказать тур
          </Button>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/4490dcc9-4ef2-4060-9755-3f04e0e8840a.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Откройте для себя Японию
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Эксклюзивные туры в страну восходящего солнца. Погрузитесь в древние традиции и современную культуру
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Выбрать тур
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                О нас
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Экскурсионное бюро «Наруто» специализируется на создании незабываемых путешествий в Японию. 
                Мы — команда профессионалов, влюблённых в японскую культуру и готовых поделиться этой любовью с вами.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наша философия — показать настоящую Японию: от величественных храмов Киото до неоновых улиц Токио, 
                от спокойствия дзен-садов до энергии современных мегаполисов.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-secondary rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных туристов</div>
                </div>
                <div className="text-center p-6 bg-secondary rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/14b57510-3265-46ac-bf5c-afadcea89316.jpg"
                alt="Японский сад"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Популярные туры
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите своё идеальное путешествие
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/4490dcc9-4ef2-4060-9755-3f04e0e8840a.jpg"
                  alt="Классическая Япония"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Хит
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Классическая Япония</h3>
                <p className="text-muted-foreground mb-4">
                  Токио • Киото • Осака • 10 дней
                </p>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Круглый год</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">от</div>
                    <div className="text-2xl font-bold text-primary">₽180,000</div>
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/14b57510-3265-46ac-bf5c-afadcea89316.jpg"
                  alt="Сакура и храмы"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Сезон
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Сакура и храмы</h3>
                <p className="text-muted-foreground mb-4">
                  Киото • Нара • Камакура • 7 дней
                </p>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Март - Апрель</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">от</div>
                    <div className="text-2xl font-bold text-primary">₽145,000</div>
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/2e08e3ee-c475-4d90-82e4-6c18e5b7ff61.jpg"
                  alt="Ночной Токио"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Ночной Токио</h3>
                <p className="text-muted-foreground mb-4">
                  Токио • Йокогама • 5 дней
                </p>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Icon name="Calendar" size={16} />
                  <span>Круглый год</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">от</div>
                    <div className="text-2xl font-bold text-primary">₽95,000</div>
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-muted-foreground text-sm">Страховка и поддержка 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Гиды-эксперты</h3>
              <p className="text-muted-foreground text-sm">Русскоязычные специалисты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Star" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Индивидуально</h3>
              <p className="text-muted-foreground text-sm">Туры под ваши интересы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">С любовью</h3>
              <p className="text-muted-foreground text-sm">К каждой детали путешествия</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Мы ответим на все ваши вопросы о турах в Японию
          </p>
          
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, какой тур вас интересует..."
                    rows={5}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌸</span>
                <h3 className="text-xl font-bold">Наруто</h3>
              </div>
              <p className="text-sm opacity-80">
                Эксклюзивные туры в Японию с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@naruto-tours.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Туры</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Классические маршруты</li>
                <li>Сезон сакуры</li>
                <li>Гастрономические туры</li>
                <li>Индивидуальные программы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
                <Icon name="Twitter" size={24} className="cursor-pointer hover:opacity-70 transition-opacity" />
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            © 2024 Наруто. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
