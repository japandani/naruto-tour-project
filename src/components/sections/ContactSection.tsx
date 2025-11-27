import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-foreground">
          Готовы к Пути?
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl text-foreground/70 mb-8 md:mb-10">
          Оставьте заявку, и мы вышлем вам детали маршрутов, даты ближайших туров и ответим на все вопросы.
        </p>
        
        <form className="space-y-4 md:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm md:text-base font-medium text-foreground mb-2">
              Ваше имя
            </label>
            <Input 
              id="name"
              type="text" 
              placeholder="Александр" 
              className="w-full text-sm md:text-base py-2 md:py-3"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm md:text-base font-medium text-foreground mb-2">
              Email
            </label>
            <Input 
              id="email"
              type="email" 
              placeholder="alex@example.com" 
              className="w-full text-sm md:text-base py-2 md:py-3"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm md:text-base font-medium text-foreground mb-2">
              Сообщение (необязательно)
            </label>
            <Textarea 
              id="message"
              placeholder="Расскажите, какой свиток вас заинтересовал, или задайте вопрос..." 
              rows={4}
              className="w-full text-sm md:text-base"
            />
          </div>
          
          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg"
          >
            Отправить заявку
            <Icon name="Send" size={20} className="ml-2" />
          </Button>
        </form>
      </div>
    </section>
  );
};
