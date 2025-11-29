import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Закрыть"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
              Связаться с нами
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Мы ответим на все ваши вопросы и поможем организовать поездку вашей мечты
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Телефон / Мессенджеры</h3>
                  <a href="tel:+79254644559" className="text-xl font-bold text-primary mb-1 block hover:text-primary/80 transition-colors">+7 (925) 464-45-59</a>
                  <p className="text-sm text-muted-foreground">(Ежедневно с 10:00 до 22:00 по МСК)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Электронная почта</h3>
                  <p className="text-lg font-bold text-foreground">salesdaproject@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Share2" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Социальные сети</h3>
                  <p className="text-sm text-muted-foreground mb-3">Следите за нашими путешествиями</p>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Icon name="Instagram" size={20} />
                    </a>
                    <a 
                      href="https://t.me/japandani" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Telegram"
                    >
                      <Icon name="Send" size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="VK"
                    >
                      <Icon name="MessageCircle" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                Есть вопросы?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Оставьте контакты, и мы вам перезвоним!
              </p>

              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const message = `Здравствуйте! Меня зовут ${formName || 'не указано'}. Мой телефон: ${formPhone || 'не указан'}. Хочу узнать о турах в Японию.`;
                const whatsappUrl = `https://wa.me/79254644559?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                onClose();
              }}>
                <div>
                  <Input 
                    type="text" 
                    placeholder="Ваше имя"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Ваш телефон"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6"
                >
                  Написать в WhatsApp
                  <Icon name="MessageCircle" size={18} className="ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
