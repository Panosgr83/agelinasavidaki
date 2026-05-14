import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-light.png";

const nav = [
  { to: "/", label: "Αρχική" },
  { to: "/about", label: "Σχετικά" },
  { to: "/services", label: "Υπηρεσίες" },
  { to: "/arthra", label: "Άρθρα" },
  { to: "/contact", label: "Επικοινωνία" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(6,11,28,0.92)] backdrop-blur-[14px] border-b border-gold/15"
          : "bg-[rgba(6,11,28,0.5)] backdrop-blur-[6px]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12 py-3 lg:py-4">
        <Link to="/" className="flex items-center gap-3 md:gap-4">
          <img src={logo} alt="Αγγελική Σαββιδάκη" className="h-16 sm:h-20 lg:h-24 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[10px] lg:text-[11px] text-ivory/65 italic font-serif mt-1 tracking-wide text-center">Αγγελική Σαββιδάκη</span>
            <span className="text-[10px] tracking-[0.34em] text-gold uppercase mt-0.5">Life & NLP Coach</span>
            <span className="text-[10px] lg:text-[11px] text-ivory/65 italic font-serif mt-1 tracking-wide">Σύμβουλος Προσωπικής & Επαγγελματικής Ανάπτυξης</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] tracking-[0.12em] uppercase font-semibold text-ivory/85 hover:text-gold transition-colors"
              activeProps={{ className: "text-[13px] tracking-[0.12em] uppercase font-semibold text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-outline-gold !py-3 !px-6 !text-[11px]">
          Κλείσε Συνάντηση
        </Link>

        <button
          aria-label="Menu"
          className="lg:hidden text-ivory"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#060B1C] border-t border-gold/15 px-6 py-6 space-y-4">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block text-sm tracking-[0.28em] uppercase text-ivory/85 hover:text-gold"
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-outline-gold w-full">
            Κλείσε Συνάντηση
          </Link>
        </div>
      )}
    </header>
  );
}
