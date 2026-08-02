import { Phone } from 'lucide-react';
import type { Content } from '../data/content';
import { INFO } from '../data/content';

const SERVICE_IMAGES = [
  { src: '/images/svc_full_grooming.jpg', alt: 'Full grooming session at the studio' },
  { src: '/images/svc_bath.jpg', alt: 'Dog bath with foam bubbles' },
  { src: '/images/svc_haircut.jpg', alt: 'Poodle haircut and styling' },
  { src: '/images/svc_nails.jpg', alt: 'Nail trimming and paw care' },
  { src: '/images/svc_ears.jpg', alt: 'Gentle ear cleaning' },
  { src: '/images/svc_puppy.jpg', alt: "Puppy's first groom" },
];

export default function Grooming({ c }: { c: Content }) {
  return (
    <section id="grooming" className="paw-pattern relative py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d96c3f]">{c.groomingKicker}</p>
          <h2 className="font-display mt-2 text-3xl font-bold text-[#2b2521] sm:text-4xl">{c.groomingTitle}</h2>
          <p className="mt-4 leading-relaxed text-[#6b6156]">{c.groomingText}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.services.map((s, i) => {
            const img = SERVICE_IMAGES[i % SERVICE_IMAGES.length];
            return (
              <div
                key={s.title}
                className="group overflow-hidden rounded-3xl border border-[#eee5d5] bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-[#d96c3f]/40 hover:shadow-xl"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <h3 className="font-display absolute bottom-3 left-4 right-4 text-lg font-bold text-white drop-shadow-md">
                    {s.title}
                  </h3>
                </div>
                <p className="p-5 text-sm leading-relaxed text-[#6b6156]">{s.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={INFO.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-full bg-[#d96c3f] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#c55a2e] hover:shadow-xl"
          >
            <Phone className="h-4 w-4" />
            {c.bookNow} — {INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
