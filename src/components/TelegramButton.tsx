import Icon from '@/components/ui/icon';

const TelegramButton = () => {
  return (
    <a
      href="https://t.me/japandani"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full p-4 shadow-2xl hover:shadow-[#0088cc]/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Telegram блог"
    >
      <Icon name="Send" size={28} className="group-hover:rotate-12 transition-transform duration-300" />
    </a>
  );
};

export default TelegramButton;
