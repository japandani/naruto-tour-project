import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ContactSection = () => {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");

  return (
    <section id="contact" className="relative bg-foreground text-background overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-background" style={{ fontFamily: 'Cormorant, serif' }}>
                Начните своё путешествие в Японию
              </h2>
              <p className="text-base md:text-lg text-background/80 leading-relaxed">
                Мы ответим на все ваши вопросы и поможем организовать поездку вашей мечты.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Phone" size={20} className="text-background" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-background">Телефон / Мессенджеры</h3>
                  <a href="tel:+79936285197" className="text-xl font-bold text-background mb-1 block hover:text-primary transition-colors">+7 (925) 464-45-59</a>
                  <p className="text-sm text-background/70">(Ежедневно с 10:00 до 22:00 по МСК)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Mail" size={20} className="text-background" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-background">Электронная почта</h3>
                  <p className="text-xl font-bold text-background">salesdaproject@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Share2" size={20} className="text-background" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-background">Социальные сети</h3>
                  <p className="text-sm text-background/70 mb-3">Следите за нашими путешествиями</p>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Icon name="Instagram" size={20} className="text-background" />
                    </a>
                    <a 
                      href="https://t.me/japandani" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Telegram"
                    >
                      <Icon name="Send" size={18} className="text-background" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="VK"
                    >
                      <Icon name="MessageCircle" size={20} className="text-background" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/5 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-background/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-background" style={{ fontFamily: 'Cormorant, serif' }}>
              Есть вопросы?
            </h3>
            <p className="text-sm md:text-base text-background/70 mb-6">
              Оставьте контакты, и мы вам перезвоним!
            </p>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const message = `Здравствуйте! Меня зовут ${formName || 'не указано'}. Мой телефон: ${formPhone || 'не указан'}. Хочу узнать о турах в Японию.`;
              const whatsappUrl = `https://wa.me/79254644559?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}>
              <div>
                <Input 
                  type="text" 
                  placeholder="Ваше имя"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="bg-background/90 border-background/20 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Ваш телефон"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="bg-background/90 border-background/20 text-foreground placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-background font-semibold text-base md:text-lg py-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                Написать в WhatsApp
                <Icon name="MessageCircle" size={18} className="ml-2" />
              </Button>
              <p className="text-xs text-background/60 text-center leading-relaxed">
                Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
