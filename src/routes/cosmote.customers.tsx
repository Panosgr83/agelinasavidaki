import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/cosmote/customers")({ component: CustomersPage });

function CustomersPage() {
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", afm: "", notes: "" });

  const { data: customers, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("customers").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const handleCreate = async () => {
    if (!form.name) { toast.error("Όνομα απαιτείται"); return; }
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("customers").insert({ ...form, owner_id: user.id });
    if (error) { toast.error(error.message); return; }
    toast.success("Δημιουργήθηκε");
    setForm({ name: "", phone: "", email: "", afm: "", notes: "" });
    setOpen(false);
    qc.invalidateQueries({ queryKey: ["customers"] });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Διαγραφή;")) return;
    const { error } = await supabase.from("customers").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    toast.success("Διαγράφηκε");
    qc.invalidateQueries({ queryKey: ["customers"] });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Πελάτες</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#e20074] hover:bg-[#c00065]"><Plus className="mr-2 h-4 w-4" /> Νέος πελάτης</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Νέος πελάτης</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <div className="space-y-1"><Label>Όνομα *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1"><Label>Τηλέφωνο</Label><Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
                <div className="space-y-1"><Label>Email</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
              </div>
              <div className="space-y-1"><Label>ΑΦΜ</Label><Input value={form.afm} onChange={(e) => setForm({ ...form, afm: e.target.value })} /></div>
              <div className="space-y-1"><Label>Σημειώσεις</Label><Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></div>
              <Button onClick={handleCreate} className="w-full bg-[#e20074] hover:bg-[#c00065]">Αποθήκευση</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader><CardTitle>Λίστα ({customers?.length ?? 0})</CardTitle></CardHeader>
        <CardContent>
          {isLoading ? <p className="text-sm text-slate-500">Φόρτωση…</p> : !customers?.length ? (
            <p className="text-sm text-slate-500">Δεν υπάρχουν πελάτες.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow><TableHead>Όνομα</TableHead><TableHead>Τηλέφωνο</TableHead><TableHead>Email</TableHead><TableHead>ΑΦΜ</TableHead><TableHead></TableHead></TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.name}</TableCell>
                    <TableCell>{c.phone}</TableCell>
                    <TableCell>{c.email}</TableCell>
                    <TableCell>{c.afm}</TableCell>
                    <TableCell><Button size="icon" variant="ghost" onClick={() => handleDelete(c.id)}><Trash2 className="h-4 w-4 text-red-500" /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
