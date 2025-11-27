import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

const DecorativeBackground = () => (
  <>
    <div className="absolute top-0 left-0 right-0 h-24 md:h-32 opacity-20 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-2 md:left-10 text-4xl md:text-7xl animate-fade-in">🌸</div>
      <div className="absolute top-2 left-16 md:left-28 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.2s' }}>🍁</div>
      <div className="absolute top-1 left-28 md:left-48 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.4s' }}>🌸</div>
      <div className="absolute top-0 right-2 md:right-12 text-5xl md:text-8xl animate-fade-in" style={{ animationDelay: '0.1s' }}>🍂</div>
      <div className="absolute top-3 right-16 md:right-32 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.3s' }}>🌸</div>
      <div className="absolute top-1 right-28 md:right-52 text-4xl md:text-7xl animate-fade-in" style={{ animationDelay: '0.5s' }}>🍁</div>
      <div className="absolute top-4 left-1/3 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.6s' }}>🍂</div>
      <div className="absolute top-0 right-1/3 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.7s' }}>🌸</div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 opacity-20 pointer-events-none overflow-hidden">
      <div className="absolute bottom-0 left-0 text-5xl md:text-8xl animate-fade-in">🌸</div>
      <div className="absolute bottom-1 left-10 md:left-16 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.2s' }}>🌸</div>
      <div className="absolute bottom-3 left-20 md:left-32 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.4s' }}>🌸</div>
      <div className="absolute bottom-0 right-0 text-5xl md:text-8xl animate-fade-in" style={{ animationDelay: '0.1s' }}>🍂</div>
      <div className="absolute bottom-2 right-10 md:right-16 text-4xl md:text-7xl animate-fade-in" style={{ animationDelay: '0.3s' }}>🍁</div>
      <div className="absolute bottom-4 right-20 md:right-36 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.5s' }}>🍂</div>
      <div className="absolute bottom-2 left-1/3 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.6s' }}>🌸</div>
      <div className="absolute bottom-0 right-1/3 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.7s' }}>🍁</div>
    </div>
  </>
);

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bannerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    bannerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <img 
              src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f6e8ec5d-14f7-497a-bf69-2d99142f26ed.jpg" 
              alt="Japan логотип"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-primary shadow-md"
            />
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-background tracking-tight" style={{ fontFamily: 'Caveat, cursive' }}>JAPAN : ДА!</h1>
              <p className="text-[10px] md:text-xs text-background/70 tracking-widest uppercase">Экскурсионное бюро</p>
            </div>
          </div>
          <div className="hidden lg:flex gap-6 xl:gap-10">
            <a href="#home" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Главная</a>
            <a href="#about" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">О нас</a>
            <a href="#path" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Ваш Путь</a>
            <a href="#contact" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Контакты</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="default" className="hidden sm:block bg-primary hover:bg-primary/90 text-white px-3 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold shadow-lg">
              Заказать тур
            </Button>
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
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
              >
                Главная
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
              >
                О нас
              </a>
              <a 
                href="#path" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
              >
                Ваш Путь
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
              >
                Контакты
              </a>
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-white w-full py-3 text-base font-semibold shadow-lg mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Заказать тур
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/4490dcc9-4ef2-4060-9755-3f04e0e8840a.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div ref={ctaRef} className="relative z-10 text-center text-white px-4 animate-fade-in max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 drop-shadow-lg">Япония. Выше шума, глубже традиций.</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-4xl mx-auto drop-shadow-md leading-relaxed">
            Наше авторское путешествие — это ключ к пониманию Японии.<br className="hidden sm:block"/>
            Мы покажем вам не просто места, а смыслы.<br className="hidden sm:block"/>
            Услышать шёпот бамбуковой рощи и расшифровать код мегаполиса.<br className="hidden sm:block"/>
            Понять душу самурая в замке Химэдзи и ощутить дыхание будущего в Одайбе.<br className="hidden sm:block"/>
            Это погружение, после которого мир уже не будет прежним.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
            onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Сделать первый шаг по Пути
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="about" className="relative py-12 md:py-20 bg-background overflow-hidden">
        <DecorativeBackground />
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 text-center text-foreground">
            Что стоит за нашими турами?
          </h2>
          
          <div className="space-y-6 md:space-y-10 text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p className="text-center">
              <strong className="text-primary">Авторский взгляд.</strong> Каждый маршрут — это не набор мест, а структурированная история Японии: от древности до наших дней.
            </p>
            <p className="text-center">
              <strong className="text-primary">Философия пути.</strong> Мы не просто везём вас по списку достопримечательностей. Мы помогаем прожить Японию — через контрасты, детали, смыслы.
            </p>
            <p className="text-center">
              <strong className="text-primary">Без спешки.</strong> Небольшие группы, внимание к каждому, время на рефлексию и фотографии в нужный момент.
            </p>
          </div>
        </div>
      </section>

      <section id="path" className="relative py-12 md:py-20 bg-muted/30 overflow-hidden">
        <DecorativeBackground />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-foreground">
            Ваш Путь: выберите свиток 🎋
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-foreground/70 mb-8 md:mb-12 max-w-3xl mx-auto">
            Три авторских маршрута. Каждый — погружение в свой пласт культуры Японии.
          </p>
          
          <div id="tours" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            <div ref={(el) => bannerRefs.current[0] = el} className="opacity-0">
              <Card className="overflow-hidden shadow-2xl h-full hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img 
                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/ceb4ac4a-81b8-405a-83e6-2b1f01f4a939.jpg"
                    alt="Свиток истории"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">📜 Свиток истории</h3>
                    <p className="text-xs sm:text-sm md:text-base opacity-90">Традиционная Япония</p>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4 leading-relaxed">
                    Путь самурая, гейш, храмов и чайных церемоний. <strong>Киото, Нара, Химэдзи, Такаяма.</strong>
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm md:text-base text-foreground/70">
                    <li>✅ Замок Химэдзи — архитектура эпохи самураев</li>
                    <li>✅ Бамбуковая роща Арасияма</li>
                    <li>✅ Гейша-квартал Гион</li>
                    <li>✅ Храм Фусими Инари (10 000 красных ворот)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div ref={(el) => bannerRefs.current[1] = el} className="opacity-0">
              <Card className="overflow-hidden shadow-2xl h-full hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img 
                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/c2dd22fb-e57c-469c-adfd-bccab02f2cbd.jpg"
                    alt="Свиток контрастов"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">⚖️ Свиток контрастов</h3>
                    <p className="text-xs sm:text-sm md:text-base opacity-90">Традиция + Будущее</p>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4 leading-relaxed">
                    Древние храмы утром, неоновые небоскрёбы вечером. <strong>Токио, Киото, Осака, Хаконэ.</strong>
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm md:text-base text-foreground/70">
                    <li>✅ Токийская башня и район Сибуя</li>
                    <li>✅ Храмовый комплекс Киёмидзу-дэра</li>
                    <li>✅ Философская тропа в Киото</li>
                    <li>✅ Онсэн (горячие источники) в Хаконэ</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div ref={(el) => bannerRefs.current[2] = el} className="opacity-0">
              <Card className="overflow-hidden shadow-2xl h-full hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img 
                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/10b37f8f-6ea8-4b52-8b63-ea90bd7ddb96.jpg"
                    alt="Свиток будущего"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">🚀 Свиток будущего</h3>
                    <p className="text-xs sm:text-sm md:text-base opacity-90">Технологии & Модерн</p>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4 leading-relaxed">
                    Киберпанк, инновации, урбанизм. <strong>Токио, Йокогама, Одайба, Осака.</strong>
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm md:text-base text-foreground/70">
                    <li>✅ Одайба — остров высоких технологий</li>
                    <li>✅ teamLab Borderless (цифровое искусство)</li>
                    <li>✅ Акихабара — квартал гиков и аниме</li>
                    <li>✅ Рынок Цукидзи и вечерний Синдзюку</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-foreground">
            Готовы к Пути?
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-foreground/70 mb-8 md:mb-10">
            Оставьте заявку, и мы вышлем вам детали маршрутов, даты ближайших туров и ответим на все вопросы.
          </p>
          
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm md:text-base font-medium text-foreground mb-2">
                Ваше имя
              </label>
              <Input 
                id="name"
                type="text" 
                placeholder="Александр" 
                className="w-full text-sm md:text-base py-2 md:py-3"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-medium text-foreground mb-2">
                Email
              </label>
              <Input 
                id="email"
                type="email" 
                placeholder="alex@example.com" 
                className="w-full text-sm md:text-base py-2 md:py-3"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm md:text-base font-medium text-foreground mb-2">
                Сообщение (необязательно)
              </label>
              <Textarea 
                id="message"
                placeholder="Расскажите, какой свиток вас заинтересовал, или задайте вопрос..." 
                rows={4}
                className="w-full text-sm md:text-base"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg"
            >
              Отправить заявку
              <Icon name="Send" size={20} className="ml-2" />
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-foreground text-background py-6 md:py-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm md:text-base mb-2 md:mb-4">© 2025 JAPAN : ДА! Все права защищены.</p>
          <div className="flex justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
