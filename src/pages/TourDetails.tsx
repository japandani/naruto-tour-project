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
          description: "Приземление. Токио.

Портал открыт. Будущее здесь — настоящее.

Вечер. Сибуя. Неоновая симфония. Миллионы огней в танце. Перекрёсток — живой организм из тысяч людей. Энергия бьёт в лицо. Можно потеряться. Можно найти себя.

Первый ужин в скрытой идзакае. Тихое посвящение. Каждое блюдо — история на языке."
        },
        {
          day: 2,
          title: "Контрасты, которые бьют током",
          description: "Асакуса. Утро у древнего храма Сэнсо-дзи, в дыму благовоний и шуме торговой улицы. Запах истории.\n\nПарк Уэно. Тишина прудов и аллей. Величие музеев, где хранится дух Японии.\n\nАкихабара. Резкий переход. Гул электроники, неон, царство аниме и манги. Энергия бьёт током.\n\nХарадзюку. Улица Такэсита — взрыв молодёжной моды. Место, где рождаются и умирают тренды.\n\nВечер. Синдзюку. Кабуки-чо. Лабиринт переулков в огнях. Воздух гудит от приглашений, запахов еды и ночной жизни. Пульс Токио, отбивающий бешеный ритм."
        },
        {
          day: 3,
          title: "Рынок и небоскрёб",
          description: "Рассвет. Рынок Цукидзи. Тунец весом 200 кг разделывают как хирурги. Запах моря. Вкус свежести.

Императорский дворец. Тишина садов. Величие стен. Секреты веков.

Вечер. Tokyo Skytree. Подъём в облака. Под ногами — океан огней. Небоскрёбы как маяки. Город дышит светом."
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
          title: "Бронза и вулкан",
          description: "Камакура. Дайбуцу — Великий Будда. Бронза XIII века. Пережил цунами, землетрясения. Стоит. Спокоен.

Дорога в Хаконе. Озеро Аси — зеркало в другой мир. Канатная дорога над Овакудани. Земля дышит паром и серой. Воздух пахнет вулканом.

Музей под небом. Скульптуры среди природы.

Вечер. Онсэн. Горячая вода смывает город. Остаётся тишина."
        },
        {
          day: 5,
          title: "Священная гора",
          description: "Утро. Фудзи-сан.

Озеро Кавагутико. Безветрие. Гора отражается идеально. Грань стёрта. Небо и земля — одно.

Символ Японии перед вами.

Дорога в горы. Сиракава-го. Дома гассё-дзукури — крыши как ладони в молитве. 250 лет на месте.

Ночь в таком доме. Путешествие во времени. Скрип древесины. Сон. Пение птиц. Пробуждение."
        },
        {
          day: 6,
          title: "Туман и дерево",
          description: "Утро. Сиракава-го. Туман между домами. Тишина. Журчание ручьёв.

Переезд. Такаяма — «маленький Киото». Кварталы Эдо. Деревянные дома торговцев. Память самураев в стенах.

Утренний рынок. Бабушки продают соленья и горные овощи. Традиции живы. В каждом жесте — Япония."
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
          title: "Город мастеров",
          description: "Рассвет. Рынок Миягава. Дары земли и гор.

Квартал Санмати. Камень под ногами. Каждый дом — искусство плотников. Мастерская лакировщика. Старинная пивоварня — местное сакэ.

Хида-но-Сато. 30 домов под открытым небом. Жизнь горцев прошлых веков. История в дереве."
        },
        {
          day: 8,
          title: "Золото и сады",
          description: "Через Альпы. Канадзава.

Город золота. Когда-то богаче Киото. Прииски. Мастера золочения.

Сад Кэнроку-эн. Один из трёх великих. Камень, ручей, дерево — идеальная гармония. Медитация в движении.

Замок Канадзава. Память клана Маэда.

Хигаси Тяя — квартал гейш. Узкие улочки. Деревянные решётки. За ними — чайные домики. Вечером — звук сямисэна. Тихие голоса."
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
          title: "Алые туннели",
          description: "Фусими Инари. Тысячи алых тории. Туннели в горы. Восхождение сквозь священное.

Каждые ворота — дар. Каждый поворот — новый Киото.

Гион. Сердце гейш. Узкие улочки. Деревянные мачия. Время течёт иначе. Может промелькнёт майко — спешит в чайный домик.

Киёмидзу-дера. Храм на сваях. «Чистая вода». Панорама города.

Вечер. Река Камогава. Закат. Киотосцы на берегу."
        },
        {
          day: 10,
          title: "Золотой мираж",
          description: "Кинкаку-дзи. Золотой павильон. Совершенство, похожее на мираж.

Позолота отражается в пруду. Парит между небом и землёй. Символ Киото. Абсолют красоты.

Арасияма. Бамбуковая роща. Тысячи стволов к небу. Зелёный собор. Свет сквозь листву. Ветер играет музыку.

Рёан-дзи. Сад камней. Величайшая загадка дзен. 15 камней. Белый гравий. Вселенная. Пустота и полнота.

Не понять. Почувствовать."
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
          title: "Память и воскрешение",
          description: "Хиросима. Город, переживший невозможное.

Мемориальный парк. Купол Гэмбаку. 6 августа 1945. Молчание свидетелей.

Музей мира. Обнажённая правда истории. Хрупкость мира в каждом экспонате.

Но Хиросима — это надежда. Символ силы духа.

Паром. Остров Миядзима. Священное место. Тории Ицукусима в воде. Парят на границе стихий. Прилив — зеркало моря. Один из образов Японии.

Гора Мисен. Священные олени на острове."
        },
        {
          day: 12,
          title: "Порт и мрамор",
          description: "Кобе. Порт. Восток встречает Запад.

Утро. Канатная дорога на Рокко. Панорама залива Осака.

Киото-Китано-чо. Особняки торговцев XIX века. История открытия Японии.

Главное. Говядина Кобе. Легенда.

Не мясо. Искусство. Мраморная вырезка тает. Послевкусие совершенства.

Вечер. Порт. Огни в тёмной воде."
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
          title: "Куидаорэ",
          description: "Осака. Кулинарная столица. «Куидаорэ» — ешь до упаду.\n\nДотонбори. Неоновый каньон вдоль канала. Гигантские крабы и осьминоги зовут в рестораны.\n\nТакояки — шарики с осьминогом. Окономияки — японская пицца. Уличные повара-виртуозы. На глазах.\n\nЗамок Осаки среди небоскрёбов. Контраст эпох.\n\nВечер. Синсайбаси. Шопинг как развлечение. Улицы живы до ночи.\n\nПоследняя ночь. Город дарит финальную дозу энергии."
        },
        {
          day: 14,
          title: "Sayonara",
          description: "Прощание.\n\nТрансфер в Кансай. Япония остаётся.\n\nНе только в фотографиях. Не только в сувенирах.\n\nЕё тишина и ритм. Древность и футуризм. Вежливость и страсть. Всё внутри.\n\nЯпония меняет тех, кто впустил её в сердце.\n\nВы не те, кем были. Вы стали немного японцами.\n\nSayonara.",
          highlight: true
        }
      ]
    }
  ];

  const tourDates = [
    { date: "18 марта - 1 апреля 2026", status: "available", seats: 6, season: "spring", badge: "🌸 Ханами (цветение сакуры)" },
    { date: "3 апреля - 15 апреля 2026", status: "available", seats: 3, season: "spring", badge: "🌸 Ханами (цветение сакуры)" },
    { date: "17 апреля - 2 мая 2026", status: "closed", seats: 0, season: "spring" },
    { date: "29 апреля - 10 мая 2026", status: "closed", seats: 0, season: "spring" },
    { date: "12 мая - 25 мая 2026", status: "closed", seats: 0, season: "spring" },
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
            <a href="/#path" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Ваш Путь</a>
            <a href="/tour" className="text-primary transition-colors font-medium text-base xl:text-lg">Описание Пути</a>
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
              <a href="/#path" onClick={() => setMobileMenuOpen(false)} className="text-background hover:text-primary transition-colors font-medium text-lg py-2">Ваш Путь</a>
              <a href="/tour" onClick={() => setMobileMenuOpen(false)} className="text-primary transition-colors font-medium text-lg py-2">Описание Пути</a>
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
                                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/fffeaa73-6441-46f2-ad09-e821e76b7da9.jpg"
                                    alt="Михаил"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-primary/20 shadow-xl"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Icon name="Quote" size={24} className="text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-widest">Отзыв путешественника</span>
                                  </div>
                                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 italic">
                                    "Даниэль превратил первые дни в настоящее приключение! Утро на рынке Цукидзи — он привёл нас к своему знакомому торговцу, и мы попробовали тунца прямо с ножа. А вечером устроил нам караоке-марафон в Синдзюку — пели японские хиты, не зная ни слова. Водитель терпеливо ждал нас до двух ночи, и минивэн стал нашим уютным домом на колёсах. Так начинаются настоящие путешествия!"
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                    <span className="text-sm text-muted-foreground font-medium">Михаил, март 2024</span>
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
                                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/e16417d9-4176-44d4-9b73-671b1dc0cca7.jpg"
                                    alt="Анна"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-primary/20 shadow-xl"
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Icon name="Quote" size={24} className="text-primary" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-widest">Отзыв путешественника</span>
                                  </div>
                                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4 italic">
                                    "В Хаконе нас поселили на виллу с видом на Фудзи — и вечером устроили барбекю на террасе! Даниэль достал местное мясо вагю, мы жарили якитори, пили сакэ и смотрели на звёзды над священной горой. А на следующий день в Сиракава-го хозяйка дома показала нам, как ткать на старинном станке. Каждая деталь тура продумана так, чтобы мы не просто смотрели, а жили этой Японией."
                                  </p>
                                  <div className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-primary/20"></div>
                                    <span className="text-sm text-muted-foreground font-medium">Анна, апрель 2024</span>
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
                          <a href="/#contact" className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/70"></span>
                            <span className="text-xs md:text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
                              {tour.seats} {tour.seats === 1 ? 'место' : tour.seats < 5 ? 'места' : 'мест'}
                            </span>
                          </a>
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