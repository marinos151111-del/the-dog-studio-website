import { MapPin, Clock, Phone, Facebook, Instagram, ExternalLink, Star } from 'lucide-react';
import type { Content, Lang } from '../data/content';
import { INFO } from '../data/content';

interface Props {
  c: Content;
  lang: Lang;
}

export default function Contact({ c, lang }: Props) {
  return (
    <section id="contact" className="bg-[#2b2521] py-10 text-white lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0b429]">{c.contactKicker}</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{c.contactTitle}</h2>
          <p className="mt-5 leading-relaxed text-white/70">{c.contactText}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur transition-colors hover:bg-white/10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d96c3f]">
              <MapPin className="h-6 w-6" />
            </span>
            <h3 className="font-display mt-5 text-lg font-bold">{c.addressLabel}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {lang === 'el' ? INFO.addressEl : INFO.address}
            </p>
            <a
              href={INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#f0b429] hover:underline"
            >
              {c.openMaps}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur transition-colors hover:bg-white/10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6f8f5e]">
              <Clock className="h-6 w-6" />
            </span>
            <h3 className="font-display mt-5 text-lg font-bold">{c.hoursLabel}</h3>
            <ul className="mt-3 space-y-2">
              {c.days.map(([d, h]) => (
                <li key={d} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/70">{d}</span>
                  <span className={`font-semibold ${['Closed', 'Κλειστά'].includes(h as string) ? 'text-[#e8a08a]' : 'text-white'}`}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur transition-colors hover:bg-white/10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0b429]">
              <Phone className="h-6 w-6 text-[#2b2521]" />
            </span>
            <h3 className="font-display mt-5 text-lg font-bold">{c.phoneLabel}</h3>
            <a href={INFO.phoneHref} className="mt-2 block text-sm font-semibold text-white hover:text-[#f0b429]">
              {INFO.phone}
            </a>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-white/50">{c.followLabel}</p>
            <div className="mt-3 flex gap-3">
              <a
                href={INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#d96c3f]"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href={INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#d96c3f]"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href={INFO.wolt}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wolt"
                className="flex h-10 items-center gap-1.5 rounded-full bg-white/10 px-4 text-xs font-bold transition-all hover:bg-[#d96c3f]"
              >
                <Star className="h-3.5 w-3.5 fill-current" />
                Wolt
              </a>
            </div>
          </div>
        </div>

        <div className="paw-pattern relative mt-10 overflow-hidden rounded-3xl bg-[#faf6ef] shadow-2xl">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <MapPin className="h-8 w-8 text-[#d96c3f]" />
            <a
              href={INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#2b2521] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d96c3f]"
            >
              {c.openMaps}
            </a>
          </div>
          <iframe
            title="The Dog Studio — map"
            src="https://maps.google.com/maps?q=34.68572546,33.02891399&z=16&output=embed"
            className="relative h-[320px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
