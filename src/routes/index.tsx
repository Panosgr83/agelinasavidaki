import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Heart, Compass, Sparkles, ArrowUpRight, MapPin } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";
import aboutPortrait from "@/assets/about-portrait.png";
import { areas } from "@/lib/areas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Life & NLP Coach Αθήνα — Γαλάτσι, Ν. Ιωνία, Φιλοθέη | Αγγελική Σαββιδάκη" },
      { name: "description", content: "Πιστοποιημένη Life & NLP Coach που εξυπηρετεί Γαλάτσι, Νέα Ιωνία, Νέο Ηράκλειο, Νέα Φιλαδέλφεια, Κυψέλη, Φιλοθέη, Ψυχικό. Premium 1:1 coaching για καθαρότητα και αυτοπεποίθηση." },
      { property: "og:title", content: "Life & NLP Coach Αθήνα | Αγγελική Σαββιδάκη" },
      { property: "og:description", content: "Premium 1:1 coaching σε Γαλάτσι, Νέα Ιωνία, Φιλοθέη, Ψυχικό και άλλες περιοχές της Αττικής." },
      { property: "og:url", content: "https://agelinasavidaki.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://agelinasavidaki.lovable.app/" }],
  }),
  component: HomePage,
});

const services = [
  { slug: "life-coaching", title: "1:1 Coaching", desc: "Προσωποποιημένες συνεδρίες για να δουλέψουμε σε ό,τι σε κρατά πίσω και να δημιουργήσουμε το μέλλον που επιθυμείς." },
  { slug: "nlp", title: "NLP & Mindset", desc: "Απελευθερώνουμε περιοριστικές πεποιθήσεις και χτίζουμε ένα δυνατό, ευέλικτο και νικηφόρο mindset." },
  { slug: "executive-coaching", title: "Life Strategy", desc: "Θέτουμε ξεκάθαρους στόχους και σχεδιάζουμε τη στρατηγική για μια ζωή με νόημα και κατεύθυνση." },
];

const fromTo = [
  ["Άγχος & υπερανάλυση", "Εσωτερική ηρεμία"],
  ["Στασιμότητα", "Πρόοδος & δράση"],
  ["Ανασφάλεια", "Αυτοπεποίθηση"],
  ["Έλλειψη κατεύθυνσης", "Ξεκάθαρο όραμα"],
  ["Ενοχές & εξάντληση", "Ισορροπία & ενέργεια"],
];

