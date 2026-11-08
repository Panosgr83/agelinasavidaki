Απόκρυψη ολόκληρου του site από τη Google

- robots.txt: `Disallow: /` για όλους, αφαίρεση γραμμής Sitemap.
- Διαγραφή public/sitemap.xml.
- Στο __root: `robots` → `noindex, nofollow` (ισχύει σε όλες τις σελίδες).
- Οι σελίδες που ορίζουν δικό τους `robots: index` αλλάζουν κι αυτές σε noindex.

Σημείωση: ό,τι έχει ήδη καταχωρηθεί στη Google θα χαθεί σταδιακά (ημέρες–εβδομάδες). Για άμεση αφαίρεση χρειάζεται αίτημα στο Google Search Console.
