import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import ContactSection from "@/components/ContactSection";

const TourDetails = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tourParts = [
    {
      part: "ЧАСТЬ ПЕРВАЯ",
      title: "РИТМ МЕГАПОЛИСА",
      subtitle: "3 ночи в Токио",
      image: "https://cdn.poehali.dev/files/f54d6a39-e24a-4283-bb72-d9245262a54b.JPG",
      days: [
        {
          day: 1,
          title: "Врата в будущее",
          description: "Приземление в Токио — это не просто прибытие. Это шаг сквозь невидимый портал, где будущее уже стало настоящим. Вечерний Сибуя встречает вас неоновой симфонией — миллионы огней сплетаются в танце, а людской поток на легендарном перекрёстке движется, словно единый организм. Это место, где энергия города ощущается физически, где можно потеряться и найти себя одновременно. Ваш первый ужин в скрытой идзакае — тихое посвящение в японскую культуру вкуса, где каждое блюдо рассказывает свою историю."
        },
        {
          day: 2,
          title: "Душа и плоть столицы",
          description: "Рассвет на рынке Цукидзи — здесь начинается день не только Токио, но всей Японии. Вы увидите, как мастера-торговцы с хирургической точностью разделывают тунца весом в сотни килограммов, как рождается культ свежести и качества. Императорский дворец окутан тишиной и величием — его сады помнят эпохи, а каменные стены хранят секреты веков. Вечер на смотровой площадке Tokyo Skytree или Shibuya Sky — город под вами превращается в океан мерцающих огней, где небоскрёбы похожи на световые маяки, указывающие путь в будущее."
        },
        {
          day: 3,
          title: "Контрасты одного города",
          description: "Парк Уэно — зелёное сердце мегаполиса, где музеи хранят сокровища тысячелетий. Храм Мэйдзи, скрытый в густом лесу посреди города, — место, где время останавливается, а дух синтоизма ощущается в каждом дуновении ветра сквозь вековые деревья. Харадзюку — взрыв цвета, молодости и креативности, где японская улица превращается в подиум авангардной моды. Вечер в районе Акихабара или Синдзюку — погружение в мир неоновых вывесок, гейм-центров и той части Токио, которая не спит никогда."
        }
      ]
    },
    {
      part: "ЧАСТЬ ВТОРАЯ",
      title: "ДОРОГА К СВЯЩЕННОМУ",
      subtitle: "Путь к Фудзи через Камакуру и Хаконе",
      image: "https://cdn.poehali.dev/files/cee028be-5da3-424e-b18c-8ae1d766ef2e.jpg",
      days: [
        {
          day: 4,
          title: "Великий Будда и горячие источники",
          description: "Древняя Камакура — первая столица сёгуната, где среди холмов и храмов возвышается Великий Будда Дайбуцу. Эта бронзовая статуя, отлитая в XIII веке, пережила цунами и землетрясения, и до сих пор хранит невозмутимое спокойствие. Затем дорога ведёт в Хаконе — регион горячих источников и мистических пейзажей. Озеро Аси отражает небо и горы, словно зеркало в другой мир. Поездка на канатной дороге через Овакудани — долину вулканических фумарол, где земля дышит паром и серой. Музей под открытым небом — место, где скульптуры великих мастеров гармонично вписаны в природу. Вечером — онсэн, где горячая вода смывает усталость и открывает путь к внутренней тишине."
        },
        {
          day: 5,
          title: "Священная Фудзи и деревня из сказки",
          description: "Утро начинается с созерцания Фудзи-сан — священной горы, символа Японии. Вы окажетесь у озера Кавагутико, где в безветренную погоду гора отражается в воде так идеально, что грань между небом и землёй стирается. Это момент для фотографий, которые станут символом вашего путешествия. Затем путь в горы, в деревню Сиракава-го — объект Всемирного наследия ЮНЕСКО. Традиционные дома гассё-дзукури с крышами, сложенными, словно ладони в молитве, стоят здесь уже более 250 лет. Ночь в таком доме — это путешествие во времени, где вы засыпаете под скрип древесины и просыпаетесь под пение птиц."
        },
        {
          day: 6,
          title: "Альпийское пробуждение",
          description: "Утро в Сиракава-го — это туман, стелющийся между домами, и тишина, нарушаемая лишь журчанием горных ручьёв. Неспешный переезд в Такаяму — город, который называют «маленьким Киото». Здесь сохранились целые кварталы периода Эдо, где деревянные дома торговцев помнят времена самураев. Прогулка по утреннему рынку, где бабушки продают домашние соленья и горные овощи, — это встреча с настоящей Японией, где традиции живы в каждом жесте."
        }
      ]
    },
    {
      part: "ЧАСТЬ ТРЕТЬЯ",
      title: "ДУША ПРОВИНЦИИ",
      subtitle: "Такаяма и Канадзава",
      image: "https://cdn.poehali.dev/files/3e2a1d66-1f30-4345-a539-d34af54ad21b.jpg",
      days: [
        {
          day: 7,
          title: "Такаяма — город мастеров",
          description: "Рынок Миягава оживает с первыми лучами солнца — это место, где местные жители делятся щедрыми дарами земли и гор. Квартал Санмати — улицы, вымощенные камнем, где каждый дом — произведение плотницкого искусства. Здесь можно зайти в мастерскую лакировщика или попробовать местное сакэ в старинной пивоварне. Музей под открытым небом Хида-но-Сато — 30 традиционных домов, перенесённых сюда из окрестных деревень, рассказывают о жизни горцев прошлых веков."
        },
        {
          day: 8,
          title: "Дорога в Канадзаву — город золота и садов",
          description: "Живописный путь через японские Альпы приводит в Канадзаву — город, который когда-то был богаче Киото благодаря своим золотым приискам и мастерам по золочению. Сад Кэнроку-эн — один из трёх великих садов Японии — место, где каждый камень, ручей и дерево расположены в идеальной гармонии. Прогулка здесь — это медитация в движении. Замок Канадзава возвышается над городом, храня память о клане Маэда. Квартал гейш Хигаси Тяя — узкие улочки, где за деревянными решётками скрываются чайные домики, где вечерами звучат сямисэны и раздаются тихие голоса гейш."
        }
      ]
    },
    {
      part: "ЧАСТЬ ЧЕТВЁРТАЯ",
      title: "СЕРДЦЕ ИМПЕРАТОРСКОЙ СТОЛИЦЫ",
      subtitle: "2 ночи в Киото",
      image: "https://cdn.poehali.dev/files/0cccdb23-79a3-409f-9711-314b6b603a8e.JPG",
      days: [
        {
          day: 9,
          title: "Тысяча алых ворот и гейши Гиона",
          description: "Фусими Инари Тайся — святилище, где тысячи алых тории образуют туннели, ведущие в горы. Этот путь — восхождение сквозь священное пространство, где каждые ворота — дар верующего, а каждый поворот открывает новый вид на Киото. Район Гион — сердце культуры гейш. Здесь, на узких улочках с деревянными мачия, время течёт иначе. Если повезёт, вы увидите гейко или майко, спешащую на встречу в чайный домик. Храм Киёмидзу-дера возвышается на деревянных сваях над лесистым склоном — это «храм чистой воды», откуда открывается панорама на весь город. Вечером — прогулка по набережной реки Камогава, где киотосцы наслаждаются закатом."
        },
        {
          day: 10,
          title: "Золото, бамбук и камни молчания",
          description: "Кинкаку-дзи — Золотой павильон — настолько совершенен, что кажется миражом. Его позолоченные стены отражаются в пруду, создавая иллюзию парения между небом и землёй. Это символ Киото, место, где красота достигает абсолюта. Бамбуковая роща Арасияма — тысячи стволов взмывают к небу, создавая зелёный собор, где свет фильтруется сквозь листву, а ветер создаёт музыку природы. Сад камней Рёан-дзи — величайшая загадка дзен-буддизма. Пятнадцать камней на белом гравии — это вселенная, это пустота и полнота одновременно. Здесь не нужно понимать — нужно чувствовать."
        }
      ]
    },
    {
      part: "ЧАСТЬ ПЯТАЯ",
      title: "МОРСКАЯ САГА И ПАМЯТЬ",
      subtitle: "Хиросима, Миядзима и Кобе",
      image: "https://cdn.poehali.dev/files/78b28769-c277-4b58-9066-422b7a800308.jpg",
      days: [
        {
          day: 11,
          title: "Хиросима — город возрождения и острова богов",
          description: "Хиросима — город, который пережил невозможное и воскрес. Мемориальный парк мира и купол Гэмбаку — молчаливые свидетели трагедии 6 августа 1945 года. Музей мира — место, где история предстаёт в своей обнажённой правде, где каждый экспонат — напоминание о хрупкости мира. Но Хиросима — это не только память, это символ надежды и силы духа. Паромом на остров Миядзима — священное место синтоизма. Большие тории святилища Ицукусима, стоящие в воде, кажутся парящими на границе стихий. Во время прилива они отражаются в зеркале моря, создавая один из самых узнаваемых образов Японии. Прогулка к вершине горы Мисен или встреча со священными оленями, свободно гуляющими по острову."
        },
        {
          day: 12,
          title: "Кобе — жемчужина залива",
          description: "Кобе — портовый город с космополитичной душой, где Восток встречается с Западом. Утро начинается с канатной дороги на гору Рокко, откуда открывается панорама на весь залив Осака. Район Киото-Китано-чо, где сохранились особняки иностранных торговцев XIX века, рассказывает историю открытия Японии миру. Но главное событие дня — дегустация легендарной говядины Кобе. Это не просто мясо — это искусство, где каждый кусок мраморной вырезки тает во рту, оставляя послевкусие совершенства. Вечером — прогулка по порту, где огни города отражаются в тёмной воде залива."
        }
      ]
    },
    {
      part: "ЭПИЛОГ",
      title: "ПРОЩАНИЕ С ЯПОНИЕЙ В ОСАКЕ",
      subtitle: "Последняя ночь в кулинарной столице",
      image: "https://cdn.poehali.dev/files/40ed40fe-021f-4de3-9423-9685bdc3175f.JPG",
      days: [
        {
          day: 13,
          title: "Осака — город, который не спит и не скучает",
          description: "Осака встречает вас с распростёртыми объятиями и улыбкой. Это город, где едят не для того, чтобы жить, а живут для того, чтобы есть. Замок Осаки — величественная крепость с изумрудными крышами, окружённая рвами и стенами, — напоминает о временах великих воинов. Но настоящее сердце Осаки бьётся в Дотонбори — квартале, где неоновые вывески соревнуются за ваше внимание, где аромат такояки и окономияки витает в воздухе, где гигантский краб и бегущий человек из неона стали символами города. Вечер на небоскрёбе Абэно Харукас — самом высоком здании Японии. Город под вами мерцает огнями, и вы понимаете — Япония осталась в вашем сердце навсегда. Это не конец путешествия. Это начало вашей любви к Стране восходящего солнца."
        }
      ]
    }
  ];

  const tourDates = [
    { date: "18 марта - 1 апреля 2026", status: "available", seats: 4 },
    { date: "3 апреля - 15 апреля 2026", status: "available", seats: 3 },
    { date: "17 апреля - 2 мая 2026", status: "waitlist", seats: 0 },
    { date: "29 апреля - 10 мая 2026", status: "closed", seats: 0 },
    { date: "12 мая - 26 мая 2026", status: "available", seats: 4 }
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
            <a href="/tour" className="text-primary transition-colors font-medium text-base xl:text-lg">Описание Пути</a>
            <a href="/gallery" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Галерея</a>
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
              <a href="/tour" onClick={() => setMobileMenuOpen(false)} className="text-primary transition-colors font-medium text-lg py-2">Описание Пути</a>
              <a href="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Галерея</a>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Контакты</a>
              <a href="/#contact" className="sm:hidden">
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  Связаться с нами
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/4490dcc9-4ef2-4060-9755-3f04e0e8840a.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto py-12">
          <div className="mb-6">
            <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-4">
              <span className="text-primary font-semibold text-sm md:text-base tracking-widest uppercase">14 дней | 13 ночей</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
            Большое путешествие<br />по Японии
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto drop-shadow-lg leading-relaxed font-light">
            От неоновых каньонов Токио до тихих садов Киото.<br className="hidden sm:block" />
            От священной Фудзи до морских ворот Миядзимы.<br className="hidden sm:block" />
            Это не просто маршрут — это Путь к пониманию Японии.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="#dates">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-2xl">
                <Icon name="Calendar" size={20} className="mr-2" />
                Выбрать дату
              </Button>
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold shadow-2xl">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 justify-center items-center text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span>15 городов</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Camera" size={20} className="text-primary" />
              <span>Более 30 локаций</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} className="text-primary" />
              <span>До 6 человек</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/80" />
        </div>
      </section>

      <section className="pt-8 md:pt-12 px-4 pb-8 md:pb-12 bg-gradient-to-b from-background to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Ваш Путь день за днём
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Каждый день — новое открытие. Каждая остановка — глубокое погружение в душу Японии.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {tourParts.map((part, index) => (
              <div key={index} className="relative">
                <div className="relative h-32 md:h-48 rounded-2xl overflow-hidden shadow-2xl mb-4">
                  <img 
                    src={part.image}
                    alt={part.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <div className="text-sm md:text-base text-primary font-bold tracking-widest uppercase mb-2">{part.part}</div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2" style={{ fontFamily: 'Cormorant, serif' }}>{part.title}</h3>
                    <p className="text-lg md:text-xl text-white/90">{part.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                  {part.days.map((dayInfo, dayIndex) => (
                    <Card key={dayIndex} className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-accent/20">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-start gap-4 md:gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {dayInfo.day}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{dayInfo.title}</h4>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                              {dayInfo.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dates" className="pt-0 md:pt-0 pb-16 md:pb-24 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Даты туров 2026
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите удобную дату для вашего путешествия
            </p>
          </div>

          <div className="grid gap-6">
            {tourDates.map((tour, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-accent/20">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Calendar" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-foreground mb-1">{tour.date}</div>
                        <div className="text-sm text-muted-foreground">14 дней | 13 ночей</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {tour.status === 'available' ? (
                        <>
                          <a href="/#contact" className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/70"></span>
                            <span className="text-sm md:text-base font-semibold text-green-600 hover:text-green-700 transition-colors">
                              {tour.seats} {tour.seats === 1 ? 'место' : tour.seats < 5 ? 'места' : 'мест'}
                            </span>
                          </a>
                          <a href="#contact" onClick={(e) => { e.preventDefault(); const contactSection = document.getElementById('contact'); if (contactSection) { contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}>
                            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-semibold">
                              Забронировать
                            </Button>
                          </a>
                        </>
                      ) : tour.status === 'waitlist' ? (
                        <a href="/#contact" className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-orange-500 rounded-full shadow-lg shadow-orange-500/70"></span>
                          <span className="inline-block bg-orange-500/20 text-orange-600 px-4 py-2 rounded text-sm font-bold uppercase border-2 border-orange-500/30 hover:bg-orange-500/30 transition-colors">
                            Лист ожидания
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-red-600 rounded-full shadow-lg shadow-red-600/70"></span>
                          <span className="inline-block bg-red-600/20 text-red-600 px-4 py-2 rounded text-sm font-bold uppercase border-2 border-red-600/30">
                            Группа закрыта
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-0 pb-16 md:pb-24 px-4 bg-gradient-to-b from-accent/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Стоимость и условия
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Всё продумано до мелочей для вашего комфорта
            </p>
          </div>

          <div className="mb-12 md:mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-1">
              <div className="relative bg-background rounded-3xl p-8 md:p-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-block bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6">
                    <span className="text-primary font-semibold text-sm tracking-widest uppercase">Стоимость тура</span>
                  </div>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                    249 000 ₽
                  </div>
                  <div className="text-xl md:text-2xl text-muted-foreground mb-8">на человека</div>
                  <div className="inline-flex items-center gap-2 text-base md:text-lg text-muted-foreground border-t border-accent/30 pt-6">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    <span>14 дней незабываемых впечатлений</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="CheckCircle2" size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>Включено в тур</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Проживание в отелях 3-4* (13 ночей)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Транспорт: комфортабельный минивэн на всё путешествие</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Русскоязычный гид на протяжении всего маршрута</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Входные билеты во все музеи и храмы по программе</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Экскурсии и мастер-классы согласно программе</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Завтраки в отелях</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Поездка на канатных дорогах и паромах</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Страховка на время путешествия</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Помощь в оформлении визы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Организационная поддержка 24/7</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="XCircle" size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>Не включено в тур</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="X" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Авиабилеты до Токио и из Осаки</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Icon name="X" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Обеды и ужины (за исключением особых мероприятий)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="X" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Личные расходы и покупки сувениров</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="X" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Дополнительные экскурсии вне программы</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="X" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Чаевые гиду и водителю (по желанию)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="X" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-muted-foreground">Алкогольные напитки</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 md:mt-16">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Icon name="Info" size={28} className="text-primary" />
                  Важная информация
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">Условия бронирования:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Предоплата 30% при бронировании</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Полная оплата за 30 дней до начала тура</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Места ограничены — до 8 человек в группе</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">Условия отмены:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>За 60+ дней — возврат 100% (минус банковская комиссия)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>За 30-59 дней — возврат 50%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Менее 30 дней — без возврата</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold shadow-xl">
                <Icon name="Mail" size={20} className="mr-2" />
                Забронировать место
              </Button>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Остались вопросы? Свяжитесь с нами — мы всё подробно расскажем!
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="bg-foreground text-background py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-lg">О нас</h3>
              <p className="text-sm text-background/70 leading-relaxed">
                JAPAN : ДА! — это авторские путешествия по Японии, где каждый маршрут создаётся с душой и вниманием к деталям.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Навигация</h4>
              <div className="flex flex-col gap-2 text-sm text-background/70">
                <a href="/#home" className="hover:text-background transition-opacity">Главная</a>
                <a href="/#about" className="hover:text-background transition-opacity">О нас</a>
                <a href="/tour" className="hover:text-background transition-opacity">Описание Пути</a>
                <a href="/gallery" className="hover:text-background transition-opacity">Галерея</a>
                <a href="/#contact" className="hover:text-background transition-opacity">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:+79254644559" className="block text-background hover:text-primary transition-colors">
                  +7 (925) 464-45-59
                </a>
                <a href="mailto:salesdaproject@gmail.com" className="block text-background/70 hover:text-background transition-colors">
                  salesdaproject@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-sm text-background/70">
              © 2024 JAPAN : ДА! Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TourDetails;