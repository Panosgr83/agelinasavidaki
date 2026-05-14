import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

type Service = {
  title: string;
  subtitle: string;
  intro: string;
  sectionTitle: string;
  sectionBody: string;
  howTitle?: string;
  how?: string[];
  benefits: string[];
};

const services: Record<string, Service> = {
  "life-coaching": {
    title: "Life Coaching",
    subtitle: "Συμβουλευτική Προσωπικής Ανάπτυξης",
    intro: "Το Life Coaching εστιάζει στο πώς μπορείς να βελτιώσεις την καθημερινότητά σου, να διαχειριστείς το άγχος, να θέσεις ρεαλιστικούς στόχους και να ζήσεις πιο συνειδητά.",
    sectionTitle: "Γιατί χρειάζεσαι Life Coaching;",
    sectionBody: "Πολλοί άνθρωποι νιώθουν εγκλωβισμένοι σ' έναν τρόπο ζωής που δεν τους εκφράζει πια. Ζουν μηχανικά, χωρίς να αισθάνονται ότι έχουν τον έλεγχο της ζωής τους.",
    howTitle: "Πώς λειτουργεί;",
    how: [
      "Κατανόηση των πραγματικών σου αναγκών",
      "Θέσιμο ρεαλιστικών στόχων",
      "Διαχείριση άγχους και στρες",
      "Ενίσχυση αυτοπεποίθησης",
      "Συνειδητή ζωή με νόημα",
    ],
    benefits: ["Καλύτερη ισορροπία ζωής", "Διαχείριση άγχους", "Ξεκάθαρη κατεύθυνση", "Αυτογνωσία"],
  },
  "nlp": {
    title: "NLP",
    subtitle: "Νευρογλωσσικός Προγραμματισμός",
    intro: "Το NLP είναι ένα σύνολο τεχνικών που μας βοηθά να κατανοήσουμε πώς λειτουργεί ο νους μας.",
    sectionTitle: "Τι είναι το NLP;",
    sectionBody: "Μέσα από ασκήσεις NLP μαθαίνουμε να αλλάζουμε περιοριστικές πεποιθήσεις, να ενισχύουμε την αυτοπεποίθησή μας και ν' αντιμετωπίζουμε με πιο θετικό τρόπο τις προκλήσεις της ζωής.",
    howTitle: "Πώς μπορεί να σε βοηθήσει;",
    how: [
      "Αλλαγή κακών συνηθειών",
      "Διαχείριση συναισθημάτων",
      "Βελτίωση επικοινωνίας",
      "Επίτευξη στόχων",
      "Ξεπέρασμα τραυμάτων",
    ],
    benefits: ["Αλλαγή πεποιθήσεων", "Αυτοπεποίθηση", "Νέες δεξιότητες", "Θετική νοοτροπία"],
  },
  "relationship-coaching": {
    title: "Relationship Coaching",
    subtitle: "Σύμβουλος Σχέσεων",
    intro: "Ως Relationship Coach, βοηθώ άτομα και ζευγάρια να επικοινωνούν ουσιαστικά και να ξαναχτίζουν εμπιστοσύνη.",
    sectionTitle: "Γιατί οι σχέσεις χρειάζονται coaching;",
    sectionBody: "Οι σχέσεις χρειάζονται συνειδητή φροντίδα — δεν αρκεί η αγάπη, χρειάζεται και καλή επικοινωνία.",
    benefits: ["Βαθύτερη σύνδεση", "Ουσιαστική επικοινωνία", "Εμπιστοσύνη", "Συναισθηματική ασφάλεια"],
  },
  "parent-coaching": {
    title: "Parent Coaching",
    subtitle: "Συμβουλευτική Γονέων",
    intro: "Το Parent Coaching απευθύνεται σε γονείς που θέλουν να βελτιώσουν τη σχέση με τα παιδιά τους.",
    sectionTitle: "Τι θα πετύχουμε μαζί;",
    sectionBody: "Θα μάθεις να θέτεις υγιή όρια, να επικοινωνείς αποτελεσματικά και να χτίζεις βαθιά σύνδεση με τα παιδιά σου.",
    benefits: ["Καλύτερη γονεϊκότητα", "Κατανόηση παιδιών", "Δυνατές σχέσεις", "Ήρεμα σπίτια"],
  },
  "executive-coaching": {
    title: "Executive Coaching",
    subtitle: "Συμβουλευτική Επιχειρήσεων",
    intro: "Το Executive Coaching αφορά ανθρώπους που θέλουν ν' αναπτυχθούν επαγγελματικά.",
    sectionTitle: "Για ποιους είναι;",
    sectionBody: "Στελέχη, επιχειρηματίες και ομάδες που επιθυμούν να αναπτύξουν δεξιότητες ηγεσίας και να βρουν ισορροπία.",
    benefits: ["Ηγετικές δεξιότητες", "Διαχείριση χρόνου", "Επαγγελματική ανάπτυξη", "Ζωή με ισορροπία"],
  },
  "career-orientation": {
    title: "Επαγγελματικός Προσανατολισμός",
    subtitle: "Σύμβουλος Καριέρας",
    intro: "Στηρίζω νέους και ενήλικες που αναζητούν την πορεία που τους ταιριάζει.",
    sectionTitle: "Πώς λειτουργεί;",
    sectionBody: "Μέσα από τεστ ενδιαφερόντων, συζήτηση και ανάλυση δεξιοτήτων, ανακαλύπτουμε μαζί ποια επαγγελματική κατεύθυνση συνδέεται πραγματικά με τις αξίες και τα όνειρά σου.",
    benefits: ["Ανακάλυψη κλίσεων", "Ξεκάθαροι στόχοι", "Αυθεντική επιλογή", "Επαγγελματική ικανοποίηση"],
  },
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const s = services[params.slug];
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Αγγελική Σαββιδάκη` },
          { name: "description", content: loaderData.service.intro },
          { property: "og:title", content: `${loaderData.service.title} — Αγγελική Σαββιδάκη` },
          { property: "og:description", content: loaderData.service.intro },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-navy-gradient text-ivory">
      <div className="text-center">
        <h1 className="font-serif text-4xl">Δεν βρέθηκε</h1>
        <Link to="/services" className="btn-outline-gold mt-8 inline-flex">Όλες οι υπηρεσίες</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center text-ink">
      <p>{error.message}</p>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <section className="bg-navy-gradient text-ivory pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold/80 hover:text-gold mb-10">
            <ArrowLeft size={14} /> Πίσω στις υπηρεσίες
          </Link>
          <p className="eyebrow mb-6">{service.subtitle}</p>
          <h1 className="font-serif text-5xl lg:text-6xl leading-tight">
            <em className="not-italic text-gold-gradient">{service.title}</em>
          </h1>
          <p className="mt-8 text-lg text-ivory/75 leading-relaxed max-w-2xl font-serif italic">
            {service.intro}
          </p>
        </div>
      </section>

      <section className="bg-ivory text-ink py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="font-serif text-3xl lg:text-4xl mb-6">{service.sectionTitle}</h2>
          <p className="text-[15px] leading-[1.85] text-ink/80 max-w-2xl">{service.sectionBody}</p>

          {service.how && (
            <div className="mt-16">
              <h3 className="font-serif text-2xl mb-8">{service.howTitle}</h3>
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {service.how.map((h) => (
                  <li key={h} className="flex items-start gap-3 border-b border-taupe/30 pb-4">
                    <Check size={16} className="text-gold mt-1 shrink-0" strokeWidth={1.5} />
                    <span className="text-[15px] text-ink/80">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="bg-champagne text-ink py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Τα οφέλη</p>
          <h2 className="font-serif text-3xl lg:text-4xl mb-12">Τι θα κερδίσεις από τη συνεργασία μας.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.benefits.map((b) => (
              <div key={b} className="bg-white border border-gold/30 p-6 text-center">
                <p className="font-serif text-lg text-navy-deep">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep text-ivory py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl">Έτοιμος/η να <em className="not-italic text-gold-gradient">ξεκινήσεις;</em></h2>
          <Link to="/contact" className="btn-gold mt-10 inline-flex">Κλείσε ραντεβού</Link>
        </div>
      </section>
    </>
  );
}
