import { useState } from "react";
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

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      description: "Logo, Corporate Design, Speisekarten, mehr",
      detailed: "Sie haben eine Firma und brauchen ein gutes Logo, sodass der Ersteindruck stimmt? Oder wollen einen aussagekräftigen Flyer, damit die nötigen Informationen schön in Szene gesetzt werden? Ein Komplettdesign von Briefkopf bis Präsentationsmappe und Visitenkarte? Dann brauchen Sie uns nur noch zu kontaktieren. Wir setzen uns zusammen und gestalten ihre Wünsche in gutes Design um.",
      items: ["Logo Design", "Corporate Design", "Speisekarten", "Flyer", "Briefkopf", "Präsentationsmappe", "Visitenkarte"],
      quote: "Wer der Meinung ist, dass gutes Design teuer ist, sollte sich die Preise für schlechtes Design ansehen. - Dr. Ralf Speth",
    },
    {
      icon: Car,
      title: "Folierung",
      description: "Schaufenster, Auto, Lkw, Laden, mehr",
      detailed: "Ihr Firmenwagen kann ihr fahrender Werbebotschafter werden. Sie setzen ihre Dienstleistungen professionell in Szene und können so für den ersten positiven ersten Eindruck beim Kunden sorgen. Ein Schaufenster ist mehr als nur eine Glasfläche – es ist Ihre Visitenkarte nach außen. Mit einer gelungenen Schaufensterfolierung verwandeln Sie Ihr Schaufenster in eine wirkungsvolle Werbefläche.",
      items: ["Autofolierung", "Lkw-Folierung", "Schaufensterfolierung", "Ladenfolierung", "Steinschlagschutz", "Spiegelfolie", "Sichtschutz"],
      special: "Wir bieten auch Lösungen für besondere Bedürfnisse und Spezialfolien.",
    },
    {
      icon: Globe,
      title: "Digital",
      description: "Webseite, Social Media, Google, SEO, mehr",
      detailed: "Die digitale Welt hat jede Branche erreicht und bringt viele Vorteile und auch Ansprüche mit sich. Es ist praktisch, wenn man einen Partner hat, der sich von Suchmaschinenoptimierung (Google) bis Social Media auskennt und ihnen beiseitesteht. Unsere Social Media Experten erkennen die Lücken und stellen eine auf ihr Unternehmen abgestimmte Marketingstrategie auf.",
      items: ["Website Development", "Social Media Management", "Google Services", "SEO", "Digital Marketing Strategy", "Content Creation"],
      slogan: "Ok Google, lass loslegen!",
    },
    {
      icon: SignpostBig,
      title: "Schilder",
      description: "Platten, Leuchtreklame, Buchstaben, 3D Logo, mehr",
      detailed: "Bevor die Kunden in das Geschäft eintreten, soll die Außenfassade sie einladen. Ob mit Leuchtbuchstaben, Leuchtkasten, Plexischild, 3D Buchstaben oder Aluplatten - wir setzen ihr Logo, ihren Namen gekonnt in Szene. Wir beraten Sie in Umsetzbarkeit und prüfen die Gegebenheiten vor Ort.",
      items: ["Leuchtbuchstaben", "Leuchtkasten", "Plexischild", "3D Buchstaben", "3D Logo", "Aluplatten", "Leuchtreklame"],
      special: "Inkl. Vor-Ort-Beratung und technischem Support nach Installation",
    },
    {
      icon: Printer,
      title: "Druck",
      description: "Visitenkarten, Flyer, Platten, Banner, Speisekarten, mehr",
      detailed: "Klassischer Flyerdruck oder extravagante Visitenkarten - wir sorgen für den gewünschten Auftritt. Die neuen Arbeitsklamotten müssen bedruckt, bestickt oder mit Reflexfolie veredelt werden? Wir beraten Sie hinsichtlich Druckqualität, Einsatz und Alternativen.",
      items: ["Visitenkarten", "Flyer", "Platten", "Banner", "Speisekarten", "Textilbedruckung", "Arbeitskleidung", "Reflexfolie"],
    },
    {
      icon: Layers,
      title: "Stick",
      description: "Logostick auf diverse Textilien",
      detailed: "Ihr Logo ist das Aushängeschild Ihrer Marke – warum nicht auch auf Textilien? Mit unserer hochwertigen Stickerei setzen wir Ihr Logo oder Ihre Botschaft gekonnt in Szene. Ob Arbeitskleidung, T-Shirts, Jacken, Caps oder Taschen – wir besticken diverse Textilien präzise und langlebig.",
      items: ["Logo Embroidery", "Arbeitskleidung", "T-Shirts", "Jacken", "Caps", "Taschen"],
      features: ["Robust und langlebig", "Farbintensiv", "Präzise Detailarbeit", "Professioneller Look"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Unsere Leistungen</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Vom Logo bis zur Autofolierung - Umfassende Lösungen für Ihre Marke
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                        Mehr erfahren
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
                        
                        {service.slogan && (
                          <div className="bg-accent/10 p-4 rounded-lg">
                            <p className="text-lg font-semibold text-accent">{service.slogan}</p>
                          </div>
                        )}
                        
                        <div>
                          <h4 className="font-semibold mb-3">Leistungen im Detail:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.items.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {service.features && (
                          <div>
                            <h4 className="font-semibold mb-3">Qualitätsmerkmale:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2">
                                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {service.special && (
                          <div className="bg-secondary p-4 rounded-lg">
                            <p className="text-sm font-medium">{service.special}</p>
                          </div>
                        )}
                        
                        <Button asChild className="w-full bg-accent hover:bg-accent/90">
                          <Link to="/contact">Jetzt Beratung anfragen</Link>
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
              Kostenlose & unverbindliche Beratung
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Wir beraten Sie gerne zu allen unseren Dienstleistungen
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg"
            >
              <Link to="/contact">
                Jetzt Kontakt aufnehmen
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