import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const articles = [
    {
      id: 1,
      title: 'Первые впечатления от Токио',
      excerpt: 'Неоновые огни Синдзюку, тишина древних храмов и невероятная вежливость местных жителей. Рассказываю, что меня поразило больше всего в первые дни путешествия по столице Японии.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
      date: '15 марта 2024',
      readTime: '5 мин',
      category: 'Города'
    },
    {
      id: 2,
      title: 'Восхождение на Фудзи: путь к вершине',
      excerpt: 'Священная гора высотой 3776 метров — символ Японии. Делюсь опытом восхождения, советами по подготовке и впечатлениями от встречи рассвета на вершине.',
      image: 'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=800&h=600&fit=crop',
      date: '18 марта 2024',
      readTime: '8 мин',
      category: 'Природа'
    },
    {
      id: 3,
      title: 'Киото: как за день увидеть 10 храмов',
      excerpt: 'Золотой павильон Кинкаку-дзи, бамбуковый лес Арасияма, район гейш Гион — составил идеальный маршрут по древней столице Японии с картой и временем на каждую локацию.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
      date: '21 марта 2024',
      readTime: '10 мин',
      category: 'Маршруты'
    },
    {
      id: 4,
      title: 'Чайная церемония: больше чем чай',
      excerpt: 'Участвовал в традиционной японской чайной церемонии в 300-летнем чайном домике. Это медитация, философия и искусство в одном ритуале. Объясняю правила этикета и значение каждого жеста.',
      image: 'https://images.unsplash.com/photo-1545340792-022a6f4e2e5c?w=800&h=600&fit=crop',
      date: '23 марта 2024',
      readTime: '6 мин',
      category: 'Культура'
    },
    {
      id: 5,
      title: 'Ханами: сезон цветения сакуры',
      excerpt: 'Застал главное событие весны в Японии — ханами. Розовые облака цветущих деревьев в парках Осаки, пикники под сакурой и толпы туристов. Когда лучше приехать и где искать самые красивые места.',
      image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=600&fit=crop',
      date: '25 марта 2024',
      readTime: '7 мин',
      category: 'Сезоны'
    },
    {
      id: 6,
      title: 'Гид по японской кухне: от рамена до суши',
      excerpt: 'Попробовал всё: от уличной еды за 500 йен до ресторанов с мишленовскими звёздами. Рассказываю про рамен-бары, суши-конвейеры, якиторию и удивительные десерты. С ценами и адресами.',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
      date: '27 марта 2024',
      readTime: '12 мин',
      category: 'Еда'
    }
  ];

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
              className="group cursor-pointer border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Читать статью</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12 rounded-2xl">
            <Icon name="PenTool" size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Хотите узнать больше?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Подпишитесь на рассылку, чтобы получать новые статьи о путешествиях по Японии
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-lg">
              Подписаться на блог
            </Button>
          </div>
        </div>
      </div>

      <footer className="bg-foreground text-background py-12 md:py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f6e8ec5d-14f7-497a-bf69-2d99142f26ed.jpg" 
                  alt="Japan логотип"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary"
                />
                <div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Caveat, cursive' }}>JAPAN : ДА!</h3>
                  <p className="text-xs text-background/70 tracking-widest uppercase">Экскурсионное бюро</p>
                </div>
              </div>
              <p className="text-background/80 max-w-md">
                Открываем Японию через аутентичные путешествия, глубокое погружение в культуру и незабываемые впечатления
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Навигация</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="/#home" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="/#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="/tour" className="hover:text-primary transition-colors">Описание Пути</a></li>
                <li><a href="/gallery" className="hover:text-primary transition-colors">Галерея</a></li>
                <li><a href="/blog" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@japan-da.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>&copy; 2024 JAPAN : ДА! Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
