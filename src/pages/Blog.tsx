import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  
  const articles = [
    {
      id: 1,
      title: 'Первые впечатления от Токио',
      excerpt: 'Неоновые огни Синдзюку, тишина древних храмов и невероятная вежливость местных жителей. Рассказываю, что меня поразило больше всего в первые дни путешествия по столице Японии.',
      image: 'https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/da91caa0-dab7-4d02-a324-93883785ad15.jpg',
      date: '15 марта 2024',
      readTime: '5 мин',
      category: 'Города',
      fullText: `Токио встречает тебя как удар по всем органам чувств сразу. Выходишь из аэропорта — и понимаешь, что это не просто город, а живой организм, где каждая улица дышит, а каждый перекрёсток имеет свой ритм.

**Синдзюку вечером — это оркестр неона**

Первое, что бросается в глаза — это свет. Тысячи вывесок, экранов, рекламных табло создают симфонию цвета, которая не выключается до рассвета. Знаменитый перекрёсток Сибуя — это хореография хаоса: когда зелёный свет загорается, две тысячи человек одновременно начинают движение во всех направлениях, и никто ни с кем не сталкивается. Это магия или навык?

**Вежливость как национальная религия**

Первый день в Токио — это череда поклонов. Кассир в магазине кланяется, когда берёт у тебя деньги. Официант кланяется, когда приносит меню. Водитель автобуса кланяется, когда ты выходишь. Сначала это кажется театром, но через несколько дней понимаешь: это не притворство, это код. Уважение здесь — не опция, а операционная система общества.

**Тишина среди миллионов**

В метро Токио — тишина. В вагоне, набитом людьми как сельдь в банке, ты слышишь только шум колёс. Никто не говорит по телефону. Никто не включает музыку в наушниках на максимум. Город с населением 14 миллионов звучит тише, чем московский трамвай.

**Еда — отдельная вселенная**

Первый рамен в крохотной забегаловке на пять мест — это откровение. Бульон настолько насыщенный, что кажется, будто шеф варил его всю жизнь. И наверняка так и было. Здесь ресторан, где варят один вид рамена 50 лет, — это не диковинка, а норма.

**Контрасты на каждом шагу**

Утром ты можешь медитировать в храме Мэйдзи, окружённом вековым лесом, где воздух пахнет кедром и дождём. Через час — стоять в Харадзюку среди подростков в костюмах аниме-персонажей. Через два — сидеть в офисе на 52-м этаже небоскрёба и пить кофе за ₽2000, глядя на Фудзи.

Токио — это город, который ломает все стереотипы о том, каким должен быть мегаполис. Здесь хаос упорядочен, а порядок не скучен. Это место, где будущее уживается с прошлым без конфликтов. И каждый день здесь — это урок того, как можно жить иначе.`
    },
    {
      id: 2,
      title: 'Восхождение на Фудзи: путь к вершине',
      excerpt: 'Священная гора высотой 3776 метров — символ Японии. Делюсь опытом восхождения, советами по подготовке и впечатлениями от встречи рассвета на вершине.',
      image: 'https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/d9cd1595-8936-4585-932f-b36b0d741798.jpg',
      date: '18 марта 2024',
      readTime: '8 мин',
      category: 'Природа',
      fullText: `Фудзи-сан — это не просто гора. Это священный символ, который японцы рисуют, фотографируют, боготворят уже тысячу лет. И теперь я понимаю почему.

**Подготовка: что взять и чего ожидать**

Восхождение начинается не на горе, а в магазине. Нужна тёплая одежда (на вершине +5, даже летом), фонарик (идти придётся ночью), вода и энергетики. Туристы берут палки за ₽500 — на них можно ставить печати на станциях по маршруту. Это как паспорт путешественника.

**Старт в 22:00 — ночной подъём**

Большинство начинает восхождение поздно вечером, чтобы встретить рассвет на вершине. Тропа освещена цепочкой фонариков — это выглядит как река света, текущая в небо. Идёшь в темноте, слышишь только дыхание и шаги сотен людей вокруг.

**Станции — оазисы в пустыне**

Каждые 200 метров высоты — станция с туалетом (₽200), горячим чаем и лапшой. К утру эти места становятся убежищами, где люди греются и набираются сил. Воздух разрежается, ноги тяжелеют, каждый шаг даётся труднее.

**Рассвет на высоте 3776 метров**

В 5 утра ты стоишь на вершине, над облаками, и смотришь, как солнце поднимается из океана. Это называют "御来光" (горайко) — "почтенный свет". Сотни людей вокруг молчат. Кто-то плачет. Это не просто красиво — это момент, когда понимаешь, зачем люди веками поднимались сюда.

**Спуск — испытание для коленей**

Вниз идти проще для лёгких, но жёстче для суставов. Вулканический песок скользит под ногами. Через 3 часа ты внизу — грязный, уставший, счастливый.

**Главное правило: уважение к горе**

Фудзи-сан — не аттракцион. Каждый год здесь гибнут люди, которые недооценили погоду или свои силы. Если чувствуешь головокружение, боль в груди — спускайся. Гора никуда не денется.

Восхождение на Фудзи — это паломничество. Ты идёшь не только к вершине, но и к себе. И даже если ты не религиозен, на высоте 3776 метров что-то внутри просыпается.`
    },
    {
      id: 3,
      title: 'Киото: как за день увидеть 10 храмов',
      excerpt: 'Золотой павильон Кинкаку-дзи, бамбуковый лес Арасияма, район гейш Гион — составил идеальный маршрут по древней столице Японии с картой и временем на каждую локацию.',
      image: 'https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/49432df5-1dc5-4c36-b795-92ee67d55371.jpg',
      date: '21 марта 2024',
      readTime: '10 мин',
      category: 'Маршруты',
      fullText: `Киото — это 2000 храмов, 17 объектов ЮНЕСКО и бесконечное количество туристов с селфи-палками. Но если встать в 6 утра и двигаться по правильному маршруту, можно увидеть душу древней столицы Японии.

**6:00 — Кинкаку-дзи (Золотой павильон)**

Первое правило: приезжай на рассвете. В 6:30 здесь только ты, охранник и утки на пруду. Золотой павильон в утреннем свете — это не фотошоп, это реальность. Листы золота, которыми покрыт храм, отражаются в воде так идеально, что не понимаешь, где реальность, а где отражение.

**8:00 — Рёан-дзи (Сад камней)**

15 камней на белом гравии. Всё. Но ты можешь просидеть здесь час, пытаясь понять, почему это так магнетизирует. Дзен-буддизм в чистом виде: минимализм, пустота, и в ней — всё.

**10:00 — Арасияма (Бамбуковый лес)**

Тысячи стволов бамбука взмывают к небу, создавая зелёный туннель. Ветер создаёт звук, который японцы включили в список «100 звуков Японии, которые нужно сохранить». К 11 утра здесь толпы, поэтому иди быстро.

**12:00 — Обед в Гионе**

Район гейш. Узкие улочки, деревянные дома, тишина. Здесь можно съесть обенто (ланч-бокс) за ₽800 или кайсеки (многоблюдный обед) за ₽8000. Разница не только в цене, но и в философии.

**14:00 — Киёмидзу-дера (Храм чистой воды)**

Построен без единого гвоздя в 778 году. Деревянная платформа висит над обрывом на высоте 13 метров. Отсюда вид на весь Киото. Говорят, если выпить воду из трёх ручьёв у подножия, обретёшь здоровье, успех и любовь. Но можно выбрать только один — жадничать нельзя.

**16:00 — Фусими Инари (Тысячи красных ворот)**

Тоннели из тысяч алых тории ведут в гору. Каждые ворота — дар бизнесмена или компании богу риса. Подъём занимает 2 часа. Туристы обычно фоткаются у входа и уходят. Настоящая красота начинается на полпути.

**18:00 — Ужин в Понтоте**

Район ресторанов вдоль канала. Летом здесь открываются террасы над водой. Ешь якитори (шашлычки) и пьёшь сакэ, глядя на фонари, отражённые в реке.

**20:00 — Гион ночью**

Если повезёт, увидишь гейко (гейшу) или майко (ученицу), спешащую на встречу. Не гонись за ней с камерой — это оскорбление. Просто смотри.

**Главный секрет Киото:**

Храмы здесь — не музеи. Это живые места. Приходи рано, двигайся медленно, не гонись за чек-листами. Киото открывается тем, кто умеет ждать.`
    },
    {
      id: 4,
      title: 'Чайная церемония: больше чем чай',
      excerpt: 'Участвовал в традиционной японской чайной церемонии в 300-летнем чайном домике. Это медитация, философия и искусство в одном ритуале. Объясняю правила этикета и значение каждого жеста.',
      image: 'https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/d954d433-e683-41fb-8891-13888787de66.jpg',
      date: '23 марта 2024',
      readTime: '6 мин',
      category: 'Культура',
      fullText: `Я думал, что чайная церемония — это про чай. Но нет. Это про жизнь, смерть, красоту мгновения и уважение к пустоте.

**Вход в чайный домик — вход в другой мир**

Дверь высотой 60 см. Даже самурай должен был снять меч и склониться, чтобы войти. Здесь все равны. Внутри — татами, свиток на стене, икебана из одной ветки. Минимализм, который кричит громче любого декора.

**Мастер и его движения**

Хозяин церемонии — это не просто человек, который варит чай. Это хореограф ритуала, который учился этому 20-30 лет. Каждое движение — поклон, поворот чаши, взбивание матча бамбуковым венчиком — выверено до миллиметра. Это как смотреть балет, но в замедленной съёмке.

**Правила гостя: что можно и нельзя**

— Входи на коленях
— Любуйся чашей, но держи её правильно: обеими руками, поворачивай к себе узором
— Пей в три глотка (последний — с шумом, чтобы показать, что вкусно)
— Не болтай, не шути, не доставай телефон

Это не про веселье. Это про присутствие.

**Матча — напиток самураев**

Порошковый зелёный чай взбивается с горячей водой до пены. Вкус — горький, землистый, мощный. Это не напиток для удовольствия. Это топливо для концентрации. Самураи пили его перед боем. Монахи — перед медитацией.

**Ваби-саби: красота несовершенства**

Чаша, из которой я пил, была кривая, с трещиной, залатанной золотом (кинцуги). Это не брак — это философия. Трещины делают вещь уникальной. Время делает её ценной. Японцы не боятся старости вещей — они её боготворят.

**Момент, который длится вечность**

Час церемонии тянется как медитация. Ты не думаешь о работе, планах, проблемах. Ты здесь. Сейчас. С чаем, дымом от угольков, тенями на стене.

**Ичиго ичие — "одна встреча, один шанс"**

Основная идея чайной церемонии. Этот момент никогда не повторится. Эти люди, этот чай, этот свет — всё уникально и невозвратимо. Поэтому — цени.

После церемонии выходишь на улицу, и мир кажется громче, быстрее, грубее. Но внутри осталась тишина. И понимание, что иногда чай — это не про чай.`
    },
    {
      id: 5,
      title: 'Ханами: сезон цветения сакуры',
      excerpt: 'Застал главное событие весны в Японии — ханами. Розовые облака цветущих деревьев в парках Осаки, пикники под сакурой и толпы туристов. Когда лучше приехать и где искать самые красивые места.',
      image: 'https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/dd1a9d08-08bd-48a0-ab9b-fd0eeaf65266.jpg',
      date: '25 марта 2024',
      readTime: '7 мин',
      category: 'Сезоны',
      fullText: `Сакура цветёт 7 дней. Всего неделя в году, когда вся Япония превращается в розовое облако. И я попал в это окно.

**Почему японцы одержимы сакурой?**

Для японцев цветение сакуры — это не просто красиво. Это символ быстротечности жизни (моно-но аварэ — "грусть вещей"). Дерево цветёт неделю, потом лепестки опадают. Это напоминание: красота мгновенна, жизнь коротка, цени каждую секунду.

**Ханами — национальный пикник**

Как только сакура зацвела, японцы выходят в парки с едой, сакэ и пледами. Занимают места под деревьями с утра (иногда отправляют младших сотрудников держать территорию). К вечеру парки превращаются в фестиваль: музыка, смех, фонари. Пьяные офисные работники поют караоке. Старики играют на сямисэне. Дети бегают с бенгальскими огнями.

**Лучшие места для ханами:**

**Уено парк, Токио** — 1000 деревьев сакуры, толпы, атмосфера праздника
**Философская тропа, Киото** — 2 км канала, обсаженного сакурой. Романтика и тишина
**Химэдзи замок** — белый замок на фоне розовых деревьев. Классическая открытка
**Ёсино, Нара** — 30 000 деревьев на горе. Это уже не парк, это розовый океан

**Когда ехать?**

Сакура цветёт волной с юга на север:
— Конец марта: Кюсю, Осака, Киото
— Начало апреля: Токио
— Середина апреля: Северная Япония

Прогнозы цветения публикуются заранее. Японцы следят за ними как за биржевыми котировками.

**Ночное ханами (ёдзакура)**

Вечером парки подсвечивают. Сакура в свете фонарей — это другой мир. Розовые лепестки падают, как снег. Люди сидят под деревьями с бутылками сакэ и смотрят вверх, молча. Это не вечеринка — это медитация.

**Момент падения лепестков (сакура фубуки)**

Когда сакура начинает опадать, это называют "метель из лепестков". Ветер поднимает тысячи розовых лепестков, и они кружатся в воздухе, как снег. Это длится день-два. Если попал в этот момент — ты увидел душу Японии.

**Что взять на ханами:**

— Плед (сидеть на траве)
— Еду (комбини или домашний бенто)
— Сакэ или пиво (продаётся на каждом углу)
— Тёплую одежду (вечером холодает)
— Терпение (туристов будет море)

**Главное:**

Ханами — это не про фотки для инстаграма. Это про то, чтобы сидеть под деревом, смотреть на небо сквозь ветки и понимать: всё проходит. И это делает каждый момент бесценным.`
    },
    {
      id: 6,
      title: 'Гид по японской кухне: от рамена до суши',
      excerpt: 'Попробовал всё: от уличной еды за 500 йен до ресторанов с мишленовскими звёздами. Рассказываю про рамен-бары, суши-конвейеры, якиторию и удивительные десерты. С ценами и адресами.',
      image: 'https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/19a94de1-a99f-480f-9873-0c52ed2f5351.jpg',
      date: '27 марта 2024',
      readTime: '12 мин',
      category: 'Еда',
      fullText: `За две недели в Японии я набрал 3 кг. Но ни секунды не жалею. Японская кухня — это не просто еда. Это религия, наука и искусство в одной тарелке.

**Рамен — это не дошик**

Рамен-бар — это обычно 8-10 мест, очередь на улице, и один шеф, который варит бульон 18 часов. Заказ через автомат (нажимаешь кнопку, получаешь талон). Бульон может быть:
— Сёю (соевый)
— Мисо (ферментированная соя)
— Тонкоцу (свиные кости, белый, жирный, мощный)
— Сио (соль)

Лучший рамен, который я ел: Ichiran (сеть, но гениальная). Ты сидишь в кабинке, отгороженный ширмой. Никто не видит, как ты хлюпаешь. Рай для интроверта.

Цена: ₽800-1200

**Суши — забудь про роллы**

Суши в Японии — это не роллы "Филадельфия". Это нигири: кусок свежайшей рыбы на рисе. Всё. Никаких соусов, авокадо, крема. Васаби уже внутри. Макать в соевый соус нужно рыбой вниз, а не рисом (иначе развалится).

Где есть:
— Конвейерные суши-бары (каждая тарелка ₽100-300) — для бюджета
— Омакасе (шеф сам выбирает, что подать) — от ₽5000 до ₽50000

Я пробовал оба. Разница — как между "Жигулями" и "Мерседесом". Оба везут, но ощущения разные.

**Якитория — японский шашлык**

Маленькие забегаловки, где жарят на углях всё: курицу, свинину, овощи, грибы. Порции крошечные (2-3 кусочка), но ты заказываешь 10-15 палочек. Запиваешь пивом. Атмосфера — рабочие после смены, шум, смех, дым.

Цена за палочку: ₽100-200

**Окономияки — японская пицца (или нет)**

Это блин с капустой, мясом (или морепродуктами), политый соусом и майонезом, посыпанный рыбной стружкой, которая шевелится от жара. В Осаке это религия. В Хиросиме — свой вариант (с лапшой внутри).

Цена: ₽800-1000

**Кайсеки — японская высокая кухня**

Это не ужин, это спектакль из 10-15 блюд. Каждое — произведение искусства. Подаётся на керамике ручной работы, украшено цветами, листьями. Ты ешь не просто еду — ты ешь сезон, философию, эстетику.

Цена: от ₽8000 до бесконечности

**Уличная еда:**

— Такояки (шарики с осьминогом) — ₽500
— Якисоба (жареная лапша) — ₽600
— Тайяки (вафля-рыба с начинкой) — ₽200
— Мочи (рисовые лепёшки) — ₽300

**Комбини — храмы фастфуда**

7-Eleven, Lawson, FamilyMart — это не магазины, это образ жизни. Здесь можно купить:
— Онигири (рисовый треугольник) за ₽120
— Бенто (ланч-бокс) за ₽500
— Горячий кофе из автомата
— Десерты, которые вкуснее, чем в кафе

Японцы едят это каждый день. И я понимаю почему.

**Этикет:**

— Не оставляй палочки вертикально в рисе (это ритуал похорон)
— Хлюпай рамен — это комплимент повару
— Допивай суп до дна — это уважение
— Не давай чаевых — это оскорбление

**Главный секрет японской кухни:**

Качество ингредиентов. Здесь тунец — это не "рыба", а конкретная часть конкретного тунца с конкретного рынка. Рис — это не гарнир, а основа всего. Японцы возвели еду в культ. И это лучший культ, в котором я участвовал.`
    }
  ];

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle !== null) {
    const article = articles.find(a => a.id === selectedArticle);
    if (!article) return null;

    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
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
            <Button 
              onClick={closeArticle}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={16} />
              Назад к блогу
            </Button>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12 md:py-20 pt-32 max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full mb-4">
              <span className="text-xs font-medium text-primary">{article.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Icon name="Calendar" size={16} />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={16} />
                {article.readTime}
              </div>
            </div>
          </div>

          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-xl"
          />

          <div className="prose prose-lg max-w-none">
            {article.fullText.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              return (
                <p key={index} className="text-lg leading-relaxed mb-4 text-foreground/90">
                  {paragraph.split(/(\*\*.*?\*\*)/).map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Button 
              onClick={closeArticle}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Icon name="ArrowLeft" size={16} />
              Вернуться к списку статей
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
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
            <a href="/tour" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Описание Пути</a>
            <a href="/gallery" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Галерея</a>
            <a href="/blog" className="text-primary transition-colors font-medium text-base xl:text-lg">Блог</a>
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
              <a href="/tour" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Описание Пути</a>
              <a href="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Галерея</a>
              <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-primary transition-colors font-medium text-lg py-2">Блог</a>
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
      
      <div className="container mx-auto px-4 py-12 md:py-20 pt-32">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="BookOpen" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Japan Blog</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Блог путешественника
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Личные истории, полезные советы и подробные гиды по Японии. 
            Всё, что нужно знать перед поездкой в Страну восходящего солнца
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <Card 
              key={article.id}
              onClick={() => setSelectedArticle(article.id)}
              className="group cursor-pointer border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {article.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-primary/30 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
                Подпишитесь на блог
              </h3>
              <p className="text-muted-foreground mb-6">
                Получайте новые статьи о путешествиях по Японии прямо на почту
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3">
                Подписаться
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
