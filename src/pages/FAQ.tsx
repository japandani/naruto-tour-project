import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqData = [
    {
      category: "Общая информация",
      questions: [
        {
          q: "Что входит в стоимость тура?",
          a: "В стоимость включены: проживание во всех отелях, транспорт по маршруту (включая JR Pass), завтраки, экскурсии с гидом, входные билеты в музеи и храмы по программе, трансферы аэропорт-отель."
        },
        {
          q: "Что НЕ входит в стоимость?",
          a: "Не включены: авиабилеты Москва-Токио-Москва, обеды и ужины (кроме указанных в программе), личные расходы, медицинская страховка, виза (если требуется)."
        },
        {
          q: "Какой размер группы?",
          a: "Группы небольшие — от 6 до 10 человек. Это позволяет обеспечить комфорт, индивидуальный подход и возможность посетить места, недоступные большим группам."
        },
        {
          q: "Нужна ли виза в Японию?",
          a: "Для граждан России с 2023 года действует безвизовый режим на срок до 90 дней. Вам понадобится только загранпаспорт со сроком действия минимум 6 месяцев."
        }
      ]
    },
    {
      category: "Бронирование и оплата",
      questions: [
        {
          q: "Как забронировать место в группе?",
          a: "Оставьте заявку через форму на сайте или свяжитесь с нами в Telegram. После подтверждения места вносится предоплата 30%, остаток — за 30 дней до вылета."
        },
        {
          q: "Можно ли вернуть деньги при отмене?",
          a: "При отмене за 60+ дней до старта возвращается 100% предоплаты. За 30-60 дней — 50%. Менее чем за 30 дней — возврат не производится, но можно перенести на другую дату."
        },
        {
          q: "Какие способы оплаты доступны?",
          a: "Принимаем переводы на карту, СБП, банковский перевод по реквизитам. После оплаты высылаем договор и чек."
        }
      ]
    },
    {
      category: "Логистика и транспорт",
      questions: [
        {
          q: "Нужно ли самостоятельно покупать авиабилеты?",
          a: "Да, авиабилеты каждый приобретает самостоятельно. Мы подскажем оптимальные рейсы и поможем с выбором. Важно прилететь к началу тура и вылететь не раньше окончания."
        },
        {
          q: "Что такое JR Pass и зачем он нужен?",
          a: "JR Pass — это проездной на все поезда компании JR, включая скоростные синкансены. Он включён в стоимость тура и позволяет свободно перемещаться по стране без доплат."
        },
        {
          q: "Сколько раз придётся менять отели?",
          a: "Мы останавливаемся в 5 городах: Токио (3 ночи), Хаконе (1 ночь), Мацумото (1 ночь), Киото (5 ночей), Осака (3 ночи). Все переезды продуманы так, чтобы минимизировать усталость."
        }
      ]
    },
    {
      category: "Проживание и питание",
      questions: [
        {
          q: "Какие отели используются?",
          a: "Мы размещаем в 3-4* отелях с удобным расположением (близко к станциям и достопримечательностям). В Хаконе — традиционный рёкан с татами и онсэном."
        },
        {
          q: "Можно ли выбрать одноместное размещение?",
          a: "Да, за доплату. Стоимость зависит от города и сезона — уточняйте при бронировании."
        },
        {
          q: "Где и как питаться?",
          a: "Завтраки входят в стоимость. Обеды и ужины — на ваш выбор, гид подскажет лучшие места. Средний чек на еду: 1500-3000₽ в день на человека."
        }
      ]
    },
    {
      category: "Физическая подготовка",
      questions: [
        {
          q: "Нужна ли специальная физическая подготовка?",
          a: "Тур рассчитан на средний уровень активности. Ежедневно проходим 10-15 км пешком. Важно быть готовым к длительным прогулкам и подъёмам по лестницам (особенно в храмах)."
        },
        {
          q: "Есть ли возрастные ограничения?",
          a: "Формально нет, но маршрут насыщенный и требует выносливости. В группах обычно люди от 25 до 60 лет."
        }
      ]
    },
    {
      category: "Сезонные особенности",
      questions: [
        {
          q: "Когда лучше всего ехать в Японию?",
          a: "Весна (конец марта — апрель) — цветение сакуры, самый популярный сезон. Осень (октябрь — ноябрь) — момодзи (красные клёны), комфортная погода. Оба периода идеальны для путешествия."
        },
        {
          q: "Что такое Ханами и Момодзи?",
          a: "Ханами — традиционное любование цветущей сакурой весной. Момодзи — осеннее любование красными кленовыми листьями. Оба явления длятся 1-2 недели и считаются главными природными событиями года."
        },
        {
          q: "Какая погода в марте-апреле?",
          a: "Март: +10...+15°C, в начале месяца прохладно, к концу теплеет. Апрель: +15...+20°C, комфортная весенняя погода. Возьмите лёгкую куртку и зонт — весенние дожди случаются."
        },
        {
          q: "Какая погода в октябре-ноябре?",
          a: "Октябрь: +18...+22°C, тёплые солнечные дни. Ноябрь: +12...+17°C, становится прохладнее, особенно к вечеру. Лёгкая осенняя одежда и ветровка будут в самый раз."
        }
      ]
    },
    {
      category: "Безопасность и здоровье",
      questions: [
        {
          q: "Нужна ли медицинская страховка?",
          a: "Настоятельно рекомендуем оформить страховку на весь период поездки. Медицина в Японии дорогая, даже простой приём врача может обойтись в 10-20 тысяч йен."
        },
        {
          q: "Безопасна ли Япония для туристов?",
          a: "Япония — одна из самых безопасных стран мира. Низкий уровень преступности, чистые улицы, вежливые люди. Можно спокойно гулять в любое время суток."
        },
        {
          q: "Что делать, если не говорю по-английски?",
          a: "Гид сопровождает группу на всём маршруте и решает все языковые вопросы. В крупных городах многие вывески дублируются на английском, работает Google Translate."
        }
      ]
    },
    {
      category: "Культурные особенности",
      questions: [
        {
          q: "Какие правила этикета важно знать?",
          a: "Основные: снимайте обувь при входе в дома и храмы, не ешьте на ходу, говорите тихо в общественном транспорте, не оставляйте чаевых (это может обидеть). Гид подробно расскажет о нюансах."
        },
        {
          q: "Можно ли фотографировать в храмах?",
          a: "В большинстве храмов фотосъёмка разрешена, но без вспышки и штатива. Внутри некоторых зданий съёмка запрещена — смотрите на знаки или спросите гида."
        },
        {
          q: "Есть ли в программе свободное время?",
          a: "Да, обычно после обеда или вечером у вас 2-4 часа свободного времени на личные прогулки, шоппинг или отдых в отеле."
        }
      ]
    },
    {
      category: "Связь и интернет",
      questions: [
        {
          q: "Как оставаться на связи?",
          a: "Рекомендуем взять в аренду pocket Wi-Fi (карманный роутер) — около 500₽/день. Альтернатива — японская SIM-карта с интернетом. Можно заказать заранее онлайн с доставкой в аэропорт."
        },
        {
          q: "Работает ли российский роуминг?",
          a: "У большинства операторов роуминг в Японии доступен, но дорогой. Лучше использовать местный интернет и мессенджеры."
        }
      ]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Plane" size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg">Japan Dreams</span>
            </Link>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>

            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <Link to="/tour" className="hover:text-primary transition-colors">Программа тура</Link>
              <Link to="/gallery" className="hover:text-primary transition-colors">Галерея</Link>
              <Link to="/faq" className="text-primary font-semibold">FAQ</Link>
              <a href="/#contact">
                <Button className="bg-primary hover:bg-primary/90">
                  Забронировать
                </Button>
              </a>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-border pt-4">
              <Link to="/" className="block hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Главная</Link>
              <Link to="/tour" className="block hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Программа тура</Link>
              <Link to="/gallery" className="block hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Галерея</Link>
              <Link to="/faq" className="block text-primary font-semibold" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <a href="/#contact">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Забронировать
                </Button>
              </a>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Часто задаваемые вопросы
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о турах в Японию
            </p>
          </div>

          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="HelpCircle" size={24} className="text-primary" />
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((item, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openQuestion === globalIndex;
                    
                    return (
                      <Card 
                        key={questionIndex} 
                        className="border-accent/20 hover:border-primary/30 transition-colors cursor-pointer"
                        onClick={() => toggleQuestion(globalIndex)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-semibold text-base md:text-lg flex-1">
                              {item.q}
                            </h3>
                            <Icon 
                              name={isOpen ? "ChevronUp" : "ChevronDown"} 
                              size={20} 
                              className="text-primary flex-shrink-0 mt-1"
                            />
                          </div>
                          {isOpen && (
                            <p className="mt-3 text-muted-foreground leading-relaxed whitespace-pre-line">
                              {item.a}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <Card className="mt-12 border-primary/30 bg-primary/5">
            <CardContent className="p-6 text-center">
              <Icon name="MessageCircle" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Не нашли ответ?</h3>
              <p className="text-muted-foreground mb-4">
                Свяжитесь с нами, и мы ответим на все ваши вопросы
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://t.me/japandreams_tour" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Написать в Telegram
                  </Button>
                </a>
                <a href="/#contact">
                  <Button variant="outline">
                    Оставить заявку
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Japan Dreams. Путешествия, которые меняют</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
