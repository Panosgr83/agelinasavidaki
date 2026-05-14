import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import portrait from "@/assets/about-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Σχετικά — Αγγελική Σαββιδάκη" },
      { name: "description", content: "Πιστοποιημένη Σύμβουλος NLP & Ολιστικού Coaching. Η ιστορία, η φιλοσοφία και οι αξίες μου." },
      { property: "og:title", content: "Σχετικά — Αγγελική Σαββιδάκη" },
      { property: "og:description", content: "Η ιστορία, η φιλοσοφία και οι αξίες μου." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Αυθεντικότητα", desc: "Πιστεύω στην ειλικρίνεια και την αυθεντική επικοινωνία." },
  { title: "Συναίσθηση", desc: "Κατανόηση και σεβασμός σε κάθε μοναδικό ταξίδι." },
  { title: "Αποτελεσματικότητα", desc: "Πρακτικά εργαλεία για πραγματική αλλαγή." },
  { title: "Επαγγελματισμός", desc: "Συνεχής εκπαίδευση και ανάπτυξη." },
];

const certs = [
  "Total Coaching — Life, Executive, Friendship & Parent Coaching (ΚΕ.ΘΕ.ΣΥ, 2024-2025)",
  "NLP Coaching — Νευρογλωσσικός Προγραμματισμός (ΚΕ.ΘΕ.ΣΥ, 2024-2025)",
  "Πιστοποιημένη Σύμβουλος Επαγγελματικού Προσανατολισμού & Σταδιοδρομίας — ISON Psychometrica (2024)",
  "Ειδική Αγωγή & Προαγωγή Ψυχικής Υγείας στο Σχολικό Περιβάλλον — Πανεπιστήμιο Δυτικής Αττικής (2021-2022)",
  "Συμβουλευτική & Επαγγελματικός Προσανατολισμός — Πανεπιστήμιο Αιγαίου (2022-2023)",
  "ΔΕΠΥ — Διάσπαση Προσοχής & Τεχνικές Αποκατάστασης (ΚΕ.ΘΕ.ΣΥ, 2023)",
  "Το Υπερεγώ & οι Μηχανισμοί Άμυνας (ΚΕ.ΘΕ.ΣΥ, 2023)",
  "Όρια & Θέσπιση Κανόνων στα Παιδιά (ΚΕ.ΘΕ.ΣΥ, 2023)",
  "Ειδικός Εφαρμογών Διαιτητικής — Δ.Ι.Ε.Κ. Αχαρνών (2002-2004)",
];

