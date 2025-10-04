import { Link } from "react-router-dom";
import { Palette, Car, Globe, SignpostBig, Printer, Layers, ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();

  const servicesData = [
    {
      icon: Palette,
      title: t.services.design.title,
      description: t.services.design.description,
      detailed: t.services.design.details,
      quote: t.services.design.quote,
      items: language === "de" ? 
        ["Logo Design", "Corporate Design", "Speisekarten", "Flyer", "Briefkopf", "Präsentationsmappe", "Visitenkarte"] :
        ["Logo Design", "Corporate Design", "Menus", "Flyers", "Letterhead", "Presentation Folder", "Business Cards"]
    },
    {
      icon: Car,
      title: t.services.wrapping.title,
      description: t.services.wrapping.description,
      detailed: t.services.wrapping.details,
      quote: t.services.wrapping.quote,
      items: language === "de" ? 
        ["Autofolierung", "Lkw-Folierung", "Schaufensterfolierung", "Ladenfolierung", "Steinschlagschutz", "Spiegelfolie", "Sichtschutz"] :
        ["Vehicle Wrapping", "Truck Wrapping", "Window Wrapping", "Shop Wrapping", "Stone Chip Protection", "Mirror Film", "Privacy Film"]
    },
    {
      icon: Globe,
      title: t.services.digital.title,
      description: t.services.digital.description,
      detailed: t.services.digital.details,
      quote: t.services.digital.quote,
      items: language === "de" ? 
        ["Website Development", "Social Media Management", "Google Services", "SEO", "Digital Marketing Strategy", "Content Creation"] :
        ["Website Development", "Social Media Management", "Google Services", "SEO", "Digital Marketing Strategy", "Content Creation"]
    },
    {
      icon: SignpostBig,
      title: t.services.signs.title,
      description: t.services.signs.description,
      detailed: t.services.signs.details,
      quote: t.services.signs.quote,
      items: language === "de" ? 
        ["Leuchtbuchstaben", "Leuchtkasten", "Plexischild", "3D Buchstaben", "3D Logo", "Aluplatten", "Leuchtreklame"] :
        ["Illuminated Letters", "Light Box", "Acrylic Signs", "3D Letters", "3D Logo", "Aluminum Panels", "Neon Signs"]
    },
    {
      icon: Printer,
      title: t.services.print.title,
      description: t.services.print.description,
      detailed: t.services.print.details,
      quote: t.services.print.quote,
      items: language === "de" ? 
        ["Visitenkarten", "Flyer", "Platten", "Banner", "Speisekarten", "Textilbedruckung", "Arbeitskleidung", "Reflexfolie"] :
        ["Business Cards", "Flyers", "Boards", "Banners", "Menus", "Textile Printing", "Workwear", "Reflective Film"]
    },
    {
      icon: Layers,
      title: t.services.embroidery.title,
      description: t.services.embroidery.description,
      detailed: t.services.embroidery.details,
      quote: t.services.embroidery.quote,
      items: language === "de" ? 
        ["Logo Stickerei", "Arbeitskleidung", "T-Shirts", "Jacken", "Caps", "Taschen"] :
        ["Logo Embroidery", "Workwear", "T-Shirts", "Jackets", "Caps", "Bags"]
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.services.title}</h1>
            <p className="text-xl md:text-2xl opacity-90">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="text-accent-foreground" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {service.detailed}
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full group/btn">
                        {t.services.learnMore}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-2xl">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                            <service.icon className="text-accent-foreground" size={24} />
                          </div>
                          {service.title}
                        </DialogTitle>
                        <DialogDescription className="text-base pt-4">
                          {service.detailed}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6 pt-4">
                        {service.quote && (
                          <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                            {service.quote}
                          </blockquote>
                        )}
                        
                        <div>
                          <h4 className="font-semibold mb-3">{language === "de" ? "Leistungen im Detail:" : "Services in Detail:"}</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.items.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button asChild className="w-full bg-accent hover:bg-accent/90">
                          <Link to="/contact">{t.nav.consultation}</Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.cta.ready}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {t.cta.description}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg"
            >
              <Link to="/contact">
                {t.cta.button}
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
