import { NavigationBar } from "@/components/sections/NavigationBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ToursSection } from "@/components/sections/ToursSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />
      <ToursSection />
      <ContactSection />
      
      <footer className="bg-foreground text-background py-6 md:py-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm md:text-base mb-2 md:mb-4">© 2025 JAPAN : ДА! Все права защищены.</p>
          <div className="flex justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
