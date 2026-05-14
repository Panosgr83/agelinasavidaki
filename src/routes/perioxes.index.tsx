import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { areas } from "@/lib/areas";

const SITE = "https://agelinasavidaki.lovable.app";

export const Route = createFileRoute("/perioxes/")({
  head: () => {
    const title = "Περιοχές που εξυπηρετώ — Life Coach Αθήνα | Αγγελική Σαββιδάκη";
    const description = "Life & NLP Coaching σε Γαλάτσι, Νέα Ιωνία, Νέο Ηράκλειο, Νέα Φιλαδέλφεια, Κυψέλη, Φιλοθέη και Ψυχικό. Δια ζώσης ή online συνεδρίες.";
    const url = `${SITE}/perioxes`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: AreasIndex,
});

function AreasIndex() {
  return (
    <>
      <section className="bg-navy-gradient text-ivory pt-36 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <p className="eyebrow mb-6 inline-flex items-center gap-2"><MapPin size={12} /> Περιοχές εξυπηρέτησης</p>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl">
            Life & NLP Coaching <em className="not-italic text-gold">κοντά σου.</em>
          </h1>
          <p className="mt-8 text-[17px] text-ivory/80 leading-[1.8] max-w-2xl font-light">
            Εξυπηρετώ τις παρακάτω περιοχές της Αττικής, με δια ζώσης ή online συνεδρίες coaching και NLP.
          </p>
        </div>
      </section>

      <section className="bg-navy-gradient text-ivory pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a) => (
            <Link
              key={a.slug}
              to="/perioxes/$slug"
              params={{ slug: a.slug }}
              className="luxury-card p-8 group flex flex-col"
              style={{ background: "rgba(6,11,28,0.6)" }}
            >
              <h2 className="font-serif text-[1.6rem] text-ivory leading-tight">Life Coach <span className="text-gold">{a.name}</span></h2>
              <p className="mt-4 text-[14px] text-ivory/65 leading-[1.8] flex-1 font-light">{a.intro}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[10.5px] tracking-[0.32em] uppercase text-gold group-hover:gap-4 transition-all">
                Μάθε περισσότερα <ArrowRight size={13} strokeWidth={1.5} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
