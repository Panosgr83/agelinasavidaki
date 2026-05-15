import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, Users } from "lucide-react";
import { formatEur } from "@/lib/cosmote/calculator";

export const Route = createFileRoute("/cosmote/")({ component: Dashboard });

function Dashboard() {
  const { data: offers } = useQuery({
    queryKey: ["offers-recent"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("offers")
        .select("id, title, total, created_at, customers(name)")
        .order("created_at", { ascending: false })
        .limit(10);
      if (error) throw error;
      return data;
    },
  });

  const { data: stats } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const [c, o] = await Promise.all([
        supabase.from("customers").select("id", { count: "exact", head: true }),
        supabase.from("offers").select("id", { count: "exact", head: true }),
      ]);
      return { customers: c.count ?? 0, offers: o.count ?? 0 };
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Καλώς ήρθες</h1>
        <p className="text-slate-600">Φτιάξε γρήγορα προσφορές για τους πελάτες σου.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link to="/cosmote/calculator">
          <Card className="cursor-pointer transition hover:border-[#e20074] hover:shadow-md">
            <CardHeader>
              <Calculator className="h-8 w-8 text-[#e20074]" />
              <CardTitle>Νέα Προσφορά</CardTitle>
              <CardDescription>Υπολογισμός & συνδυασμοί</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link to="/cosmote/customers">
          <Card className="cursor-pointer transition hover:border-[#e20074] hover:shadow-md">
            <CardHeader>
              <Users className="h-8 w-8 text-[#e20074]" />
              <CardTitle>Πελάτες</CardTitle>
              <CardDescription>{stats?.customers ?? 0} καταχωρημένοι</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link to="/cosmote/offers">
          <Card className="cursor-pointer transition hover:border-[#e20074] hover:shadow-md">
            <CardHeader>
              <FileText className="h-8 w-8 text-[#e20074]" />
              <CardTitle>Προσφορές</CardTitle>
              <CardDescription>{stats?.offers ?? 0} αποθηκευμένες</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Πρόσφατες προσφορές</CardTitle>
        </CardHeader>
        <CardContent>
          {!offers?.length ? (
            <p className="text-sm text-slate-500">Καμία προσφορά ακόμα.</p>
          ) : (
            <ul className="divide-y">
              {offers.map((o) => (
                <li key={o.id}>
                  <Link
                    to="/cosmote/offers/$id"
                    params={{ id: o.id }}
                    className="flex items-center justify-between py-3 hover:bg-slate-50"
                  >
                    <div>
                      <div className="font-medium">{o.title}</div>
                      <div className="text-xs text-slate-500">
                        {(o.customers as { name: string } | null)?.name ?? "—"} •{" "}
                        {new Date(o.created_at).toLocaleDateString("el-GR")}
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
