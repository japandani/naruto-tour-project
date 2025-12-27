import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);
  const { t } = useLanguage();

  const reviews = [
    {
      name: t.reviews.review1Name,
      date: t.reviews.review1Date,
      tour: t.reviews.review1Tour,
      avatar: t.reviews.review1Avatar,
      rating: 5,
      short: t.reviews.review1Short,
      full: t.reviews.review1Full,
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-anna-1.jpg"]
    },
    {
      name: t.reviews.review2Name,
      date: t.reviews.review2Date,
      tour: t.reviews.review2Tour,
      avatar: t.reviews.review2Avatar,
      rating: 5,
      short: t.reviews.review2Short,
      full: t.reviews.review2Full,
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-dmitry-1.jpg"]
    },
    {
      name: t.reviews.review3Name,
      date: t.reviews.review3Date,
      tour: t.reviews.review3Tour,
      avatar: t.reviews.review3Avatar,
      rating: 5,
      short: t.reviews.review3Short,
      full: t.reviews.review3Full,
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-elena-1.jpg"]
    },
    {
      name: t.reviews.review4Name,
      date: t.reviews.review4Date,
      tour: t.reviews.review4Tour,
      avatar: t.reviews.review4Avatar,
      rating: 5,
      short: t.reviews.review4Short,
      full: t.reviews.review4Full,
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-igor-marina-1.jpg"]
    },
    {
      name: t.reviews.review5Name,
      date: t.reviews.review5Date,
      tour: t.reviews.review5Tour,
      avatar: t.reviews.review5Avatar,
      rating: 5,
      short: t.reviews.review5Short,
      full: t.reviews.review5Full,
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-olga-1.jpg"]
    },
    {
      name: t.reviews.review6Name,
      date: t.reviews.review6Date,
      tour: t.reviews.review6Tour,
      avatar: t.reviews.review6Avatar,
      rating: 5,
      short: t.reviews.review6Short,
      full: t.reviews.review6Full,
      images: ["https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/review-sergey-1.jpg"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">JAPAN: ДА!</Link>
          <div className="flex gap-6 items-center">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">{t.nav.about}</Link>
            <Link to="/tours" className="text-foreground hover:text-primary transition-colors">{t.reviews.navTours}</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">{t.nav.gallery}</Link>
            <Link to="/reviews" className="text-primary font-semibold">{t.reviews.navReviews}</Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text text-transparent">
            {t.reviews.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {t.reviews.subtitle}
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-4">
            {reviews.map((review, index) => (
              <Card key={index} className="border hover:border-primary transition-all cursor-pointer" onClick={() => setSelectedReview(index === selectedReview ? null : index)}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-sm">{review.name}</div>
                        <div className="text-xs text-muted-foreground">{review.date}</div>
                        <div className="text-[10px] text-muted-foreground italic">{review.tour}</div>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={12} className="text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground italic mb-2 text-sm">
                    "{selectedReview === index ? review.full : review.short}"
                  </p>

                  {selectedReview === index && review.images && (
                    <div className="mt-2 grid grid-cols-2 gap-1">
                      {review.images.map((img, i) => (
                        <img key={i} src={img} alt={`${review.name} - ${t.reviews.photo} ${i + 1}`} className="rounded-lg w-full h-24 object-cover" />
                      ))}
                    </div>
                  )}

                  <Button variant="ghost" className="mt-2 p-0 h-auto font-normal text-primary hover:text-primary/80 text-xs">
                    {selectedReview === index ? t.reviews.collapse : t.reviews.readMore}
                    <Icon name={selectedReview === index ? "ChevronUp" : "ChevronDown"} className="ml-1" size={12} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t.reviews.statsTitle}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t.reviews.stat1Number}</div>
              <div className="text-muted-foreground">{t.reviews.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t.reviews.stat2Number}</div>
              <div className="text-muted-foreground">{t.reviews.stat2Label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t.reviews.stat3Number}</div>
              <div className="text-muted-foreground">{t.reviews.stat3Label}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{t.reviews.stat4Number}</div>
              <div className="text-muted-foreground">{t.reviews.stat4Label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">{t.reviews.ctaTitle}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.reviews.ctaSubtitle}
          </p>
          <Link to="/tours">
            <Button size="lg">
              {t.reviews.ctaButton}
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
