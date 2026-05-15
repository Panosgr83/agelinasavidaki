import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import type { OfferLine } from "./calculator";
import { lineTotal, offerTotal, formatEur } from "./calculator";

interface PdfData {
  title: string;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  notes?: string;
  lines: OfferLine[];
  createdAt?: string;
}

export function generateOfferPdf(data: PdfData): jsPDF {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const w = doc.internal.pageSize.getWidth();

  // Header bar
  doc.setFillColor(226, 0, 116); // COSMOTE magenta
  doc.rect(0, 0, w, 80, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("COSMOTE", 40, 38);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("Προσφορά πελάτη", 40, 58);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(data.title, 40, 120);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  let y = 140;
  if (data.customerName) { doc.text(`Πελάτης: ${data.customerName}`, 40, y); y += 14; }
  if (data.customerPhone) { doc.text(`Τηλέφωνο: ${data.customerPhone}`, 40, y); y += 14; }
  if (data.customerEmail) { doc.text(`Email: ${data.customerEmail}`, 40, y); y += 14; }
  doc.text(`Ημερομηνία: ${data.createdAt ?? new Date().toLocaleDateString("el-GR")}`, 40, y);
  y += 14;

  autoTable(doc, {
    startY: y + 10,
    head: [["Υπηρεσία", "Λεπτομέρειες", "Τεμ.", "Τιμή / μήνα", "Σύνολο"]],
    body: data.lines.map((l) => [
      l.label,
      l.details,
      String(l.qty),
      formatEur(l.price),
      formatEur(lineTotal(l)),
    ]),
    headStyles: { fillColor: [226, 0, 116] },
    styles: { fontSize: 10 },
  });

  const total = offerTotal(data.lines);
  // @ts-expect-error - autotable adds lastAutoTable
  const finalY: number = doc.lastAutoTable?.finalY ?? y + 100;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(`Σύνολο / μήνα: ${formatEur(total)}`, w - 40, finalY + 30, { align: "right" });

  if (data.notes) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text("Σημειώσεις:", 40, finalY + 60);
    doc.text(doc.splitTextToSize(data.notes, w - 80), 40, finalY + 74);
  }

  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text(
    "Οι τιμές είναι ενδεικτικές και βασίζονται στην εμπορική πολιτική 11/05/2026. Επιβεβαίωση από COSMOTE.",
    w / 2,
    doc.internal.pageSize.getHeight() - 24,
    { align: "center" }
  );

  return doc;
}
