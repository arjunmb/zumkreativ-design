import { Link } from "react-router-dom";
import { ArrowRight, Palette, Car, Globe, SignpostBig, Printer, Layers } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clientsBau from "@/assets/clients-bauunternehmen.png";
import clientsDienst from "@/assets/clients-dienstleistungen.png";
import clientsGastro from "@/assets/clients-gastronomie.png";
import clientsFreizeit from "@/assets/clients-freizeit.png";

const Index = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      description: "Logo, Corporate Design, Speisekarten, mehr",
    },
    {
      icon: Car,
      title: "Folierung",
      description: "Schaufenster, Auto, Lkw, Laden, mehr",
    },
    {
      icon: Globe,
      title: "Digital",
      description: "Webseite, Social Media, Google, SEO, mehr",
    },
    {
      icon: SignpostBig,
      title: "Schilder",
      description: "Platten, Leuchtreklame, Buchstaben, 3D Logo, mehr",
    },
    {
      icon: Printer,
      title: "Druck",
      description: "Visitenkarten, Flyer, Platten, Banner, Speisekarten, mehr",
    },
    {
      icon: Layers,
      title: "Stick",
      description: "Logostick auf diverse Textilien",
    },
  ];

  const clientImages = [
    { src: clientsBau, alt: "Bauunternehmen Kunden", title: "Bauunternehmen" },
    { src: clientsDienst, alt: "Dienstleistungen Kunden", title: "Dienstleistungen" },
    { src: clientsGastro, alt: "Gastronomie Kunden", title: "Gastronomie" },
    { src: clientsFreizeit, alt: "Freizeitbranche Kunden", title: "Freizeitbranche" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground pt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ihre maßgeschneiderte<br />
              <span className="text-accent">Werbeagentur</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Vom Logo bis zur Autofolierung - Ein Ansprechpartner für alle Ihre Werbebedürfnisse
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg group"
              >
                <Link to="/contact">
                  Jetzt Beratung anfragen
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg"
              >
                <Link to="/services">Unsere Leistungen</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary-foreground rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Unsere Leistungen</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mit einem Team von Experten aus den Bereichen Grafikdesign, digitales Marketing, Folierung und Druck
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="group">
              <Link to="/services">
                Alle Leistungen entdecken
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Die Agentur</h2>
                <p className="text-lg mb-6 text-foreground/90 leading-relaxed">
                  Mit einem Team von Experten aus den Bereichen Grafikdesign, digitales Marketing, Folierung und Druck 
                  sind wir stolz darauf, Ihnen erstklassige Dienstleistungen anzubieten, die Ihre Marke voranbringen 
                  und Ihr Unternehmen wachsen lassen.
                </p>
                <p className="text-lg font-semibold text-accent mb-8">
                  Vom Logo bis Stempel über Leuchtkasten bis Autofolierung - Sie werden EINEN Ansprechpartner für ihre Werbebedürfnisse haben.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link to="/contact">Kontaktieren Sie uns</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/references">Unsere Referenzen</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Referenzen</h2>
            <p className="text-xl text-muted-foreground">
              Unsere glücklichen Kunden sind der Beweis hierfür
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {clientImages.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-center text-primary">
                        {client.title}
                      </h3>
                      <img
                        src={client.src}
                        alt={client.alt}
                        className="w-full h-auto object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="group">
              <Link to="/references">
                Alle Referenzen ansehen
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit, Ihre Marke zum Strahlen zu bringen?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg"
            >
              <Link to="/contact">
                Kostenlose Beratung anfragen
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

export default Index;