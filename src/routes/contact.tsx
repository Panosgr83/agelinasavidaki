import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Επικοινωνία — Αγγελική Σαββιδάκη | Δήλου 2, Γαλάτσι" },
      { name: "description", content: "Κάνε το πρώτο βήμα προς την αλλαγή. Δήλου 2, 11146 Γαλάτσι — δια ζώσης ή online συνεδρίες coaching & NLP." },
      { property: "og:title", content: "Επικοινωνία — Αγγελική Σαββιδάκη" },
      { property: "og:description", content: "Δήλου 2, 11146 Γαλάτσι. Κάνε το πρώτο βήμα προς την αλλαγή." },
      { property: "og:url", content: "https://agelinasavidaki.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://agelinasavidaki.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Αγγελική Σαββιδάκη — Life & NLP Coach",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Δήλου 2",
            postalCode: "11146",
            addressLocality: "Γαλάτσι",
            addressRegion: "Αττική",
            addressCountry: "GR",
          },
          geo: { "@type": "GeoCoordinates", latitude: 38.0211, longitude: 23.7506 },
          telephone: "+30 690 000 0000",
          url: "https://agelinasavidaki.lovable.app/contact",
        }),
      },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "Τι είναι το Coaching και πώς διαφέρει από την ψυχοθεραπεία;",
    a: "Το Coaching είναι μία διαδικασία καθοδήγησης και προσωπικής ανάπτυξης. Δεν είναι ψυχοθεραπεία. Ο Coach δε δίνει έτοιμες λύσεις — σε βοηθά να βρεις δικές σου. Μέσα από στοχευμένες ερωτήσεις, πρακτικά εργαλεία και ουσιαστική επικοινωνία, σε καθοδηγεί να δεις καθαρά ποιος/ά είσαι, τι θέλεις και πώς μπορείς να το καταφέρεις.",
  },
  {
    q: "Πόσες συνεδρίες χρειάζομαι;",
    a: "Ο αριθμός των συνεδριών εξαρτάται από τους στόχους σου και την πολυπλοκότητα των θεμάτων που θέλεις να αντιμετωπίσεις. Συνήθως, μια διαδικασία coaching περιλαμβάνει 6-12 συνεδρίες, αλλά μπορεί να προσαρμοστεί στις ανάγκες σου.",
  },
  {
    q: "Πώς γίνονται οι συνεδρίες;",
    a: "Οι συνεδρίες μπορούν να γίνουν δια ζώσης ή online μέσω video call, ανάλογα με τις προτιμήσεις και τις ανάγκες σου. Κάθε συνεδρία διαρκεί περίπου 60-90 λεπτά.",
  },
  {
    q: "Είναι εμπιστευτικές οι συνεδρίες;",
    a: "Απόλυτα. Η εμπιστευτικότητα είναι θεμελιώδης αρχή του coaching. Ό,τι συζητάμε στις συνεδρίες μας παραμένει αυστηρά εμπιστευτικό.",
  },
  {
    q: "Πώς ξέρω αν το Coaching είναι κατάλληλο για μένα;",
    a: "Αν αισθάνεσαι ότι θέλεις να κάνεις αλλαγές στη ζωή σου, να ξεπεράσεις εμπόδια ή να πετύχεις συγκεκριμένους στόχους, το coaching μπορεί να σε βοηθήσει. Ξεκινάμε με μια πρώτη συνάντηση γνωριμίας για να δούμε αν η συνεργασία μας ταιριάζει.",
  },
];

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="bg-navy-gradient text-ivory pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
          <p className="eyebrow mb-6">Επικοινωνία</p>
          <h1 className="font-serif text-5xl lg:text-6xl leading-tight">
            Κάνε το πρώτο βήμα<br/>
            <em className="not-italic text-gold-gradient">προς την αλλαγή.</em>
          </h1>
          <p className="mt-8 text-ivory/70 max-w-xl mx-auto">
            Κλείσε μια πρώτη συνάντηση γνωριμίας ή στείλε μου ένα μήνυμα. Θα σου απαντήσω προσωπικά.
          </p>
        </div>
      </section>

      <section className="bg-ivory text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-[1.4fr_1fr] gap-16">
          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="bg-white p-8 lg:p-12 border border-taupe/30 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Όνομα *" name="name" required />
              <Field label="Email *" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Τηλέφωνο" name="phone" />
              <div>
                <label className="block text-[11px] tracking-[0.22em] uppercase text-ink/60 mb-2">Ενδιαφέρον για</label>
                <select className="w-full bg-transparent border-b border-taupe/50 py-3 focus:border-gold focus:outline-none text-ink">
                  <option>Επίλεξε υπηρεσία</option>
                  <option>Life Coaching</option>
                  <option>NLP</option>
                  <option>Relationship Coaching</option>
                  <option>Parent Coaching</option>
                  <option>Executive Coaching</option>
                  <option>Επαγγελματικός Προσανατολισμός</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.22em] uppercase text-ink/60 mb-2">Μήνυμα *</label>
              <textarea
                rows={5}
                required
                className="w-full bg-transparent border-b border-taupe/50 py-3 focus:border-gold focus:outline-none resize-none text-ink"
              />
            </div>
            <button type="submit" className="btn-gold w-full sm:w-auto">Αποστολή Μηνύματος</button>
          </form>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl mb-2">Άλλες επιλογές</h3>
              <p className="text-sm text-ink/60">Επικοινώνησε όπως σε εξυπηρετεί.</p>
            </div>

            <a href="https://wa.me/306900000000" className="luxury-card-light p-6 flex items-start gap-4 group">
              <div className="h-11 w-11 grid place-items-center border border-gold/50 text-gold shrink-0"><MessageCircle size={18} strokeWidth={1.3} /></div>
              <div>
                <p className="eyebrow !text-[color:var(--navy-deep)]/60 mb-1">WhatsApp</p>
                <p className="font-serif text-lg group-hover:text-gold transition-colors">Άμεση επικοινωνία</p>
              </div>
            </a>

            <a href="tel:+306900000000" className="luxury-card-light p-6 flex items-start gap-4 group">
              <div className="h-11 w-11 grid place-items-center border border-gold/50 text-gold shrink-0"><Phone size={18} strokeWidth={1.3} /></div>
              <div>
                <p className="eyebrow !text-[color:var(--navy-deep)]/60 mb-1">Κλήση</p>
                <p className="font-serif text-lg group-hover:text-gold transition-colors">+30 690 000 0000</p>
              </div>
            </a>

            <a href="mailto:info@angeliki.gr" className="luxury-card-light p-6 flex items-start gap-4 group">
              <div className="h-11 w-11 grid place-items-center border border-gold/50 text-gold shrink-0"><Mail size={18} strokeWidth={1.3} /></div>
              <div>
                <p className="eyebrow !text-[color:var(--navy-deep)]/60 mb-1">Email</p>
                <p className="font-serif text-lg group-hover:text-gold transition-colors">info@angeliki.gr</p>
              </div>
            </a>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-champagne text-ink py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Συχνές Ερωτήσεις</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-12">Απαντήσεις στις πιο συχνές ερωτήσεις.</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-taupe/30">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-serif text-lg pr-4">{f.q}</span>
                  <ChevronDown size={18} className={`text-gold shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-[15px] leading-relaxed text-ink/75 fade-up">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.22em] uppercase text-ink/60 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-taupe/50 py-3 focus:border-gold focus:outline-none text-ink"
      />
    </div>
  );
}
