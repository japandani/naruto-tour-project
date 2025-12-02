import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  
  const articles = [
    {
      id: 4,
      title: 'Чайная церемония в 7:55. Хозяин пришёл рано',
      excerpt: 'Немка в Курасики. Традиционный дом на две ночи. Драконболлы по комнатам, татами, кухня из 80-х. Хозяин договорился на 8:00. Постучал в 7:55. Я думала, немецкая пунктуальность — наш конёк. Ошиблась.',
      image: 'https://cdn.poehali.dev/files/fa6f7362-56b4-44dc-bf0a-457b03aa37d8.jpeg',
      date: '18 апреля 2024',
      readTime: '7 мин',
      category: 'Культура',
      fullText: `Меня зовут Неля. Я из Германии. Точнее, из бывшей ГДР, но это уже детали. Важно другое: немецкая пунктуальность у меня в крови. Опоздание на минуту — это катастрофа, опоздание на пять — это конец света.

В Японии я узнала: есть пунктуальность немецкая. А есть японская. И вторая — это вообще другой уровень.

**Курасики. Дом с драконболлами**

Даниэль снял нам традиционный японский дом на две ночи. Не отель, не гостиница — дом. Настоящий. В Курасики, небольшом городке, где туристов почти нет.

Приехали вечером. Открыли дверь. И я поняла: мы попали в музей, который можно трогать.

Комнат штук восемь, может, десять. Все разные. Татами, футоны, раздвижные сёдзи, какие-то лаковые шкатулки, веера на стенах. И — внимание! — в каждой комнате разбросаны фигурки из "Драконьих шаров". Да, те самые Гоку, Вегета, Пикколо. Я сначала подумала, что у меня галлюцинации. Потом поняла: хозяин — фанат.

Кухня отдельная песня. Новая, блестящая, вся в технике. Но! Дизайн как будто прыгнул из 1985 года. Жёлто-оранжевые плитки, кафель в цветочек, пластиковые подставки под чайник. Я влюбилась сразу.

**7:55 утра. Стук**

Хозяин предупредил: завтра в 8:00 приду провести чайную церемонию. Мы согласились. Даниэль сказал: "Будьте готовы ровно в восемь."

Я немка. Я готова была к 7:50.

В 7:55 — стук в дверь.

Я в пижаме. Волосы дыбом. В руках зубная щётка. Открываю. На пороге хозяин — улыбается, кланяется, извиняется.

По-японски. Быстро. Я не понимаю ни слова.

Он показывает на часы: 7:55. Потом машет руками: "Извините, извините." Разворачивается и уходит.

Я стою в ступоре. Немецкая пунктуальность только что проиграла японской.

**8:15. Церемония**

Хозяин вернулся ровно в 8:15. Как обещал. Мы уже сидели в чайной комнате — отдельное помещение, сёдзи с японскими гравюрами, низкий столик, татами под коленями.

Команда вся в сборе. Даниэль... нет, постойте, а где Даниэль?

Хозяин внёс чайный набор. Поклонился. Начал ритуал. Мы сидим. Молчим. Пытаемся понять, что делать.

А Даниэля нет.

Позже выяснилось: Даниэль специально ушёл. Сказал: "Вы сами. Без меня." Я его потом долго ругала. Но про себя признала: он прав. Это был наш опыт, не его.

**Церемония без слов**

Хозяин не говорил по-английски. Мы — по-японски. Но это было не важно.

Он взбивал матчу. Медленно. Венчик по чаше — ш-ш-ш-ш. Пена зелёная, густая. Подал первую чашу. Мне.

Я взяла двумя руками. Повернула к себе узором. Выпила. Три глотка. Последний — с хлюпом (как научил Даниэль накануне).

Хозяин улыбнулся. Кивнул. Я всё сделала правильно.

Дальше — каждому по очереди. Он смотрел на каждого. Подавал чашу. Ждал. Молча. Но в этом молчании было столько внимания, что казалось — он говорит. "Вот твоя чаша. Вот твой момент. Будь здесь."

**Ичиго ичие**

После церемонии хозяин сказал два слова. Единственные за весь час.

"Ичиго ичие."

Я не знала, что это значит. Позже Даниэль объяснил: "Одна встреча, один шанс. Этот момент больше никогда не повторится."

И я поняла. Мы с хозяином — мы больше никогда не встретимся. Эта чайная комната, этот свет, эти люди, эта чаша — всё уникально. Сейчас. Здесь. Один раз.

Я плакала. Тихо. Хозяин заметил. Поклонился ниже обычного.

**99 лет**

Когда мы прощались, я спросила у Даниэля: "Сколько лет хозяину?"

Даниэль рассмеялся: "Это не хозяин. Это его отец. Ему 99."

Я: "ЧТО?!"

На фото внизу — этот человек. 99 лет. Провёл чайную церемонию для группы иностранцев, которые не понимают его язык. Встал в 7:55 (извинился за раннее прибытие). Вернулся ровно в 8:15. Взбивал матчу час. Не устал. Не пожаловался.

Я немка. Мне 52. После часа на коленях я еле встала.

А ему 99.

**Послесловие**

Немецкая пунктуальность — это приходить вовремя. Японская — это приходить раньше, извиняться за раннее прибытие, уходить, возвращаться точно вовремя и проводить церемонию так, будто это последняя церемония в твоей жизни.

Я думала, я знаю, что такое "быть точным". Япония показала: я даже близко не знала.

Даниэль, кстати, так и не объяснил, почему сбежал. Только улыбнулся: "Вам нужно было это пережить самим."

Ненавижу, когда он прав.`
    },
    {
      id: 10,
      title: '60 лет я всё контролировал. В Японии впервые отпустил',
      subtitle: 'переведено с иврита',
      excerpt: 'Гилад. Программист. Глава семьи. 40 лет возил всех сам — Европа, отели, маршруты. Всегда за рулём. В Японии написал Даниэлю две строчки и доверился. С полуслова. Первый раз за 60 лет.',
      image: 'https://cdn.poehali.dev/files/b62a096f-9794-4d18-8e96-d57eb9010020.jpeg',
      date: '15 ноября 2024',
      readTime: '8 мин',
      category: 'Истории',
      fullText: `Гилад, 60. 

Программист. На пенсии сейчас, но привычки остались. Всё чеклисты. Всё по плану. Италия — отель забронирован за полгода, маршрут по минутам, я за рулём. Франция, Германия, Чехия — та же схема. Семья знает: папа везёт, папа решает, папа за всё отвечает. 

40 лет так.

**Две строчки Даниэлю**

Жена: "Гилад, тебе 60. Хватит. Отдохни." 

Нашёл команду ДА. Написал Даниэлю: "Нам 60. Хотим Японию."

Всё. Две строчки.

Ответ: "Доверьтесь."

И я доверился. Не стал уточнять маршрут, не требовал расписание по часам, не лез с контролем. Просто купил билеты и полетел. Первый раз за 60 лет отпустил.

**Токио. Встреча**

Даниэль встретил в аэропорту. Сказал: "Привет, Гилад. Поехали пить кофе." 

Не "вот ваш план", не "давайте обсудим детали". Просто "поехали пить кофе".

Я молчал. Пил кофе. Слушал. Даниэль рассказывал про Японию — не как гид из учебника, а как человек, который здесь живёт. Про запах татами в рёкане. Про то, как японцы молчат, но всё понимают. Про Фудзи, которую нужно ловить в плохую погоду.

Я расслабился. Впервые за годы.

**Идзу. Маяк. Фото**

Третий день. Даниэль: "Сегодня облачно. Идеально."

Я: "Для чего идеально?"

Он: "Для Фудзи. Все думают — нужно солнце. Нет. Нужны облака и море. Поехали на Идзу, там маяк, туристов ноль."

Приехали. Залив. Ветер. Волны. Скамейка у воды. Никого. Мы с женой сели. Даниэль сказал: "Ждите."

Сидим. Молчим. Минут 20, наверное. Я уже думал: ну всё, не судьба увидеть Фудзи.

И тут облака разошлись. Над морем. Гора. Не как на магните из сувенирной лавки. Настоящая. Огромная. Живая.

Жена сжала мою руку. Я не дышал.

Даниэль щёлкнул камерой. Один раз. Сказал: "Готово."

Это фото висит у нас дома. Когда кто-то спрашивает: "Где это?", отвечаю: "Место, о котором не пишут в путеводителях."

**Что изменилось**

Я 40 лет думал: если не контролируешь — развалится. Если не планируешь — провалится. Если доверяешь другим — подведут.

Япония показала: нет. 

Когда отпускаешь контроль, получаешь больше. Тишину. Присутствие. Жену рядом, которая говорит "Гилад, я счастлива" — и ты веришь, потому что сам наконец-то здесь, а не в голове с планами на завтра.

Даниэль не подвёл. Ни разу. Всё было. Встречи вовремя, рёкан идеальный, онсэн с видом на горы, еда, которую я не выбирал, но она была именно та, что нужна. 

Он не спрашивал "что вы хотите?". Он просто знал. Как? Не понимаю. Может, опыт. Может, чутьё. Не важно.

Я доверился — ожидания оправдались. Даже больше. Я хотел посмотреть Японию. Получил урок, как жить.

**Прощание**

Аэропорт. Пожал Даниэлю руку. Хотел сказать что-то умное, благодарное. Получилось: "Спасибо."

Жена обняла его. Плакала. Даниэль тоже.

Мы стояли втроём. Плакали. Не стыдно.

**Внукам**

Вчера внук спросил: "Деда, а в Японию поедем?"

Ответил: "Поедем. С Даниэлем. Когда подрастёшь."

Он: "А кто такой Даниэль?"

Я: "Человек, который научил деда доверять."

Фото со скамейки на фоне Фудзи теперь в рамке. Смотрю каждый день. Напоминает: жизнь в 60 не кончается. Она начинается. Если отпустить.`
    },
    {
      id: 8,
      title: 'Как три подруги потерялись в Токио и нашли себя',
      subtitle: 'переведено с иврита',
      excerpt: 'Май, Сефи и Орталь после Вьетнама и Таиланда думали, что готовы к Японии. Не готовы. История о том, как за два дня хаоса гид Даниэль научил их не бояться Токио.',
      image: 'https://cdn.poehali.dev/files/a02e024b-943f-4058-b67f-c3aa694aed18.jpeg',
      date: '22 октября 2024',
      readTime: '9 мин',
      category: 'Истории',
      fullText: `Меня зовут Май. Мы с подругами Сефи и Орталь уже объездили пол-Азии. Вьетнам? Легко. Таиланд? Проще простого. Индия? Выжили. Поэтому, когда мы прилетели в Токио, думали: ну что там может быть сложного?

Сложно может быть ВСЁ.

**День первый: полная дезориентация**

Аэропорт Нарита. Мы выходим — и понимаем, что все надписи на японском. Английского почти нет. Мы пытаемся купить билет на поезд в город. Автоматы. Кнопки. Иероглифы.

Я: "Давайте вот эту кнопку нажмём?"
Сефи: "Нет, эту!"
Орталь: "Девочки, я вообще не понимаю, где мы."

Через 40 минут попыток мы сели не на тот поезд. Вместо Синдзюку приехали в Икебукуро. Разница? Мы не знали. Вышли. Толпа. Неон. Хаос. Мы стоим с чемоданами посреди станции и понимаем: мы потерялись. В первый час.

**SOS Даниэлю**

Мы написали Даниэлю (нашему гиду): "Мы где-то в Токио. Не знаем где. Помогите."

Он ответил через 2 минуты: "Отправьте фото вывески станции. Жду."

Через 10 минут он прислал голосовое: "Вы в Икебукуро. Это даже лучше, чем Синдзюку. Сейчас расскажу, что делать."

Он за 15 минут по телефону провёл нас через станцию, объяснил, где купить IC-карту (проездной), как пользоваться метро, и отправил на правильную ветку. Мы сидели в вагоне и переглядывались: "Блин, он волшебник?"

**День второй: crash-курс по выживанию**

Утром Даниэль встретил нас у отеля. Сказал: "Сегодня я научу вас не бояться Токио."

Он провёл нас в метро и показал:
— Как читать карты (по цветам линий, не по названиям)
— Как находить выходы (по номерам, а не по иероглифам)
— Как заказывать еду через автоматы (фото блюд — наше всё)
— Как просить о помощи (достаточно показать карту и ткнуть пальцем)

Потом отпустил нас. Одних. С заданием: "Доедьте до Харадзюку. Найдите кафе с панкейками. Сфотографируйтесь. Вернитесь. Если потеряетесь — звоните."

Мы справились. Сами. Без паники. И это была победа.

**Что мы поняли про Токио**

— Он не хочет вас запугать. Он просто живёт в своём ритме.
— Японцы всегда помогут. Даже если не говорят по-английски, они найдут способ.
— Метро — это не ад. Это искусство. Надо просто понять систему.
— Еда через автоматы — гениально. Никакого стресса с заказом.

**Финал: мы больше не туристки, мы местные**

К концу недели мы ездили по Токио как по своему городу. Знали, где лучший рамен, как попасть в секретный бар на крыше, где купить дешёвую косметику.

В последний день мы сидели в Сибуе, пили кофе, и мимо прошла пара туристов с растерянными лицами. Они смотрели на карту, явно заблудившись.

Я встала и подошла к ним: "Могу помочь?"

Мы помогли им найти дорогу. По-английски, жестами, показывая на карте.

Сефи сказала: "Мы теперь те, кто помогает, а не те, кто теряется."

**Спасибо, Даниэль. Ты не просто показал нам Токио. Ты научил нас не бояться неизвестности. Это самый ценный навык для путешественниц.**

**P.S. А ещё мы провели с Даниэлем незабываемый день у подножия величественной Фудзиямы.**`
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

    },

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
            <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="text-sm text-muted-foreground mb-4 italic">
                {article.subtitle}
              </p>
            )}
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
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors" style={{ fontFamily: 'Cormorant, serif' }}>
                  {article.title}
                </h3>
                {article.subtitle && (
                  <p className="text-xs text-muted-foreground/70 mb-2 italic">
                    {article.subtitle}
                  </p>
                )}
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