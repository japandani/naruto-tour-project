import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ToursBoard = () => {
  const tourDates = [
    { date: "17 сентября - 1 октября 2026", status: "available", seats: 1, season: "autumn", badge: "🍁 Момодзи (красные клёны)" },
    { date: "2 октября - 15 октября 2026", status: "closed", seats: 0, season: "autumn", badge: "🍁 Момодзи (красные клёны)" },
    { date: "16 октября - 29 октября 2026", status: "closed", seats: 0, season: "autumn", badge: "🍁 Момодзи (красные клёны)" },
    { date: "4 ноября - 19 ноября 2026", status: "available", seats: 2, season: "autumn", badge: "🍁 Момодзи (красные клёны)" }
  ];

  return (
    <div className="grid gap-3">
      {tourDates.map((tour, index) => (
        <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-accent/20">
          <CardContent className="p-3 md:p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={16} className="text-primary" />
                </div>
                <div>
                  {tour.badge && (
                    <div className={`text-[10px] md:text-xs font-semibold mb-0.5 ${tour.season === 'spring' ? 'text-pink-400' : 'text-orange-400'}`}>
                      {tour.badge}
                    </div>
                  )}
                  <div className="text-sm md:text-base font-bold text-foreground">{tour.date}</div>
                  <div className="text-xs text-muted-foreground">{tour.duration || '14 дней | 13 ночей'}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {tour.status === 'available' ? (
                  <>
                    <a href="/#contact" className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/70"></span>
                      <span className="text-xs md:text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
                        {tour.seats} {tour.seats === 1 ? 'место' : tour.seats < 5 ? 'места' : 'мест'}
                      </span>
                    </a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); const contactSection = document.getElementById('contact'); if (contactSection) { contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}>
                      <Button className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 text-xs md:text-sm font-semibold">
                        Забронировать
                      </Button>
                    </a>
                  </>
                ) : tour.status === 'waitlist' ? (
                  <a href="/#contact" className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-orange-500 rounded-full shadow-lg shadow-orange-500/70"></span>
                    <span className="inline-block bg-orange-500/20 text-orange-600 px-2 py-1 rounded text-xs font-bold uppercase border border-orange-500/30 hover:bg-orange-500/30 transition-colors">
                      Лист ожидания
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-red-600 rounded-full shadow-lg shadow-red-600/70"></span>
                    <span className="inline-block bg-red-600/20 text-red-600 px-2 py-1 rounded text-xs font-bold uppercase border border-red-600/30">
                      Группа закрыта
                    </span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ToursBoard;