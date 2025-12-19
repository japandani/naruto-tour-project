import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

function JapanSoul() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-center items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🇯🇵</span>
            <span className="font-bold text-orange-600">JAPAN: ДА!</span>
          </Link>
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
                <span>9 ночей + транзит</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="MapPin" size={20} />
                <span>15-25 апреля 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Icon name="Users" size={20} />
                <span>До 30 участников</span>
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
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                    <Icon name="Plane" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Прилёт в Нариту</h3>
                      <span className="text-orange-600 font-semibold">15 апреля</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Участники прилетают разными рейсами в международный аэропорт Нарита. 
                      Встреча в аэропорту и трансфер в отель для ночлега. 
                      Это транзитная ночь перед началом основной программы.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                    <Icon name="Torii" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Токио: День первый</h3>
                      <span className="text-orange-600 font-semibold">16 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Sunrise" size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Утро: Знакомство с синто</p>
                          <p className="text-gray-700">Храм Мэйдзи-дзингу — главное синтоистское святилище Токио, посвящённое императору Мэйдзи. Погружение в атмосферу священного леса и понимание основ синтоизма.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Building2" size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">День: Панорама мегаполиса</p>
                          <p className="text-gray-700">Подъём на здание столичной мэрии Токио (Tokyo Metropolitan Government Building) — бесплатная смотровая площадка с потрясающим видом на город и, при удаче, на Фудзи.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Sparkles" size={20} className="text-pink-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Харадзюку: В гущу событий</p>
                          <p className="text-gray-700">Погружение в молодёжную культуру Японии — улица Такэсита, креативная мода, кавайные магазины и уличная еда. Контраст традиций и современности.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Waves" size={20} className="text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">После обеда: Одайба</p>
                          <p className="text-gray-700">Футуристический остров в Токийском заливе, Статуя Свободы (японская копия), Rainbow Bridge и потрясающие виды на залив.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Moon" size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Вечер: Сибуя и легенда Хатико</p>
                          <p className="text-gray-700">Метро-экскурсия в Сибую — знаменитый скрэмбл-перекрёсток (самый загруженный в мире) и памятник верному псу Хатико, символу преданности.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                    <Icon name="UtensilsCrossed" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Токио: День второй — Гастрономия и культура</h3>
                      <span className="text-red-600 font-semibold">17 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Fish" size={20} className="text-blue-700 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Утренний гастротур: Рынок Цукидзи</p>
                          <p className="text-gray-700">Фудстрит внешнего рынка Цукидзи — гастрономическое паломничество. Свежайшие морепродукты, уличная еда, атмосфера токийского утра и японская кухня в её лучшем проявлении.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Trees" size={20} className="text-pink-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Парк Уэно: Искусство и сакура</p>
                          <p className="text-gray-700">Скульптуры Родена и закат сезона цветения сакуры. Созерцание красоты мимолётности (моно-но аварэ) — ключевая концепция японской эстетики.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Gem" size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Гинза: Элегантность мегаполиса</p>
                          <p className="text-gray-700">Прогулка по самому престижному району Токио — витрины мировых брендов, традиционные магазины и архитектура роскоши.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Castle" size={20} className="text-green-700 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Императорский дворец</p>
                          <p className="text-gray-700">Взгляд на резиденцию императора со стороны моста Нидзюбаси. Символ непрерывности японской истории и традиций длиной в 2600 лет.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Sparkles" size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Асакуса: Тишина в популярном месте</p>
                          <p className="text-gray-700">Древний район Токио и храм Сэнсо-дзи в вечерние часы, когда туристы уходят. Принятие тишины в самом популярном старинном районе — практика присутствия.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Wine" size={20} className="text-rose-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Вечер (по желанию): Роппонги</p>
                          <p className="text-gray-700">Ресторанчики района Роппонги и Tokyo Tower (японская «Эйфелева башня») — ночная панорама города с высоты птичьего полёта.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <Icon name="Waves" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Камакура и стихия океана</h3>
                      <span className="text-blue-600 font-semibold">18 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Sun" size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Прощание с Токио</p>
                          <p className="text-gray-700">Утренний выезд из столицы. Завершение токийской части путешествия и движение к новым открытиям.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Landmark" size={20} className="text-amber-700 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Дайбуцу — Великий Будда Камакуры</p>
                          <p className="text-gray-700">Бронзовая статуя Будды Амитабхи высотой 13 метров (1252 год). Символ спокойствия и просветления под открытым небом.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Church" size={20} className="text-pink-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Храм Хасэдэра</p>
                          <p className="text-gray-700">Древний буддийский храм с 11-метровой статуей богини Каннон. Потрясающий вид на океан и тысячи маленьких статуй дзидзо (хранителей детей).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Waves" size={20} className="text-cyan-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Эносима: Практики у океана</p>
                          <p className="text-gray-700">Пляж на Тихом океане и остров Эносима. Духовные практики у воды — стихия и спасение. Медитация на звук волн и созерцание бесконечности.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Mountain" size={20} className="text-indigo-700 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Переезд к Фудзи</p>
                          <p className="text-gray-700">Путешествие к священной горе Фудзи. Размещение в отеле на две ночи у подножия главного символа Японии.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Flame" size={20} className="text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Вечер: Якинику (всё включено)</p>
                          <p className="text-gray-700">Ужин в ресторане — японское барбекю якинику. Мраморная говядина, свежие овощи, соусы и общение у огня. Полное погружение в гастрономическую культуру.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    <Icon name="Flame" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Хаконе: Искусство и дрожь земли</h3>
                      <span className="text-purple-600 font-semibold">19 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Waves" size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Озеро Аси и тории на воде</p>
                          <p className="text-gray-700">Легендарное озеро Аси (Асиноко) с видом на Фудзи. Красные ворота-тории святилища Хаконе-дзиндзя, стоящие прямо в воде — один из самых узнаваемых видов Японии.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Flame" size={20} className="text-orange-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Овакудани: Долина гейзеров</p>
                          <p className="text-gray-700">Активная вулканическая долина с серными источниками и паром, вырывающимся из земли. Дрожь земли и сила стихии. Легендарные «чёрные яйца», сваренные в горячих источниках.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Palette" size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Музей под открытым небом в Хаконе</p>
                          <p className="text-gray-700">Уникальный музей современного искусства среди природы. Скульптуры мировых мастеров в гармонии с горным ландшафтом. Искусство и созерцание.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Droplets" size={20} className="text-cyan-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Вечер: Онсэн в отеле</p>
                          <p className="text-gray-700">Знакомство с ритуалом омывания души и тела в японских горячих источниках (онсэн). Глубокое расслабление после дня, проведённого среди вулканических стихий.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center text-white">
                    <Icon name="Mountain" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Прощание с Фудзи и путь в Такаяму</h3>
                      <span className="text-rose-600 font-semibold">20 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Sunrise" size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Рассвет: Пагода Чурейто</p>
                          <p className="text-gray-700">Ранний подъём, пока все спят. Восхождение на пагоду Чурейто с надеждой проснуться вместе с Фудзиямой. Классический вид — красная пагода на фоне священной горы.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Waves" size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Пять озёр Фудзи</p>
                          <p className="text-gray-700">Экскурсия по озёрной системе у подножия Фудзи. Зеркальные отражения священной горы в водах озёр — медитативное созерцание природной гармонии.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Flower2" size={20} className="text-pink-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Парк сибазакура</p>
                          <p className="text-gray-700">Парк цветения флоксов (сибазакура) — розовый ковёр из 800 тысяч цветов на фоне Фудзи. Невероятное зрелище весенней Японии.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Mountain" size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">После обеда: Дорога в Японские Альпы</p>
                          <p className="text-gray-700">Переезд в горный город Такаяму — сердце Японских Альп. Живописный путь через горные перевалы и традиционные деревни.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Waves" size={20} className="text-violet-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Вечер: Онсен и традиционный рёкан</p>
                          <p className="text-gray-700">Размещение в традиционной гостинице рёкан с горячими источниками онсен. Погружение в целебные воды с видом на горы — очищение тела и духа через стихию воды.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white">
                    <Icon name="Mountain" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Японские Альпы: От Такаямы до Каназавы</h3>
                      <span className="text-teal-600 font-semibold">21 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="ShoppingBasket" size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Утро: Утренний рынок Такаямы</p>
                          <p className="text-gray-700">Традиционный рынок Асаичи — местные фермеры, свежие овощи, фрукты и уличная еда. Атмосфера настоящей японской провинции и гостеприимство горожан.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Wine" size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Санмачи-дори: Старый квартал</p>
                          <p className="text-gray-700">Прогулка по историческому кварталу Санмачи — деревянные дома эпохи Эдо, саке-пивоварни, мисо-лавки и магазины местных ремёсел. Дегустация сакэ и покупка сувениров.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Home" size={20} className="text-green-700 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Сиракава-го: Деревня гассё-дзукури</p>
                          <p className="text-gray-700">Объект всемирного наследия ЮНЕСКО — деревня с уникальными соломенными домами «молящихся рук». Путешествие в прошлое Японии, горные пейзажи и традиционная архитектура.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Каназава: Обзорная экскурсия</p>
                          <p className="text-gray-700">Прибытие в Каназаву — город искусств и традиций. Сад Кэнроку-эн (один из трёх великих садов Японии), замок Каназавы и район гейш Хигаси Тяя.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Moon" size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Вечер: Квартал самураев Нагамати</p>
                          <p className="text-gray-700">Вечерняя прогулка по старинному кварталу самураев с глиняными стенами и узкими каналами. Атмосфера феодальной Японии под вечерними фонарями. Ночь в отеле Каназавы.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white">
                    <Icon name="Sparkles" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Каназава — Киото: Путь в Святую столицу</h3>
                      <span className="text-amber-600 font-semibold">22 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Flower2" size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Утро: Сад Кэнроку-эн</p>
                          <p className="text-gray-700">Один из трёх великих садов Японии — шедевр ландшафтного искусства. Пруды, мосты, фонари, цветущие азалии и ирисы. Воплощение идеальной красоты природы.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Mountain" size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">По дороге: Скалы Тодзинбо</p>
                          <p className="text-gray-700">Остановка у драматических базальтовых скал на берегу Японского моря. Вертикальные столбы застывшей лавы высотой до 25 метров — геологическое чудо и мощь природы.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Sparkles" size={20} className="text-pink-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Вечер: Район Гион</p>
                          <p className="text-gray-700">Прибытие в Киото. Прогулка по знаменитому кварталу гейш Гион — деревянные дома тяя, фонари, узкие улочки. С удачей можете встретить настоящую гейшу или майко.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Building2" size={20} className="text-slate-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">ЖД вокзал Киото: Футуристические врата</p>
                          <p className="text-gray-700">Архитектурное чудо — один из самых впечатляющих вокзалов мира. Стекло, металл, эскалаторы в небо. Контраст древности и будущего в сердце Святой столицы.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Moon" size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Ночь в Киото</p>
                          <p className="text-gray-700">Размещение в отеле Киото. Ночлег в древней столице, где каждый камень хранит историю.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                    <Icon name="TreePine" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Нара и Коясан: Уединение и святыня</h3>
                      <span className="text-emerald-600 font-semibold">23 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Squirrel" size={20} className="text-amber-700 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Нара: Олени в национальном парке</p>
                          <p className="text-gray-700">Более 1200 священных оленей свободно гуляют по парку Нары — посланники богов в синтоизме. Уединение с природой, кормление оленей специальными крекерами (сэмбэй).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Church" size={20} className="text-orange-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Храмы Нары</p>
                          <p className="text-gray-700">Тодай-дзи с Великим Буддой (15 метров), Касуга-тайся — синтоистское святилище с тысячами каменных фонарей. Погружение в древнюю столицу VIII века.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Mountain" size={20} className="text-purple-700 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">После обеда: Гора Коясан</p>
                          <p className="text-gray-700">Подъём на священную гору Коясан — центр буддизма сингон и одно из самых святых мест Японии. 117 храмов среди гор и облаков.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Moon" size={20} className="text-slate-700 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Кладбище Окуноин: Святыня святых</p>
                          <p className="text-gray-700">Одно из самых священных кладбищ Японии с 200 000 могил среди величественных криптомерий возрастом до 600 лет. Мистическая атмосфера, покрытые мхом надгробия, разговоры по душам в тишине леса.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="ArrowLeft" size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">К вечеру возвращение в Осаку</p>
                          <p className="text-gray-700">После духовного дня среди святынь возвращаемся в Осаку на ночлег.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white">
                    <Icon name="Flower2" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Осака: Практики, ханами и прощальный вечер</h3>
                      <span className="text-pink-600 font-semibold">24 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Sunrise" size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Утренние практики и ханами</p>
                          <p className="text-gray-700">Парк замка Осака — утренняя медитация и духовные практики среди цветущей сакуры. Ханами (любование цветами) как завершающая церемония. Розовые лепестки падают на татами жизни.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Building2" size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Умеда Скай Билдинг</p>
                          <p className="text-gray-700">Подъём на "Плавающую обсерваторию" — футуристический небоскрёб высотой 173 метра. Панорама 360° на всю Осаку. Взгляд на город с высоты птичьего полёта — метафора пути, который мы прошли.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Waves" size={20} className="text-cyan-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Прогулка по каналам Дотонбори</p>
                          <p className="text-gray-700">Знаменитый район с неоновыми вывесками, мостами над каналами и атмосферой вечной молодости. Гигантский краб, бегущий человек Гурико, сотни огней — сердце ночной Осаки.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="ShoppingBag" size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Шопинг в Дотонбори и Синсайбаси</p>
                          <p className="text-gray-700">Последняя возможность купить сувениры, косметику, традиционные товары. Улица Синсайбаси-судзи — торговая артерия длиной 600 метров под крышей.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Wine" size={20} className="text-rose-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Прощальный гала-ужин на высоте</p>
                          <p className="text-gray-700">Ресторан на верхнем этаже небоскрёба Осаки. Панорамный вид на ночной город, японская кухня высокого класса, тосты за путешествие и найденных друзей. Кульминация всего тура — благодарность за пройденный путь.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 via-rose-100 to-purple-100 rounded-xl shadow-lg p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center text-white">
                    <Icon name="Heart" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">Прощание с Японией</h3>
                      <span className="text-rose-600 font-semibold">25 апреля</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="Plane" size={20} className="text-indigo-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">День отъезда</p>
                          <p className="text-gray-700">Трансфер в аэропорт Кансай (Осака). Прощание с Японией после 9 дней духовного путешествия.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Sparkles" size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-gray-800">Обещание вернуться</p>
                          <p className="text-gray-700 italic">Вы увезёте с собой не только фотографии, но и частичку японской души. И, как говорят в Японии: «また会いましょう» (мата аимасё) — до новой встречи.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    <span>Проживание в отелях 4* с завтраками</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Прощальный гала-ужин на крыше небоскрёба Осаки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Входные билеты во все храмы, музеи и достопримечательности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Поезд Синкансен по маршруту Одавара → Осака</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Все духовные практики с опытным практиком</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Русскоговорящий гид-сопровождающий на весь маршрут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>eSIM-карта для каждого участника с интернетом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Комфортабельный автобус для групповых переездов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Методические материалы для продолжения практик дома</span>
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
                    <div className="bg-orange-50 rounded-lg p-6">
                      <Icon name="Info" size={32} className="text-orange-600 mx-auto mb-3" />
                      <p className="text-lg font-semibold text-gray-800 mb-2">Стоимость уточняется</p>
                      <p className="text-sm text-gray-600">Свяжитесь с нами для получения актуальной информации о цене тура</p>
                    </div>
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