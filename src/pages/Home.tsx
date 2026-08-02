import { useState } from 'react';
import { CONTENT, type Lang } from '../data/content';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Grooming from '../sections/Grooming';
import Shop from '../sections/Shop';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');
  const c = CONTENT[lang];

  return (
    <div className="min-h-screen bg-[#faf6ef]">
      <Navbar c={c} lang={lang} setLang={setLang} />
      <main>
        <Hero c={c} />
        <About c={c} />
        <Grooming c={c} />
        <Shop c={c} lang={lang} />
        <Gallery c={c} />
        <Contact c={c} lang={lang} />
      </main>
      <Footer c={c} />
    </div>
  );
}
