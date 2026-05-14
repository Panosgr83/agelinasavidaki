import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Υπηρεσίες — Αγγελική Σαββιδάκη" },
      { name: "description", content: "Ολοκληρωμένη υποστήριξη: Life, NLP, Relationship, Parent, Executive Coaching και Επαγγελματικός Προσανατολισμός." },
      { property: "og:title", content: "Υπηρεσίες — Αγγελική Σαββιδάκη" },
      { property: "og:description", content: "Premium coaching σε κάθε τομέα της ζωής σου." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { slug: "life-coaching", title: "Life Coaching", subtitle: "Συμβουλευτική Προσωπικής Ανάπτυξης", desc: "Βελτίωσε την καθημερινότητά σου, διαχειρίσου το άγχος και ζήσε πιο συνειδητά." },
  { slug: "nlp", title: "NLP", subtitle: "Νευρογλωσσικός Προγραμματισμός", desc: "Άλλαξε περιοριστικές πεποιθήσεις και ενίσχυσε την αυτοπεποίθησή σου." },
  { slug: "relationship-coaching", title: "Relationship Coaching", subtitle: "Σύμβουλος Σχέσεων", desc: "Χτίσε υγιείς, ουσιαστικές σχέσεις βασισμένες στην εμπιστοσύνη." },
  { slug: "parent-coaching", title: "Parent Coaching", subtitle: "Συμβουλευτική Γονέων", desc: "Γίνε ο γονιός που θέλεις να είσαι, με υγιή όρια και βαθιά σύνδεση." },
  { slug: "executive-coaching", title: "Executive Coaching", subtitle: "Συμβουλευτική Επιχειρήσεων", desc: "Ηγεσία με ισορροπία, στρατηγική σκέψη και επαγγελματική εξέλιξη." },
  { slug: "career-orientation", title: "Επαγγελματικός Προσανατολισμός", subtitle: "Σύμβουλος Καριέρας", desc: "Βρες την πορεία που ταιριάζει στις αξίες και τα όνειρά σου." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-navy-gradient text-ivory pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
          <p className="eyebrow mb-6">Υπηρεσίες</p>
          <h1 className="font-serif text-5xl lg:text-6xl leading-tight">
            Ολοκληρωμένη υποστήριξη<br/>
            <em className="not-italic text-gold-gradient">σε κάθε τομέα της ζωής σου.</em>
          </h1>
          <p className="mt-8 text-ivory/70 max-w-xl mx-auto">
            Επιλεγμένα προγράμματα coaching για ανθρώπους που επιλέγουν συνειδητά να εξελιχθούν.
          </p>
        </div>
      </section>

      <section className="bg-ivory text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="luxury-card-light p-10 group flex flex-col"
            >
              <span className="eyebrow !text-[color:var(--navy-deep)]/40 mb-6">0{i + 1}</span>
              <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-5">{s.subtitle}</p>
              <p className="text-sm text-ink/65 leading-relaxed flex-1">{s.desc}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-navy-deep group-hover:text-gold group-hover:gap-3 transition-all">
                Διάβασε περισσότερα <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
