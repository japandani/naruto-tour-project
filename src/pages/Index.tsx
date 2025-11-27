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
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in max-w-5xl mx-auto">
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

        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 px-4 relative overflow-hidden">
        <DecorativeBackground />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="animate-fade-in">
              <br />
              <br />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-foreground leading-tight text-center">
                Japan: ДА — это не только путешествие. Это ответ.
              </h2>
              <br />
              <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                Ответ на зов безмолвных садов камней и шумных неоновых перекрёстков. На вопрос, который ваше сердце задавало Японии всю жизнь.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                <strong className="text-foreground">За этим ответом стоим Мы , команда ДА , во главе с руководителем проекта , Даниэлем А.</strong>
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                25 лет — это не просто стаж. Это целая жизнь, прожитая в ритме Японии. Это тысячи улочек, пройденных не как турист, а как искатель. Это сотни встреч, десятки тысяч историй, вплетённых в одно грандиозное полотно под названием «Путь». Путь, который начинается с простого слова — «ДА».
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                Слово «ДА» стало нашим ключом. Ключом к потаённым дверям, за которыми скрывается подлинная Япония. К тем местам, куда не ступает нога обычного туриста. К тем людям, чьи руки хранят многовековые традиции гончарного искусства, каллиграфии и чайной церемонии. К тем моментам тишины и понимания, которые меняют тебя навсегда.
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Наш проект давно перестал быть просто «бюро». Для наших друзей из Европы и Азии он стал проводником в мир, где прошлое и будущее говорят на одном языке. А в последние годы мы стали живым мостом — тонким и прочным, как шёлковая нить — который связывает сердца путешественников из России с загадочной душой Японии.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="path" className="py-12 md:py-20 px-4 relative overflow-hidden">
        <DecorativeBackground />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-foreground mt-16 md:mt-20">
            <span style={{ fontFamily: 'Cormorant, serif' }}>Мити</span> <span className="text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'serif' }}>道</span> — это Путь
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 max-w-6xl mx-auto leading-relaxed px-4">
            Но не как дорога на карте, а как философия жизни. Это бесконечное совершенствование, следование традиции и полное погружение в настоящее мгновение.<br className="hidden sm:block"/>
            Сакральный смысл этого понятия раскрывается в самых разных японских искусствах — от Пути чая (Садо) до Пути меча (Кэндо).<br className="hidden sm:block"/>
            Наше путешествие — это и есть ваш личный Мити. Путь, состоящий из четырёх свитков, где вы не просто увидите Японию, а пройдете через её сердце, стихии и дух, чтобы обрести новый взгляд на мир и на себя.
          </p>

          <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                      <span className="text-3xl md:text-4xl font-bold text-white">一</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary" style={{ fontFamily: 'Cormorant, serif' }}>Свиток Первый</h3>
                    <div className="text-xl md:text-2xl font-semibold mb-1 text-foreground tracking-wide">ЭНЕРГИЯ</div>
                    <p className="text-base md:text-lg font-medium mb-3 text-muted-foreground italic">Лабиринты, где рождается завтра</p>
                    <p className="text-sm text-primary/80 mb-4">(Токио & Осака)</p>
                    <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                      Первый ключ — это смелость принять будущее. Вы не просто увидите неоновые каньоны Токио и бьющую через край жизненную силу Осаки — вы научитесь слышать их ритм и находить тишину в самом сердце этого гула. Мы проведём вас по следам создателей современной Японии: от секретных баров в небоскребах, где заключаются многомиллионные сделки, до аутентичных закусочных в подворотнях Дотонбори, где рождаются новые гастрономические тренды. Это посвящение в дерзость и искусство понимать страну через пульс её самых динамичных городов.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={(el) => (bannerRefs.current[0] = el)} className="relative w-full h-28 md:h-32 my-4 md:my-6 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/dcb65954-c32d-4362-8995-c701041e5cd8.jpg"
                alt="Ночной Токио"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                      <span className="text-3xl md:text-4xl font-bold text-white">二</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary" style={{ fontFamily: 'Cormorant, serif' }}>Свиток Второй</h3>
                    <div className="text-xl md:text-2xl font-semibold mb-1 text-foreground tracking-wide">СЕРДЦЕ</div>
                    <p className="text-base md:text-lg font-medium mb-3 text-muted-foreground italic">Шёпот храмов и безмолвный поклон оленей</p>
                    <p className="text-sm text-primary/80 mb-4">(Киото & Нара)</p>
                    <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                      Второй ключ — это встреча с душой древней Японии. В Киото, за высокими стенами, тень от сосны на стене чайного домика расскажет вам больше, чем целая книга. Вы станете гостем на частной церемонии у мастера, чья семья хранит это искусство веками. А в Наре вас ждёт диалог с самим временем — в парке Касуга, где священные олени, словно хранители этого места, почтительно склоняют головы в немом поклоне, принимая угощение. Это посвящение в благоговение, где вы поймёте, что истинная красота — в безмолвном диалоге между человеком, природой и вечностью.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={(el) => (bannerRefs.current[1] = el)} className="relative w-full h-28 md:h-32 my-4 md:my-6 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/cdba4e1f-ca47-4f05-a867-2dbb489e4440.jpg"
                alt="Святилище Фусими Инари"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                      <span className="text-3xl md:text-4xl font-bold text-white">三</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary" style={{ fontFamily: 'Cormorant, serif' }}>Свиток Третий</h3>
                    <div className="text-xl md:text-2xl font-semibold mb-1 text-foreground tracking-wide">СТИХИЯ</div>
                    <p className="text-base md:text-lg font-medium mb-3 text-muted-foreground italic">Шепот сада, вкус моря и душа саке</p>
                    <p className="text-sm text-primary/80 mb-4">(Альпийские деревушки, Каназава, побережье Японского моря)</p>
                    <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                      Третий ключ — это погружение в стихию японской гармонии, где природа, искусство и человек становятся единым целым. В Каназаве вы войдете в сад Кэнроку-эн на рассвете, когда его туманные пейзажи принадлежат только вам. Здесь игра света сквозь клены становится разговором с вечностью. Вы спуститесь в каменные погреба, где в тишине рождается сакэ, и вкусите дух этой земли — терруар горных источников и рисовых полей. А уснете под шум Японского моря — древнюю колыбельную для рыбаков, чей улов на рассвете еще пахнет океанской свежестью. Это посвящение в вечную мудрость, где простота оказывается самой большой глубиной.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={(el) => (bannerRefs.current[2] = el)} className="relative w-full h-28 md:h-32 my-4 md:my-6 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/2c1d8a12-7c6e-4eea-9187-f60318a9cd7c.jpg"
                alt="Деревня Ширакава-го"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                      <span className="text-3xl md:text-4xl font-bold text-white">四</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary" style={{ fontFamily: 'Cormorant, serif' }}>Свиток Четвёртый</h3>
                    <div className="text-xl md:text-2xl font-semibold mb-1 text-foreground tracking-wide">ВЕЧНОСТЬ</div>
                    <p className="text-base md:text-lg font-medium mb-3 text-muted-foreground italic">Дыхание земли и шепот веков</p>
                    <p className="text-sm text-primary/80 mb-4">(Фудзияма, Хаконе, Камакура)</p>
                    <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                      Финальное посвящение — это встреча с самой сутью Японии. У подножия Фудзи вы ощутите благоговейную тишину, которую дарит её вечный лик. В долине Овакудани вы станете свидетелем дыхания спящего дракона — серные гейзеры напомнят о неукротимой мощи, что таится в недрах этой земли. Вы погрузитесь в воды онсена, где огонь земли и вода неба сливаются воедино. А в Камакуре, в тени великого Дайбуцу, вы откроете, как японское искусство рождается в самом сердце природы и веры. Это посвящение в гармонию между незыблемым и мимолетным, что навсегда изменяет душу.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={(el) => (bannerRefs.current[3] = el)} className="relative w-full h-28 md:h-32 my-4 md:my-6 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/99cdbe1d-6c5c-49c8-98b4-ae3956803345.jpg"
                alt="Фудзияма с сакурой"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            </div>

            <div className="text-center mt-12 md:mt-16 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary" style={{ fontFamily: 'Cormorant, serif' }}>
                Ваш Путь ждёт своего начала
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  <Icon name="Send" size={20} />
                  Начать свой Путь
                </a>
                
                <a 
                  href="#tours"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-foreground border-2 border-primary/30 rounded-lg hover:bg-secondary/80 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  <Icon name="ScrollText" size={20} />
                  Прочесть полный свиток
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-12 md:py-20 px-4 relative overflow-hidden">
        <DecorativeBackground />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-foreground">
            Почему выбирают нас
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Shield" size={28} className="text-primary md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-muted-foreground text-sm">Страховка и поддержка 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Users" size={28} className="text-primary md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Гиды-эксперты</h3>
              <p className="text-muted-foreground text-sm">Русскоязычные специалисты</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Star" size={28} className="text-primary md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Индивидуально</h3>
              <p className="text-muted-foreground text-sm">Туры под ваши интересы</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={28} className="text-primary md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">С любовью</h3>
              <p className="text-muted-foreground text-sm">К каждой детали путешествия</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-20 px-4 relative overflow-hidden">
        <DecorativeBackground />
        
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-foreground">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg">
            Мы ответим на все ваши вопросы о турах в Японию
          </p>
          
          <Card>
            <CardContent className="p-4 md:p-8">
              <form className="space-y-4 md:space-y-6">
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

      <footer className="bg-foreground text-background py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/05aad210-d15a-4a99-8455-cd48817af582.jpg" 
                  alt="Наруто логотип"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="text-lg md:text-xl font-bold">Наруто</h3>
              </div>
              <p className="text-xs md:text-sm opacity-80">
                Эксклюзивные туры в Японию с 1999 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Контакты</h4>
              <div className="space-y-2 text-xs md:text-sm opacity-80">
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
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Навигация</h4>
              <div className="space-y-2 text-xs md:text-sm opacity-80">
                <div><a href="#home" className="hover:opacity-100 transition-opacity">Главная</a></div>
                <div><a href="#about" className="hover:opacity-100 transition-opacity">О нас</a></div>
                <div><a href="#tours" className="hover:opacity-100 transition-opacity">Туры</a></div>
                <div><a href="#contact" className="hover:opacity-100 transition-opacity">Контакты</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 md:pt-8 text-center">
            <p className="text-xs md:text-sm opacity-70">
              © 2024 Naruto Tours. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;