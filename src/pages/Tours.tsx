import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Tours = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">JAPAN: ДА!</Link>
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">{t.nav.home}</Link>
            <Link to="/#about" className="text-foreground hover:text-primary transition-colors">{t.nav.about}</Link>
            <Link to="/tours" className="text-primary font-semibold">{t.tours.navTitle}</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">{t.nav.gallery}</Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text text-transparent">
            {t.tours.title}
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl">
            {t.tours.subtitle}
          </p>
        </div>
      </section>

      {/* Flagship Tour */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
              {t.tours.flagshipBadge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.tours.flagshipTitle}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.tours.flagshipSubtitle}
            </p>
          </div>

          <Card className="border-2 border-primary/50 shadow-2xl overflow-hidden mb-12">
            <div className="relative h-[500px]">
              <img 
                src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/tokyo-night.jpg" 
                alt={t.tours.flagshipTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={20} />
                    <span>{t.tours.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={20} />
                    <span>{t.tours.citiesCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={20} />
                    <span>{t.tours.groupSize}</span>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t.tours.description}
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{t.tours.routeTitle}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { city: t.tours.tokyo, days: t.tours.tokyoDays, icon: 'Building2' },
                    { city: t.tours.hakone, days: t.tours.hakoneDays, icon: 'Mountain' },
                    { city: t.tours.shirakawa, days: t.tours.shirakawaDays, icon: 'Home' },
                    { city: t.tours.takayama, days: t.tours.takayamaDays, icon: 'TreePine' },
                    { city: t.tours.kanazawa, days: t.tours.kanazawaDays, icon: 'Castle' },
                    { city: t.tours.kyoto, days: t.tours.kyotoDays, icon: 'Shrine' },
                    { city: t.tours.hiroshima, days: t.tours.hiroshimaDays, icon: 'Heart' },
                    { city: t.tours.osaka, days: t.tours.osakaDays, icon: 'UtensilsCrossed' },
                  ].map((stop) => (
                    <div key={stop.city} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <Icon name={stop.icon as any} size={24} className="text-primary" />
                      <div>
                        <div className="font-bold">{stop.city}</div>
                        <div className="text-sm text-muted-foreground">{stop.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{t.tours.includedTitle}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    t.tours.included1,
                    t.tours.included2,
                    t.tours.included3,
                    t.tours.included4,
                    t.tours.included5,
                    t.tours.included6,
                    t.tours.included7,
                    t.tours.included8,
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold mb-3">{t.tours.priceTitle}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{t.tours.priceAmount}</p>
                <p className="text-sm text-muted-foreground">{t.tours.priceNote}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tour-tokyo-osaka" className="flex-1">
                  <Button size="lg" className="w-full">
                    {t.tours.detailsButton}
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsContactOpen(true)}
                >
                  {t.tours.bookButton}
                  <Icon name="Calendar" className="ml-2" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tours */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{t.tours.upcomingTitle}</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { dates: t.tours.date1, seats: 6, status: 'available', season: 'spring' },
                { dates: t.tours.date2, seats: 3, status: 'filling', season: 'spring' },
                { dates: t.tours.date3, seats: 0, status: 'sold-out', season: 'spring' },
                { dates: t.tours.date4, seats: 6, status: 'available', season: 'autumn' },
                { dates: t.tours.date5, seats: 4, status: 'filling', season: 'autumn' },
              ].map((tour, index) => (
                <Card key={index} className={`border-2 ${tour.status === 'sold-out' ? 'opacity-60' : 'hover:border-primary'} transition-all`}>
                  <CardContent className="p-6">
                    {tour.season === 'spring' && (
                      <div className="flex items-center gap-2 mb-3 animate-fade-in">
                        <span className="text-lg animate-bounce" style={{ animationDuration: '2s' }}>🌸</span>
                        <span className="text-xs font-semibold uppercase text-pink-500">
                          {t.tours.sakura}
                        </span>
                      </div>
                    )}
                    {tour.season === 'autumn' && (
                      <div className="flex items-center gap-2 mb-3 animate-fade-in">
                        <span className="text-lg animate-bounce" style={{ animationDuration: '2s' }}>🍁</span>
                        <span className="text-xs font-semibold uppercase text-orange-500">
                          {t.tours.koyo}
                        </span>
                      </div>
                    )}
                    <p className="text-sm font-medium mb-4">{tour.dates}</p>
                    {tour.status === 'sold-out' ? (
                      <div className="text-center">
                        <span className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-semibold">
                          {t.tours.soldOut}
                        </span>
                      </div>
                    ) : (
                      <>
                        <p className="text-sm text-muted-foreground mb-3">
                          {t.tours.seatsLeft.replace('{count}', tour.seats.toString())}
                        </p>
                        <Button 
                          size="sm" 
                          className="w-full"
                          variant={tour.status === 'filling' ? 'default' : 'outline'}
                          onClick={() => setIsContactOpen(true)}
                        >
                          {t.tours.bookNow}
                        </Button>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Tours */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.tours.specialTitle}</h2>
            <p className="text-xl text-muted-foreground">{t.tours.specialSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cherry Blossom Tour */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/sakura.jpg" 
                  alt={t.tours.sakuraTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-pink-500/90 text-white rounded-full text-sm font-semibold mb-2">
                    {t.tours.sakuraBadge}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{t.tours.sakuraTitle}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {t.tours.sakuraDesc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.tours.sakuraDates}</span>
                  <Button variant="outline" size="sm" onClick={() => setIsContactOpen(true)}>
                    {t.tours.learnMore}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Autumn Leaves Tour */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/autumn-leaves.jpg" 
                  alt={t.tours.koyoTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-orange-500/90 text-white rounded-full text-sm font-semibold mb-2">
                    {t.tours.koyoBadge}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{t.tours.koyoTitle}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {t.tours.koyoDesc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.tours.koyoDates}</span>
                  <Button variant="outline" size="sm" onClick={() => setIsContactOpen(true)}>
                    {t.tours.learnMore}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Winter Tour */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/winter-japan.jpg" 
                  alt={t.tours.winterTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/90 text-white rounded-full text-sm font-semibold mb-2">
                    {t.tours.winterBadge}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{t.tours.winterTitle}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {t.tours.winterDesc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.tours.winterDates}</span>
                  <Button variant="outline" size="sm" onClick={() => setIsContactOpen(true)}>
                    {t.tours.learnMore}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Custom Tour */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-primary/30">
              <div className="relative h-64">
                <img 
                  src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/custom-tour.jpg" 
                  alt={t.tours.customTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-white rounded-full text-sm font-semibold mb-2">
                    {t.tours.customBadge}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{t.tours.customTitle}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {t.tours.customDesc}
                </p>
                <Button className="w-full" onClick={() => setIsContactOpen(true)}>
                  {t.tours.customButton}
                  <Icon name="MessageCircle" className="ml-2" size={18} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">{t.tours.ctaTitle}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.tours.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setIsContactOpen(true)}>
              {t.tours.ctaButton}
              <Icon name="Send" className="ml-2" size={20} />
            </Button>
            <Link to="/gallery">
              <Button size="lg" variant="outline">
                {t.tours.galleryButton}
                <Icon name="Images" className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default Tours;