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
    title: "Life Coach",
    subtitle: "Συμβουλευτική Προσωπικής Ανάπτυξης",
    intro: "Το Life Coaching εστιάζει στο πώς μπορείς να βελτιώσεις την καθημερινότητά σου, να διαχειριστείς το άγχος, να θέσεις ρεαλιστικούς στόχους και να ζήσεις πιο συνειδητά.",
    sectionTitle: "Γιατί χρειάζεσαι Life Coaching;",
    sectionBody: "Πολλοί άνθρωποι νιώθουν εγκλωβισμένοι σ' έναν τρόπο ζωής που δεν τους εκφράζει πια. Ζουν μηχανικά, χωρίς να αισθάνονται ότι έχουν τον έλεγχο της ζωής τους. Μαζί δουλεύουμε για να ξαναβρείς πυξίδα, νόημα και ενέργεια.",
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
  "mindfulness": {
    title: "Mindfulness",
    subtitle: "Ενσυνειδητότητα & παρουσία στο τώρα",
    intro: "Το Mindfulness είναι η τέχνη να ζεις στο παρόν με επίγνωση, χωρίς κρίση. Μέσα από απλές, καθημερινές πρακτικές μαθαίνεις να παρατηρείς τις σκέψεις και τα συναισθήματά σου και ν' απαντάς με συνείδηση αντί να αντιδράς αυτόματα.",
    sectionTitle: "Γιατί Mindfulness;",
    sectionBody: "Στον σημερινό ρυθμό ζωής, ο νους μας τρέχει συνεχώς ανάμεσα σε υποχρεώσεις, ανησυχίες και ψηφιακούς ερεθισμούς. Το αποτέλεσμα είναι κούραση, άγχος και η αίσθηση ότι «κάτι λείπει». Με τις τεχνικές mindfulness κατεβάζεις ταχύτητα, αναπνέεις και ξαναβρίσκεις την επαφή με τον εαυτό σου.",
    howTitle: "Τι θα μάθεις;",
    how: [
      "Τεχνικές αναπνοής & εστίασης",
      "Σύντομες πρακτικές διαλογισμού",
      "Παρατήρηση σκέψεων χωρίς κρίση",
      "Ενσυνείδητη καθημερινότητα",
      "Ηρεμία στις στιγμές πίεσης",
    ],
    benefits: ["Καθαρότερο μυαλό", "Λιγότερο άγχος", "Καλύτερος ύπνος", "Συναισθηματική ισορροπία"],
  },
  "stress-management": {
    title: "Διαχείριση Άγχους",
    subtitle: "Εργαλεία για να ξαναπάρεις τον έλεγχο",
    intro: "Το άγχος δεν είναι εχθρός — γίνεται όμως πρόβλημα όταν εγκαθίσταται μόνιμα στο σώμα και τον νου. Σε βοηθώ να αναγνωρίσεις τις πηγές του και να αποκτήσεις πρακτικά εργαλεία ώστε να μην σε κυβερνά πια.",
    sectionTitle: "Πώς θα δουλέψουμε μαζί;",
    sectionBody: "Συνδυάζουμε τεχνικές coaching, NLP και mindfulness για να εντοπίσουμε τις σκέψεις και συμπεριφορές που τροφοδοτούν το άγχος. Δημιουργούμε ένα προσωπικό «σχέδιο ηρεμίας» που εφαρμόζεις στην καθημερινότητά σου και αξιολογούμε μαζί την πρόοδο.",
    howTitle: "Σε ποιους απευθύνεται;",
    how: [
      "Άτομα με χρόνιο stress ή burnout",
      "Επαγγελματίες με υψηλές απαιτήσεις",
      "Γονείς που νιώθουν εξάντληση",
      "Φοιτητές & εφήβους σε περιόδους πίεσης",
      "Όσους θέλουν προληπτική αυτοφροντίδα",
    ],
    benefits: ["Ηρεμία & ξεκούραση", "Καλύτερος ύπνος", "Καθαρή σκέψη", "Έλεγχος αντιδράσεων"],
  },
  "parent-coaching": {
    title: "Συμβουλευτική Γονέων",
    subtitle: "Parent Coaching",
    intro: "Το Parent Coaching απευθύνεται σε γονείς που θέλουν να βελτιώσουν τη σχέση με τα παιδιά τους και να ασκούν τον γονεϊκό τους ρόλο με μεγαλύτερη συνείδηση και λιγότερες ενοχές.",
    sectionTitle: "Τι θα πετύχουμε μαζί;",
    sectionBody: "Θα μάθεις να θέτεις υγιή όρια, να επικοινωνείς αποτελεσματικά με το παιδί σου σε κάθε ηλικία και να χτίζεις βαθιά, αληθινή σύνδεση. Δουλεύουμε σε πραγματικές καταστάσεις της καθημερινότητας — από κρίσεις θυμού μέχρι την εφηβεία.",
    howTitle: "Πάνω σε τι εστιάζουμε;",
    how: [
      "Υγιή όρια χωρίς ενοχές",
      "Ενεργητική ακρόαση",
      "Διαχείριση συγκρούσεων",
      "Αυτονόμηση του παιδιού",
      "Συνεργατική γονεϊκότητα ζευγαριού",
    ],
    benefits: ["Καλύτερη γονεϊκότητα", "Κατανόηση παιδιών", "Δυνατές σχέσεις", "Ήρεμα σπίτια"],
  },
  "relationship-coaching": {
    title: "Συμβουλευτική Σχέσεων",
    subtitle: "Relationship Coaching",
    intro: "Ως Relationship Coach, βοηθώ άτομα και ζευγάρια να επικοινωνούν ουσιαστικά, να ξαναχτίζουν εμπιστοσύνη και να καλλιεργούν σχέσεις που τους τρέφουν αντί να τους εξαντλούν.",
    sectionTitle: "Γιατί οι σχέσεις χρειάζονται coaching;",
    sectionBody: "Οι σχέσεις χρειάζονται συνειδητή φροντίδα — δεν αρκεί η αγάπη, χρειάζεται και καλή επικοινωνία, σαφή όρια και αμοιβαία κατανόηση. Δουλεύουμε πάνω σε μοτίβα που επαναλαμβάνονται, στις προσδοκίες και στον τρόπο που εκφράζεις τις ανάγκες σου.",
    howTitle: "Με τι ασχολούμαστε;",
    how: [
      "Επικοινωνία χωρίς συγκρούσεις",
      "Επανασύνδεση & εμπιστοσύνη",
      "Όρια σε τοξικές δυναμικές",
      "Διαχείριση ζήλιας & ανασφάλειας",
      "Επιλογή υγιών συντρόφων",
    ],
    benefits: ["Βαθύτερη σύνδεση", "Ουσιαστική επικοινωνία", "Εμπιστοσύνη", "Συναισθηματική ασφάλεια"],
  },
  "career-orientation": {
    title: "Σύμβουλος Ε.Π.",
    subtitle: "Επαγγελματικός Προσανατολισμός εφήβων & ενηλίκων",
    intro: "Στηρίζω εφήβους, φοιτητές και ενήλικες που αναζητούν την επαγγελματική πορεία που τους ταιριάζει — είτε πρόκειται για επιλογή σπουδών είτε για αλλαγή καριέρας.",
    sectionTitle: "Πώς λειτουργεί;",
    sectionBody: "Μέσα από τεστ ενδιαφερόντων, δομημένη συζήτηση και ανάλυση δεξιοτήτων, ανακαλύπτουμε μαζί ποια κατεύθυνση συνδέεται πραγματικά με τις αξίες, τα ταλέντα και τα όνειρά σου. Φεύγεις με ξεκάθαρο πλάνο επόμενων βημάτων.",
    howTitle: "Σε ποιους απευθύνεται;",
    how: [
      "Έφηβοι πριν τις πανελλήνιες",
      "Φοιτητές που αμφιβάλλουν για τη σχολή τους",
      "Ενήλικες σε επαγγελματική αλλαγή",
      "Άτομα μετά από απόλυση ή burnout",
      "Όσους ψάχνουν νόημα στη δουλειά τους",
    ],
    benefits: ["Ανακάλυψη κλίσεων", "Ξεκάθαροι στόχοι", "Αυθεντική επιλογή", "Επαγγελματική ικανοποίηση"],
  },
  "hr-consulting": {
    title: "Σύμβουλος Ανθρώπινου Δυναμικού (HR)",
    subtitle: "HR Consulting & Coaching",
    intro: "Συνεργάζομαι με επιχειρήσεις και επαγγελματίες HR για να αναδείξουμε το ανθρώπινο δυναμικό τους, να βελτιώσουμε το εργασιακό κλίμα και να μειώσουμε το burnout και το turnover.",
    sectionTitle: "Τι προσφέρω;",
    sectionBody: "Από εξατομικευμένο coaching σε στελέχη και ομάδες, μέχρι σχεδιασμό προγραμμάτων ευεξίας και ανάπτυξης δεξιοτήτων. Συνδυάζω εργαλεία NLP, coaching και οργανωσιακής ψυχολογίας για μετρήσιμα αποτελέσματα.",
    howTitle: "Υπηρεσίες προς εταιρείες:",
    how: [
      "1:1 coaching σε στελέχη",
      "Workshops διαχείρισης άγχους",
      "Ομαδική συνοχή & επικοινωνία",
      "Onboarding & retention strategy",
      "Πρόληψη burnout",
    ],
    benefits: ["Ισχυρές ομάδες", "Λιγότερο turnover", "Καλύτερη ηγεσία", "Θετική κουλτούρα"],
  },
  "nlp": {
    title: "NLP",
    subtitle: "Νευρογλωσσικός Προγραμματισμός",
    intro: "Το NLP είναι ένα σύνολο τεκμηριωμένων τεχνικών που μας βοηθά να κατανοήσουμε πώς λειτουργεί ο νους μας και πώς μπορούμε να τον αναπρογραμματίσουμε για να ζούμε καλύτερα.",
    sectionTitle: "Τι είναι το NLP;",
    sectionBody: "Μέσα από ασκήσεις NLP μαθαίνουμε να αλλάζουμε περιοριστικές πεποιθήσεις, να ενισχύουμε την αυτοπεποίθησή μας και ν' αντιμετωπίζουμε με πιο θετικό τρόπο τις προκλήσεις της ζωής. Είναι ένα από τα πιο πρακτικά εργαλεία προσωπικής αλλαγής.",
    howTitle: "Πώς μπορεί να σε βοηθήσει;",
    how: [
      "Αλλαγή κακών συνηθειών",
      "Διαχείριση συναισθημάτων",
      "Βελτίωση επικοινωνίας",
      "Επίτευξη στόχων",
      "Ξεπέρασμα φοβιών & τραυμάτων",
    ],
    benefits: ["Αλλαγή πεποιθήσεων", "Αυτοπεποίθηση", "Νέες δεξιότητες", "Θετική νοοτροπία"],
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
                {service.how.map((h: string) => (
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
            {service.benefits.map((b: string) => (
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
