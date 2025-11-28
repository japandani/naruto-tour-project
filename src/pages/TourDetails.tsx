import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const TourDetails = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tourParts = [
    {
      part: "ЧАСТЬ ПЕРВАЯ",
      title: "РИТМ МЕГАПОЛИСА",
      subtitle: "3 ночи в Токио",
      image: "https://cdn.poehali.dev/files/8b5c091f-7d0b-4acc-b0e4-df8a0a0e0d84.jpg",
      days: [
        {
          day: 1,
          description: "Вечернее погружение в пульсирующий поток Сибуи, где неоновая река уносит вас в мир будущего. Первый ужин — как тихое посвящение в тайны японского вкуса."
        },
        {
          day: 2,
          description: "Утро на легендарном рынке Цукидзи — там, где рождается гастрономическая душа Японии. День в тени Императорского дворца — молчаливого стража истории. Вечер — парение над городом на смотровой площадке, где Токио раскрывается как драгоценный ларец."
        },
        {
          day: 3,
          description: "Парк Уэно — культурный оазис. Харадзюку — взрыв креативной энергии. Храм Мэйдзи — место, где время замедляет свой бег. Музей Эдо-Токио — путешествие сквозь эпохи."
        }
      ]
    },
    {
      part: "ЧАСТЬ ВТОРАЯ",
      title: "ДОРОГА К СВЯЩЕННОМУ",
      subtitle: "Хаконе → Фудзи → Сиракава-го",
      image: "https://cdn.poehali.dev/files/99cdbe1d-6c5c-49c8-98b4-ae3956803345.jpg",
      days: [
        {
          day: 4,
          description: "Путь лежит через древнюю Камакуру, где Великий Будда хранит многовековое спокойствие. Затем — Хаконе: озеро Аси, отражающее небо, горячие источники, дарящие очищение, и музей под открытым небом, где искусство встречается с природой."
        },
        {
          day: 5,
          description: "Утро с Фудзи-сан — фотосессия у зеркальных вод Кавагутико. Переезд в застывшую во времени деревню Сиракава-го, где традиционные дома-гассё складывают руки в молитве к небесам. Ночь в объятиях истории."
        },
        {
          day: 6,
          description: "Пробуждение в альпийской сказке. Неторопливый путь в Такаяму — город, хранящий душу старой Японии."
        }
      ]
    },
    {
      part: "ЧАСТЬ ТРЕТЬЯ",
      title: "ДУША ПРОВИНЦИИ",
      subtitle: "Такаяма → Канадзава",
      image: "https://cdn.poehali.dev/files/2c1d8a12-7c6e-4eea-9187-f60318a9cd7c.jpg",
      days: [
        {
          day: 7,
          description: "Утро на рынке Миягава, где местные жители делятся дарами природы. Прогулка по кварталу Санамати — застывшему в времени. Музей Хида-но-Сато — 30 традиционных домов под открытым небом."
        },
        {
          day: 8,
          description: "Живописная дорога в Канадзаву через горные перевалы. Сад Кэнроку-эн — где каждый камень рассказывает историю. Замок Канадзава — немой свидетель эпох. Район гейш — таинственный и прекрасный."
        }
      ]
    },
    {
      part: "ЧАСТЬ ЧЕТВЕРТАЯ",
      title: "СЕРДЦЕ ИМПЕРАТОРСКОЙ СТОЛИЦЫ",
      subtitle: "2 ночи в Киото",
      image: "https://cdn.poehali.dev/files/aa2ac25f-09c8-4804-8c8e-a50b5b06597f.jpg",
      days: [
        {
          day: 9,
          description: "Тысяча алых ворот Фусими Инари ведут в другое измерение. Район гейш Гион, где прошлое встречается с настоящим. Храм Киёмидзу-дера — павильон чистой воды над городом."
        },
        {
          day: 10,
          description: "Золотой павильон Кинкаку-дзи — символ совершенства. Бамбуковая роща Арасияма — шепот природы. Сад камней Рёан-дзи — дзен-загадка для души."
        }
      ]
    },
    {
      part: "ЧАСТЬ ПЯТАЯ",
      title: "МОРСКАЯ САГА",
      subtitle: "2 ночи в Кобе",
      image: "https://cdn.poehali.dev/files/cb480393-3e94-4ef5-a40f-f18c0ee2f9cb.jpg",
      days: [
        {
          day: 11,
          description: "Поездка-откровение в Хиросиму. Мемориальный парк мира — прикосновение к вечности. Остров Миядзима с парящими в море воротами-тории."
        },
        {
          day: 12,
          description: "Портовый Кобе — город контрастов. Канатная дорога на гору Рокко с панорамой залива. Дегустация легендарной говядины Кобе — вкус, достойный императоров."
        }
      ]
    },
    {
      part: "ЭПИЛОГ",
      title: "ВКУС ОСАКИ",
      subtitle: "1 ночь в кулинарной столице",
      image: "https://cdn.poehali.dev/files/17f6afe0-75de-4f05-8b83-ea6fe38355c0.jpg",
      days: [
        {
          day: 13,
          description: "Замок Осаки — величественный и неприступный. Дотонбори — безумный карнавал вкусов и ароматов. Прощальный взгляд с небоскреба Абэно Харукас — Япония остается в сердце навсегда."
        }
      ]
    }
  ];

  const uniqueFeatures = [
    {
      icon: "Sparkles",
      title: "Гармония контрастов",
      description: "От неоновых вспышек до горной тишины"
    },
    {
      icon: "Heart",
      title: "Подлинность",
      description: "Ночь в деревне ЮНЕСКО, встречи с традициями"
    },
    {
      icon: "Compass",
      title: "Глубина",
      description: "13 дней настоящего погружения в душу Японии"
    },
    {
      icon: "Star",
      title: "Комфорт",
      description: "Минивэн, тщательно подобранные отели, русскоязычный гид"
    }
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
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/aa2ac25f-09c8-4804-8c8e-a50b5b06597f.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
            JAPAN: ДА! — ПУТЕШЕСТВИЕ,<br/>КОТОРОЕ СТАНЕТ ЛЕГЕНДОЙ
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 drop-shadow-md font-light">
            13 ночей от Токио до Осаки • Для тех, кто готов сказать «да» настоящей Японии
          </p>
          <a href="/">
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white px-8 py-6 text-base backdrop-blur-sm">
              <Icon name="Home" size={20} className="mr-2" />
              На главную
            </Button>
          </a>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {tourParts.map((part, partIndex) => (
            <div key={partIndex} className="mb-16">
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={part.image}
                  alt={part.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-sm md:text-base text-primary font-bold mb-2 tracking-widest">{part.part}</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                    {part.title}
                  </h2>
                  <p className="text-base md:text-lg text-white/90">{part.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                {part.days.map((day, dayIndex) => (
                  <Card key={dayIndex} className="border-accent/20 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-lg font-bold text-white leading-none">{day.day}</span>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {day.description}
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
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Что делает это путешествие уникальным
          </h2>
          <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto">
            Четыре столпа незабываемого опыта
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {uniqueFeatures.map((feature, index) => (
              <Card key={index} className="border-accent/20 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={feature.icon as any} size={28} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{feature.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-2xl p-8 md:p-12 mb-8 border border-primary/20">
              <p className="text-lg text-muted-foreground mb-2">Стоимость легендарного путешествия</p>
              <p className="text-5xl md:text-6xl font-bold text-primary mb-3" style={{ fontFamily: 'Cormorant, serif' }}>от 350 000 ₽</p>
              <p className="text-sm md:text-base text-muted-foreground mb-4">на человека при двухместном размещении</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg shadow-xl">
                  <Icon name="Send" size={20} className="mr-2" />
                  Забронировать путешествие
                </Button>
              </a>
              <a href="/#tours">
                <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-2">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Выбрать даты
                </Button>
              </a>
              <a href="/">
                <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-2">
                  <Icon name="Home" size={20} className="mr-2" />
                  На главную
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-background/70">© 2025 JAPAN : ДА! Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default TourDetails;