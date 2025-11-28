import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import WaveDivider from "@/components/WaveDivider";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

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
  const { t } = useLanguage();
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
          <span className="text-[9px] md:text-xs font-bold tracking-wider md:tracking-widest text-[#d4af37] uppercase whitespace-nowrap">{t.airport.title}</span>
        </div>
        <span className="text-[8px] md:text-[10px] text-[#888] font-mono whitespace-nowrap">{new Date().toLocaleTimeString('ru-RU')}</span>
      </div>

      <div className="grid grid-cols-[auto_1fr_auto_auto] gap-0.5 md:gap-2 lg:gap-3 items-center mb-1 md:mb-2 text-[#ffa500] font-mono">
        <div className="text-[7px] md:text-[10px] text-[#888] uppercase tracking-tight">{t.airport.flight}</div>
        <div className="text-[7px] md:text-[10px] text-[#888] uppercase tracking-tight">{t.airport.destination}</div>
        <div className="text-[7px] md:text-[10px] text-[#888] uppercase tracking-tight text-center">{t.airport.date}</div>
        <div className="text-[7px] md:text-[10px] text-[#888] uppercase tracking-tight text-right">{t.airport.status}</div>
        
        <div className="text-[10px] md:text-base lg:text-lg font-bold tracking-tight md:tracking-wider whitespace-nowrap">
          {renderText('JD 2026', 1000)}
        </div>
        <div className="text-[10px] md:text-base lg:text-lg font-bold tracking-tight md:tracking-wider flex items-center gap-0.5 md:gap-1.5">
          {renderText(t.airport.moscow, 2000)}
          <Icon name="ArrowRight" size={10} className="text-[#d4af37] flex-shrink-0 md:w-4 md:h-4" />
          {renderText(t.airport.tokyo, 3000)}
        </div>
        <div className="text-[10px] md:text-base lg:text-lg font-bold tracking-tight md:tracking-wider text-center whitespace-nowrap">
          {renderText('14.03', 4000)}
        </div>
        <div className="text-right">
          <span className="inline-block bg-[#d4af37] text-black px-0.5 md:px-2 py-0.5 rounded text-[8px] md:text-xs font-bold uppercase tracking-tight whitespace-nowrap">
            {t.airport.boarding}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 md:gap-3 pt-1 md:pt-1.5 border-t border-[#333]/40">
        <div className="bg-[#1a1a1a]/40 rounded p-1 md:p-2 border border-[#333]/40">
          <div className="text-[7px] md:text-[10px] text-[#888] uppercase mb-0 tracking-tight md:tracking-wider whitespace-nowrap">{t.airport.duration}</div>
          <div className="text-xs md:text-lg lg:text-xl font-bold text-[#ffa500] font-mono tracking-tight whitespace-nowrap">
            {renderText(t.airport.days, 5000)}
          </div>
        </div>
        <a href="#contact" className="bg-[#1a1a1a]/40 rounded p-1 md:p-2 border border-[#333]/40 flex flex-col justify-center hover:bg-[#1a1a1a]/60 hover:border-red-500/50 transition-all duration-300 cursor-pointer">
          <div className="flex items-center justify-center gap-0.5 md:gap-1.5">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50 flex-shrink-0"></span>
            <span className="text-[9px] md:text-sm font-bold text-red-500 uppercase tracking-tight whitespace-nowrap">
              {t.airport.bookNow}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

const ToursBoard = () => {
  const { t } = useLanguage();
  const [animate, setAnimate] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const playAirportBeep = () => {
      const oscillator1 = audioContext.createOscillator();
      const oscillator2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator1.connect(gainNode);
      oscillator2.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator1.frequency.value = 1000;
      oscillator2.frequency.value = 1200;
      oscillator1.type = 'sine';
      oscillator2.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.05);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
      
      oscillator1.start(audioContext.currentTime);
      oscillator2.start(audioContext.currentTime);
      oscillator1.stop(audioContext.currentTime + 0.3);
      oscillator2.stop(audioContext.currentTime + 0.3);
    };
    
    audioRef.current = { play: playAirportBeep } as any;
    
    return () => {
      audioContext.close();
    };
  }, []);

  const renderText = (text: string, baseDelay: number) => {
    if (!animate) return <span className="opacity-0">{text}</span>;
    return text.split('').map((char, i) => (
      <FlipChar key={i} char={char} delay={baseDelay + i * 100} />
    ));
  };

  const tours = [
    { dates: '18.03 - 01.04', seats: 6, status: 'available' },
    { dates: '03.04 - 15.04', seats: 3, status: 'available' },
    { dates: '17.04 - 02.05', seats: 0, status: 'sold-out' },
    { dates: '29.04 - 10.05', seats: 0, status: 'sold-out' },
    { dates: '12.05 - 25.05', seats: 4, status: 'available' },
  ];

  return (
    <div className="max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#0a0a0a] backdrop-blur-xl rounded-lg md:rounded-xl shadow-2xl p-3 sm:p-3 md:p-4 lg:p-5 border-2 border-[#d4af37]/30 animate-fade-in" style={{ 
      boxShadow: '0 0 40px rgba(212, 175, 55, 0.3), 0 0 80px rgba(212, 175, 55, 0.1), inset 0 0 30px rgba(0,0,0,0.4)',
    }}>
      <div className="flex items-center justify-between mb-2 md:mb-3 pb-2 md:pb-2 border-b-2 border-[#d4af37]/50">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center flex-shrink-0 animate-pulse shadow-lg shadow-[#d4af37]/50">
            <Icon name="Calendar" size={14} className="text-black md:w-4 md:h-4" />
          </div>
          <span className="text-[11px] md:text-sm font-bold tracking-wider md:tracking-widest text-[#d4af37] uppercase whitespace-nowrap drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
            {t.toursBoard.title}
          </span>
        </div>
        <span className="text-[8px] md:text-[10px] text-[#888] font-mono whitespace-nowrap">{new Date().toLocaleDateString('ru-RU')}</span>
      </div>

      <div className="grid grid-cols-[1fr_auto_auto] gap-2 md:gap-3 items-center mb-2 md:mb-2 text-[#ffa500] font-mono">
        <div className="text-[8px] md:text-[11px] text-[#d4af37] uppercase tracking-tight font-bold">{t.toursBoard.dates}</div>
        <div className="text-[8px] md:text-[11px] text-[#d4af37] uppercase tracking-tight text-center font-bold">{t.toursBoard.seats}</div>
        <div className="text-[8px] md:text-[11px] text-[#d4af37] uppercase tracking-tight text-right font-bold">{t.toursBoard.status}</div>
      </div>

      {tours.map((tour, index) => (
        <div 
          key={index}
          className="grid grid-cols-[1fr_auto_auto] gap-2 md:gap-3 items-center mb-1.5 md:mb-2 py-1.5 md:py-2 border-b border-[#d4af37]/20 hover:bg-[#d4af37]/5 transition-all duration-300 rounded px-1 md:px-2 cursor-pointer"
          onMouseEnter={() => {
            setHoveredIndex(index);
            if (audioRef.current) {
              (audioRef.current as any).play();
            }
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className={`text-[11px] md:text-base lg:text-lg font-bold tracking-tight md:tracking-wider whitespace-nowrap transition-all duration-300 ${
            hoveredIndex === index ? 'text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'text-[#ffa500]'
          }`}>
            {renderText(tour.dates, 1000 + index * 500)}
          </div>
          <div className={`text-[11px] md:text-base lg:text-lg font-bold tracking-tight md:tracking-wider text-center whitespace-nowrap transition-all duration-300 ${
            hoveredIndex === index ? 'text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'text-[#ffa500]'
          }`}>
            {tour.status === 'available' ? renderText(tour.seats.toString(), 2000 + index * 500) : '—'}
          </div>
          <div className="text-right">
            {tour.status === 'available' ? (
              <span className={`inline-block px-1.5 md:px-3 py-0.5 md:py-1 rounded text-[8px] md:text-xs font-bold uppercase tracking-tight whitespace-nowrap transition-all duration-300 ${
                hoveredIndex === index 
                  ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/50 scale-105' 
                  : 'bg-green-600/80 text-white'
              }`}>
                {t.toursBoard.available}
              </span>
            ) : (
              <span className="inline-block bg-red-600/80 text-white px-1.5 md:px-3 py-0.5 md:py-1 rounded text-[8px] md:text-xs font-bold uppercase tracking-tight whitespace-nowrap">
                {t.toursBoard.soldOut}
              </span>
            )}
          </div>
        </div>
      ))}

      <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t-2 border-[#d4af37]/50">
        <a 
          href="#contact"
          className="block w-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black py-2 md:py-3 rounded-lg font-bold text-xs md:text-sm uppercase tracking-wider text-center hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-[1.02] active:scale-95"
        >
          {t.toursBoard.bookNow}
        </a>
      </div>
    </div>
  );
};

const Index = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Plane" size={24} className="text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                JAPAN : ДА!
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                {t.nav.home}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                {t.nav.about}
              </a>
              <a href="#path" className="text-foreground hover:text-primary transition-colors">
                {t.nav.path}
              </a>
              <a href="#tour" className="text-foreground hover:text-primary transition-colors">
                {t.nav.tour}
              </a>
              <a href="/gallery" className="text-foreground hover:text-primary transition-colors">
                {t.nav.gallery}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                {t.nav.contacts}
              </a>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a
                href="#home"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </a>
              <a
                href="#about"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a
                href="#path"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.path}
              </a>
              <a
                href="#tour"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.tour}
              </a>
              <a
                href="/gallery"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.gallery}
              </a>
              <a
                href="#contact"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contacts}
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">{t.hero.bookNow}</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#about">{t.hero.learnMore}</a>
            </Button>
          </div>
          <AirportBoard />
        </div>
        <WaveDivider />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.about.experience}</h3>
                <p className="text-muted-foreground">{t.about.experienceDesc}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.about.comfort}</h3>
                <p className="text-muted-foreground">{t.about.comfortDesc}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.about.guide}</h3>
                <p className="text-muted-foreground">{t.about.guideDesc}</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-6 text-center">
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t.about.safety}</h3>
                <p className="text-muted-foreground">{t.about.safetyDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <WaveDivider flip />
      </section>

      {/* Path Section */}
      <section id="path" className="py-20 bg-gradient-to-b from-background to-card relative">
        <div className="container mx-auto px-4">
          <ToursBoard />
        </div>
      </section>

      {/* Tour Card Section */}
      <section id="tour" className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-background/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Japan Tour"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {t.tourCard.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {t.tourCard.subtitle}
                  </p>
                  <p className="text-foreground mb-6">
                    {t.tourCard.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <span>{t.tourCard.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="DollarSign" size={20} className="text-primary" />
                      <span className="font-bold text-primary">{t.tourCard.price}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <a href="/tour-details">{t.tourCard.viewDetails}</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <WaveDivider />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              {t.contact.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.contact.name}
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.contact.email}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.contact.phone}
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.contact.message}
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {t.contact.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{t.contact.phoneLabel}</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{t.contact.emailLabel}</h3>
                        <p className="text-muted-foreground">info@japanda.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{t.contact.address}</h3>
                        <p className="text-muted-foreground">{t.contact.addressValue}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-primary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 {t.footer.company}. {t.footer.allRights}.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
