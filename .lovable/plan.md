## Στόχος
Web εφαρμογή που αναπαράγει το Excel «ΕΡΓΑΛΕΙΟ ΥΠΟΛΟΓΙΣΜΟΥ»: επιλέγεις πρόγραμμα + εκπτώσεις/τέλη και βγάζει σωστή τελική τιμή. Με login για σένα, αποθήκευση προσφορών ανά πελάτη, PDF export.

## Τι έχει το Excel (30 sheets)
Καταγράφω όσα θα γίνουν data στην εφαρμογή:

**Κινητή (core):**
- ΤΕΛΙΚΕΣ ΤΙΜΕΣ SIMO — βασικός τιμοκατάλογος (Καρτοσυμβόλαιο, GIGAMAX 4/9/18/35/70GB, UNL, για P2P / Port-In-New / Group A1/A2/B/S/M1/Z/F)
- ΤΕΛΙΚΕΣ ΤΙΜΕΣ HS — με handset
- P2P ΜΑΪΟΥ, SHADOWS, STUDENT 2026
- Εκπτώσεις: SIMO, FMC, FAMILY BENEFIT, CRM1, CRM2, 5€ (triple play / port-in FTTH), SCL, e-bill, υπαλλήλων/συνταξιούχων ΟΤΕ
- Σειρά εφαρμογής εκπτώσεων: 1.SIMO → 2.FMC → 3.Family Benefit → 4.CRM (αθροιστικά) → 5.5€ → 6.Social Offer
- Τέλη κινητής

**Σταθερή / Internet / TV:**
ΠΡΟΣΦΟΡΕΣ ΣΤΑΘΕΡΗΣ ΟΙΚΙΑΚΟΙ, DP με TV-Special Offer, COSMOTE TV, MAGENTA ONE, COSMOTE 5G WiFi, ΨΗΦΙΑΚΕΣ ΕΥΚΟΛΙΕΣ

**Add-ons:** EXTRA SIM, ΠΡΟΣΘΕΤΑ ΠΑΚΕΤΑ ΣΥΜΒΟΛΑΙΟΥ, ΤΑΞΙΔΙ ΣΤΟ ΕΞΩΤΕΡΙΚΟ, ΚΑΡΤΟΚΙΝΗΤΗ

**Business:** BUSINESS DP 2025, ΤΙΜΟΚΑΤΑΛΟΓΟΣ BUSINESS ΣΤΑΘΕΡΗ, BUSINESS 1/2-4/5-19 SIMS, EXTRA ΠΑΚΕΤΑ BUSINESS, MagentaOne Business

**Άλλα:** SMART HOME, ESA, PAYZY PRO, ΕΠΕΚΤΑΣΗ ΕΓΓΥΗΣΗΣ

## Πρόταση: παράδοση σε 3 φάσεις

Επειδή το εργαλείο είναι τεράστιο, χτίζουμε **MVP πρώτα**, μετά επεκτείνουμε. Έτσι σε 1 φάση έχεις κάτι λειτουργικό.

### Φάση 1 — MVP (αυτή τη φορά)
- Lovable Cloud + auth (email/password + Google) — μόνο εσύ ως admin
- Database tables: `customers`, `offers`, `offer_lines`, `plans`, `discounts`
- **Calculator κινητής (SIMO)**: dropdown πρόγραμμα → επιλογές κατηγορίας (P2P / Port-In / Group F/S/M1/Z) → checkboxes εκπτώσεων (SIMO, FMC, Family Benefit, CRM1, CRM2, 5€, SCL, e-bill, συνταξιούχος) → υπολογισμός με σωστή σειρά → ανάλυση + τελική τιμή
- **Calculator σταθερής/internet/TV** (απλή έκδοση): επιλογή πακέτου από τιμοκατάλογο
- **Multi-line offer**: μία προσφορά μπορεί να έχει πολλές γραμμές (π.χ. 2 SIMO + 1 internet + 1 TV) με συνολικό άθροισμα
- Λίστα πελατών + αποθήκευση προσφοράς
- **PDF export** προσφοράς (λογότυπο COSMOTE-style, ανάλυση γραμμών, εκπτώσεις, τελική τιμή)
- Seed των τιμοκαταλόγων από το Excel (αυτόματα από script)

### Φάση 2 — Επεκτάσεις
- Bundles: MAGENTA ONE, FMC discount logic όταν συνδυάζεις mobile+home
- HS (handset) τιμοκατάλογος + δόσεις
- EXTRA SIM, πρόσθετα πακέτα, ταξίδι εξωτερικό, καρτοκινητή
- Business τιμοκατάλογος (1/2-4/5-19 SIMs)

### Φάση 3 — Πλήρες
- SMART HOME, ESA, PAYZY PRO, επέκταση εγγύησης
- Edit τιμοκαταλόγων μέσα από admin UI (όταν αλλάξει η εμπορική πολιτική)
- Export προσφορών σε Excel
- Ιστορικό αλλαγών τιμών

## Τεχνικά (φάση 1)

**Stack:** TanStack Start (υπάρχει), Lovable Cloud (Supabase), shadcn/ui, react-pdf για PDF.

**Schema:**
```text
plans         (id, category, name, base_price_p2p, base_price_portin, ...)
discounts     (id, code, label, type[percent|fixed], value, order)
customers     (id, owner_id, name, phone, afm, notes)
offers        (id, owner_id, customer_id, title, total, created_at)
offer_lines   (id, offer_id, plan_id, category_choice, discounts_json, line_total)
```

**Auth:** μόνο εσύ — ένας λογαριασμός admin. Χωρίς profiles table αρχικά (δε χρειάζεται).

**Σειρά υπολογισμού** (κωδικοποιημένη):
1. base_price ανάλογα με κατηγορία (P2P / Port-In / Group)
2. αφαίρεσε SIMO discount
3. αφαίρεσε FMC
4. αφαίρεσε Family Benefit
5. αφαίρεσε CRM1+CRM2 (αθροιστικά)
6. αφαίρεσε 5€ triple play
7. αφαίρεσε Social Offer (συνταξιούχος/άνεργος)
8. πρόσθεσε τέλη κινητής, αφαίρεσε e-bill discount
→ Final price ανά γραμμή

**Seed:** parse script (Python) διαβάζει το `.xlsx`, μετατρέπει σε JSON, και το seed-άρει στη βάση μέσω Supabase admin.

**Routes:**
- `/login`
- `/_authenticated/` (layout)
- `/_authenticated/` index → dashboard με προσφορές
- `/_authenticated/offers/new` → calculator
- `/_authenticated/offers/$id` → προβολή/edit + PDF
- `/_authenticated/customers` → CRUD πελατών
- `/_authenticated/catalog` → τιμοκατάλογοι read-only (φάση 1)

## Τι ΔΕΝ μπαίνει στη φάση 1
- Δε γίνεται edit τιμοκαταλόγων από UI (έρχεται φάση 3)
- Όχι Business sheets (φάση 2)
- Όχι EXTRA SIM, handsets, ταξίδι, καρτοκινητή (φάση 2)
- Όχι SMART HOME / ESA / PAYZY (φάση 3)

## Ανοιχτό ερώτημα
Το νέο app θα είναι **ξεχωριστό από το site της Αγγελικής** ή θα μπει σαν `/cosmote-tool` route στο ίδιο project; Πρόταση: ίδιο project, νέο authenticated route — απλούστερο deploy. Πες μου αν προτιμάς ξεχωριστό project.
