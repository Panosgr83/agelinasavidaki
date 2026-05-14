## Σκοπός
Αντικατάσταση όλων των placeholder στοιχείων επικοινωνίας με τα πραγματικά:
- **Τηλέφωνο / WhatsApp:** 6972258578 (διεθνής μορφή: +30 6972258578 / `tel:+306972258578` / `wa.me/306972258578`)
- **Κύριο email:** aggisav@hotmail.com
- **Δευτερεύον email:** angelikisavid@gmail.com

## Αρχεία προς ενημέρωση

### 1. `src/components/SiteFooter.tsx`
- Στήλη "Επικοινωνία": αλλαγή τηλεφώνου σε `+30 6972 258 578` και email σε `aggisav@hotmail.com` (να εμφανίζεται και το δεύτερο από κάτω: `angelikisavid@gmail.com`).

### 2. `src/routes/contact.tsx`
- Sidebar κάρτα **WhatsApp**: `href="https://wa.me/306972258578"`
- Sidebar κάρτα **Κλήση**: `href="tel:+306972258578"`, label `+30 6972 258 578`
- Sidebar κάρτα **Email**: μετατροπή σε δύο entries (ή stacked text) — `aggisav@hotmail.com` (primary, `mailto:`) και `angelikisavid@gmail.com` (secondary, `mailto:`)
- JSON-LD `LocalBusiness.telephone`: `+30 6972258578`
- Meta description: αμετάβλητη (δεν αναφέρει τηλέφωνο).

## Εκτός σκοπού
Τίποτα άλλο δεν αλλάζει — μόνο τα δεδομένα επικοινωνίας. Layout, στυλ, sections παραμένουν ως έχουν.
