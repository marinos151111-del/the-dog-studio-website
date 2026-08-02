import { Sparkles, Scissors, Truck } from 'lucide-react';
import type { Content } from '../data/content';

export default function About({ c }: { c: Content }) {
  const features = [
    { icon: Sparkles, title: c.feat1Title, text: c.feat1Text, bg: 'bg-[#fdeee2]', color: 'text-[#d96c3f]' },
    { icon: Scissors, title: c.feat2Title, text: c.feat2Text, bg: 'bg-[#e8f0e3]', color: 'text-[#6f8f5e]' },
    { icon: Truck, title: c.feat3Title, text: c.feat3Text, bg: 'bg-[#fdf3d7]', color: 'text-[#c99a2c]' },
  ];

  return (
    <section id="about" className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/cat_walk_and_wear.jpg"
                alt="Walk & wear accessories"
                className="mt-8 aspect-[4/5] w-full rounded-3xl object-cover shadow-lg"
                loading="lazy"
              />
              <img
                src="/images/cat_grooming_and_spa.jpg"
                alt="Grooming & spa products"
                className="aspect-[4/5] w-full rounded-3xl bg-[#f6f1e7] object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl bg-[#2b2521] px-6 py-4 text-center shadow-xl">
              <p className="font-display text-2xl font-bold text-[#f0b429]">9.6</p>
              <p className="text-xs font-medium text-white/80">Wolt rating</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d96c3f]">{c.aboutKicker}</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-[#2b2521] sm:text-4xl">{c.aboutTitle}</h2>
            <p className="mt-6 leading-relaxed text-[#6b6156]">{c.aboutText1}</p>
            <p className="mt-4 leading-relaxed text-[#6b6156]">{c.aboutText2}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-[#f0e9dc] bg-[#faf6ef] p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${f.bg}`}>
                <f.icon className={`h-6 w-6 ${f.color}`} />
              </span>
              <h3 className="font-display mt-4 text-lg font-bold text-[#2b2521]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b6156]">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
