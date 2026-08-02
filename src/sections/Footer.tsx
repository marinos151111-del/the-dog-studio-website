import { PawPrint, Facebook, Instagram } from 'lucide-react';
import type { Content } from '../data/content';
import { INFO } from '../data/content';

export default function Footer({ c }: { c: Content }) {
  return (
    <footer className="border-t border-white/10 bg-[#221d19] py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d96c3f]">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold">The Dog Studio</span>
        </div>
        <p className="font-display text-lg italic text-[#f0b429]">“{c.footerText}”</p>
        <p className="text-sm text-white/60">{c.footerNote}</p>
        <div className="flex gap-3">
          <a
            href={INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#d96c3f]"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#d96c3f]"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} The Dog Studio — Limassol, Cyprus
        </p>
      </div>
    </footer>
  );
}
