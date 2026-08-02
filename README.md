# The Dog Studio — Website

Site vitrine bilingue (English / Ελληνικά) pour **The Dog Studio**, boutique pour animaux & studio de toilettage à Limassol, Chypre.

- Stack : React 19 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- Contenu : textes et catalogue produits issus de la page Wolt publique du magasin

## Démarrage en local

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de production

```bash
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

## Images

Le dossier `public/images/` (86 photos : hero, services de toilettage, catégories et produits) n'est pas inclus dans ce dépôt. Récupérez l'archive `images.zip` fournie séparément, puis :

```bash
unzip images.zip -d public/   # crée public/images/
```

Avant de publier sur GitHub Pages, committez aussi les images :

```bash
git add public/images && git commit -m "Add images" && git push
```

## Déploiement GitHub Pages

1. `npm run build`
2. Pousser le contenu de `dist/` sur une branche `gh-pages` (ou utiliser l'action GitHub "Deploy static content to Pages")
3. Settings → Pages → Source : branche `gh-pages`

Le `vite.config.ts` utilise déjà `base: './'`, le site fonctionne donc tel quel sous un sous-chemin `user.github.io/<repo>/`.
