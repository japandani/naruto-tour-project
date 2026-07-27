import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ContactSection from "@/components/ContactSection";
import AirportBoard from "@/components/index/AirportBoard";
import ToursBoard from "@/components/index/ToursBoard";
import DecorativeBackground from "@/components/index/DecorativeBackground";
import SiteNavbar from "@/components/index/SiteNavbar";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
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
      <SiteNavbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f251f66f-d65a-4f1d-803c-84b6017c927e.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>


        <div className="relative z-10 text-center text-white px-4 animate-fade-in max-w-5xl mx-auto mt-12 md:mt-20">
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
            className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg mb-8 md:mb-10"
            onClick={() => document.getElementById('scrolls')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Сделать первый шаг
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>

          <AirportBoard />
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
        <div id="scrolls"></div>
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

          <div className="text-center mb-8 md:mb-12">
            <a 
              href="/tour"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base md:text-lg"
            >
              <Icon name="FileText" size={20} />
              Программа тура и цена
            </a>
          </div>

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
                  href="/tour"
                  className="inline-flex flex-col items-center gap-1 px-8 py-4 bg-secondary text-foreground border-2 border-primary/30 rounded-lg hover:bg-secondary/80 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="ScrollText" size={20} />
                    Прочесть полный свиток
                  </div>
                  <span className="text-sm text-muted-foreground font-normal">(программа тура и цена)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background to-accent/5">
        <DecorativeBackground />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-foreground">
            Почему <span className="text-primary">МЫ</span>?
          </h2>
          <p className="text-xl md:text-2xl text-center mb-3 md:mb-4 text-muted-foreground font-medium" style={{ fontFamily: 'Cormorant, serif' }}>
            Собираем ваш Путь по крупицам одного большого пазла
          </p>
          <p className="text-base md:text-lg text-center text-muted-foreground mb-12 md:mb-16 max-w-5xl mx-auto leading-relaxed px-4">
            Вы уже видели общую картину — четыре свитка, что составляют душу Японии. Но уникальность вашего путешествия рождается в деталях. Мы не предлагаем готовых маршрутов. Мы — творцы вашего личного Пути, внимательно собирающие его, как драгоценный пазл, где каждая крупица — это точность, глубина и смысл.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14 text-foreground">
            Из чего мы складываем картину вашего идеального путешествия?
          </h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-accent/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Navigation" size={24} className="text-primary" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground pt-2">Крупица Бесшовного движения</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Пока другие стоят в пробках, ваш комфортабельный минивен плавно везёт вас сквозь время и пространство. Он проедет сквозь энергетический вихрь Харадзюку и праздничную суету Дотонбори, чтобы остановиться в метре от древних скал Тодзимбо. Это не трансфер — это магия бесшовного перемещения.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-accent/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Home" size={24} className="text-primary" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground pt-2">Крупица Искусного крова</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Мы подбираем отели и рёканы не по звёздам, а по душе. Это места, где после дня впечатлений вас ждёт не просто номер, а продолжение японской эстетики — вид на спящий сад, татами, хранящее тепло дерева, и онсэн, смывающий суету.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-accent/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="UtensilsCrossed" size={24} className="text-primary" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground pt-2">Крупица Вкуса как откровения</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Наши ежедневные гастрономические исследования в идзакая и рестораны подобраны так, чтобы за путешествие вы составили полную гастрономическую карту Японии. От нежного сашими с утреннего рынка до дымящегося рамэ в подвальчике на окраине.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-accent/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Camera" size={24} className="text-primary" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground pt-2">Крупица Впечатлений</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Мы знаем все ракурсы, где утренний свет ложится на бамбуковую рощу Сагано, а неоновые вывески Осаки создают идеальный фон. Ваша лента взорвётся от восторга — мы обеспечим вам не просто фотографии, а живые портреты вашего Пути.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-accent/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Sparkles" size={24} className="text-primary" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground pt-2">Крупица Прикосновения к сути</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Мы обеспечиваем не «встречу с мастером», а диалог с хранителем традиции в его личной мастерской. Мы находим тот самый онсэн, куда не водят группы, и тот вид на Фудзи, который не попадает в объективы толп.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-accent/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-foreground pt-2">Крупица Вашего «Я»</h4>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Это главный элемент пазла. Ваши интересы, ваш ритм, ваши сокровенные ожидания. Мы встраиваем их в маршрут, создавая путешествие, которое будет говорить именно с вами.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Наше искусство — в гармонии деталей
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Искусство не в том, чтобы найти хороший отель. Искусство — чтобы после бурного дня в неоновом Токио вы попали в рёкан, где царит безмолвие. Чтобы дорога от суеты мегаполиса к храму была не утомительной, а созерцательной. Чтобы каждый кадр вашего путешествия становился историей, а каждый вкус — воспоминанием.
            </p>
            <p className="text-base md:text-lg text-foreground font-semibold">
              Мы создаём не список мест, а идеальный ритм, где каждая следующая крупица пазла готовит вас к восприятию следующей.
            </p>
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 md:py-20 px-4 relative overflow-hidden">
        <DecorativeBackground />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 md:mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Даты туров 2026
          </h2>
          <p className="text-xl md:text-2xl text-center mb-12 md:mb-16 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Выберите удобную дату для вашего путешествия
          </p>

          <ToursBoard />
        </div>
      </section>

      <ContactSection />

      <footer className="bg-foreground text-background py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f6e8ec5d-14f7-497a-bf69-2d99142f26ed.jpg" 
                  alt="Japan : ДА! логотип"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="text-lg md:text-xl font-bold" style={{ fontFamily: 'Caveat, cursive' }}>JAPAN : ДА!</h3>
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
                  <a href="tel:+79936285197" className="hover:text-primary transition-colors">+7 (925) 464-45-59</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>salesdaproject@gmail.com</span>
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
              © 2024 JAPAN : ДА! Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;