function HomePage() {
  return (
    <>
      {/* HERO — cinematic editorial */}
      <section className="relative w-full bg-[#020612] text-ivory overflow-hidden">
        <div className="relative w-full min-h-[94vh] lg:min-h-[96vh] flex items-stretch pt-20 lg:pt-24">
          <img
            src={heroPortrait}
            alt="Αγγελική Σαββιδάκη"
            className="absolute inset-0 h-full w-full object-cover object-[62%_18%] lg:object-[right_center]"
            style={{ filter: "contrast(1.08) saturate(1.05) brightness(1.04)" }}
          />
          {/* Layered overlays for cinematic depth */}
          <div className="absolute inset-0 hidden md:block bg-hero-overlay" />
          <div className="absolute inset-0 md:hidden bg-hero-overlay-mobile" />
          <div className="absolute inset-0 hero-vignette pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.10] pointer-events-none mix-blend-screen"
            style={{ backgroundImage: "radial-gradient(circle at 8% 60%, #C8A96B 0%, transparent 55%)" }} />

          <div className="relative w-full mx-auto max-w-7xl px-5 md:px-10 lg:px-14 flex items-end md:items-center">
            <div className="fade-up w-full md:max-w-[680px] lg:max-w-[780px] py-14 md:py-24">
              <p className="eyebrow mb-7 md:mb-8">Life & NLP Coach</p>
              <h1
                className="font-serif text-ivory"
                style={{
                  fontSize: "clamp(46px, 8.2vw, 96px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.035em",
                  fontWeight: 500,
                  textShadow: "0 2px 30px rgba(0,0,0,0.4)",
                }}
              >
                Ξαναχτίσε<br/>
                τη ζωή σου με<br/>
                <em className="not-italic" style={{ color: "#C8A96B" }}>καθαρότητα,</em><br/>
                <em className="not-italic" style={{ color: "#C8A96B" }}>αυτοπεποίθηση</em><br/>
                <span className="text-ivory">&amp;</span> <em className="not-italic" style={{ color: "#C8A96B" }}>κατεύθυνση.</em>
              </h1>
              <p className="mt-8 md:mt-10 max-w-xl text-[15px] md:text-[17px] text-ivory/85 leading-[1.8] font-light">
                Σε βοηθώ να ξεπεράσεις τα εμπόδια, να ανακαλύψεις τον πραγματικό σου εαυτό και να δημιουργήσεις τη ζωή που αξίζεις.
              </p>
              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-4">
                <Link to="/contact" className="btn-gold">Κλείσε μια πρώτη συνάντηση</Link>
                <Link to="/about" className="btn-outline-gold">Μάθε περισσότερα</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline opacity-40" />
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-ivory text-ink py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1.1fr_1.6fr] gap-14 lg:gap-20 items-start">
            <div>
              <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Η Προσέγγιση Μου</p>
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-[3.4rem] leading-[1.05] tracking-tight">
                Ολιστική καθοδήγηση,<br/>
                <em className="not-italic text-gold">Αληθινή μεταμόρφωση.</em>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-[1.8] text-ink/75">
                Συνδυάζω τεχνικές NLP, coaching και ψυχολογίας για να σε βοηθήσω να αλλάξεις το πώς σκέφτεσαι, νιώθεις και λειτουργείς — ώστε να δημιουργήσεις διαφορετικά αποτελέσματα στη ζωή σου.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-8 lg:pt-16">
              {[
                { icon: Brain, title: "Νους", desc: "Αλλάζουμε περιοριστικές πεποιθήσεις και νοητικά μοτίβα." },
                { icon: Heart, title: "Συναίσθημα", desc: "Ενισχύουμε τη συναισθηματική σου νοημοσύνη." },
                { icon: Compass, title: "Δράση", desc: "Θέτουμε ξεκάθαρους στόχους και πλάνο δράσης." },
                { icon: Sparkles, title: "Ισορροπία", desc: "Χτίζουμε μια ζωή με νόημα και εσωτερική γαλήνη." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="space-y-4">
                  <div className="h-12 w-12 grid place-items-center border border-gold/60 text-gold">
                    <Icon size={20} strokeWidth={1.3} />
                  </div>
                  <h3 className="font-serif text-[1.35rem]">{title}</h3>
                  <p className="text-[13.5px] text-ink/60 leading-[1.7]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="bg-navy-gradient text-ivory py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute -right-32 top-1/4 w-[28rem] h-[28rem] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, #C8A96B, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-12 grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">
          <div>
            <p className="eyebrow mb-6">Από τη στασιμότητα στην εξέλιξη</p>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Η αλλαγή ξεκινά<br/>
              <em className="not-italic text-gold-gradient">από μέσα σου.</em>
            </h2>
            <p className="mt-6 max-w-md text-ivory/70 text-[15px] leading-relaxed">
              Μαζί, μετατρέπουμε την αβεβαιότητα σε δύναμη και τη σύγχυση σε προορισμό.
            </p>
            <Link to="/services" className="btn-outline-gold mt-10">Δες περισσότερα</Link>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-6 lg:gap-x-12 gap-y-5 items-center">
            <p className="eyebrow !text-ivory/40">Από</p>
            <span></span>
            <p className="eyebrow">Προς</p>
            {fromTo.map(([from, to], i) => (
              <Fragment key={i}>
                <p className="text-ivory/85 font-serif text-lg lg:text-xl">{from}</p>
                <ArrowRight size={18} className="text-gold" strokeWidth={1.2} />
                <p className="text-gold font-serif text-lg lg:text-xl">{to}</p>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-navy-gradient text-ivory py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute -left-32 bottom-0 w-[28rem] h-[28rem] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, #C8A96B, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
            <div>
              <p className="eyebrow mb-6">Προγράμματα & Συνεδρίες</p>
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-[3.4rem] leading-[1.05] tracking-tight max-w-xl">
                Επιλεγμένες υπηρεσίες<br/>
                για <em className="not-italic text-gold">βαθιά αλλαγή.</em>
              </h2>
            </div>
            <Link to="/services" className="text-[11px] tracking-[0.28em] uppercase text-ivory/85 hover:text-gold transition-colors inline-flex items-center gap-2">
              Δες όλες τις υπηρεσίες <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-7">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="luxury-card p-10 lg:p-12 group flex flex-col"
                style={{ background: "rgba(6,11,28,0.6)" }}
              >
                <div className="h-14 w-14 mb-10 grid place-items-center border border-gold/70 text-gold group-hover:border-gold transition-colors">
                  <Sparkles size={20} strokeWidth={1.2} />
                </div>
                <h3 className="font-serif text-[1.65rem] lg:text-[1.85rem] mb-4 text-ivory leading-[1.15] tracking-tight">{s.title}</h3>
                <p className="text-[14px] text-ivory/65 leading-[1.85] flex-1 font-light">{s.desc}</p>
                <span className="mt-10 inline-flex items-center gap-2 text-[10.5px] tracking-[0.32em] uppercase text-gold group-hover:gap-4 transition-all">
                  Μάθε περισσότερα <ArrowRight size={13} strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-ivory text-ink py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <div className="absolute -inset-3 border border-gold/40 -translate-x-4 -translate-y-4 hidden lg:block" />
            <img src={aboutPortrait} alt="Αγγελική Σαββιδάκη" className="relative h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Γεια, είμαι η Αγγελική</p>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Πιστεύω σε σένα,<br/>
              <em className="not-italic text-gold">ακόμη κι όταν εσύ δεν το κάνεις.</em>
            </h2>
            <p className="mt-8 text-[15px] leading-relaxed text-ink/75 max-w-lg">
              Ο ρόλος μου είναι να σε καθοδηγήσω με ενσυναίσθηση, ειλικρίνεια και αποτελεσματικές τεχνικές, ώστε να ανακαλύψεις τη δύναμη που ήδη έχεις μέσα σου.
            </p>
            <Link to="/about" className="btn-outline-navy mt-10">Γνώρισε με καλύτερα</Link>
          </div>
        </div>
      </section>

      {/* AREAS SERVED — local SEO */}
      <section className="bg-ivory text-ink py-24 lg:py-32 border-t border-taupe/20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-5 inline-flex items-center gap-2 !text-[color:var(--navy-deep)]/60"><MapPin size={12} /> Περιοχές εξυπηρέτησης</p>
              <h2 className="font-serif text-3xl lg:text-5xl leading-[1.05] tracking-tight max-w-2xl">
                Life Coaching σε <em className="not-italic text-gold">Αθήνα & Βόρεια Προάστια.</em>
              </h2>
            </div>
            <Link to="/perioxes" className="text-[11px] tracking-[0.28em] uppercase text-ink/70 hover:text-gold transition-colors inline-flex items-center gap-2">
              Όλες οι περιοχές <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {areas.map((a) => (
              <Link
                key={a.slug}
                to="/perioxes/$slug"
                params={{ slug: a.slug }}
                className="border border-taupe/40 px-4 py-4 text-[13px] text-ink/80 hover:border-gold hover:text-navy-deep hover:bg-champagne/40 transition-all text-center"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-navy-deep text-ivory py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
            Είσαι έτοιμος/η για την <em className="not-italic text-gold-gradient">αλλαγή;</em>
          </h2>
          <p className="mt-4 text-ivory/65 max-w-xl mx-auto">
            Κλείσε μια πρώτη συνάντηση γνωριμίας και ξεκίνα το ταξίδι της προσωπικής σου ανάπτυξης.
          </p>
          <Link to="/contact" className="btn-gold mt-10 inline-flex">
            Ξεκίνα τώρα <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
