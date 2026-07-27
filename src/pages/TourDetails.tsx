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
          title: "Контрасты Токио. От традиций к неону",
          description: "Погрузитесь в атмосферу старой Японии в Асакусе, у древнего храма Сэнсо-дзи. Подышите воздухом истории на оживленном рынке Накамисэ-дори.\n\nНасладитесь гармонией природы и искусства в парке Уэно, где тишина садов соседствует с богатством мировых музеев.\n\nПочувствуйте мощный заряд будущего в Акихабаре — эпицентре цифровых технологий, аниме-культуры и виртуальных развлечений.\n\nСтаньте свидетелем рождения новых трендов в Харадзюку на знаменитой улице Такэсита, лаборатории бесстрашной уличной моды.\n\nА вечером окунитесь в пульсирующую энергию ночного мегаполиса в Синдзюку. Пройдите по легендарному кварталу Кабуки-чо — символу никогда не спящего города, где зажигаются самые яркие огни Токио.\n\nЭто день, где за несколько часов вы переживёте смену эпох — от тишины священных храмов до ритма самого дерзкого будущего."
        },
        {
          day: 3,
          title: "Вкусы, огни и высоты",
          description: "Утро начинается с гастрономического паломничества на рынок Цукидзи. Здесь уличная еда — это искусство: свежайшие устрицы, тамагояки (японский омлет), жареные гребешки прямо с огня. Каждый лоток — маленький театр вкуса.\n\nОдайба — искусственный остров будущего. Футуристическая архитектура, торговые центры с видом на Токийский залив, статуя Свободы в миниатюре и радужный мост.\n\nTeamLab Borderless или Planets — погружение в цифровое искусство, где вы становитесь частью инсталляции. Свет, звук, проекции — границы между реальностью и фантазией исчезают.\n\nГинза — квартал роскоши и элегантности. Бутики мировых брендов, старинные универмаги, галереи искусства. Здесь Токио надевает смокинг.\n\nПодъём на смотровую площадку Токийской мэрии — бесплатный вид на 360 градусов. Город расстилается под ногами, а в ясную погоду виден силуэт Фудзи.\n\nВечер завершается паломничеством в легендарную раменную в Роппонги. Густой бульон, тающаяся свинина тясю, идеальная лапша — это тот самый рамен, ради которого японцы выстраиваются в очередь."
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
          title: "Пагода Арасиямы, пять озёр Фудзи и замок Мацумото",
          description: "Рассвет встречаем бегом к пагоде Арасиямы — утренняя тишина и первые лучи солнца делают этот момент волшебным. Затем начинается путешествие к священной Фудзи через маршрут пяти озёр — Кавагутико, Саико, Яманакако, Сёдзико и Мотосуко. Каждое озеро открывает новый ракурс на великую гору, каждая остановка — это открытка, ожившая перед глазами. В Мацумото вас ждёт встреча с одним из красивейших замков Японии — «Чёрной вороной», чьи тёмные стены отражаются в водах рва. Но сегодня особый день — в музее работает выставка Яёи Кусамы, королевы горошка и бесконечности, чьё искусство гипнотизирует и переворачивает восприятие. Вечером — рыбное барбекю в традиционном ресторане Мацумото, где свежайшую форель и сига готовят на углях прямо перед вами. Ночь в Мацумото."
        },
        {
          day: 6,
          title: "Дорога в Такаяму через водопады и дамбу",
          description: "Утренний выезд из Мацумото в сторону японских Альп. По пути останавливаемся у живописного водопада, где горная вода обрушивается с высоты в изумрудный бассейн, и у впечатляющей альпийской дамбы — инженерного чуда среди горных вершин. К обеду прибываем в Такаяму — город, который называют 'маленьким Киото'. Прогулка по улице Санмачи-дори — путешествие в эпоху Эдо: деревянные дома купцов, лавки мастеров, старинные пивоварни саке. Здесь вас ждёт дегустация местного мисо (Такаяма славится им по всей Японии) и саке из горных источников. Для смелых — порция натто, ферментированных соевых бобов с резким запахом и тягучей текстурой. Музей под открытым небом Хида-но-Сато — 30 традиционных домов рассказывают о жизни горцев прошлых веков. Ночь в Такаяме."
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
          title: "Утренний рынок Такаямы, Сиракава-го и Канадзава",
          description: "Утро на берегу реки Мия — рынок Миягава оживает с первыми лучами солнца. Бабушки в передниках раскладывают горные овощи, домашние соленья и свежие цветы. Аромат жареных рисовых шариков мицураси-данго наполняет воздух. После рынка — путь в деревню Сиракава-го, объект ЮНЕСКО. Традиционные дома гассё-дзукури с крышами, сложенными словно ладони в молитве, стоят здесь уже более 250 лет. К обеду прибываем в Канадзаву. Сад Кэнроку-эн — один из трёх великих садов Японии, где каждый камень, ручей и дерево расположены в идеальной гармонии. Прогулка здесь — медитация в движении. Вечером — квартал гейш Хигаси Тяя: узкие улочки, где за деревянными решётками скрываются чайные домики, где звучат сямисэны и раздаются тихие голоса гейш. Ночь в Канадзаве."
        },
        {
          day: 8,
          title: "Канадзава, скалы Тодзинбо и дорога в Киото",
          description: "Утро — завершение знакомства с Канадзавой. Последние впечатления от города золота: может быть, это музей золотых листьев, где вы попробуете создать позолоту, или рынок Омитё с его свежайшими морепродуктами. Затем начинается живописный путь вдоль берега Японского моря. Скалы Тодзинбо — драматические базальтовые колонны высотой 25 метров, где море разбивается о камни с оглушительным грохотом. Это одно из самых впечатляющих мест побережья. Дорога петляет через рыбацкие деревни, где жизнь течёт в ритме приливов и отливов. Вы увидите лодки, сохнущие сети, маленькие храмы на утёсах. К вечеру прибываем в Киото — древнюю императорскую столицу. После заселения в отель — экскурсия по вокзалу Киото, архитектурному чуду из стекла и стали, откуда открывается панорама на город. Ужин — сябу-сябу: тонкие ломтики мраморной говядины, которые вы сами окунаете в кипящий бульон на секунды, а затем в соусы. Ням-ням!"
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
          title: "Золото, камни, тысяча Каннон и алые ворота",
          description: "Утро начинается с Кинкаку-дзи — Золотого павильона, настолько совершенного, что он кажется миражом. Его позолоченные стены отражаются в пруду, создавая иллюзию парения между небом и землёй. Это символ Киото, место, где красота достигает абсолюта. Затем — сад камней Рёан-дзи, величайшая загадка дзен-буддизма. Пятнадцать камней на белом гравии — это вселенная, это пустота и полнота одновременно. Здесь не нужно понимать — нужно чувствовать. Сандзюсангендо — храм тысячи рук: 1001 статуя Каннон, богини милосердия, выстроенных в ряды. Каждая с тысячей рук, каждая уникальна. Стоя перед этим золотым лесом статуй, вы ощутите масштаб буддийской преданности. Киёмидзу-дера — «храм чистой воды» на деревянных сваях, откуда открывается панорама на Киото. Финал дня — Фусими Инари Тайся, святилище с тысячами алых тории, образующих туннели в горы. Восхождение сквозь это священное пространство — путешествие между мирами."
        },
        {
          day: 10,
          title: "Поезд в Хиросиму — город возрождения и остров богов",
          description: "Утренний поезд Синкансэн из Киото в Хиросиму — за окном мелькают рисовые поля, горы и города. Хиросима — город, который пережил невозможное и воскрес. Мемориальный парк мира и купол Гэмбаку — молчаливые свидетели трагедии 6 августа 1945 года. Музей мира — место, где история предстаёт в своей обнажённой правде, где каждый экспонат — напоминание о хрупкости мира. Но Хиросима — это не только память, это символ надежды и силы духа. Паромом на остров Миядзима — священное место синтоизма. Большие тории святилища Ицукусима, стоящие в воде, кажутся парящими на границе стихий. Во время прилива они отражаются в зеркале моря, создавая один из самых узнаваемых образов Японии. Прогулка по острову, встреча со священными оленями. Вечером возвращаемся в Хиросиму. Ужин — окономияки, фирменное блюдо города: многослойный блин с капустой, лапшой, морепродуктами и мясом, политый сладким соусом. Ночь в Хиросиме."
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
          title: "Прощание с Хиросимой, остров искусств Наосима и Курасики",
          description: "Утреннее прощание с Хиросимой. Путь лежит на остров Наосима — место, где современное искусство живёт в гармонии с природой. Музеи Бенессе, Chichu Art Museum или Ando Museum — выберите один из шедевров архитектуры Тадао Андо, где работы Моне, Джеймса Таррелла и Уолтера де Марии существуют в пространстве света и бетона. Тыквы Яёи Кусамы на берегу — знаковый образ острова. После обеда путь в Курасики — город белых стен и чёрной черепицы. Исторический квартал Биккан сохранил атмосферу периода Эдо: каналы, по которым плавают лодки, склады кура, превращённые в галереи и кафе, ивы, склоняющиеся над водой. Ночь в отеле на территории бывшей текстильной фабрики — где индустриальное наследие встречается с современным комфортом."
        },
        {
          day: 12,
          title: "Мост Акаси-Кайкё, остров Авадзи и Кобе",
          description: "Утренний выезд из Курасики. По пути — мост Акаси-Кайкё, самый длинный подвесной мост в мире (почти 4 км!), соединяющий Хонсю с островом Авадзи. Вид с моста — это залив, корабли и ощущение парения над водой. На Авадзи вас ждёт встреча с архитектурой Тадао Андо: храм Воды (Хонфукудзи) — буддийский храм, скрытый под водной гладью, где вы спускаетесь по лестнице сквозь пруд к святилищу. Минимализм, бетон, вода и свет — классический Андо. Парк цветов Авадзи Юмебутай — ещё один проект Андо, где террасы с цветами спускаются к морю, создавая геометрическую гармонию. К вечеру — заезд в Кобе, портовый город с космополитичной душой. Ночь в Кобе."
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
          title: "Нара — олени и древние храмы, Осака — финал в Дотонбори",
          description: "Утренний выезд в Нару — древнюю столицу, где история дышит в каждом камне. Парк Нара — место, где более 1200 священных оленей свободно гуляют среди людей, кланяются за угощением (сенбэй) и позируют для фотографий. Храм Тодай-дзи хранит Великого Будду Дайбуцу — бронзовую статую высотой 15 метров, одну из самых больших в Японии. Стоя перед ней, вы ощущаете масштаб веры и мастерства древних. После обеда — переезд в Осаку. Парк вокруг замка Осаки — величественной крепости с изумрудными крышами, окружённой рвами и каменными стенами. Это напоминание о временах великих воинов и объединения Японии. Вечер — финал путешествия в Дотонбори! Квартал, где неоновые вывески соревнуются за ваше внимание, где аромат такояки и окономияки наполняет воздух, где гигантский краб и бегущий человек из неона стали символами города. Вы пробуете уличную еду, гуляете вдоль канала, фотографируетесь с неоновыми драконами. Это прощальный салют Японии — яркий, шумный, незабываемый."
        },
        {
          day: 14,
          title: "Прощание с Японией",
          description: "Утро. Трансфер в аэропорт Кансай. Чемоданы полны сувениров, сердце — впечатлений, камера — тысяч фотографий. Вы увозите с собой не только воспоминания, но и частичку японской души: умение находить красоту в простом, спокойствие дзен-садов, вкус настоящего рамена, звук бамбука на ветру, взгляд оленя в Наре, отражение Золотого павильона в воде. Япония изменила вас. И вы знаете — это не последняя встреча. Sayonara — до свидания. Не прощай."
        }
      ]
    }
  ];

  const tourDates = [
    { date: "17 сентября - 30 сентября 2026", status: "available", seats: 6, season: "autumn", badge: "🍁 Момодзи (красные клёны)" },
    { date: "2 октября - 15 октября 2026", status: "available", seats: 6, season: "autumn", badge: "🍁 Момодзи (красные клёны)" },
    { date: "16 октября - 29 октября 2026", status: "available", seats: 6, season: "autumn", badge: "🍁 Момодзи (красные клёны)" },
    { date: "1 ноября - 14 ноября 2026", status: "available", seats: 4, season: "autumn", badge: "🍁 Момодзи (красные клёны)" }
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
            <a href="/#path" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Концепт</a>
            <a href="/tour" className="text-primary transition-colors font-medium text-base xl:text-lg">Программа тура</a>
            <a href="/gallery" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Галерея</a>
            <a href="/blog" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Блог</a>
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
              <a href="/#path" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Концепт</a>
              <a href="/tour" onClick={() => setMobileMenuOpen(false)} className="text-primary transition-colors font-medium text-lg py-2">Программа тура</a>
              <a href="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Галерея</a>
              <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Блог</a>
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

          <div className="space-y-12 md:space-y-16">
            {tourParts.map((part, index) => (
              <div key={index} className="relative">
                <div className="relative h-32 md:h-48 rounded-2xl overflow-hidden shadow-2xl mb-2">
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
                    <div key={dayIndex}>
                      <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-accent/20">
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
                      
                      {/* Отзыв после 3-го дня (конец Токио) */}
                      {dayInfo.day === 3 && (
                        <div className="relative my-8 md:my-12">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl"></div>
                          <Card className="relative border-2 border-primary/20 bg-gradient-to-br from-background via-accent/5 to-background shadow-2xl">
                            <CardContent className="p-8 md:p-10">
                              <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0">
                                  <img 
                                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/23bbe788-4ade-40e8-87ea-64f0bd36d887.jpg"
                                    alt="Алина"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-primary/20 shadow-xl"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Icon name="Quote" size={24} className="text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-widest">Отзыв путешественника</span>
                                  </div>
                                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 italic">
                                    "Третий день в Токио стал гастрономическим откровением! Утро на Цукидзи — Даниэль провёл нас по секретным лоткам, где местные завтракают. Мы ели свежайшие устрицы размером с ладонь, пробовали тамагояки у мастера, который готовит его 40 лет. В TeamLab я буквально плакала от красоты — это не музей, это параллельная вселенная. А вечерний рамен в Роппонги... Боже, я поняла, что всю жизнь ела не рамен, а его бледную копию. Густой бульон, тающаяся свинина, идеальная лапша — я заказала вторую порцию, хотя едва дышала от первой. Даниэль смеялся: 'Теперь ты понимаешь, почему японцы готовы стоять в очереди час ради хорошего рамена'. Понимаю!"
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                    <span className="text-sm text-muted-foreground font-medium">Алина, апрель 2024</span>
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}
                      
                      {/* Отзыв после 6-го дня (Альпы) */}
                      {dayInfo.day === 6 && (
                        <div className="relative my-8 md:my-12">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl"></div>
                          <Card className="relative border-2 border-primary/20 bg-gradient-to-br from-background via-accent/5 to-background shadow-2xl">
                            <CardContent className="p-8 md:p-10">
                              <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0">
                                  <img 
                                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f34d8b91-8a07-4ee2-83e2-af77d43944ee.jpg"
                                    alt="Игорь"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-primary/20 shadow-xl"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Icon name="Quote" size={24} className="text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-widest">Отзыв путешественника</span>
                                  </div>
                                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 italic">
                                    "Утренний рынок в Такаяме — это что-то особенное! Бабушка на лотке дала мне попробовать её фирменное мисо — я съел три ложки и купил банку с собой. Потом на Санмачи-дори мы заходили в каждую пивоварню саке, дегустировали, слушали истории мастеров. Даниэль перевёл всё так живо, что я чувствовал себя частью этой семейной традиции. А когда он предложил натто... Я решился! Да, запах специфический, но когда смешал с рисом и соевым соусом — неожиданно вкусно. Сиракава-го под вечер был как иллюстрация к сказке: старинные дома, горы вокруг, тишина. А ночью в Канадзаве Даниэль привёл нас в квартал гейш — мы видели настоящую гейко, идущую на встречу. Это было волшебство."
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                    <span className="text-sm text-muted-foreground font-medium">Игорь, июнь 2024</span>
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}
                      
                      {/* Отзыв после 10-го дня (Киото) */}
                      {dayInfo.day === 10 && (
                        <div className="relative my-8 md:my-12">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl"></div>
                          <Card className="relative border-2 border-primary/20 bg-gradient-to-br from-background via-accent/5 to-background shadow-2xl">
                            <CardContent className="p-8 md:p-10">
                              <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0">
                                  <img 
                                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/3d67f1b4-acd9-42a9-bae7-d3cf27c672ec.jpg"
                                    alt="Екатерина"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-primary/20 shadow-xl"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Icon name="Quote" size={24} className="text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-widest">Отзыв путешественника</span>
                                  </div>
                                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 italic">
                                    "В Киото Даниэль организовал для нас мастер-класс по лепке нигири у настоящего суши-мастера! Мы стояли за стойкой, учились правильно держать рис, резать рыбу. Шеф говорил только по-японски, но через переводчика мы поняли каждый нюанс. А потом съели свои творения и… они были вкусными! Ещё нам повезло попасть на частную чайную церемонию в доме 17 века. Такие моменты нельзя купить в пакетных турах — только с теми, кто знает Японию изнутри."
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                    <span className="text-sm text-muted-foreground font-medium">Екатерина, март 2024</span>
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}
                      
                      {/* Отзыв после 13-го дня (финал путешествия) */}
                      {dayInfo.day === 13 && (
                        <div className="relative my-8 md:my-12">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-xl"></div>
                          <Card className="relative border-2 border-primary/20 bg-gradient-to-br from-background via-accent/5 to-background shadow-2xl">
                            <CardContent className="p-8 md:p-10">
                              <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0">
                                  <img 
                                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/97cf5917-ab19-447c-b382-084be5a457c1.jpg"
                                    alt="Дмитрий"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-primary/20 shadow-xl"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Icon name="Quote" size={24} className="text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-widest">Отзыв путешественника</span>
                                  </div>
                                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 italic">
                                    "Финальный день в Осаке — это была вишенка на торте! Даниэль привёл нас в секретный бар на 40-м этаже, куда попадают только по рекомендации. Мы пили японский виски, смотрели на огни города и вспоминали весь путь. Организация была безупречной: комфортный минивэн забирал нас точно по расписанию, отели подобраны с душой, каждый ресторан — открытие. Даниэль знает тысячи историй, показывает секретные места и чувствует, когда нужно дать нам свободу, а когда — направить. Это не просто тур — это путешествие с другом, который живёт в Японии. Спасибо команде ДА! Я уже планирую вернуться."
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                    <span className="text-sm text-muted-foreground font-medium">Дмитрий, май 2024</span>
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dates" className="pt-0 md:pt-0 pb-16 md:pb-24 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Даты туров 2026
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите удобную дату для вашего путешествия
            </p>
          </div>

          <div className="grid gap-3">
            {tourDates.map((tour, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-accent/20">
                <CardContent className="p-3 md:p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Calendar" size={16} className="text-primary" />
                      </div>
                      <div>
                        {tour.badge && (
                          <div className={`text-[10px] md:text-xs font-semibold mb-0.5 ${tour.season === 'spring' ? 'text-pink-400' : 'text-orange-400'}`}>
                            {tour.badge}
                          </div>
                        )}
                        <div className="text-sm md:text-base font-bold text-foreground">{tour.date}</div>
                        <div className="text-xs text-muted-foreground">14 дней | 13 ночей</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {tour.status === 'available' ? (
                        <>
                          <a href="#contact" onClick={(e) => { e.preventDefault(); const contactSection = document.getElementById('contact'); if (contactSection) { contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}>
                            <Button className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 text-xs md:text-sm font-semibold">
                              Забронировать
                            </Button>
                          </a>
                        </>
                      ) : tour.status === 'waitlist' ? (
                        <a href="/#contact" className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-orange-500 rounded-full shadow-lg shadow-orange-500/70"></span>
                          <span className="inline-block bg-orange-500/20 text-orange-600 px-2 py-1 rounded text-xs font-bold uppercase border border-orange-500/30 hover:bg-orange-500/30 transition-colors">
                            Лист ожидания
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-red-600 rounded-full shadow-lg shadow-red-600/70"></span>
                          <span className="inline-block bg-red-600/20 text-red-600 px-2 py-1 rounded text-xs font-bold uppercase border border-red-600/30">
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

          <div className="mb-8 md:mb-12">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Стоимость тура</div>
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                      249 000 ₽
                    </div>
                    <div className="text-base text-muted-foreground mb-3">на человека</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>*</span>
                      <span>Доплата за одноместное размещение 39 000 ₽</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground border-l-0 md:border-l border-accent/30 pl-0 md:pl-6">
                    <Icon name="Calendar" size={24} className="text-primary" />
                    <span className="text-base md:text-lg">14 дней<br/>незабываемых<br/>впечатлений</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                    <Icon name="CheckCircle2" size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>Включено в тур</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Проживание в отелях по программе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Все трансферы и переезды на комфортабельном минивэне VIP-класса с личным водителем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Услуги русскоязычного гида-сопровождающего</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Экскурсии по программе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Входные билеты в музеи и храмы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Завтраки в отелях</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Полное визовое сопровождение и консульский сбор</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">eSIM карта для интернета 20 ГБ на весь период тура</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                    <Icon name="XCircle" size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>Не включено в тур</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Авиабилеты до Токио и из Осаки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Обеды и ужины (за исключением особых мероприятий)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Личные расходы и покупки сувениров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Дополнительные экскурсии вне программы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Чаевые гиду и водителю (по желанию)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground">Алкогольные напитки</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 md:mt-16">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
                  Условия бронирования и участия в туре
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                      <Icon name="Calendar" size={24} />
                      1. Порядок бронирования и оплаты
                    </h4>
                    <div className="space-y-4 text-muted-foreground pl-8">
                      <div>
                        <p className="font-semibold text-foreground mb-2">ШАГ 1: БРОНИРОВАНИЕ</p>
                        <ul className="space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Покупка авиабилетов является гарантией бронирования мест в туре</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>После покупки необходимо предоставить подтверждение бронирования перелета</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">ШАГ 2: ВИЗОВОЕ СОПРОВОЖДЕНИЕ (за 3 месяца до поездки)</p>
                        <ul className="space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Полное визовое сопровождение и консульский сбор включены в стоимость тура</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">ШАГ 3: ОПЛАТА ТУРА</p>
                        <ul className="space-y-1">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Депозит 30 000 руб. с человека (вносится за 45 дней до поездки, невозвратный)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Платеж 100 000 руб. с человека (вносится за 7 дней до вылета)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Остаток стоимости тура оплачивается во время тура, но не позднее 2-го дня программы</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                      <Icon name="XCircle" size={24} />
                      2. Условия отмены
                    </h4>
                    <ul className="space-y-2 text-muted-foreground pl-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>При отмене за 45 дней и более — удерживается депозит 30 000 руб.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>При отмене менее чем за 45 дней — удерживается 100% стоимости тура</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>При отказе в визе — возвращаются все оплаченные средства за вычетом фактически понесенных расходов</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                      <Icon name="Shield" size={24} />
                      3. Правила поведения во время тура
                    </h4>
                    <div className="space-y-3 text-muted-foreground pl-8">
                      <div>
                        <p className="font-semibold text-foreground mb-2">Общие правила:</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Соблюдение законов Японии и уважение местных традиций</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Пунктуальность — соблюдение времени сбора группы</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Следование указаниям гида</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">В транспорте VIP-класса:</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Запрещено употребление пищи и напитков (кроме бутилированной воды)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Соблюдение чистоты и использование ремней безопасности</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">Безопасность:</p>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Иметь при себе копию паспорта и страховки</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Сообщать гиду о любых проблемах со здоровьем</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                      <Icon name="Heart" size={24} />
                      4. Медицинская страховка
                    </h4>
                    <ul className="space-y-2 text-muted-foreground pl-8">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Все участники обязаны иметь медицинскую страховку на весь период пребывания</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Рекомендуется расширенная страховка, покрывающая активные виды отдыха</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-primary/20">
                    <p className="text-center text-sm text-muted-foreground italic">
                      Подписывая договор, вы подтверждаете согласие со всеми условиями тура
                    </p>
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
                <a href="/tour" className="hover:text-background transition-opacity">Программа тура</a>
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