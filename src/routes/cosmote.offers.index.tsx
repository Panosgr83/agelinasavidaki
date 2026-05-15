import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatEur } from "@/lib/cosmote/calculator";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/cosmote/offers/")({ component: OffersListPage });

function OffersListPage() {
  const { data: offers, isLoading } = useQuery({
    queryKey: ["offers-all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("offers")
        .select("id, title, total, created_at, customers(name)")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Προσφορές</h1>
        <Link to="/cosmote/calculator">
          <Button className="bg-[#e20074] hover:bg-[#c00065]"><Plus className="mr-2 h-4 w-4" /> Νέα προσφορά</Button>
        </Link>
      </div>
      <Card>
        <CardHeader><CardTitle>Όλες οι προσφορές ({offers?.length ?? 0})</CardTitle></CardHeader>
        <CardContent>
          {isLoading ? <p className="text-sm text-slate-500">Φόρτωση…</p> : !offers?.length ? (
            <p className="text-sm text-slate-500">Καμία προσφορά ακόμα.</p>
          ) : (
            <ul className="divide-y">
              {offers.map((o) => (
                <li key={o.id}>
                  <Link to="/cosmote/offers/$id" params={{ id: o.id }} className="flex items-center justify-between py-3 hover:bg-slate-50 px-2 rounded">
                    <div>
                      <div className="font-medium">{o.title}</div>
                      <div className="text-xs text-slate-500">
                        {(o.customers as { name: string } | null)?.name ?? "—"} • {new Date(o.created_at).toLocaleDateString("el-GR")}
                      </div>
                    </div>
                    <div className="font-bold text-[#e20074]">{formatEur(Number(o.total))}</div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
