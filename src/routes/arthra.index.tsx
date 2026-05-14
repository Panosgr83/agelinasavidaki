import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/arthra/")({
  head: () => ({
    meta: [
      { title: "Άρθρα — Αγγελική Σαββιδάκη | Coaching, NLP & Προσωπική Ανάπτυξη" },
      { name: "description", content: "Σκέψεις, εργαλεία και τεχνικές coaching & NLP για την προσωπική και επαγγελματική σου εξέλιξη." },
      { property: "og:title", content: "Άρθρα — Αγγελική Σαββιδάκη" },
      { property: "og:description", content: "Coaching, NLP και πρακτικά εργαλεία για την προσωπική σου ανάπτυξη." },
      { property: "og:url", content: "https://agelinasavidaki.lovable.app/arthra" },
    ],
    links: [{ rel: "canonical", href: "https://agelinasavidaki.lovable.app/arthra" }],
  }),
  component: ArthraIndex,
});

function ArthraIndex() {
  const [featured, ...rest] = articles;

  return (
    <>
      <section className="bg-navy-gradient text-ivory pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
          <p className="eyebrow mb-6">Άρθρα & Σκέψεις</p>
          <h1 className="font-serif text-5xl lg:text-6xl leading-tight">
            Εργαλεία & ιδέες για την<br/>
            <em className="not-italic text-gold-gradient">προσωπική σου εξέλιξη.</em>
          </h1>
          <p className="mt-8 text-ivory/70 max-w-xl mx-auto">
            Πρακτικά κείμενα γύρω από το coaching, το NLP και τις διαδικασίες αλλαγής που δουλεύουμε στις συνεδρίες.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="bg-ivory text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Link
            to="/arthra/$slug"
            params={{ slug: featured.slug }}
            className="group grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-champagne">
              <img src={featured.cover} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div>
              <p className="eyebrow !text-[color:var(--navy-deep)]/60 mb-5">{featured.category} · {featured.readingTime}</p>
              <h2 className="font-serif text-3xl lg:text-5xl leading-[1.1] tracking-tight group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <p className="mt-6 text-[15px] leading-[1.85] text-ink/70 max-w-lg">
                {featured.excerpt}
              </p>
              <span className="mt-10 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-navy-deep group-hover:text-gold group-hover:gap-3 transition-all">
                Διάβασε το άρθρο <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-champagne text-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="eyebrow mb-6 !text-[color:var(--navy-deep)]/60">Όλα τα άρθρα</p>
          <h2 className="font-serif text-3xl lg:text-4xl mb-14">Διάλεξε ένα θέμα.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((a) => (
              <Link
                key={a.slug}
                to="/arthra/$slug"
                params={{ slug: a.slug }}
                className="group bg-ivory border border-taupe/30 hover:border-gold/60 transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-champagne">
                  <img src={a.cover} alt={a.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="eyebrow !text-[color:var(--navy-deep)]/50 mb-4 text-[10px]">{a.category} · {a.readingTime}</p>
                  <h3 className="font-serif text-xl leading-snug group-hover:text-gold transition-colors">{a.title}</h3>
                  <p className="mt-4 text-[14px] text-ink/65 leading-relaxed flex-1">{a.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[10.5px] tracking-[0.28em] uppercase text-navy-deep group-hover:text-gold transition-colors">
                    Διάβασε <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
