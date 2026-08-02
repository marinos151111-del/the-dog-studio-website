export type Lang = 'en' | 'el';

export const INFO = {
  name: 'The Dog Studio',
  phone: '+357 97718310',
  phoneHref: 'tel:+35797718310',
  address: 'Panagi Lapa 12, 3075 Limassol, Cyprus',
  addressEl: 'Παναγή Λάπα 12, 3075 Λεμεσός, Κύπρος',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=34.68572546,33.02891399',
  facebook: 'https://www.facebook.com/dogstudiocy/',
  instagram: 'https://www.instagram.com/thedogstudiocy/',
  wolt: 'https://wolt.com/en/cyp/limassol/venue/the-dog-studio',
  rating: '9.6',
};

const t = {
  en: {
    nav: { about: 'About', grooming: 'Grooming', shop: 'Shop', gallery: 'Gallery', contact: 'Visit Us' },
    bookNow: 'Book Now',
    heroKicker: 'Pet Boutique & Grooming Studio — Limassol',
    heroTitleA: 'Where good design',
    heroTitleB: 'meets good dogs!',
    heroText:
      'A curated pet boutique and grooming studio in the heart of Limassol. Premium food, designer accessories, toys, spa & grooming essentials — everything your four-legged friend deserves, delivered with love.',
    heroCta1: 'Explore the Shop',
    heroCta2: 'Book a Grooming',
    heroBadge: 'Rated 9.6 on Wolt',
    aboutKicker: 'Our Story',
    aboutTitle: 'A studio made for happy pets',
    aboutText1:
      'The Dog Studio is Limassol’s design-loving pet boutique and grooming studio. We hand-pick every product on our shelves — from natural, grain-free food by Lily’s Kitchen and Royal Canin to handcrafted collars and harnesses by Atelier Markiz, Floofs & Cookies and Max & Molly.',
    aboutText2:
      'Inside our grooming studio, every dog is treated like our own: gentle hands, premium natural shampoos and styling that suits each personality. Cats are family too — we stock litter, food, treats and accessories for our feline friends.',
    feat1Title: 'Curated Premium Brands',
    feat1Text: 'Lily’s Kitchen, Royal Canin, Beco Pets, KONG, M-Pets, Red Dingo and more.',
    feat2Title: 'Grooming with Care',
    feat2Text: 'Gentle, stress-free grooming and spa treatments with natural products.',
    feat3Title: 'Delivery via Wolt',
    feat3Text: 'Order online and get your pet favourites delivered across Limassol.',
    groomingKicker: 'The Studio',
    groomingTitle: 'Grooming & Spa Services',
    groomingText:
      'From a refreshing bath to a full restyle, our groomers take their time with every dog. We use ultra-premium natural shampoos and work gently — no rush, no stress. Call us to book your appointment.',
    services: [
      { title: 'Full Grooming', text: 'Bath, blow-dry, haircut and styling tailored to your dog’s breed and personality.' },
      { title: 'Bath & Blow-Dry', text: 'A deep-cleansing bath with premium natural shampoos, finished with a fluffy blow-dry.' },
      { title: 'Haircut & Styling', text: 'From breed-standard cuts to creative styles — fresh looks for good dogs.' },
      { title: 'Nails & Paws', text: 'Nail trimming, paw pad care and gentle finishing touches.' },
      { title: 'Ears & Hygiene', text: 'Ear cleaning and hygiene care to keep your companion healthy and comfortable.' },
      { title: 'Puppy’s First Groom', text: 'A soft introduction to grooming for puppies — short, sweet and stress-free.' },
    ],
    shopKicker: 'The Boutique',
    shopTitle: 'Shop our favourites',
    shopText:
      'A selection from our shelves. Order everything online via Wolt with delivery across Limassol — or drop by the studio and say hello.',
    orderOnWolt: 'Order on Wolt',
    viewAll: 'See everything on Wolt',
    all: 'All',
    galleryKicker: 'Gallery',
    galleryTitle: 'Life at the studio',
    contactKicker: 'Visit Us',
    contactTitle: 'Come say hello',
    contactText:
      'We’d love to meet you and your furry friend. Find us in Limassol — or order online and we’ll come to you.',
    addressLabel: 'Address',
    hoursLabel: 'Opening Hours',
    phoneLabel: 'Phone',
    followLabel: 'Follow Us',
    days: [
      ['Monday – Friday', '09:00 – 19:30'],
      ['Saturday', '09:00 – 16:00'],
      ['Sunday', 'Closed'],
    ],
    openMaps: 'Open in Google Maps',
    footerText: 'Where good design meets good dogs!',
    footerNote: 'Pet Boutique & Grooming Studio — Limassol, Cyprus',
  },
  el: {
    nav: { about: 'Σχετικά', grooming: 'Περιποίηση', shop: 'Κατάστημα', gallery: 'Συλλογή', contact: 'Επικοινωνία' },
    bookNow: 'Κλείστε Ραντεβού',
    heroKicker: 'Pet Boutique & Studio Περιποίησης — Λεμεσός',
    heroTitleA: 'Όπου το καλό ντιζάιν',
    heroTitleB: 'συναντά τα καλά σκυλιά!',
    heroText:
      'Ένα boutique για κατοικίδια και studio περιποίησης στην καρδιά της Λεμεσού. Premium τροφές, σχεδιασμένα αξεσουάρ, παιχνίδια και προϊόντα spa — ό,τι αξίζει ο τετράποδος φίλος σας, με πολλή αγάπη.',
    heroCta1: 'Δείτε το Κατάστημα',
    heroCta2: 'Κλείστε Περιποίηση',
    heroBadge: 'Βαθμολογία 9.6 στο Wolt',
    aboutKicker: 'Η Ιστορία μας',
    aboutTitle: 'Ένα studio φτιαγμένο για χαρούμενα κατοικίδια',
    aboutText1:
      'Το The Dog Studio είναι το boutique κατοικίδιων και studio περιποίησης της Λεμεσού που αγαπά το ντιζάιν. Επιλέγουμε ένα-ένα τα προϊόντα μας — από φυσικές τροφές χωρίς δημητριακά της Lily’s Kitchen και Royal Canin μέχρι χειροποίητα κολάρα και σαμαράκια των Atelier Markiz, Floofs & Cookies και Max & Molly.',
    aboutText2:
      'Στο studio περιποίησής μας, κάθε σκύλος φροντίζεται σαν δικός μας: απαλά χέρια, premium φυσικά σαμπουάν και στυλ που ταιριάζει σε κάθε χαρακτήρα. Και οι γάτες είναι οικογένεια — θα βρείτε άμμο, τροφές, λιχουδιές και αξεσουάρ για τις γατούλες σας.',
    feat1Title: 'Επιλεγμένες Premium Μάρκες',
    feat1Text: 'Lily’s Kitchen, Royal Canin, Beco Pets, KONG, M-Pets, Red Dingo και πολλές ακόμη.',
    feat2Title: 'Περιποίηση με Μεράκι',
    feat2Text: 'Απαλή περιποίηση και spa χωρίς στρες, με φυσικά προϊόντα.',
    feat3Title: 'Παράδοση με Wolt',
    feat3Text: 'Παραγγείλτε online και παραλάβετε σε όλη τη Λεμεσό.',
    groomingKicker: 'Το Studio',
    groomingTitle: 'Υπηρεσίες Περιποίησης & Spa',
    groomingText:
      'Από ένα δροσιστικό μπάνιο μέχρι πλήρη αλλαγή λουκ, αφιερώνουμε χρόνο σε κάθε σκύλο. Χρησιμοποιούμε ultra-premium φυσικά σαμπουάν και δουλεύουμε απαλά — χωρίς βιασύνη και στρες. Καλέστε μας για ραντεβού.',
    services: [
      { title: 'Πλήρης Περιποίηση', text: 'Μπάνιο, στέγνωμα, κούρεμα και στυλ προσαρμοσμένα στη φυλή και τον χαρακτήρα του σκύλου σας.' },
      { title: 'Μπάνιο & Στέγνωμα', text: 'Βαθύς καθαρισμός με premium φυσικά σαμπουάν και αφράτο στέγνωμα.' },
      { title: 'Κούρεμα & Στυλ', text: 'Από κλασικά κουρέματα φυλής μέχρι δημιουργικά στυλ — φρέσκο λουκ για καλά σκυλιά.' },
      { title: 'Νύχια & Πατούσες', text: 'Κόψιμο νυχιών, φροντίδα πατούσας και απαλές τελευταίες πινελιές.' },
      { title: 'Αυτιά & Υγιεινή', text: 'Καθαρισμός αυτιών και φροντίδα υγιεινής για έναν υγιή και άνετο σύντροφο.' },
      { title: 'Πρώτη Περιποίηση Κουταβιού', text: 'Μια απαλή πρώτη γνωριμία με την περιποίηση — σύντομη, γλυκιά και χωρίς στρες.' },
    ],
    shopKicker: 'Το Boutique',
    shopTitle: 'Τα αγαπημένα μας',
    shopText:
      'Μια επιλογή από τα ράφια μας. Παραγγείλτε τα πάντα online μέσω Wolt με παράδοση σε όλη τη Λεμεσό — ή περάστε από το studio να μας γνωρίσετε.',
    orderOnWolt: 'Παραγγελία στο Wolt',
    viewAll: 'Δείτε τα πάντα στο Wolt',
    all: 'Όλα',
    galleryKicker: 'Συλλογή',
    galleryTitle: 'Στιγμές στο studio',
    contactKicker: 'Επικοινωνία',
    contactTitle: 'Ελάτε να μας γνωρίσετε',
    contactText:
      'Θα χαρούμε να γνωρίσουμε εσάς και τον τετράποδο φίλο σας. Θα μας βρείτε στη Λεμεσό — ή παραγγείλτε online και ερχόμαστε εμείς σε εσάς.',
    addressLabel: 'Διεύθυνση',
    hoursLabel: 'Ωράριο Λειτουργίας',
    phoneLabel: 'Τηλέφωνο',
    followLabel: 'Ακολουθήστε μας',
    days: [
      ['Δευτέρα – Παρασκευή', '09:00 – 19:30'],
      ['Σάββατο', '09:00 – 16:00'],
      ['Κυριακή', 'Κλειστά'],
    ],
    openMaps: 'Άνοιγμα στο Google Maps',
    footerText: 'Όπου το καλό ντιζάιν συναντά τα καλά σκυλιά!',
    footerNote: 'Pet Boutique & Studio Περιποίησης — Λεμεσός, Κύπρος',
  },
} as const;

export type Content = (typeof t)['en'];
export const CONTENT: Record<Lang, Content> = t as unknown as Record<Lang, Content>;
