import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Heart, Compass, Sparkles, ArrowUpRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";
import aboutPortrait from "@/assets/about-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Αγγελική Σαββιδάκη — Life & NLP Coach" },
      { name: "description", content: "Ξαναχτίσε τη ζωή σου με καθαρότητα, αυτοπεποίθηση και κατεύθυνση. Premium 1:1 coaching." },
      { property: "og:title", content: "Αγγελική Σαββιδάκη — Life & NLP Coach" },
      { property: "og:description", content: "Premium 1:1 coaching για βαθιά, διαρκή αλλαγή." },
    ],
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
      <section className="relative w-full bg-[#040A19] text-ivory overflow-hidden">
        <div className="relative w-full min-h-[92vh] flex items-stretch pt-20 lg:pt-24">
          <img
            src={heroPortrait}
            alt="Αγγελική Σαββιδάκη"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-[right_center]"
          />
          <div className="absolute inset-0 hidden md:block bg-hero-overlay" />
          <div className="absolute inset-0 md:hidden bg-hero-overlay-mobile" />
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 12% 55%, #C8A96B 0%, transparent 60%)" }} />

          <div className="relative w-full mx-auto max-w-7xl px-5 md:px-10 lg:px-14 flex items-end md:items-center">
            <div className="fade-up w-full md:max-w-[640px] lg:max-w-[720px] py-16 md:py-20">
              <p className="eyebrow mb-6 md:mb-7">Life & NLP Coach</p>
              <h1
                className="font-serif text-ivory"
                style={{
                  fontSize: "clamp(42px, 7.4vw, 82px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                  fontWeight: 500,
                }}
              >
                Ξαναχτίσε τη ζωή σου<br/>
                με καθαρότητα,<br/>
                <em className="not-italic" style={{ color: "#C8A96B" }}>αυτοπεποίθηση</em><br/>
                και <em className="not-italic" style={{ color: "#C8A96B" }}>κατεύθυνση</em>.
              </h1>
              <p className="mt-7 md:mt-8 max-w-xl text-[15px] md:text-base text-ivory/80 leading-[1.75]">
                Σε βοηθώ να ξεπεράσεις τα εμπόδια, να ανακαλύψεις τον πραγματικό σου εαυτό και να δημιουργήσεις τη ζωή που αξίζεις.
              </p>
              <div className="mt-9 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
                <Link to="/contact" className="btn-gold">Κλείσε μια πρώτη συνάντηση</Link>
                <Link to="/about" className="btn-outline-gold">Μάθε περισσότερα</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline opacity-40" />
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-ivory text-ink py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Η Προσέγγιση Μου</p>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Ολιστική καθοδήγηση.<br/>
              <em className="not-italic text-gold">Αληθινή μεταμόρφωση.</em>
            </h2>
            <div className="hairline mt-8 max-w-[120px] !bg-gold opacity-100" style={{height: 1, background: "var(--gold)"}} />
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink/75">
              Συνδυάζω τεχνικές NLP, coaching και ψυχολογίας για να σε βοηθήσω
              να αλλάξεις το πώς σκέφτεσαι, νιώθεις και λειτουργείς — ώστε να δημιουργήσεις διαφορετικά αποτελέσματα στη ζωή σου.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: Brain, title: "Νους", desc: "Αλλάζουμε περιοριστικές πεποιθήσεις και νοητικά μοτίβα." },
              { icon: Heart, title: "Συναίσθημα", desc: "Ενισχύουμε τη συναισθηματική σου νοημοσύνη." },
              { icon: Sparkles, title: "Δράση", desc: "Θέτουμε ξεκάθαρους στόχους και πλάνο δράσης." },
              { icon: Compass, title: "Ισορροπία", desc: "Χτίζουμε μια ζωή με νόημα και εσωτερική γαλήνη." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="space-y-3">
                <div className="h-12 w-12 grid place-items-center border border-gold/50 text-gold">
                  <Icon size={20} strokeWidth={1.2} />
                </div>
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="bg-navy-gradient text-ivory py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute -right-32 top-1/4 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #C8A96B, transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
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
      <section className="bg-ivory text-ink py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Προγράμματα & Συνεδρίες</p>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight max-w-xl">
                Επιλεγμένες υπηρεσίες<br/>
                για <em className="not-italic text-gold">βαθιά αλλαγή.</em>
              </h2>
            </div>
            <Link to="/services" className="text-[11px] tracking-[0.28em] uppercase text-navy-deep hover:text-gold transition-colors inline-flex items-center gap-2">
              Δες όλες τις υπηρεσίες <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="luxury-card-light p-10 group flex flex-col"
              >
                <div className="h-12 w-12 mb-8 grid place-items-center border border-gold text-gold">
                  <Sparkles size={18} strokeWidth={1.2} />
                </div>
                <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed flex-1">{s.desc}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold group-hover:gap-3 transition-all">
                  Μάθε περισσότερα <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-champagne text-ink py-24 lg:py-32">
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
