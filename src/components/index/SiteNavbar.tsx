import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SiteNavbar = ({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (v: boolean) => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <img 
            src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f6e8ec5d-14f7-497a-bf69-2d99142f26ed.jpg" 
            alt="Japan логотип"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-primary shadow-md"
          />
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-background tracking-tight" style={{ fontFamily: 'Caveat, cursive' }}>JAPAN : ДА!</h1>
            <p className="text-[10px] md:text-xs text-background/70 tracking-widest uppercase">Экскурсионное бюро</p>
          </div>
        </div>
        <div className="hidden lg:flex gap-6 xl:gap-10">
          <a href="#home" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Главная</a>
          <a href="#about" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">О нас</a>
          <a href="#path" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Ваш Путь</a>
          <a href="/tour" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Описание Пути</a>
          <a href="/gallery" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Галерея</a>
          <a href="/blog" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Блог</a>
          <a href="#contact" className="text-background hover:text-primary transition-colors font-medium text-base xl:text-lg">Контакты</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact">
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
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
            >
              Главная
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
            >
              О нас
            </a>
            <a 
              href="#path" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
            >
              Концепт
            </a>
            <a 
              href="/tour" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
            >
              Программа тура
            </a>
            <a 
              href="/gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
            >
              Галерея
            </a>
            <a 
              href="/blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
            >
              Блог
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-background hover:text-primary transition-colors font-medium text-lg py-2"
            >
              Контакты
            </a>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 text-white w-full py-3 text-base font-semibold shadow-lg mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Заказать тур
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SiteNavbar;
