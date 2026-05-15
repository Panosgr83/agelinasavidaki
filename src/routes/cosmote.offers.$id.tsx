import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatEur, lineTotal, type OfferLine } from "@/lib/cosmote/calculator";
import { generateOfferPdf } from "@/lib/cosmote/pdf";
import { ArrowLeft, FileDown, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/cosmote/offers/$id")({ component: OfferDetailPage });

function OfferDetailPage() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();

  const { data: offer, isLoading } = useQuery({
    queryKey: ["offer", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("offers").select("*, customers(name, phone, email, afm)").eq("id", id).single();
      if (error) throw error;
      return data;
    },
  });

  const handleDelete = async () => {
    if (!confirm("Διαγραφή προσφοράς;")) return;
    const { error } = await supabase.from("offers").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    toast.success("Διαγράφηκε");
    qc.invalidateQueries({ queryKey: ["offers-all"] });
    navigate({ to: "/cosmote/offers" });
  };

  const handlePdf = () => {
    if (!offer) return;
    const c = offer.customers as { name: string; phone?: string; email?: string } | null;
    const doc = generateOfferPdf({
      title: offer.title,
      lines: offer.lines as unknown as OfferLine[],
      notes: offer.notes ?? undefined,
      customerName: c?.name,
      customerPhone: c?.phone,
      customerEmail: c?.email,
      createdAt: new Date(offer.created_at).toLocaleDateString("el-GR"),
    });
    doc.save(`${offer.title}.pdf`);
  };

  if (isLoading) return <p className="text-sm text-slate-500">Φόρτωση…</p>;
  if (!offer) return <p>Δεν βρέθηκε.</p>;

  const lines = offer.lines as unknown as OfferLine[];
  const customer = offer.customers as { name?: string; phone?: string; email?: string; afm?: string } | null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link to="/cosmote/offers" className="flex items-center text-sm text-slate-600 hover:text-[#e20074]">
          <ArrowLeft className="mr-1 h-4 w-4" /> Πίσω
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handlePdf}><FileDown className="mr-2 h-4 w-4" /> PDF</Button>
          <Button variant="outline" onClick={handleDelete} className="text-red-600 hover:text-red-700"><Trash2 className="mr-2 h-4 w-4" /> Διαγραφή</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{offer.title}</CardTitle>
          <p className="text-sm text-slate-500">{new Date(offer.created_at).toLocaleString("el-GR")}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {customer && (
            <div className="rounded-lg bg-slate-50 p-3 text-sm">
              <div className="font-medium">{customer.name}</div>
              {customer.phone && <div className="text-slate-600">{customer.phone}</div>}
              {customer.email && <div className="text-slate-600">{customer.email}</div>}
              {customer.afm && <div className="text-slate-600">ΑΦΜ: {customer.afm}</div>}
            </div>
          )}

          <div className="space-y-2">
            {lines.map((l) => (
              <div key={l.id} className="flex items-center justify-between rounded border p-3">
                <div>
                  <div className="font-medium text-sm">{l.label}</div>
                  <div className="text-xs text-slate-500">{l.details} • {l.qty} × {formatEur(l.price)}</div>
                </div>
                <span className="font-bold text-[#e20074]">{formatEur(lineTotal(l))}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t pt-3">
            <span className="font-medium">Σύνολο / μήνα</span>
            <span className="text-3xl font-bold text-[#e20074]">{formatEur(Number(offer.total))}</span>
          </div>

          {offer.notes && (
            <div className="rounded bg-slate-50 p-3 text-sm">
              <div className="font-medium mb-1">Σημειώσεις</div>
              <div className="whitespace-pre-wrap text-slate-700">{offer.notes}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
