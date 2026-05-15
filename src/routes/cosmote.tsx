import { createFileRoute, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSession } from "@/lib/cosmote/auth";
import { CosmoteShell } from "@/components/cosmote/CosmoteShell";

export const Route = createFileRoute("/cosmote")({
  head: () => ({ meta: [{ title: "COSMOTE Tool" }, { name: "robots", content: "noindex, nofollow" }] }),
  component: CosmoteLayout,
});

function CosmoteLayout() {
  const { session, loading } = useSession();
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/cosmote/login";

  useEffect(() => {
    if (!loading && !session && !isLogin) {
      navigate({ to: "/cosmote/login" });
    }
  }, [loading, session, isLogin, navigate]);

  if (isLogin) return <Outlet />;
  if (loading) return <div className="flex min-h-screen items-center justify-center text-slate-500">Φόρτωση…</div>;
  if (!session) return null;

  return (
    <CosmoteShell>
      <Outlet />
    </CosmoteShell>
  );
}
