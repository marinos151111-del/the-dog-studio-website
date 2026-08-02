import { Star, ArrowRight, Scissors, MapPin } from 'lucide-react';
import type { Content } from '../data/content';
import { INFO } from '../data/content';

export default function Hero({ c }: { c: Content }) {
  return (
    <section id="top" className="paw-pattern relative overflow-hidden pb-10 pt-28 sm:pt-32 lg:pb-14 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e8ddc9] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#a3764f]">
            <MapPin className="h-3.5 w-3.5 text-[#d96c3f]" />
            {c.heroKicker}
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.12] text-[#2b2521] sm:text-5xl lg:text-[3.4rem]">
            {c.heroTitleA}
            <br />
            <span className="italic text-[#d96c3f]">{c.heroTitleB}</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#6b6156] sm:text-lg">{c.heroText}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className="group flex items-center gap-2 rounded-full bg-[#2b2521] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#d96c3f]"
            >
              {c.heroCta1}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={INFO.phoneHref}
              className="flex items-center gap-2 rounded-full border-2 border-[#2b2521] bg-transparent px-7 py-3 text-sm font-semibold text-[#2b2521] transition-all hover:border-[#d96c3f] hover:text-[#d96c3f]"
            >
              <Scissors className="h-4 w-4" />
              {c.heroCta2}
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-white/80 px-5 py-3 shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#f0b429] text-[#f0b429]" />
              ))}
            </div>
            <span className="text-sm font-semibold text-[#2b2521]">{c.heroBadge}</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#f4d8a8]/60 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#d96c3f]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] rounded-tr-[7rem] border-8 border-white shadow-2xl">
            <img
              src="/images/hero.jpg"
              alt="The Dog Studio — curated pet products"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f0e3]">
              <Scissors className="h-5 w-5 text-[#6f8f5e]" />
            </span>
            <div>
              <p className="text-xs font-medium text-[#8a7f72]">Limassol · Cyprus</p>
              <p className="text-sm font-bold text-[#2b2521]">{INFO.address.split(',')[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
