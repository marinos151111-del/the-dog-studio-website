import { useMemo, useState } from 'react';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import type { Content, Lang } from '../data/content';
import { INFO } from '../data/content';
import { PRODUCTS, CATEGORY_EL } from '../data/products';

interface Props {
  c: Content;
  lang: Lang;
}

export default function Shop({ c, lang }: Props) {
  const cats = useMemo(() => [...new Set(PRODUCTS.map((p) => p.cat))], []);
  const [active, setActive] = useState<string | null>(null);

  const visible = useMemo(
    () => (active ? PRODUCTS.filter((p) => p.cat === active) : PRODUCTS),
    [active]
  );

  const catName = (cat: string) => (lang === 'el' ? CATEGORY_EL[cat] ?? cat : cat);

  return (
    <section id="shop" className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d96c3f]">{c.shopKicker}</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#2b2521] sm:text-4xl">{c.shopTitle}</h2>
          <p className="mt-5 leading-relaxed text-[#6b6156]">{c.shopText}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              active === null
                ? 'bg-[#2b2521] text-white shadow-md'
                : 'bg-[#f6f1e7] text-[#5c544c] hover:bg-[#ede4d2]'
            }`}
          >
            {c.all}
          </button>
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat === active ? null : cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                active === cat
                  ? 'bg-[#d96c3f] text-white shadow-md'
                  : 'bg-[#f6f1e7] text-[#5c544c] hover:bg-[#ede4d2]'
              }`}
            >
              {catName(cat)}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {visible.map((p) => (
            <a
              key={p.img}
              href={INFO.wolt}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl border border-[#f0e9dc] bg-[#faf6ef] transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#a3764f] shadow-sm">
                  {catName(p.cat)}
                </span>
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-[#2b2521]">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-[#d96c3f]">
                    €{p.price.toFixed(2)}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2b2521] text-white transition-colors group-hover:bg-[#d96c3f]">
                    <ShoppingBag className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={INFO.wolt}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#2b2521] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#d96c3f]"
          >
            {c.viewAll}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
