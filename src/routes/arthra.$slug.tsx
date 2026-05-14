import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { articles, getArticle } from "@/lib/articles";

export const Route = createFileRoute("/arthra/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { article } = loaderData;
    const url = `https://agelinasavidaki.lovable.app/arthra/${article.slug}`;
    return {
      meta: [
        { title: `${article.title} — Αγγελική Σαββιδάκη` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:url", content: url },
        { property: "og:image", content: article.cover },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: article.cover },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            author: { "@type": "Person", name: "Αγγελική Σαββιδάκη" },
            image: article.cover,
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-navy-gradient text-ivory">
      <div className="text-center">
        <h1 className="font-serif text-4xl">Δεν βρέθηκε</h1>
        <Link to="/arthra" className="btn-outline-gold mt-8 inline-flex">Όλα τα άρθρα</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center text-ink">
      <p>{error.message}</p>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <section className="bg-navy-gradient text-ivory pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <Link to="/arthra" className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-gold/80 hover:text-gold mb-10">
            <ArrowLeft size={14} /> Όλα τα άρθρα
          </Link>
          <p className="eyebrow mb-6">{article.category} · {article.readingTime}</p>
          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight">
            {article.title}
          </h1>
          <p className="mt-8 text-lg text-ivory/75 leading-relaxed font-serif italic">
            {article.excerpt}
          </p>
        </div>
      </section>

      <section className="bg-ivory text-ink">
        <div className="mx-auto max-w-3xl px-6 lg:px-12 -mt-12 lg:-mt-16 mb-16">
          <div className="relative aspect-[16/9] overflow-hidden border border-gold/20 shadow-xl">
            <img src={article.cover} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-6 lg:px-12 pb-24">
          <div className="space-y-7 text-[16px] lg:text-[17px] leading-[1.85] text-ink/85">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-champagne text-ink py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Συνέχισε να διαβάζεις</p>
            <h2 className="font-serif text-3xl lg:text-4xl mb-12">Σχετικά άρθρα.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to="/arthra/$slug"
                  params={{ slug: a.slug }}
                  className="group bg-ivory border border-taupe/30 hover:border-gold/60 transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-champagne">
                    <img src={a.cover} alt={a.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-8">
                    <p className="eyebrow !text-[color:var(--navy-deep)]/50 mb-3 text-[10px]">{a.category}</p>
                    <h3 className="font-serif text-xl group-hover:text-gold transition-colors">{a.title}</h3>
                    <span className="mt-6 inline-flex items-center gap-2 text-[10.5px] tracking-[0.28em] uppercase text-navy-deep group-hover:text-gold transition-colors">
                      Διάβασε <ArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy-deep text-ivory py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl">Έτοιμος/η να <em className="not-italic text-gold-gradient">δουλέψουμε μαζί;</em></h2>
          <Link to="/contact" className="btn-gold mt-10 inline-flex">Κλείσε ραντεβού</Link>
        </div>
      </section>
    </>
  );
}
