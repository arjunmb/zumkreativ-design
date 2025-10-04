import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.references, path: "/references" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Zum Kreativ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"></span>
                )}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "de" ? "en" : "de")}
              className="gap-2"
            >
              <Languages size={18} />
              {language === "de" ? "EN" : "DE"}
            </Button>
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
              <Link to="/contact">{t.nav.consultation}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              className="w-full mt-2 justify-start gap-2"
              onClick={() => setLanguage(language === "de" ? "en" : "de")}
            >
              <Languages size={18} />
              {language === "de" ? "English" : "Deutsch"}
            </Button>
            <Button asChild className="w-full mt-2 bg-accent hover:bg-accent/90">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                {t.nav.consultation}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;