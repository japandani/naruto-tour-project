import { Card, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from "react";

const DecorativeBackground = () => (
  <>
    <div className="absolute top-0 left-0 right-0 h-24 md:h-32 opacity-20 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-2 md:left-10 text-4xl md:text-7xl animate-fade-in">🌸</div>
      <div className="absolute top-2 left-16 md:left-28 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.2s' }}>🍁</div>
      <div className="absolute top-1 left-28 md:left-48 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.4s' }}>🌸</div>
      <div className="absolute top-0 right-2 md:right-12 text-5xl md:text-8xl animate-fade-in" style={{ animationDelay: '0.1s' }}>🍂</div>
      <div className="absolute top-3 right-16 md:right-32 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.3s' }}>🌸</div>
      <div className="absolute top-1 right-28 md:right-52 text-4xl md:text-7xl animate-fade-in" style={{ animationDelay: '0.5s' }}>🍁</div>
      <div className="absolute top-4 left-1/3 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.6s' }}>🍂</div>
      <div className="absolute top-0 right-1/3 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.7s' }}>🌸</div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 opacity-20 pointer-events-none overflow-hidden">
      <div className="absolute bottom-0 left-0 text-5xl md:text-8xl animate-fade-in">🌸</div>
      <div className="absolute bottom-1 left-10 md:left-16 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.2s' }}>🌸</div>
      <div className="absolute bottom-3 left-20 md:left-32 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.4s' }}>🌸</div>
      <div className="absolute bottom-0 right-0 text-5xl md:text-8xl animate-fade-in" style={{ animationDelay: '0.1s' }}>🍂</div>
      <div className="absolute bottom-2 right-10 md:right-16 text-4xl md:text-7xl animate-fade-in" style={{ animationDelay: '0.3s' }}>🍁</div>
      <div className="absolute bottom-4 right-20 md:right-36 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.5s' }}>🍂</div>
      <div className="absolute bottom-2 left-1/3 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.6s' }}>🌸</div>
      <div className="absolute bottom-0 right-1/3 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.7s' }}>🍁</div>
    </div>
  </>
);

export const ToursSection = () => {
  const bannerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    bannerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="about" className="relative py-12 md:py-20 bg-background overflow-hidden">
        <DecorativeBackground />
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 text-center text-foreground">
            Что стоит за нашими турами?
          </h2>
          
          <div className="space-y-6 md:space-y-10 text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p className="text-center">
              <strong className="text-primary">Авторский взгляд.</strong> Каждый маршрут — это не набор мест, а структурированная история Японии: от древности до наших дней.
            </p>
            <p className="text-center">
              <strong className="text-primary">Философия пути.</strong> Мы не просто везём вас по списку достопримечательностей. Мы помогаем прожить Японию — через контрасты, детали, смыслы.
            </p>
            <p className="text-center">
              <strong className="text-primary">Без спешки.</strong> Небольшие группы, внимание к каждому, время на рефлексию и фотографии в нужный момент.
            </p>
          </div>
        </div>
      </section>

      <section id="path" className="relative py-12 md:py-20 bg-muted/30 overflow-hidden">
        <DecorativeBackground />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-foreground">
            Ваш Путь: выберите свиток 🎋
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-foreground/70 mb-8 md:mb-12 max-w-3xl mx-auto">
            Три авторских маршрута. Каждый — погружение в свой пласт культуры Японии.
          </p>
          
          <div id="tours" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            <div ref={(el) => bannerRefs.current[0] = el} className="opacity-0">
              <Card className="overflow-hidden shadow-2xl h-full hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img 
                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/ceb4ac4a-81b8-405a-83e6-2b1f01f4a939.jpg"
                    alt="Свиток истории"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">📜 Свиток истории</h3>
                    <p className="text-xs sm:text-sm md:text-base opacity-90">Традиционная Япония</p>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4 leading-relaxed">
                    Путь самурая, гейш, храмов и чайных церемоний. <strong>Киото, Нара, Химэдзи, Такаяма.</strong>
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm md:text-base text-foreground/70">
                    <li>✅ Замок Химэдзи — архитектура эпохи самураев</li>
                    <li>✅ Бамбуковая роща Арасияма</li>
                    <li>✅ Гейша-квартал Гион</li>
                    <li>✅ Храм Фусими Инари (10 000 красных ворот)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div ref={(el) => bannerRefs.current[1] = el} className="opacity-0">
              <Card className="overflow-hidden shadow-2xl h-full hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img 
                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/c2dd22fb-e57c-469c-adfd-bccab02f2cbd.jpg"
                    alt="Свиток контрастов"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">⚖️ Свиток контрастов</h3>
                    <p className="text-xs sm:text-sm md:text-base opacity-90">Традиция + Будущее</p>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4 leading-relaxed">
                    Древние храмы утром, неоновые небоскрёбы вечером. <strong>Токио, Киото, Осака, Хаконэ.</strong>
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm md:text-base text-foreground/70">
                    <li>✅ Токийская башня и район Сибуя</li>
                    <li>✅ Храмовый комплекс Киёмидзу-дэра</li>
                    <li>✅ Философская тропа в Киото</li>
                    <li>✅ Онсэн (горячие источники) в Хаконэ</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div ref={(el) => bannerRefs.current[2] = el} className="opacity-0">
              <Card className="overflow-hidden shadow-2xl h-full hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img 
                    src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/10b37f8f-6ea8-4b52-8b63-ea90bd7ddb96.jpg"
                    alt="Свиток будущего"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">🚀 Свиток будущего</h3>
                    <p className="text-xs sm:text-sm md:text-base opacity-90">Технологии & Модерн</p>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base md:text-lg text-foreground/80 mb-4 leading-relaxed">
                    Киберпанк, инновации, урбанизм. <strong>Токио, Йокогама, Одайба, Осака.</strong>
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm md:text-base text-foreground/70">
                    <li>✅ Одайба — остров высоких технологий</li>
                    <li>✅ teamLab Borderless (цифровое искусство)</li>
                    <li>✅ Акихабара — квартал гиков и аниме</li>
                    <li>✅ Рынок Цукидзи и вечерний Синдзюку</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
