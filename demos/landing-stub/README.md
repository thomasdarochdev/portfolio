# Landing stub (Next.js)

Squelette **exécutable** pour une landing freelance — preuve publique de stack, pas un faux site client.

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- CSS léger (pas de dépendance Tailwind obligatoire dans ce stub)
- Déploiement prévu : Vercel

## Fichiers

| Fichier | Rôle |
|---------|------|
| `app/page.tsx` | Hero, offres 890 / 1890 / 3500, preuves, contact |
| `app/layout.tsx` | Metadata + shell HTML |
| `app/globals.css` | Styles minimalistes |
| `package.json` | Dépendances Next |
| `tsconfig.json` / `next.config.ts` | Config TypeScript / Next |

## Lancer en local

```bash
cd demos/landing-stub
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Sections

1. Hero + CTA
2. Offres (890 / 1890 / 3500 EUR)
3. Preuves / lien CASE-STUDIES
4. Contact

Acompte typique mission réelle : **40 %**.

Stub volontairement léger : artefact GitHub pour vente freelance.
