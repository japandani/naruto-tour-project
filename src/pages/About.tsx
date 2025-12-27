import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">JAPAN: ДА!</Link>
          <div className="flex gap-6 items-center">
            <Link to="/about" className="text-primary font-semibold">{t.nav.about}</Link>
            <Link to="/tours" className="text-foreground hover:text-primary transition-colors">{t.aboutPage.navTours}</Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">{t.nav.gallery}</Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">{t.aboutPage.navReviews}</Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text text-transparent">
            {t.aboutPage.heroTitle}
          </h1>
          <p className="text-2xl text-muted-foreground max-w-3xl">
            {t.aboutPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-foreground mb-8">
              {t.aboutPage.storyParagraph1}
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {t.aboutPage.storyParagraph2}
            </p>

            <div className="my-12">
              <img 
                src="https://cdn.poehali.dev/projects/mGgAYXcqgK5caxljpnwm/bucket/daniel-kyoto.jpg" 
                alt={t.aboutPage.imageAlt}
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">{t.aboutPage.philosophyTitle}</h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {t.aboutPage.philosophyParagraph1}
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {t.aboutPage.philosophyParagraph2}
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-8 my-12 rounded-r-lg">
              <p className="text-xl italic text-foreground">
                "{t.aboutPage.quote}"
              </p>
              <p className="text-sm text-muted-foreground mt-4">— {t.aboutPage.quoteAuthor}</p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">{t.aboutPage.approachTitle}</h2>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Key" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.aboutPage.approach1Title}</h3>
                <p className="text-muted-foreground">
                  {t.aboutPage.approach1Text}
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.aboutPage.approach2Title}</h3>
                <p className="text-muted-foreground">
                  {t.aboutPage.approach2Text}
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.aboutPage.approach3Title}</h3>
                <p className="text-muted-foreground">
                  {t.aboutPage.approach3Text}
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{t.aboutPage.approach4Title}</h3>
                <p className="text-muted-foreground">
                  {t.aboutPage.approach4Text}
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">{t.aboutPage.experienceTitle}</h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {t.aboutPage.experienceIntro}
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">{t.aboutPage.experience1}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">{t.aboutPage.experience2}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">{t.aboutPage.experience3}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">{t.aboutPage.experience4}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-muted-foreground">{t.aboutPage.experience5}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t.aboutPage.ctaTitle}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.aboutPage.ctaText}
          </p>
          <Link to="/tours">
            <Button size="lg" className="text-lg px-8 py-6">
              {t.aboutPage.ctaButton}
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
