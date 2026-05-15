import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Calculator } from "@/components/cosmote/Calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { offerTotal, type OfferLine } from "@/lib/cosmote/calculator";
import { generateOfferPdf } from "@/lib/cosmote/pdf";
import { toast } from "sonner";
import { Save, FileDown } from "lucide-react";

export const Route = createFileRoute("/cosmote/calculator")({ component: CalcPage });

function CalcPage() {
  const navigate = useNavigate();
  const [lines, setLines] = useState<OfferLine[]>([]);
  const [title, setTitle] = useState("Νέα προσφορά");
  const [customerId, setCustomerId] = useState<string>("none");
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  const { data: customers } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("customers").select("*").order("name");
      if (error) throw error;
      return data;
    },
  });

  const handleSave = async () => {
    if (!lines.length) { toast.error("Πρόσθεσε τουλάχιστον μία γραμμή"); return; }
    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Μη συνδεδεμένος");
      const { data, error } = await supabase.from("offers").insert({
        owner_id: user.id,
        customer_id: customerId === "none" ? null : customerId,
        title, notes,
        total: offerTotal(lines),
        lines: lines as unknown as never,
      }).select().single();
      if (error) throw error;
      toast.success("Αποθηκεύτηκε");
      navigate({ to: "/cosmote/offers/$id", params: { id: data.id } });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Σφάλμα");
    } finally {
      setSaving(false);
    }
  };

  const handlePdf = () => {
    if (!lines.length) { toast.error("Πρόσθεσε γραμμές πρώτα"); return; }
    const customer = customers?.find((c) => c.id === customerId);
    const doc = generateOfferPdf({
      title, lines, notes,
      customerName: customer?.name,
      customerPhone: customer?.phone ?? undefined,
      customerEmail: customer?.email ?? undefined,
    });
    doc.save(`${title}.pdf`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader><CardTitle>Στοιχεία προσφοράς</CardTitle></CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Τίτλος</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Πελάτης</Label>
            <Select value={customerId} onValueChange={setCustomerId}>
              <SelectTrigger><SelectValue placeholder="Επίλεξε πελάτη" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="none">— Κανένας —</SelectItem>
                {customers?.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Σημειώσεις</Label>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} />
          </div>
        </CardContent>
      </Card>

      <Calculator lines={lines} onChange={setLines} />

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={handlePdf}>
          <FileDown className="mr-2 h-4 w-4" /> PDF
        </Button>
        <Button onClick={handleSave} disabled={saving} className="bg-[#e20074] hover:bg-[#c00065]">
          <Save className="mr-2 h-4 w-4" /> {saving ? "Αποθήκευση…" : "Αποθήκευση προσφοράς"}
        </Button>
      </div>
    </div>
  );
}
