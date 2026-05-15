import { Link, useNavigate } from "@tanstack/react-router";
import { Calculator, Home, LogOut, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export function CosmoteShell({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/cosmote/login" });
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-[#e20074] text-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/cosmote" className="flex items-center gap-2 text-xl font-bold">
            <span>COSMOTE Tool</span>
          </Link>
          <nav className="flex items-center gap-1">
            <Link to="/cosmote" className="rounded px-3 py-2 text-sm hover:bg-white/10 [&.active]:bg-white/20" activeOptions={{ exact: true }}>
              <Home className="mr-1 inline h-4 w-4" /> Αρχική
            </Link>
            <Link to="/cosmote/calculator" className="rounded px-3 py-2 text-sm hover:bg-white/10 [&.active]:bg-white/20">
              <Calculator className="mr-1 inline h-4 w-4" /> Υπολογισμός
            </Link>
            <Link to="/cosmote/customers" className="rounded px-3 py-2 text-sm hover:bg-white/10 [&.active]:bg-white/20">
              <Users className="mr-1 inline h-4 w-4" /> Πελάτες
            </Link>
            <Link to="/cosmote/offers" className="rounded px-3 py-2 text-sm hover:bg-white/10 [&.active]:bg-white/20">
              <FileText className="mr-1 inline h-4 w-4" /> Προσφορές
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="ml-2 text-white hover:bg-white/10 hover:text-white">
              <LogOut className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
    </div>
  );
}
