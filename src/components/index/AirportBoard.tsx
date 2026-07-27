import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const FlipChar = ({ char, delay }: { char: string; delay: number }) => {
  const [displayChar, setDisplayChar] = useState('');
  const chars = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ0123456789.-: ';

  useEffect(() => {
    let currentIndex = 0;
    const targetChar = char;
    const interval = setInterval(() => {
      if (currentIndex < chars.length) {
        setDisplayChar(chars[Math.floor(Math.random() * chars.length)]);
        currentIndex++;
      } else {
        setDisplayChar(targetChar);
        clearInterval(interval);
      }
    }, delay / chars.length);

    return () => clearInterval(interval);
  }, [char, delay]);

  return (
    <span className="inline-block min-w-[0.6em] text-center bg-[#1a1a1a] border border-[#333] rounded-sm px-1 shadow-inner">
      {displayChar || char}
    </span>
  );
};

const AirportBoard = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderText = (text: string, baseDelay: number) => {
    if (!animate) return <span className="opacity-0">{text}</span>;
    return text.split('').map((char, i) => (
      <FlipChar key={i} char={char} delay={baseDelay + i * 100} />
    ));
  };

  return (
    <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto bg-[#0a0a0a]/30 backdrop-blur-md rounded-md md:rounded-lg shadow-2xl p-1.5 sm:p-2.5 md:p-3 lg:p-3.5 border border-[#222]/30 scale-90 sm:scale-95 md:scale-100" style={{ 
      boxShadow: '0 0 20px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.15)',
      background: 'linear-gradient(180deg, rgba(15,15,15,0.3) 0%, rgba(26,26,26,0.35) 100%)'
    }}>
      <div className="flex items-center justify-between mb-1 md:mb-2 pb-1 md:pb-1.5 border-b border-[#333]/40">
        <div className="flex items-center gap-1 md:gap-1.5">
          <div className="w-5 h-5 md:w-7 md:h-7 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="Plane" size={12} className="text-black md:w-4 md:h-4" />
          </div>
          <span className="text-[9px] md:text-xs font-bold tracking-wider md:tracking-widest text-[#d4af37] uppercase whitespace-nowrap">Sheremetyevo Airport</span>
        </div>
        <span className="text-[8px] md:text-[10px] text-[#888] font-mono whitespace-nowrap">{new Date().toLocaleTimeString('ru-RU')}</span>
      </div>

      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-0.5 md:gap-2 lg:gap-3 items-center mb-1 md:mb-2 text-[#ffa500] font-mono">
        <div className="text-[7px] md:text-[10px] text-[#888] uppercase tracking-tight">Рейс</div>
        <div className="text-[7px] md:text-[10px] text-[#888] uppercase tracking-tight">Направление</div>
        <div className="text-[7px] md:text-[10px] text-[#888] uppercase tracking-tight text-center">Дата</div>
        <div className="text-[7px] md:text-[10px] text-[#888] uppercase tracking-tight text-right">Статус</div>
        
        <div className="text-[10px] md:text-base lg:text-lg font-bold tracking-tight md:tracking-wider whitespace-nowrap">
          {renderText('JD 2026', 1000)}
        </div>
        <div className="text-[10px] md:text-base lg:text-lg font-bold tracking-tight md:tracking-wider flex items-center gap-0.5 md:gap-1.5">
          {renderText('МОСКВА', 2000)}
          <Icon name="ArrowRight" size={10} className="text-[#d4af37] flex-shrink-0 md:w-4 md:h-4" />
          {renderText('ТОКИО', 3000)}
        </div>
        <div className="text-[10px] md:text-base lg:text-lg font-bold tracking-tight md:tracking-wider text-center whitespace-nowrap">
          {renderText('4.11', 4000)}
        </div>
        <div className="text-right">
          <span className="inline-block bg-[#d4af37] text-black px-0.5 md:px-2 py-0.5 rounded text-[8px] md:text-xs font-bold uppercase tracking-tight whitespace-nowrap">
            Свободные места
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 md:gap-3 pt-1 md:pt-1.5 border-t border-[#333]/40">
        <div className="bg-[#1a1a1a]/40 rounded p-1 md:p-2 border border-[#333]/40">
          <div className="text-[7px] md:text-[10px] text-[#888] uppercase mb-0 tracking-tight md:tracking-wider whitespace-nowrap">Длительность</div>
          <div className="text-xs md:text-lg lg:text-xl font-bold text-[#ffa500] font-mono tracking-tight whitespace-nowrap">
            {renderText('14 ДНЕЙ', 5000)}
          </div>
        </div>
        <a href="#contact" className="bg-[#1a1a1a]/40 rounded p-1 md:p-2 border border-[#333]/40 flex flex-col justify-center hover:bg-[#1a1a1a]/60 hover:border-orange-500/50 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-center gap-0.5 md:gap-1.5">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50 flex-shrink-0"></span>
            <span className="text-[9px] md:text-sm font-bold text-orange-500 uppercase tracking-tight whitespace-nowrap">
              Осталось 2 места
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AirportBoard;
