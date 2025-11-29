import Icon from '@/components/ui/icon';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

const TelegramButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Связаться с нами"
      >
        <Icon name="MessageCircle" size={28} className="group-hover:scale-110 transition-transform duration-300" />
      </button>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default TelegramButton;