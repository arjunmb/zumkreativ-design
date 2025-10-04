import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import clientsBau from "@/assets/clients-bauunternehmen.png";
import clientsDienst from "@/assets/clients-dienstleistungen.png";
import clientsGastro from "@/assets/clients-gastronomie.png";
import clientsFreizeit from "@/assets/clients-freizeit.png";
import { Link } from "react-router-dom";

const References = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: "all",
      title: t.clients.categories.all,
      description: t.clients.subtitle,
    },
    {
      id: "bauunternehmen",
      title: t.clients.categories.construction,
      description: t.clients.subtitle,
      image: clientsBau,
    },
    {
      id: "dienstleistungen",
      title: t.clients.categories.services,
      description: t.clients.subtitle,
      image: clientsDienst,
    },
    {
      id: "gastronomie",
      title: t.clients.categories.gastronomy,
      description: t.clients.subtitle,
      image: clientsGastro,
    },
    {
      id: "freizeitbranche",
      title: t.clients.categories.leisure,
      description: t.clients.subtitle,
      image: clientsFreizeit,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.clients.title}</h1>
            <p className="text-xl md:text-2xl opacity-90">
              {t.clients.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm md:text-base py-3"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.slice(1).map((category, index) => (
                  <Card
                    key={category.id}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-primary">{category.title}</h3>
                      <p className="text-muted-foreground mb-6">{category.description}</p>
                      {category.image && (
                        <div className="rounded-lg overflow-hidden bg-white p-4">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {categories.slice(1).map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="animate-fade-in"
              >
                <Card className="max-w-4xl mx-auto">
                  <CardContent className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-4 text-primary">{category.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{category.description}</p>
                    {category.image && (
                      <div className="rounded-xl overflow-hidden bg-white p-8 shadow-inner">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">100+</div>
                <p className="text-muted-foreground">{t.stats.satisfaction}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">6</div>
                <p className="text-muted-foreground">{t.stats.locations}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <p className="text-muted-foreground">{t.stats.experience}</p>
              </CardContent>
            </Card>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8"
              >
                {t.nav.consultation}
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8"
              >
                {t.nav.services}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default References;
