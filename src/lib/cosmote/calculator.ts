import simoData from "@/data/simo.json";
import homeData from "@/data/home.json";
import tvData from "@/data/tv.json";

export type Situation = "ΧΩΡΙΣ ΣΤΑΘΕΡΟ" | "FMC" | "FML" | "FMC + FML";
export type Modifier = "regular" | "pensioner" | "ebill";

export const situations: Situation[] = ["ΧΩΡΙΣ ΣΤΑΘΕΡΟ", "FMC", "FML", "FMC + FML"];
export const modifierLabels: Record<Modifier, string> = {
  regular: "Κανονική τιμή",
  pensioner: "Συνταξιούχος / άνεργος",
  ebill: "Με e-bill (χωρίς τέλη)",
};

export const simoPlans = (simoData as { plans: string[] }).plans;
export const simoMatrix = (simoData as { matrix: Record<string, Record<string, number | null>> }).matrix;

export function getSimoPrice(situation: Situation, modifier: Modifier, plan: string): number | null {
  const key = `${situation}|${modifier}`;
  return simoMatrix[key]?.[plan] ?? null;
}

export type HomeOffer = {
  name: string;
  internet: string | null;
  fixed: string | null;
  mobile: string | null;
  price: number | null;
  price_ftth: number | null;
};
export const homeOffers = homeData as HomeOffer[];

export type TVPack = { name: string; price: number };
export const tvPacks = tvData as TVPack[];

// Offer line
export type OfferLineKind = "simo" | "home" | "tv" | "custom";
export interface OfferLine {
  id: string;
  kind: OfferLineKind;
  label: string;
  details: string;
  price: number;
  qty: number;
  // metadata for re-edit
  meta?: Record<string, unknown>;
}

export function lineTotal(line: OfferLine): number {
  return Math.round(line.price * line.qty * 100) / 100;
}

export function offerTotal(lines: OfferLine[]): number {
  return Math.round(lines.reduce((s, l) => s + lineTotal(l), 0) * 100) / 100;
}

export function newId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function formatEur(n: number | null | undefined): string {
  if (n === null || n === undefined) return "—";
  return new Intl.NumberFormat("el-GR", { style: "currency", currency: "EUR" }).format(n);
}