const experience = [
  { period: "2020 — Σήμερα", role: "Δημόσιες Σχέσεις & Γραμματειακή Υποστήριξη", org: "Κέντρο Ψυχικής Υγείας «ΔΙΑ…ΛΟΓΟΥ ΝΟΗΣΙΣ»" },
  { period: "2022 — Σήμερα", role: "Πρακτική άσκηση & εποπτεία", org: "Επόπτρια: Κοινωνική Ψυχολόγος-Παιδοψυχολόγος Ευδοκία Τίντζη" },
  { period: "2022 — Σήμερα", role: "Επιμορφωτικό Πρόγραμμα Ειδικής Αγωγής", org: "Γενική Επόπτρια: ΔΡ. Θεοδώρα Παπαδοπούλου" },
  { period: "Συνεχώς", role: "Αρθρογράφος", org: "Εφημερίδα «ΓΡΑΜΜΗ» Γαλατσίου" },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy-gradient text-ivory pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="fade-up">
            <p className="eyebrow mb-6">Σχετικά με εμένα</p>
            <h1 className="font-serif text-5xl lg:text-6xl leading-[1.05]">
              Αγγελική<br/>
              <em className="not-italic text-gold-gradient">Σαββιδάκη</em>
            </h1>
            <p className="mt-6 text-gold uppercase text-xs tracking-[0.3em]">
              Πιστοποιημένη Σύμβουλος NLP & Ολιστικού Coaching
            </p>
            <p className="mt-8 max-w-lg text-ivory/75 text-lg leading-relaxed font-serif italic">
              «Κάθε άνθρωπος κρύβει μέσα του τη δύναμη να μεταμορφώσει τη ζωή του, αρκεί να θελήσει να κάνει το πρώτο βήμα.»
            </p>
          </div>
          <div className="relative fade-up reveal-delay-2">
            <div className="absolute -inset-4 border border-gold/30 translate-x-6 translate-y-6 hidden lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={portrait} alt="Αγγελική Σαββιδάκη" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-ivory text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Η Ιστορία μου</p>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-10">
            Δουλεύω με ανθρώπους που <em className="not-italic text-gold">θέλουν αλλαγή.</em>
          </h2>
          <div className="space-y-6 text-[15px] leading-[1.85] text-ink/80">
            <p>Είμαι <strong>Πιστοποιημένη Σύμβουλος Νευρογλωσσικού Προγραμματισμού (NLP)</strong> και <strong>Ολιστικού Coaching</strong> (Total Coaching: Life, Executive, Relationship, Parent), καθώς και <strong>Σύμβουλος Επαγγελματικού Προσανατολισμού</strong>.</p>
            <p>Στηρίζω ανθρώπους που επιθυμούν να γνωρίσουν καλύτερα τον εαυτό τους, να ξεπεράσουν εμπόδια και να χτίσουν μια ζωή με ισορροπία, νόημα και αυθεντικότητα. Γιατί όταν υπάρχει η πρόθεση, υπάρχουν και οι τρόποι να κάνεις την αλλαγή πραγματικότητα.</p>
            <p>Το Coaching δεν είναι ψυχοθεραπεία. Δεν δίνω έτοιμες λύσεις — σε βοηθώ να βρεις δικές σου. Μέσα από στοχευμένες ερωτήσεις, πρακτικά εργαλεία και ουσιαστική επικοινωνία, σε καθοδηγώ να δεις καθαρά ποιος/ά είσαι, τι θέλεις και πώς μπορείς να το καταφέρεις.</p>
            <p className="font-serif italic text-xl text-navy-deep border-l-2 border-gold pl-6">Η αλλαγή δεν έρχεται από τη μία μέρα στην άλλη, αλλά έρχεται — όταν αποφασίσεις να κοιτάξεις μέσα σου με ειλικρίνεια.</p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-champagne text-ink py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Η Φιλοσοφία μου</p>
          <h2 className="font-serif text-3xl lg:text-4xl leading-tight mb-8">
            Δεν υπάρχουν «μαγικές συνταγές» —<br/>
            <em className="not-italic text-gold">υπάρχουν σωστές ερωτήσεις.</em>
          </h2>
          <div className="space-y-5 text-[15px] leading-[1.85] text-ink/80">
            <p>Πιστεύω ότι όλοι έχουμε τη δύναμη ν' αλλάξουμε τη ζωή μας, αρκεί να δώσουμε λίγο χρόνο και προσοχή στον εαυτό μας. Δεν υπάρχουν «μαγικές συνταγές» — υπάρχουν όμως σωστές ερωτήσεις, ενσυναίσθηση, εργαλεία και καθοδήγηση.</p>
            <p>Η δουλειά μου είναι να βοηθώ ανθρώπους να γνωρίσουν καλύτερα τον εαυτό τους, ν' ανακαλύψουν τις δυνάμεις τους με αυτοπεποίθηση και να πετύχουν τους στόχους τους — προσωπικούς, επαγγελματικούς ή συναισθηματικούς.</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-navy-gradient text-ivory py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="eyebrow mb-6">Οι Αξίες μου</p>
            <h2 className="font-serif text-4xl lg:text-5xl">Η βάση κάθε συνεργασίας.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="luxury-card p-8">
                <div className="hairline w-12 mb-6" />
                <h3 className="font-serif text-2xl mb-3 text-gold">{v.title}</h3>
                <p className="text-sm text-ivory/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-ivory text-ink py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Πιστοποιήσεις & Εκπαίδευση</p>
          <h2 className="font-serif text-3xl lg:text-4xl mb-12">Συνεχής εκπαίδευση. Διαρκής εξέλιξη.</h2>
          <ul className="space-y-4">
            {certs.map((c) => (
              <li key={c} className="flex items-start gap-4 border-b border-taupe/30 pb-4">
                <Check size={18} className="text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <span className="text-[15px] text-ink/80">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EXPERIENCE & SUPERVISION */}
      <section className="bg-champagne text-ink py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Επαγγελματική πορεία & Εποπτεία</p>
          <h2 className="font-serif text-3xl lg:text-4xl mb-12">Πλαίσιο, εποπτεία & αρθρογραφία.</h2>
          <ul className="space-y-6">
            {experience.map((e) => (
              <li key={e.role + e.org} className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 border-b border-taupe/30 pb-6">
                <span className="eyebrow !text-[color:var(--navy-deep)]/60 text-[10.5px]">{e.period}</span>
                <div>
                  <p className="font-serif text-lg text-navy-deep leading-snug">{e.role}</p>
                  <p className="text-[14px] text-ink/65 mt-1">{e.org}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[14px] text-ink/65 italic">
            Διαβάστε άρθρα μου στην ενότητα <Link to="/arthra" className="text-gold hover:text-navy-deep transition-colors underline underline-offset-4">Άρθρα</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep text-ivory py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl">Ας <em className="not-italic text-gold-gradient">συνεργαστούμε.</em></h2>
          <p className="mt-4 text-ivory/65">Αν είσαι έτοιμος/η να κάνεις το πρώτο βήμα προς την αλλαγή, θα χαρώ να σε υποστηρίξω στο ταξίδι σου.</p>
          <Link to="/contact" className="btn-gold mt-10 inline-flex">Κλείσε μια πρώτη συνάντηση</Link>
        </div>
      </section>
    </>
  );
}
