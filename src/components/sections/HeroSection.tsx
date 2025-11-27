import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useRef, useEffect } from "react";

export const HeroSection = () => {
  const ctaRef = useRef<HTMLDivElement | null>(null);

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

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/4490dcc9-4ef2-4060-9755-3f04e0e8840a.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>
      
      <div ref={ctaRef} className="relative z-10 text-center text-white px-4 animate-fade-in max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 drop-shadow-lg">Япония. Выше шума, глубже традиций.</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-4xl mx-auto drop-shadow-md leading-relaxed">
          Наше авторское путешествие — это ключ к пониманию Японии.<br className="hidden sm:block"/>
          Мы покажем вам не просто места, а смыслы.<br className="hidden sm:block"/>
          Услышать шёпот бамбуковой рощи и расшифровать код мегаполиса.<br className="hidden sm:block"/>
          Понять душу самурая в замке Химэдзи и ощутить дыхание будущего в Одайбе.<br className="hidden sm:block"/>
          Это погружение, после которого мир уже не будет прежним.
        </p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
          onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Сделать первый шаг по Пути
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};
