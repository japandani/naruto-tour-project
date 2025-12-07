import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const reviews = [
    {
      name: "Анна М.",
      date: "Апрель 2024",
      tour: "От Токио до Осаки",
      avatar: "А",
      rating: 5,
      short: "Это было не просто путешествие — это был опыт, который изменил меня. Даниэль открыл ту Японию, о которой я даже не мечтала.",
      full: "Я всегда мечтала о Японии, но представляла её только через туристические фото. Даниэль показал совершенно другую страну — глубокую, тонкую, невероятно красивую. Мы побывали в местах, куда обычные туристы не попадают: частная чайная церемония с мастером 15-го поколения, ужин в 200-летнем рёкане, медитация с монахами на рассвете. Каждый день был наполнен смыслом и красотой. Это путешествие изменило мой взгляд на жизнь.",
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-anna-1.jpg"]
    },
    {
      name: "Дмитрий С.",
      date: "Май 2024",
      tour: "От Токио до Осаки",
      avatar: "Д",
      rating: 5,
      short: "Продуманность каждой детали поражает. VIP-сервис, уникальные места, невероятная глубина погружения в культуру.",
      full: "Я много путешествую и привык к высокому уровню сервиса, но это путешествие превзошло все ожидания. Даниэль продумал каждую деталь: комфортабельный транспорт, лучшие отели, невероятная гастрономия. Но главное — это доступ к местам и людям, которые обычно закрыты для туристов. Мы посетили мастерскую по изготовлению мечей, встретились с мастером каллиграфии, побывали в закрытых садах. Каждая встреча была настоящим открытием.",
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-dmitry-1.jpg"]
    },
    {
      name: "Елена К.",
      date: "Октябрь 2024",
      tour: "От Токио до Осаки",
      avatar: "Е",
      rating: 5,
      short: "25-летний опыт Даниэля чувствуется в каждом моменте. Это путешествие останется со мной навсегда.",
      full: "Это было моё первое путешествие в Японию, и я невероятно рада, что оно прошло с Даниэлем. Его знание страны, культуры, языка позволило нам прикоснуться к настоящей Японии. Он не просто показывал достопримечательности — он рассказывал истории, объяснял культурные коды, помогал понять логику этой удивительной страны. Киото осенью — это что-то невероятное. А момент встречи рассвета на горе Фудзи я буду помнить всю жизнь.",
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-elena-1.jpg"]
    },
    {
      name: "Игорь и Марина Л.",
      date: "Сентябрь 2024",
      tour: "Индивидуальный тур",
      avatar: "ИМ",
      rating: 5,
      short: "Даниэль создал для нас индивидуальный маршрут, который идеально подошёл под наши интересы.",
      full: "Мы хотели увидеть Японию не с точки зрения классического туриста, а погрузиться в культуру дзен-буддизма и традиционных искусств. Даниэль разработал для нас уникальный маршрут: мы провели три дня в дзен-монастыре, встретились с мастером икебаны, посетили несколько частных садов, участвовали в чайных церемониях. Это было именно то, о чём мы мечтали. Благодарим за внимание к нашим пожеланиям и профессионализм.",
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-igor-marina-1.jpg"]
    },
    {
      name: "Ольга Т.",
      date: "Март 2024",
      tour: "От Токио до Осаки",
      avatar: "О",
      rating: 5,
      short: "Сезон цветения сакуры — магия! Даниэль знает лучшие места, где можно наслаждаться этой красотой без толп туристов.",
      full: "Я специально выбрала тур на сезон цветения сакуры, и это решение оказалось лучшим в моей жизни. Даниэль показал нам секретные места — маленькие храмы, частные сады, набережные — где сакура цветёт в полном великолепии, но нет толп туристов. Мы устраивали ханами (пикники под сакурой), фотографировались в кимоно, гуляли по ночному Киото среди подсвеченных деревьев. Это была сказка. Спасибо за незабываемые впечатления!",
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-olga-1.jpg"]
    },
    {
      name: "Сергей В.",
      date: "Ноябрь 2024",
      tour: "От Токио до Осаки",
      avatar: "С",
      rating: 5,
      short: "Момодзи (осенние клёны) в Киото — это что-то невообразимое. Каждый поворот — новая открытка.",
      full: "Я фотограф и специально выбрал осенний тур, чтобы запечатлеть момодзи. Даниэль не только показал лучшие локации, но и знал идеальное время для съёмок — когда свет падает особенно красиво, когда в храмах мало людей. Мы встречали рассветы в горных храмах, снимали вечерние подсветки садов. Я привёз тысячи фотографий, и каждая — произведение искусства. Это путешествие стало главным проектом моего портфолио.",
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-sergey-1.jpg"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">JAPAN: ДА!</Link>
          <div className="flex gap-6">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">О нас</Link>
            <Link to="/tours" className="text-foreground hover:text-primary transition-colors">Туры</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">Галерея</Link>
            <Link to="/reviews" className="text-primary font-semibold">Отзывы</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text text-transparent">
            Истории путешественников
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl">
            Те, кто уже сказал «ДА!» Японии
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all cursor-pointer" onClick={() => setSelectedReview(index === selectedReview ? null : index)}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                        <div className="text-xs text-muted-foreground italic">{review.tour}</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground italic mb-4">
                    "{selectedReview === index ? review.full : review.short}"
                  </p>

                  {selectedReview === index && review.images && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {review.images.map((img, i) => (
                        <img key={i} src={img} alt={`${review.name} - фото ${i + 1}`} className="rounded-lg w-full h-48 object-cover" />
                      ))}
                    </div>
                  )}

                  <Button variant="ghost" className="mt-4 p-0 h-auto font-normal text-primary hover:text-primary/80">
                    {selectedReview === index ? 'Свернуть' : 'Читать полностью'}
                    <Icon name={selectedReview === index ? "ChevronUp" : "ChevronDown"} className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">250+</div>
              <div className="text-muted-foreground">Довольных путешественников</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">25</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Проведённых туров</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Станьте частью нашей истории
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Следующая история может быть вашей
          </p>
          <Link to="/tours">
            <Button size="lg" className="text-lg px-8 py-6">
              Выбрать тур
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
