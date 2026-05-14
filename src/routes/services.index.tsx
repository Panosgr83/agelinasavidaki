import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
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
  { slug: "life-coaching", title: "Life Coach", subtitle: "Συμβουλευτική Προσωπικής Ανάπτυξης", desc: "Βελτίωσε την καθημερινότητά σου, διαχειρίσου το άγχος και ζήσε πιο συνειδητά." },
  { slug: "o-xartis", title: "Ο «Χάρτης»", subtitle: "Signature πρόγραμμα αυτογνωσίας", desc: "Ξεκαθάρισε ποιος/ποια είσαι, τι σε κινητοποιεί και πώς να φτάσεις εκεί που θέλεις." },
  { slug: "nlp", title: "NLP", subtitle: "Νευρογλωσσικός Προγραμματισμός", desc: "Άλλαξε περιοριστικές πεποιθήσεις και ενίσχυσε την αυτοπεποίθησή σου." },
  { slug: "agkyrosi", title: "Αγκύρωση", subtitle: "NLP τεχνική για άμεση ηρεμία", desc: "Σύνδεσε ένα ερέθισμα με αίσθηση ηρεμίας και επανέφερε γρήγορα την εστίασή σου." },
  { slug: "ypo-idiotites", title: "Υπο-Ιδιότητες", subtitle: "Αλλαγή συνηθειών μέσω NLP", desc: "Δούλεψε με τα διαφορετικά «μέρη» του εαυτού σου για διαρκή αλλαγή συνηθειών." },
  { slug: "mindfulness", title: "Mindfulness", subtitle: "Ενσυνειδητότητα & παρουσία", desc: "Πρακτικές για να ζεις στο τώρα με επίγνωση, ηρεμία και καθαρό μυαλό." },
  { slug: "stress-management", title: "Διαχείριση Άγχους", subtitle: "Εργαλεία ηρεμίας & ισορροπίας", desc: "Πρακτικά εργαλεία για να μην σε κυβερνά πια το άγχος της καθημερινότητας." },
  { slug: "parent-coaching", title: "Συμβουλευτική Γονέων", subtitle: "Parent Coaching", desc: "Γίνε ο γονιός που θέλεις να είσαι, με υγιή όρια και βαθιά σύνδεση." },
  { slug: "relationship-coaching", title: "Συμβουλευτική Σχέσεων", subtitle: "Relationship Coaching", desc: "Χτίσε υγιείς, ουσιαστικές σχέσεις βασισμένες στην εμπιστοσύνη." },
  { slug: "career-orientation-teens", title: "Επαγγ. Προσανατολισμός Εφήβων", subtitle: "Για μαθητές Λυκείου & φοιτητές", desc: "Στοχευμένα τεστ και καθοδήγηση για συνειδητές αποφάσεις σπουδών." },
  { slug: "career-orientation-adults", title: "Επαγγ. Προσανατολισμός Ενηλίκων", subtitle: "Αλλαγή καριέρας με στρατηγική", desc: "Ξεκαθάρισε τι σου ταιριάζει πραγματικά και κάνε τη μετάβαση με αυτοπεποίθηση." },
  { slug: "cv-interview", title: "Βιογραφικό & Interview", subtitle: "CV writing & mock interview coaching", desc: "Σωστά οργανωμένο CV και προετοιμασία συνέντευξης που σε αναδεικνύει." },
  { slug: "hr-consulting", title: "Σύμβουλος Ανθρώπινου Δυναμικού", subtitle: "HR Consulting", desc: "Coaching σε στελέχη και ομάδες, πρόληψη burnout και θετική κουλτούρα." },
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
