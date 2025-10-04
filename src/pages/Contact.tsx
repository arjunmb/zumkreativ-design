import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir werden uns schnellstmöglich bei Ihnen melden.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kontakt</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Wir freuen uns auf Ihre Nachricht
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="animate-fade-in-left">
              <CardHeader>
                <CardTitle className="text-2xl">Nachricht senden</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und wir melden uns bei Ihnen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 123 456789"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Kontaktinformationen</CardTitle>
                  <CardDescription>
                    Erreichen Sie uns über folgende Kanäle
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Bertha-von-Suttner-Str. 5<br />
                        64846 Groß-Zimmern<br />
                        Germany
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a
                        href="tel:+491637606161"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +49 163 760 61 61
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <a
                        href="mailto:info@zumkreativ.de"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        info@zumkreativ.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Beratung</h3>
                      <p className="text-muted-foreground">
                        Kostenlose & unverbindliche Beratung<br />
                        nach Terminvereinbarung
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Folgen Sie uns</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Geschäftsführer</h3>
                  <p className="text-muted-foreground mb-4">Dr. Adem Yıldırım</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>USt-ID: DE3266 87470</p>
                    <p>St-Nr: 008 884 30269</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-accent" size={48} />
                <h3 className="text-xl font-semibold mb-2">Standort Groß-Zimmern</h3>
                <p className="text-muted-foreground">Bertha-von-Suttner-Str. 5, 64846 Groß-Zimmern</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;