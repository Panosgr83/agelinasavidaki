import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/gdpr")({
  head: () => ({
    meta: [
      { title: "Πολιτική Απορρήτου & Όροι Χρήσης (GDPR) | Αγγελική Σαββιδάκη" },
      {
        name: "description",
        content:
          "Πολιτική απορρήτου, GDPR, όροι χρήσης και διαχείριση συγκατάθεσης μαρτυριών για το agelinasavidaki.lovable.app.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Πολιτική Απορρήτου & Όροι Χρήσης" },
      {
        property: "og:description",
        content:
          "Πώς διαχειριζόμαστε τα προσωπικά σου δεδομένα, τις μαρτυρίες πελατών και τα δικαιώματά σου σύμφωνα με τον GDPR.",
      },
      { property: "og:url", content: "https://agelinasavidaki.lovable.app/gdpr" },
    ],
    links: [{ rel: "canonical", href: "https://agelinasavidaki.lovable.app/gdpr" }],
  }),
  component: GdprPage,
});

function GdprPage() {
  return (
    <>
      <section className="bg-navy-gradient text-ivory pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <p className="eyebrow mb-6">Νομικά</p>
          <h1 className="font-serif text-4xl lg:text-5xl leading-tight">
            Πολιτική <em className="not-italic text-gold-gradient">Απορρήτου</em> &amp; Όροι Χρήσης
          </h1>
          <p className="mt-6 text-ivory/70 text-[15px]">
            Τελευταία ενημέρωση: {new Date().toLocaleDateString("el-GR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="bg-ivory text-ink py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-12 space-y-12 text-[16px] leading-[1.85] text-ink/85">
          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-navy-deep mb-4">1. Υπεύθυνη επεξεργασίας</h2>
            <p>
              Υπεύθυνη επεξεργασίας δεδομένων είναι η <strong>Αγγελική Σαββιδάκη</strong>, Life &amp; NLP Coach,
              Δήλου 2, 11146 Γαλάτσι. Επικοινωνία: <a href="mailto:aggisav@hotmail.com" className="text-navy-deep underline hover:text-gold">aggisav@hotmail.com</a> · <a href="tel:+306972258578" className="text-navy-deep underline hover:text-gold">+30 6972 258 578</a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-navy-deep mb-4">2. Ποια δεδομένα συλλέγουμε</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Στοιχεία επικοινωνίας που υποβάλλεις εθελοντικά (όνομα, email, τηλέφωνο, μήνυμα) μέσω της φόρμας ή απευθείας επικοινωνίας.</li>
              <li>Δεδομένα συνεδριών (σημειώσεις) που τηρούνται με αυστηρή εμπιστευτικότητα και χρησιμοποιούνται αποκλειστικά για την παροχή του coaching.</li>
              <li>Τεχνικά δεδομένα περιήγησης (anonymized) για στατιστικούς λόγους — δεν χρησιμοποιούνται tracking cookies τρίτων χωρίς ξεχωριστή συγκατάθεση.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-navy-deep mb-4">3. Σκοπός &amp; νομική βάση</h2>
            <p>
              Επεξεργαζόμαστε τα δεδομένα σου για: (α) απάντηση σε αιτήματα επικοινωνίας, (β) προγραμματισμό &amp;
              παροχή συνεδριών, (γ) εκπλήρωση φορολογικών υποχρεώσεων. Νομική βάση: η εκτέλεση σύμβασης (αρ. 6 §1 β GDPR),
              η συγκατάθεσή σου (αρ. 6 §1 α) και η συμμόρφωση με νομικές υποχρεώσεις (αρ. 6 §1 γ).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-navy-deep mb-4">4. Μαρτυρίες πελατών (testimonials)</h2>
            <p>
              Καμία μαρτυρία δεν δημοσιεύεται χωρίς <strong>ρητή, τεκμηριωμένη γραπτή συγκατάθεση</strong> του ατόμου
              που τη δίνει. Για κάθε μαρτυρία τηρούμε:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>γραπτή άδεια δημοσίευσης (email ή υπογεγραμμένη φόρμα),</li>
              <li>ημερομηνία λήψης συγκατάθεσης,</li>
              <li>συμφωνημένο τρόπο αναφοράς ονόματος (π.χ. αρχικά, μικρό όνομα, ή πλήρες όνομα).</li>
            </ul>
            <p className="mt-3">
              Μπορείς ανά πάσα στιγμή να ανακαλέσεις τη συγκατάθεσή σου στέλνοντας email στο{" "}
              <a href="mailto:aggisav@hotmail.com" className="text-navy-deep underline hover:text-gold">aggisav@hotmail.com</a>{" "}
              και η μαρτυρία θα αφαιρεθεί άμεσα.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-navy-deep mb-4">5. Διατήρηση δεδομένων</h2>
            <p>
              Τα στοιχεία επικοινωνίας διατηρούνται όσο διαρκεί η συνεργασία μας και έως 5 έτη μετά, για λόγους
              φορολογικής συμμόρφωσης. Οι σημειώσεις συνεδριών διαγράφονται κατόπιν αιτήματός σου ή το αργότερο 2 έτη
              μετά την τελευταία συνάντηση.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-navy-deep mb-4">6. Τα δικαιώματά σου</h2>
            <p>Σύμφωνα με τον Κανονισμό (ΕΕ) 2016/679 (GDPR) έχεις δικαίωμα:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>πρόσβασης στα δεδομένα σου (αρ. 15),</li>
              <li>διόρθωσης (αρ. 16) ή διαγραφής — «δικαίωμα στη λήθη» (αρ. 17),</li>
              <li>περιορισμού επεξεργασίας (αρ. 18) και φορητότητας (αρ. 20),</li>
              <li>εναντίωσης στην επεξεργασία (αρ. 21),</li>
              <li>ανάκλησης συγκατάθεσης οποτεδήποτε,</li>
              <li>καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (<a href="https://www.dpa.gr" target="_blank" rel="noreferrer" className="text-navy-deep underline hover:text-gold">www.dpa.gr</a>).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-navy-deep mb-4">7. Ασφάλεια &amp; εμπιστευτικότητα</h2>
            <p>
              Όλες οι συνεδρίες διέπονται από αυστηρή εμπιστευτικότητα. Τα ηλεκτρονικά δεδομένα αποθηκεύονται με
              κρυπτογράφηση και πρόσβαση μόνο από την υπεύθυνη επεξεργασίας.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-navy-deep mb-4">8. Όροι χρήσης ιστοσελίδας</h2>
            <p>
              Το περιεχόμενο του site (κείμενα, εικόνες, άρθρα) προστατεύεται από πνευματικά δικαιώματα.
              Επιτρέπεται η αναδημοσίευση μόνο με αναφορά πηγής. Οι πληροφορίες έχουν ενημερωτικό χαρακτήρα και δεν
              αντικαθιστούν ιατρική ή ψυχοθεραπευτική γνωμάτευση.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl lg:text-3xl text-navy-deep mb-4">9. Επικοινωνία για θέματα GDPR</h2>
            <p>
              Για οποιοδήποτε ερώτημα σχετικά με τα προσωπικά σου δεδομένα ή για άσκηση των δικαιωμάτων σου, επικοινώνησε
              μαζί μας στο <a href="mailto:aggisav@hotmail.com" className="text-navy-deep underline hover:text-gold">aggisav@hotmail.com</a>.
            </p>
          </div>

          <div className="pt-6 border-t border-taupe/30">
            <Link to="/" className="text-[12px] tracking-[0.22em] uppercase text-navy-deep hover:text-gold">← Επιστροφή στην αρχική</Link>
          </div>
        </div>
      </section>
    </>
  );
}
