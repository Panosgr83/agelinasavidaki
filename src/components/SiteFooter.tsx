import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-light.png";
import signingPhoto from "@/assets/about-portrait.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy-gradient text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #C9A86A 0%, transparent 40%), radial-gradient(circle at 80% 80%, #C9A86A 0%, transparent 40%)" }} />

      <div className="hairline opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-16 grid gap-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img src={logo} alt="Angeliki Savvidaki" className="h-24 w-auto mb-8" />
          <p className="font-serif text-[1.75rem] lg:text-[2rem] leading-[1.2] text-ivory tracking-tight">
            Η ζωή που ονειρεύεσαι<br/>
            <em className="not-italic text-gold-gradient">σε περιμένει.</em>
          </p>
          <p className="mt-5 text-[15px] text-ivory/55 italic font-serif">
            Ας τη δημιουργήσουμε μαζί.
          </p>
        </div>

        <div className="lg:col-span-2 lg:pl-4">
          <h4 className="eyebrow mb-6">Πλοήγηση</h4>
          <ul className="space-y-4 text-[14px] text-ivory/70 font-light">
            <li><Link to="/" className="hover:text-gold transition-colors">Αρχική</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Σχετικά</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Υπηρεσίες</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Επικοινωνία</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="eyebrow mb-6">Επικοινωνία</h4>
          <ul className="space-y-4 text-[14px] text-ivory/70 font-light">
            <li className="flex items-center gap-3"><Phone size={13} strokeWidth={1.4} className="text-gold" /><span>+30 690 000 0000</span></li>
            <li className="flex items-center gap-3"><Mail size={13} strokeWidth={1.4} className="text-gold" /><span>info@angelikisavvidaki.gr</span></li>
            <li className="flex items-center gap-3"><MapPin size={13} strokeWidth={1.4} className="text-gold" /><span>Αθήνα, Ελλάδα</span></li>
          </ul>
          <div className="mt-8 flex gap-3">
            <a href="#" aria-label="Instagram" className="h-11 w-11 grid place-items-center border border-gold/35 text-gold hover:bg-gold hover:text-navy-deep hover:border-gold transition-all">
              <Instagram size={15} strokeWidth={1.4} />
            </a>
            <a href="#" aria-label="Facebook" className="h-11 w-11 grid place-items-center border border-gold/35 text-gold hover:bg-gold hover:text-navy-deep hover:border-gold transition-all">
              <Facebook size={15} strokeWidth={1.4} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="eyebrow mb-6">Newsletter</h4>
          <p className="text-[14px] text-ivory/65 mb-6 leading-[1.75] font-light">
            Σκέψεις και εργαλεία για την προσωπική σου εξέλιξη — κάθε μήνα.
          </p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Το email σου"
              className="w-full bg-transparent border-b border-ivory/20 px-0 py-3 text-[14px] placeholder:text-ivory/35 focus:border-gold focus:outline-none transition-colors"
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
