import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-light.png";


export function SiteFooter() {
  return (
    <footer className="bg-navy-gradient text-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #C9A86A 0%, transparent 40%), radial-gradient(circle at 80% 80%, #C9A86A 0%, transparent 40%)" }} />

      <div className="hairline opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-24 pb-16 grid gap-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4 flex flex-col items-center text-center">
          <img src={logo} alt="Angeliki Savvidaki" className="h-48 lg:h-56 w-auto mb-1 -mt-4" />
          <p className="font-serif text-ivory text-[15px] tracking-wide">Αγγελική Σαββιδάκη</p>
          <p className="text-[10px] tracking-[0.34em] text-gold uppercase mt-1">Life & NLP Coach</p>
          <p className="text-[12px] text-ivory/65 italic font-serif mt-2 tracking-wide max-w-xs">
            Σύμβουλος Προσωπικής & Επαγγελματικής Ανάπτυξης
          </p>
          <p className="font-serif text-[1.6rem] lg:text-[1.85rem] leading-[1.2] text-ivory tracking-tight mt-8">
            Η ζωή που ονειρεύεσαι<br/>
            <em className="not-italic text-gold-gradient">σε περιμένει.</em>
          </p>
          <p className="mt-4 text-[14px] text-ivory/55 italic font-serif">
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
            <li className="flex items-start gap-3"><MapPin size={13} strokeWidth={1.4} className="text-gold mt-1" /><span>Δήλου 2, 11146<br/>Γαλάτσι, Αθήνα</span></li>
          </ul>
          <div className="mt-6 border border-gold/25 overflow-hidden">
            <iframe
              title="Χάρτης — Δήλου 2, Γαλάτσι"
              src="https://www.google.com/maps?q=%CE%94%CE%AE%CE%BB%CE%BF%CF%85%202,%2011146%20%CE%93%CE%B1%CE%BB%CE%AC%CF%84%CF%83%CE%B9&output=embed"
              width="100%"
              height="180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
            />
          </div>
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
