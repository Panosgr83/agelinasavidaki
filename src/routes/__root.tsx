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
      { title: "Αγγελική Σαββιδάκη — Life & NLP Coach Αθήνα" },
      { name: "description", content: "Πιστοποιημένη Σύμβουλος NLP & Life Coaching σε Γαλάτσι, Νέα Ιωνία, Νέο Ηράκλειο, Νέα Φιλαδέλφεια, Κυψέλη, Φιλοθέη και Ψυχικό. Premium 1:1 καθοδήγηση." },
      { name: "keywords", content: "life coach Αθήνα, life coach Γαλάτσι, life coach Νέα Ιωνία, life coach Νέο Ηράκλειο, life coach Νέα Φιλαδέλφεια, life coach Κυψέλη, life coach Φιλοθέη, life coach Ψυχικό, NLP coach, σύμβουλος ζωής, Αγγελική Σαββιδάκη" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Αγγελική Σαββιδάκη — Life & NLP Coach" },
      { property: "og:locale", content: "el_GR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://agelinasavidaki.lovable.app/#business",
          name: "Αγγελική Σαββιδάκη — Life & NLP Coach",
          description: "Πιστοποιημένη Σύμβουλος NLP & Ολιστικού Coaching. Premium 1:1 coaching για καθαρότητα, αυτοπεποίθηση και κατεύθυνση.",
          url: "https://agelinasavidaki.lovable.app",
          image: "https://agelinasavidaki.lovable.app/og-image.jpg",
          priceRange: "€€€",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Αθήνα",
            addressRegion: "Αττική",
            addressCountry: "GR",
          },
          areaServed: [
            { "@type": "Place", name: "Γαλάτσι" },
            { "@type": "Place", name: "Νέα Ιωνία" },
            { "@type": "Place", name: "Νέο Ηράκλειο" },
            { "@type": "Place", name: "Νέα Φιλαδέλφεια" },
            { "@type": "Place", name: "Κυψέλη" },
            { "@type": "Place", name: "Φιλοθέη" },
            { "@type": "Place", name: "Ψυχικό" },
            { "@type": "Place", name: "Αθήνα" },
          ],
          serviceType: ["Life Coaching", "NLP Coaching", "Executive Coaching", "Mindset Coaching"],
          knowsLanguage: ["el", "en"],
        }),
      },
    ],
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
