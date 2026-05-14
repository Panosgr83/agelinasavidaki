import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { areas, getArea } from "@/lib/areas";

const SITE = "https://agelinasavidaki.lovable.app";

export const Route = createFileRoute("/perioxes/$slug")({
  loader: ({ params }) => {
    const area = getArea(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ params, loaderData }) => {
    const area = loaderData?.area;
    if (!area) return { meta: [{ title: "Περιοχή — Αγγελική Σαββιδάκη" }] };
    const title = `Life Coach ${area.name} | Αγγελική Σαββιδάκη — NLP & Coaching`;
    const description = `Εξειδικευμένος Life & NLP Coach που εξυπηρετεί την περιοχή ${area.nameGenitive}. 1:1 συνεδρίες coaching για καθαρότητα, αυτοπεποίθηση και κατεύθυνση.`;
    const url = `${SITE}/perioxes/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Αγγελική Σαββιδάκη — Life & NLP Coach (${area.name})`,
            description,
            url,
            areaServed: { "@type": "Place", name: area.name },
            address: {
              "@type": "PostalAddress",
              addressLocality: area.name,
              addressRegion: "Αττική",
              addressCountry: "GR",
            },
            priceRange: "€€€",
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center text-ivory bg-navy-gradient">
      <div className="text-center">
        <h1 className="font-serif text-3xl">Η περιοχή δεν βρέθηκε</h1>
        <Link to="/perioxes" className="btn-outline-gold mt-6 inline-flex">Δες όλες τις περιοχές</Link>
      </div>
    </div>
  ),
  component: AreaPage,
});

function AreaPage() {
  const { area } = Route.useLoaderData();
  const others = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <section className="bg-navy-gradient text-ivory pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="eyebrow mb-6 inline-flex items-center gap-2"><MapPin size={12} /> Περιοχή εξυπηρέτησης</p>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight">
            Life Coach <em className="not-italic text-gold">{area.name}</em>
          </h1>
          <p className="mt-8 text-[17px] lg:text-[19px] text-ivory/80 leading-[1.8] font-light max-w-2xl">
            {area.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold">Κλείσε μια πρώτη συνάντηση</Link>
            <Link to="/services" className="btn-outline-gold">Δες τις υπηρεσίες</Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-0 space-y-8">
          {area.body.map((p, i) => (
            <p key={i} className="text-[16px] lg:text-[17px] leading-[1.9] text-ink/80">{p}</p>
          ))}
          <div className="hairline opacity-40 my-12" />
          <h2 className="font-serif text-3xl lg:text-4xl">
            Πώς δουλεύουμε μαζί στ{area.name.startsWith("Ψ") || area.name.startsWith("Φ") || area.name.startsWith("Κ") ? "ην" : "ο"} {area.name}
          </h2>
          <p className="text-[16px] leading-[1.9] text-ink/80">
            Ξεκινάμε με μια σύντομη γνωριμία ώστε να καταλάβουμε τι ψάχνεις πραγματικά. Στη συνέχεια σχεδιάζουμε ένα προσωπικό πλάνο coaching με ξεκάθαρους στόχους, ορόσημα και πρακτικά εργαλεία NLP.
          </p>
          <p className="text-[16px] leading-[1.9] text-ink/80">
            Οι συνεδρίες μπορούν να γίνουν δια ζώσης ή online, ανάλογα με την προτίμησή σου και τις ανάγκες της καθημερινότητάς σου.
          </p>
        </div>
      </section>

      <section className="bg-navy-gradient text-ivory py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <p className="eyebrow mb-6">Άλλες περιοχές που εξυπηρετώ</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                to="/perioxes/$slug"
                params={{ slug: a.slug }}
                className="border border-gold/30 px-5 py-4 text-[13px] tracking-wide text-ivory/85 hover:text-gold hover:border-gold transition-colors flex items-center justify-between gap-2"
              >
                {a.name} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
