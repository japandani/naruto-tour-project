import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const TourDetails = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tourParts = [
    {
      part: t.tourDetails.part1,
      title: t.tourDetails.part1Title,
      subtitle: t.tourDetails.part1Subtitle,
      image: "https://cdn.poehali.dev/files/8b5c091f-7d0b-4acc-b0e4-df8a0a0e0d84.jpg",
      days: [
        {
          day: 1,
          title: t.tourDetails.day1Title,
          description: t.tourDetails.day1Desc
        },
        {
          day: 2,
          title: t.tourDetails.day2Title,
          description: t.tourDetails.day2Desc
        },
        {
          day: 3,
          title: t.tourDetails.day3Title,
          description: t.tourDetails.day3Desc
        }
      ]
    },
    {
      part: t.tourDetails.part2,
      title: t.tourDetails.part2Title,
      subtitle: t.tourDetails.part2Subtitle,
      image: "https://cdn.poehali.dev/files/99cdbe1d-6c5c-49c8-98b4-ae3956803345.jpg",
      days: [
        {
          day: 4,
          title: t.tourDetails.day4Title,
          description: t.tourDetails.day4Desc
        },
        {
          day: 5,
          title: t.tourDetails.day5Title,
          description: t.tourDetails.day5Desc
        },
        {
          day: 6,
          title: t.tourDetails.day6Title,
          description: t.tourDetails.day6Desc
        }
      ]
    },
    {
      part: t.tourDetails.part3,
      title: t.tourDetails.part3Title,
      subtitle: t.tourDetails.part3Subtitle,
      image: "https://cdn.poehali.dev/files/2c1d8a12-7c6e-4eea-9187-f60318a9cd7c.jpg",
      days: [
        {
          day: 7,
          title: t.tourDetails.day7Title,
          description: t.tourDetails.day7Desc
        },
        {
          day: 8,
          title: t.tourDetails.day8Title,
          description: t.tourDetails.day8Desc
        }
      ]
    },
    {
      part: t.tourDetails.part4,
      title: t.tourDetails.part4Title,
      subtitle: t.tourDetails.part4Subtitle,
      image: "https://cdn.poehali.dev/files/aa2ac25f-09c8-4804-8c8e-a50b5b06597f.jpg",
      days: [
        {
          day: 9,
          title: t.tourDetails.day9Title,
          description: t.tourDetails.day9Desc
        },
        {
          day: 10,
          title: t.tourDetails.day10Title,
          description: t.tourDetails.day10Desc
        }
      ]
    },
    {
      part: t.tourDetails.part5,
      title: t.tourDetails.part5Title,
      subtitle: t.tourDetails.part5Subtitle,
      image: "https://cdn.poehali.dev/files/cb480393-3e94-4ef5-a40f-f18c0ee2f9cb.jpg",
      days: [
        {
          day: 11,
          title: t.tourDetails.day11Title,
          description: t.tourDetails.day11Desc
        },
        {
          day: 12,
          title: t.tourDetails.day12Title,
          description: t.tourDetails.day12Desc
        }
      ]
    },
    {
      part: t.tourDetails.part6,
      title: t.tourDetails.part6Title,
      subtitle: t.tourDetails.part6Subtitle,
      image: "https://cdn.poehali.dev/files/dab5f2b4-f9a8-498a-9c7d-66a7dc54a3e4.jpg",
      days: [
        {
          day: 13,
          title: t.tourDetails.day13Title,
          description: t.tourDetails.day13Desc
        },
        {
          day: 14,
          title: t.tourDetails.day14Title,
          description: t.tourDetails.day14Desc
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <Icon name="Plane" size={24} className="text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                JAPAN : ДА!
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Button asChild>
                <a href="/#contact">{t.hero.bookNow}</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4">
              <Button asChild className="w-full">
                <a href="/#contact">{t.hero.bookNow}</a>
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-background via-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {t.tour.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t.tour.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary/20">
                <Icon name="Calendar" size={24} className="text-primary" />
                <span className="font-semibold">14 {t.tour.days}</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary/20">
                <Icon name="MapPin" size={24} className="text-primary" />
                <span className="font-semibold">{t.tourDetails.cities}</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary/20">
                <Icon name="DollarSign" size={24} className="text-primary" />
                <span className="font-semibold text-primary">{t.tourCard.price}</span>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                  <Icon name="Check" size={24} />
                  {t.tour.included}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.hotels}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.transport}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.guide}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.tickets}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.excursions}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.breakfast}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.cable}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.insurance}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.visa}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{t.tour.support}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-secondary">
                  <Icon name="X" size={24} />
                  {t.tour.notIncluded}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p>{t.tour.flights}</p>
                      <p className="text-sm text-muted-foreground">{t.tour.flightsPrice}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>{t.tour.meals}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>{t.tour.personal}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tour Parts */}
      {tourParts.map((tourPart, partIndex) => (
        <section key={partIndex} className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-bold text-sm mb-2 tracking-widest uppercase">
                  {tourPart.part}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {tourPart.title}
                </h2>
                <p className="text-lg text-muted-foreground">{tourPart.subtitle}</p>
              </div>

              <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={tourPart.image} 
                  alt={tourPart.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="space-y-8">
                {tourPart.days.map((day, dayIndex) => (
                  <Card key={dayIndex} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{day.day}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">
                            {day.title}
                          </h3>
                          <p className="text-foreground leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t.gallery.ready}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t.tourDetails.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/#contact">{t.gallery.book}</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/gallery">{t.gallery.viewRoute}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
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

export default TourDetails;
