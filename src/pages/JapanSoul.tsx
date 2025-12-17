import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

function JapanSoul() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🇯🇵</span>
            <span className="font-bold text-orange-600">JAPAN: ДА!</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>

          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-full left-0 right-0 md:top-0 bg-white md:bg-transparent flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0 shadow-lg md:shadow-none`}>
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition">Главная</Link>
            <Link to="/tours" className="text-gray-700 hover:text-orange-600 transition">Туры</Link>
            <Link to="/blog" className="text-gray-700 hover:text-orange-600 transition">Блог</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 transition">О нас</Link>
            <Link to="/contact" className="text-orange-600 font-semibold hover:text-orange-700 transition">Связаться</Link>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/9daba90c-b350-494f-a153-9052da64d46f.jpg')`,
              filter: 'brightness(0.7)'
            }}
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Духовные Практики в Японии
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow">
              Путешествие к внутренней гармонии через древние традиции
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="Calendar" size={20} />
                <span>10 дней / 9 ночей</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="Users" size={20} />
                <span>До 8 участников</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="Heart" size={20} />
                <span>Для души и разума</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-20 relative z-20">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Icon name="Sparkles" size={32} className="text-orange-600" />
                О туре
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Этот тур создан для тех, кто ищет глубинное понимание японской духовности и стремится к внутренней трансформации. Мы откроем для вас мир древних практик, которые веками помогали людям находить баланс, покой и смысл.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Вы не просто увидите храмы — вы прочувствуете их энергию. Не просто узнаете о медитации — вы испытаете её силу. Это путешествие изменит ваш взгляд на себя и мир.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-100 to-amber-100 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Программа тура
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  day: "День 1-2",
                  title: "Киото: Врата духовности",
                  activities: [
                    "Прибытие в Киото — древнюю столицу",
                    "Посещение храма Рёан-дзи и медитация у каменного сада",
                    "Знакомство с дзен-философией",
                    "Вечерняя прогулка по философской тропе"
                  ],
                  icon: "Mountain"
                },
                {
                  day: "День 3-4",
                  title: "Коя-сан: Жизнь в монастыре",
                  activities: [
                    "Переезд на священную гору Коя-сан",
                    "Проживание в храмовом комплексе (shukubo)",
                    "Утренняя молитва с монахами (5:30 утра)",
                    "Вегетарианская монастырская кухня (shojin ryori)",
                    "Медитация дзадзэн под руководством настоятеля",
                    "Ночная прогулка по кладбищу Окуноин при свете фонарей"
                  ],
                  icon: "Church"
                },
                {
                  day: "День 5-6",
                  title: "Исэ: Святилище богини солнца",
                  activities: [
                    "Паломничество в главное святилище Японии — Исэ-дзингу",
                    "Ритуал очищения мисоги у священной реки",
                    "Изучение синтоизма и понимание ками (духов природы)",
                    "Прогулка по священному лесу возрастом 2000 лет"
                  ],
                  icon: "TreePine"
                },
                {
                  day: "День 7-8",
                  title: "Нара: Практики осознанности",
                  activities: [
                    "Храм Тодай-дзи и Великий Будда",
                    "Практика ходячей медитации (кинхин) в парке с оленями",
                    "Чайная церемония (садо) с мастером",
                    "Каллиграфия (сёдо) как медитативная практика",
                    "Вечернее пение сутр"
                  ],
                  icon: "Brush"
                },
                {
                  day: "День 9-10",
                  title: "Киото: Интеграция опыта",
                  activities: [
                    "Утренняя медитация в храме Нандзэн-дзи",
                    "Создание личного алтаря (буцудан)",
                    "Церемония прощания и обмен впечатлениями",
                    "Выдача сертификата участника",
                    "Свободное время для личной практики"
                  ],
                  icon: "BookOpen"
                }
              ].map((day, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                      <Icon name={day.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-2xl font-bold text-gray-800">{day.title}</h3>
                        <span className="text-orange-600 font-semibold">{day.day}</span>
                      </div>
                      <ul className="space-y-2">
                        {day.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Что входит в тур
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Включено</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Проживание в традиционных рёканах и храмах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Все завтраки и ужины (включая монастырскую кухню)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Сопровождение русскоговорящего гида-практика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Все мастер-классы и духовные практики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Входные билеты в храмы и святилища</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Трансферы между городами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Методические материалы для продолжения практик дома</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Сертификат участника программы</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="XCircle" size={32} className="text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Не включено</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Международный авиаперелёт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Медицинская страховка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Обеды</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Личные расходы</span>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Стоимость тура</p>
                    <p className="text-4xl font-bold text-orange-600 mb-4">€2,850</p>
                    <p className="text-sm text-gray-500">На человека при двухместном размещении</p>
                    <p className="text-sm text-gray-500 mt-2">Доплата за одноместное: €450</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-amber-100 to-orange-100 py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Для кого этот тур
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "Heart",
                  text: "Для тех, кто ищет внутренний покой и гармонию"
                },
                {
                  icon: "Sparkles",
                  text: "Для практикующих йогу и медитацию"
                },
                {
                  icon: "Brain",
                  text: "Для интересующихся восточной философией"
                },
                {
                  icon: "Users",
                  text: "Для желающих погрузиться в аутентичную культуру"
                },
                {
                  icon: "Wind",
                  text: "Для ищущих перезагрузку и новые смыслы"
                },
                {
                  icon: "BookOpen",
                  text: "Для тех, кто готов к глубокому самопознанию"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow">
                  <Icon name={item.icon} size={32} className="text-orange-600 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section 
          className="py-24 relative"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/0a20d0ac-1660-4c04-ab76-e8a48d963e5a.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-center">
              <Icon name="Sparkles" size={48} className="text-orange-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Готовы к духовному путешествию?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Количество мест ограничено — всего 8 участников на группу. 
                Свяжитесь с нами для уточнения дат и бронирования.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all hover:scale-105 shadow-lg"
                >
                  <Icon name="Send" size={24} />
                  Забронировать место
                </Link>
                <a 
                  href="https://t.me/japanda_travel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105 shadow-lg"
                >
                  <Icon name="MessageCircle" size={24} />
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Важная информация
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Icon name="AlertCircle" size={24} className="text-orange-600" />
                  Физическая подготовка
                </h3>
                <p className="text-gray-700">
                  Тур включает длительные прогулки и медитации в положении сидя. 
                  Особой физической подготовки не требуется, но рекомендуется базовая выносливость.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Icon name="Clock" size={24} className="text-orange-600" />
                  Распорядок дня
                </h3>
                <p className="text-gray-700">
                  В монастырях подъём ранний (5:30), что является частью практики. 
                  Будьте готовы к изменению привычного режима.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Icon name="Leaf" size={24} className="text-orange-600" />
                  Питание
                </h3>
                <p className="text-gray-700">
                  В храмах подаётся вегетарианская пища (сёдзин рёри). 
                  Сообщите о пищевых ограничениях заранее.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Icon name="Shirt" size={24} className="text-orange-600" />
                  Дресс-код
                </h3>
                <p className="text-gray-700">
                  Скромная одежда, закрывающая плечи и колени. 
                  Удобная обувь, которую легко снимать. Носки без дырок обязательны.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Icon name="Camera" size={24} className="text-orange-600" />
                  Фотографирование
                </h3>
                <p className="text-gray-700">
                  В некоторых храмах съёмка запрещена. 
                  Во время практик просим воздержаться от использования гаджетов.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">🇯🇵</span>
                <span className="font-bold text-xl">JAPAN: ДА!</span>
              </div>
              <p className="text-gray-300 text-sm">
                Аутентичные путешествия по Японии с душой и вниманием к деталям.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-orange-400 transition">Главная</Link></li>
                <li><Link to="/tours" className="hover:text-orange-400 transition">Туры</Link></li>
                <li><Link to="/blog" className="hover:text-orange-400 transition">Блог</Link></li>
                <li><Link to="/about" className="hover:text-orange-400 transition">О нас</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:hello@japanda.ru" className="hover:text-orange-400 transition">hello@japanda.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <a href="https://t.me/japanda_travel" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">@japanda_travel</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="https://t.me/japanda_travel" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 JAPAN: ДА! Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default JapanSoul;
