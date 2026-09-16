# page_cv — CV Web de Valentin (page HTML statique)

CV en ligne simple, lisible et responsive, publié avec GitHub Pages.

- **Dépôt GitHub :** https://github.com/ALIAS/page_cv
- **Site en ligne :** https://ALIAS.github.io/page_cv/

## Confidentialité

Conformément aux consignes, ce CV ne contient **aucune donnée personnelle sensible** : pas de numéro de téléphone, pas d'adresse postale, pas d'e-mail. Le seul moyen de contact proposé est le profil GitHub.

## Structure du projet

```
.
├─ index.html      Page unique du CV (HTML sémantique)
├─ cv.md           Contenu du CV rédigé en Markdown (étape « contenu d'abord »)
├─ README.md       Ce fichier : présentation, choix techniques, auto-évaluation
├─ css/
│  └─ style.css    Feuille de style mobile-first, police système, sans dépendance
├─ js/
│  └─ app.js       Script minimal chargé en `defer` (année du pied de page)
└─ img/
   └─ favicon.svg  Icône vectorielle (256 octets)
```

## Choix techniques

| Critère | Mise en œuvre |
|---|---|
| **HTML sémantique** | `header` / `nav` / `main` / `section` / `article` / `footer` ; un seul `h1` ; hiérarchie `h2` → `h3` sans saut ; `aria-labelledby` sur chaque section ; dates en `<time>`. |
| **Responsive** | CSS pur, mobile-first. Flexbox pour la navigation et les étiquettes, Grid pour les compétences (1 colonne en mobile, 3 colonnes dès 768 px). Aucun scroll horizontal. |
| **UX / Accessibilité** | Lien d'évitement « Aller au contenu principal », `:focus-visible` marqué (contour 3 px orange), contrastes ≥ 4.5:1, police 16 px minimum, interligne 1.6, libellés de liens explicites (« Voir mon profil GitHub »), mode sombre via `prefers-color-scheme`, `prefers-reduced-motion` respecté, feuille d'impression. |
| **SEO** | `<title>` descriptif, `<meta name="description">`, balises Open Graph, données structurées JSON-LD (`Person`), ancres lisibles (`#competences`, `#formation`…), `lang="fr"`. |
| **Performance** | Aucune police web, aucune requête tierce, aucune bibliothèque. Un seul fichier CSS (~6 ko), un script de 300 octets en `defer`, une icône SVG de 256 octets. |
| **Confidentialité** | Aucune donnée sensible ; contact via GitHub uniquement (rappelé explicitement dans la section Contact). |

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier avec un serveur statique (ex. extension « Live Server » de VS Code).

## Auto-évaluation

### 1. Résultats des outils

| Outil | V1 | Version finale |
|---|---|---|
| **W3C Validator** (HTML) | _à compléter_ | _à compléter_ |
| **Outiref** — H1 unique | _à compléter_ | _à compléter_ |
| **Outiref** — hiérarchie H2–H6 | _à compléter_ | _à compléter_ |
| **PageSpeed mobile** — Performance | _à compléter_ | _à compléter_ |
| **PageSpeed mobile** — Accessibilité | _à compléter_ | _à compléter_ |
| **PageSpeed mobile** — Bonnes pratiques | _à compléter_ | _à compléter_ |
| **PageSpeed mobile** — SEO | _à compléter_ | _à compléter_ |

**W3C :** _X erreur(s) / X avertissement(s) — principaux points remontés._

**Outiref :** _H1 unique ? hiérarchie correcte ? title / meta description détectés ? observations._

**PageSpeed (mobile) :** _points remontés (LCP, CLS, contrastes, etc.) et lecture des résultats._

### 2. Corrections effectuées entre la V1 et la version finale

| # | Problème constaté (outil) | Cause | Correction | Impact mesuré |
|---|---|---|---|---|
| 1 | _…_ | _…_ | _…_ | _…_ |
| 2 | _…_ | _…_ | _…_ | _…_ |

### 3. Analyse

- **Ce qui a bien fonctionné :** _…_
- **Ce qui a posé problème :** _…_
- **Ce que je ferais différemment :** _…_

## Historique des versions

- **V1** — première publication : structure HTML, CSS responsive, contenu complet.
- **Version finale** — corrections après passage des validateurs (voir tableau ci-dessus).
