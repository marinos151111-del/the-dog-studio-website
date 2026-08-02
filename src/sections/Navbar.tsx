import { useEffect, useState } from 'react';
import { PawPrint, Menu, X, Phone } from 'lucide-react';
import type { Content, Lang } from '../data/content';
import { INFO } from '../data/content';

interface Props {
  c: Content;
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function Navbar({ c, lang, setLang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: c.nav.about },
    { href: '#grooming', label: c.nav.grooming },
    { href: '#shop', label: c.nav.shop },
    { href: '#gallery', label: c.nav.gallery },
    { href: '#contact', label: c.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#faf6ef]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(43,37,33,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d96c3f] text-white shadow-md">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-[#2b2521]">
            The Dog Studio
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#5c544c] transition-colors hover:text-[#d96c3f]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex overflow-hidden rounded-full border border-[#e3d9c8] bg-white text-xs font-semibold">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 transition-colors ${lang === 'en' ? 'bg-[#2b2521] text-white' : 'text-[#5c544c] hover:bg-[#f3ede1]'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('el')}
              className={`px-3 py-1.5 transition-colors ${lang === 'el' ? 'bg-[#2b2521] text-white' : 'text-[#5c544c] hover:bg-[#f3ede1]'}`}
            >
              ΕΛ
            </button>
          </div>
          <a
            href={INFO.phoneHref}
            className="flex items-center gap-2 rounded-full bg-[#d96c3f] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#c55a2e] hover:shadow-lg"
          >
            <Phone className="h-4 w-4" />
            {c.bookNow}
          </a>
        </div>

        <button className="lg:hidden text-[#2b2521]" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#eee5d5] bg-[#faf6ef] px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#5c544c] hover:bg-[#f3ede1]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex overflow-hidden rounded-full border border-[#e3d9c8] bg-white text-xs font-semibold">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 ${lang === 'en' ? 'bg-[#2b2521] text-white' : 'text-[#5c544c]'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('el')}
                className={`px-3 py-1.5 ${lang === 'el' ? 'bg-[#2b2521] text-white' : 'text-[#5c544c]'}`}
              >
                ΕΛ
              </button>
            </div>
            <a
              href={INFO.phoneHref}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#d96c3f] px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              {c.bookNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
