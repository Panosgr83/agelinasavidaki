import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  formatEur, getSimoPrice, homeOffers, lineTotal, modifierLabels,
  newId, offerTotal, simoPlans, situations, tvPacks,
  type Modifier, type OfferLine, type Situation,
} from "@/lib/cosmote/calculator";
import { toast } from "sonner";

interface Props {
  lines: OfferLine[];
  onChange: (lines: OfferLine[]) => void;
}

export function Calculator({ lines, onChange }: Props) {
  const addLine = (l: OfferLine) => onChange([...lines, l]);
  const removeLine = (id: string) => onChange(lines.filter((l) => l.id !== id));
  const updateQty = (id: string, qty: number) =>
    onChange(lines.map((l) => (l.id === id ? { ...l, qty: Math.max(1, qty) } : l)));

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
      <Card>
        <CardHeader>
          <CardTitle>Προσθήκη γραμμής</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="simo">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="simo">Κινητή SIMO</TabsTrigger>
              <TabsTrigger value="home">Σταθερό/Net</TabsTrigger>
              <TabsTrigger value="tv">TV</TabsTrigger>
              <TabsTrigger value="custom">Άλλο</TabsTrigger>
            </TabsList>
            <TabsContent value="simo"><SimoForm onAdd={addLine} /></TabsContent>
            <TabsContent value="home"><HomeForm onAdd={addLine} /></TabsContent>
            <TabsContent value="tv"><TVForm onAdd={addLine} /></TabsContent>
            <TabsContent value="custom"><CustomForm onAdd={addLine} /></TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="lg:sticky lg:top-4 self-start">
        <CardHeader>
          <CardTitle>Γραμμές προσφοράς</CardTitle>
        </CardHeader>
        <CardContent>
          {lines.length === 0 ? (
            <p className="text-sm text-slate-500">Δεν έχει προστεθεί τίποτα.</p>
          ) : (
            <div className="space-y-3">
              {lines.map((l) => (
                <div key={l.id} className="rounded-lg border p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{l.label}</div>
                      <div className="text-xs text-slate-500">{l.details}</div>
                    </div>
                    <Button size="icon" variant="ghost" onClick={() => removeLine(l.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Input
                        type="number" min={1} value={l.qty}
                        onChange={(e) => updateQty(l.id, Number(e.target.value))}
                        className="w-16 h-8"
                      />
                      <span className="text-slate-500">× {formatEur(l.price)}</span>
                    </div>
                    <span className="font-bold text-[#e20074]">{formatEur(lineTotal(l))}</span>
                  </div>
                </div>
              ))}
              <div className="border-t pt-3 flex items-center justify-between">
                <span className="font-medium">Σύνολο / μήνα</span>
                <span className="text-2xl font-bold text-[#e20074]">{formatEur(offerTotal(lines))}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function SimoForm({ onAdd }: { onAdd: (l: OfferLine) => void }) {
  const [situation, setSituation] = useState<Situation>("ΧΩΡΙΣ ΣΤΑΘΕΡΟ");
  const [modifier, setModifier] = useState<Modifier>("regular");
  const [plan, setPlan] = useState<string>(simoPlans[0]);

  const price = getSimoPrice(situation, modifier, plan);

  const handleAdd = () => {
    if (price === null) { toast.error("Μη διαθέσιμος συνδυασμός"); return; }
    onAdd({
      id: newId(), kind: "simo",
      label: `SIMO ${plan}`,
      details: `${situation} • ${modifierLabels[modifier]}`,
      price, qty: 1,
      meta: { situation, modifier, plan },
    });
    toast.success("Προστέθηκε");
  };

  return (
    <div className="space-y-4 pt-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label>Κατάσταση σταθερής</Label>
          <Select value={situation} onValueChange={(v) => setSituation(v as Situation)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {situations.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Τύπος πελάτη</Label>
          <Select value={modifier} onValueChange={(v) => setModifier(v as Modifier)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {(Object.keys(modifierLabels) as Modifier[]).map((m) => (
                <SelectItem key={m} value={m}>{modifierLabels[m]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Πρόγραμμα</Label>
        <Select value={plan} onValueChange={setPlan}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent className="max-h-80">
            {simoPlans.map((p) => {
              const pr = getSimoPrice(situation, modifier, p);
              return (
                <SelectItem key={p} value={p} disabled={pr === null}>
                  <span className="flex items-center justify-between gap-4 w-full">
                    <span>{p}</span>
                    <span className="text-slate-500 text-xs">{pr === null ? "Μ/Δ" : formatEur(pr)}</span>
                  </span>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
        <span className="text-sm text-slate-600">Τιμή / μήνα</span>
        <span className="text-2xl font-bold text-[#e20074]">{formatEur(price)}</span>
      </div>
      <Button onClick={handleAdd} disabled={price === null} className="w-full bg-[#e20074] hover:bg-[#c00065]">
        <Plus className="mr-2 h-4 w-4" /> Προσθήκη στην προσφορά
      </Button>
    </div>
  );
}

function HomeForm({ onAdd }: { onAdd: (l: OfferLine) => void }) {
  const [idx, setIdx] = useState(0);
  const [useFtth, setUseFtth] = useState(false);
  const offer = homeOffers[idx];
  const price = useFtth && offer.price_ftth ? offer.price_ftth : offer.price;

  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-2">
        <Label>Πακέτο σταθερής</Label>
        <Select value={String(idx)} onValueChange={(v) => setIdx(Number(v))}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent className="max-h-80">
            {homeOffers.map((o, i) => (
              <SelectItem key={i} value={String(i)}>
                <span className="flex items-center justify-between gap-4 w-full">
                  <span>{o.name}</span>
                  <span className="text-slate-500 text-xs">{formatEur(o.price)}</span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="text-xs text-slate-600 space-y-1">
        {offer.internet && <div>• Internet: {offer.internet}</div>}
        {offer.fixed && <div>• Σταθερά: {offer.fixed}</div>}
        {offer.mobile && <div>• Κινητά: {offer.mobile}</div>}
      </div>
      {offer.price_ftth && (
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={useFtth} onChange={(e) => setUseFtth(e.target.checked)} />
          Υποδομή FTTH (χωρίς τέλη σταθερής 5%) — {formatEur(offer.price_ftth)}
        </label>
      )}
      <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
        <span className="text-sm text-slate-600">Τιμή / μήνα</span>
        <span className="text-2xl font-bold text-[#e20074]">{formatEur(price)}</span>
      </div>
      <Button
        onClick={() => {
          if (price === null) return;
          onAdd({
            id: newId(), kind: "home",
            label: offer.name,
            details: useFtth ? "Υποδομή FTTH" : "Στάνταρντ τιμή",
            price, qty: 1,
            meta: { idx, useFtth },
          });
          toast.success("Προστέθηκε");
        }}
        disabled={price === null}
        className="w-full bg-[#e20074] hover:bg-[#c00065]"
      >
        <Plus className="mr-2 h-4 w-4" /> Προσθήκη στην προσφορά
      </Button>
    </div>
  );
}

function TVForm({ onAdd }: { onAdd: (l: OfferLine) => void }) {
  const [idx, setIdx] = useState(0);
  const pack = tvPacks[idx];
  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-2">
        <Label>Πακέτο COSMOTE TV</Label>
        <Select value={String(idx)} onValueChange={(v) => setIdx(Number(v))}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            {tvPacks.map((p, i) => (
              <SelectItem key={i} value={String(i)}>
                {p.name} — {formatEur(p.price)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
        <span className="text-sm text-slate-600">Τιμή / μήνα</span>
        <span className="text-2xl font-bold text-[#e20074]">{formatEur(pack.price)}</span>
      </div>
      <Button
        onClick={() => {
          onAdd({ id: newId(), kind: "tv", label: pack.name, details: "COSMOTE TV", price: pack.price, qty: 1, meta: { idx } });
          toast.success("Προστέθηκε");
        }}
        className="w-full bg-[#e20074] hover:bg-[#c00065]"
      >
        <Plus className="mr-2 h-4 w-4" /> Προσθήκη στην προσφορά
      </Button>
    </div>
  );
}

function CustomForm({ onAdd }: { onAdd: (l: OfferLine) => void }) {
  const [label, setLabel] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-2">
        <Label>Όνομα υπηρεσίας</Label>
        <Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="π.χ. Extra SIM 4GB" />
      </div>
      <div className="space-y-2">
        <Label>Λεπτομέρειες (προαιρετικό)</Label>
        <Input value={details} onChange={(e) => setDetails(e.target.value)} />
      </div>
      <div className="space-y-2">
        <Label>Τιμή / μήνα (€)</Label>
        <Input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <Button
        onClick={() => {
          const p = Number(price);
          if (!label || !p) { toast.error("Συμπλήρωσε όνομα και τιμή"); return; }
          onAdd({ id: newId(), kind: "custom", label, details, price: p, qty: 1 });
          setLabel(""); setDetails(""); setPrice("");
          toast.success("Προστέθηκε");
        }}
        className="w-full bg-[#e20074] hover:bg-[#c00065]"
      >
        <Plus className="mr-2 h-4 w-4" /> Προσθήκη στην προσφορά
      </Button>
    </div>
  );
}
