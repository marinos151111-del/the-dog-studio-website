import type { Content } from '../data/content';

const GALLERY = [
  { src: '/images/hero.jpg', alt: 'Curated products flat-lay', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/cat_toys_and_enrichment.jpg', alt: 'Toys & enrichment', span: '' },
  { src: '/images/cat_dog_treats.jpg', alt: 'Dog treats', span: '' },
  { src: '/images/cat_cat_accessories.jpg', alt: 'Cat accessories', span: '' },
  { src: '/images/cat_bowls_and_feeders.jpg', alt: 'Bowls & feeders', span: '' },
  { src: '/images/cat_dog_food.jpg', alt: 'Dog food', span: '' },
  { src: '/images/cat_mom_essentials.jpg', alt: 'Mom essentials', span: '' },
];

export default function Gallery({ c }: { c: Content }) {
  return (
    <section id="gallery" className="paw-pattern py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d96c3f]">{c.galleryKicker}</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#2b2521] sm:text-4xl">{c.galleryTitle}</h2>
        </div>

        <div className="mt-8 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-4">
          {GALLERY.map((g) => (
            <div
              key={g.src + g.alt}
              className={`group overflow-hidden rounded-3xl shadow-md ${g.span}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
