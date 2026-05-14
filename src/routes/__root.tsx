import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-gradient text-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-gold">404</h1>
        <h2 className="mt-4 font-serif text-2xl">Η σελίδα δεν βρέθηκε</h2>
        <p className="mt-2 text-sm text-ivory/60">Ίσως μετακινήθηκε ή δεν υπάρχει πια.</p>
        <a href="/" className="btn-outline-gold mt-8 inline-flex">Επιστροφή</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-gradient text-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl">Κάτι πήγε στραβά</h1>
        <p className="mt-2 text-sm text-ivory/60">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="btn-outline-gold mt-8">Δοκίμασε ξανά</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Αγγελική Σαββιδάκη — Life & NLP Coach" },
      { name: "description", content: "Πιστοποιημένη Σύμβουλος NLP & Ολιστικού Coaching. Premium καθοδήγηση για καθαρότητα, αυτοπεποίθηση και κατεύθυνση." },
      { property: "og:title", content: "Αγγελική Σαββιδάκη — Life & NLP Coach" },
      { property: "og:description", content: "Πιστοποιημένη Σύμβουλος NLP & Ολιστικού Coaching. Premium καθοδήγηση για καθαρότητα, αυτοπεποίθηση και κατεύθυνση." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Αγγελική Σαββιδάκη — Life & NLP Coach" },
      { name: "twitter:description", content: "Πιστοποιημένη Σύμβουλος NLP & Ολιστικού Coaching. Premium καθοδήγηση για καθαρότητα, αυτοπεποίθηση και κατεύθυνση." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/06a9437a-e286-4bde-b64f-b9d51bcfe1f0" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/06a9437a-e286-4bde-b64f-b9d51bcfe1f0" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
