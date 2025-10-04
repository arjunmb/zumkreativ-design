import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zum Kreativ Design</h3>
            <p className="text-sm opacity-90 mb-4">
              Ihre maßgeschneiderte Lösung für alle Ihre Marketing- und Werbebedürfnisse
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/references" className="hover:text-accent transition-colors">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Design</li>
              <li className="opacity-90">Folierung</li>
              <li className="opacity-90">Digital</li>
              <li className="opacity-90">Schilder</li>
              <li className="opacity-90">Druck</li>
              <li className="opacity-90">Stick</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  Bertha-von-Suttner-Str. 5<br />
                  64846 Groß-Zimmern
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+491637606161" className="hover:text-accent transition-colors opacity-90">
                  +49 163 760 61 61
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@zumkreativ.de" className="hover:text-accent transition-colors opacity-90">
                  info@zumkreativ.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} Zum Kreativ Design. Alle Rechte vorbehalten.</p>
          <p className="mt-2">
            Dr. Adem Yıldırım | USt-ID: DE3266 87470 | St-Nr: 008 884 30269
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;