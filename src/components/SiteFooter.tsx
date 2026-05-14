import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-light.png";
import signingPhoto from "@/assets/about-portrait.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy-gradient text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #C8A96B 0%, transparent 40%), radial-gradient(circle at 80% 80%, #C8A96B 0%, transparent 40%)" }} />

      <div className="hairline opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img src={logo} alt="AS" className="h-20 w-auto mb-6" />
          <p className="font-serif text-2xl leading-snug text-ivory/95">
            Η ζωή που ονειρεύεσαι<br/>σε περιμένει.
          </p>
          <p className="mt-3 text-sm text-ivory/60 italic font-serif">
            Ας τη δημιουργήσουμε μαζί.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Πλοήγηση</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li><Link to="/" className="hover:text-gold transition-colors">Αρχική</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Σχετικά με εμένα</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Υπηρεσίες</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Επικοινωνία</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Επικοινωνία</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li className="flex items-center gap-3"><Phone size={14} className="text-gold" /> +30 690 000 0000</li>
            <li className="flex items-center gap-3"><Mail size={14} className="text-gold" /> info@angelikisavvidaki.gr</li>
            <li className="flex items-center gap-3"><MapPin size={14} className="text-gold" /> Αθήνα, Ελλάδα</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="h-10 w-10 grid place-items-center border border-gold/40 text-gold hover:bg-gold hover:text-navy-deep transition-colors">
              <Instagram size={15} />
            </a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 grid place-items-center border border-gold/40 text-gold hover:bg-gold hover:text-navy-deep transition-colors">
              <Facebook size={15} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Newsletter</h4>
          <p className="text-sm text-ivory/70 mb-4">
            Λάβε σκέψεις και εργαλεία για την προσωπική σου εξέλιξη.
          </p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-ivory/20 px-4 py-3 text-sm placeholder:text-ivory/40 focus:border-gold focus:outline-none transition-colors"
            />
            <button type="submit" className="btn-gold w-full">Εγγραφή</button>
          </form>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-ivory/45">
          <p>© {new Date().getFullYear()} Αγγελική Σαββιδάκη. All rights reserved.</p>
          <p className="tracking-wider">Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
}
