import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f6e8ec5d-14f7-497a-bf69-2d99142f26ed.jpg" 
              alt="Japan логотип"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary shadow-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-background tracking-tight" style={{ fontFamily: 'Caveat, cursive' }}>JAPAN : ДА!</h1>
              <p className="text-xs text-background/70 tracking-widest uppercase">Экскурсионное бюро</p>
            </div>
          </div>
          <div className="hidden md:flex gap-10">
            <a href="#home" className="text-background hover:text-primary transition-colors font-medium text-lg">Главная</a>
            <a href="#about" className="text-background hover:text-primary transition-colors font-medium text-lg">О нас</a>
            <a href="#tours" className="text-background hover:text-primary transition-colors font-medium text-lg">Ваш Путь</a>
            <a href="#contact" className="text-background hover:text-primary transition-colors font-medium text-lg">Контакты</a>
          </div>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-base font-semibold shadow-lg">
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
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg whitespace-nowrap">Япония. Выше шума, глубже традиций.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto drop-shadow-md leading-relaxed text-left">
            Наше авторское путешествие — это ключ к пониманию Японии.<br/>
            Мы покажем вам не просто места, а смыслы.<br/>
            Услышать шёпот бамбуковой рощи и расшифровать код мегаполиса.<br/>
            Понять душу самурая в замке Химэдзи и ощутить дыхание будущего в Одайбе.<br/>
            Это погружение, после которого мир уже не будет прежним.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Сделать первый шаг по Пути
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-10 text-7xl animate-fade-in">🌸</div>
          <div className="absolute top-4 left-28 text-5xl animate-fade-in" style={{ animationDelay: '0.2s' }}>🍁</div>
          <div className="absolute top-2 left-48 text-6xl animate-fade-in" style={{ animationDelay: '0.4s' }}>🌸</div>
          <div className="absolute top-0 right-12 text-8xl animate-fade-in" style={{ animationDelay: '0.1s' }}>🍂</div>
          <div className="absolute top-5 right-32 text-6xl animate-fade-in" style={{ animationDelay: '0.3s' }}>🌸</div>
          <div className="absolute top-3 right-52 text-7xl animate-fade-in" style={{ animationDelay: '0.5s' }}>🍁</div>
          <div className="absolute top-6 left-1/3 text-5xl animate-fade-in" style={{ animationDelay: '0.6s' }}>🍂</div>
          <div className="absolute top-1 right-1/3 text-6xl animate-fade-in" style={{ animationDelay: '0.7s' }}>🌸</div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
          <div className="absolute bottom-0 left-0 text-8xl animate-fade-in">🌸</div>
          <div className="absolute bottom-2 left-16 text-6xl animate-fade-in" style={{ animationDelay: '0.2s' }}>🌸</div>
          <div className="absolute bottom-5 left-32 text-5xl animate-fade-in" style={{ animationDelay: '0.4s' }}>🌸</div>
          <div className="absolute bottom-0 right-0 text-8xl animate-fade-in" style={{ animationDelay: '0.1s' }}>🍂</div>
          <div className="absolute bottom-3 right-16 text-7xl animate-fade-in" style={{ animationDelay: '0.3s' }}>🍁</div>
          <div className="absolute bottom-6 right-36 text-6xl animate-fade-in" style={{ animationDelay: '0.5s' }}>🍂</div>
          <div className="absolute bottom-4 left-1/3 text-5xl animate-fade-in" style={{ animationDelay: '0.6s' }}>🌸</div>
          <div className="absolute bottom-1 right-1/3 text-6xl animate-fade-in" style={{ animationDelay: '0.7s' }}>🍁</div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col gap-8">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight text-center">
                Japan: ДА — это не только путешествие. Это ответ.
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Ответ на зов безмолвных садов камней и шумных неоновых перекрёстков. На вопрос, который ваше сердце задавало Японии всю жизнь.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                <strong className="text-foreground">За этим ответом стоим Мы , команда ДА , во главе с руководителем проекта , Даниэлем А.</strong>
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                25 лет — это не просто стаж. Это целая жизнь, прожитая в ритме Японии. Это тысячи улочек, пройденных не как турист, а как искатель. Это сотни встреч, десятки тысяч историй, вплетённых в одно грандиозное полотно под названием «Путь». Путь, который начинается с простого слова — «ДА».
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Слово «ДА» стало нашим ключом. Ключом к потаённым дверям, за которыми скрывается подлинная Япония. К тем местам, куда не ступает нога обычного туриста. К тем людям, чьи руки хранят многовековые традиции гончарного искусства, каллиграфии и чайной церемонии. К тем моментам тишины и понимания, которые меняют тебя навсегда.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наш проект давно перестал быть просто «бюро». Для наших друзей из Европы и Азии он стал проводником в мир, где прошлое и будущее говорят на одном языке. А в последние годы мы стали живым мостом — тонким и прочным, как шёлковая нить — который связывает сердца путешественников из России с загадочной душой Японии.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="path" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            <span style={{ fontFamily: 'Cormorant, serif' }}>Мити</span> <span className="text-6xl md:text-7xl" style={{ fontFamily: 'serif' }}>道</span> — это Путь
          </h2>
          <p className="text-left text-muted-foreground mb-12 text-lg max-w-3xl mx-auto leading-relaxed">
            Но не как дорога на карте, а как философия жизни. Это бесконечное совершенствование, следование традиции и полное погружение в настоящее мгновение.<br/>
            Сакральный смысл этого понятия раскрывается в самых разных японских искусствах — от Пути чая (Садо) до Пути меча (Кэндо).<br/>
            Наше путешествие — это и есть ваш личный Мити. Путь, состоящий из четырёх свитков, где вы не просто увидите Японию, а пройдете через её сердце, стихии и дух, чтобы обрести новый взгляд на мир и на себя.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/60 via-accent to-accent/60 rounded-full"></div>
              <div className="absolute -right-4 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/60 via-accent to-accent/60 rounded-full"></div>
              <div className="bg-gradient-to-br from-background via-secondary/20 to-background border-4 border-accent/30 rounded-lg shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <span className="text-4xl font-bold text-primary">一</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 text-primary">Первый свиток: Сердце</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Токио и Киото. Пульс современности и эхо вечности. Вы пройдёте от неоновых джунглей Сибуя до тихих храмов Фусими Инари, от небоскрёбов до бамбуковых рощ Арасияма. Здесь начинается ваше понимание дуальности Японии — страны, где будущее и прошлое танцуют в одном ритме.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/60 via-accent to-accent/60 rounded-full"></div>
              <div className="absolute -right-4 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/60 via-accent to-accent/60 rounded-full"></div>
              <div className="bg-gradient-to-br from-background via-secondary/20 to-background border-4 border-accent/30 rounded-lg shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <span className="text-4xl font-bold text-primary">二</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 text-primary">Второй свиток: Стихии</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Священная гора Фудзи, горячие источники онсэн, сады камней и водопады. Вы почувствуете, как японцы научились слушать природу и жить в гармонии с её силами. Вода, огонь, земля, ветер — всё это станет частью вашего опыта. Здесь вы поймёте, что такое «ма» — пустота, которая наполняет смыслом.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/60 via-accent to-accent/60 rounded-full"></div>
              <div className="absolute -right-4 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/60 via-accent to-accent/60 rounded-full"></div>
              <div className="bg-gradient-to-br from-background via-secondary/20 to-background border-4 border-accent/30 rounded-lg shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <span className="text-4xl font-bold text-primary">三</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 text-primary">Третий свиток: Дух</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Традиции, которым тысячи лет: чайная церемония, встреча с гейшами в Гионе, мастер-классы каллиграфии, икебаны. Вы узнаете, что такое «моно-но аварэ» — печальное очарование вещей. Здесь раскрывается суть японской эстетики: красота мимолётна, именно поэтому она бесценна.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/60 via-accent to-accent/60 rounded-full"></div>
              <div className="absolute -right-4 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/60 via-accent to-accent/60 rounded-full"></div>
              <div className="bg-gradient-to-br from-background via-secondary/20 to-background border-4 border-accent/30 rounded-lg shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <span className="text-4xl font-bold text-primary">四</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 text-primary">Четвёртый свиток: Возвращение</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Последние дни в Японии — это не конец, а начало. Вы возвращаетесь домой другим человеком. С новым взглядом на время, пространство, красоту и смысл. Япония остаётся с вами навсегда — в воспоминаниях, в привычках, в том, как вы смотрите на закат или наливаете чай. Ваш личный Мити продолжается.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/05aad210-d15a-4a99-8455-cd48817af582.jpg" 
                  alt="Наруто логотип"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">Наруто</h3>
              </div>
              <p className="text-sm opacity-80">
                Эксклюзивные туры в Японию с 1999 года
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