# page_cv — CV Web de Valentin (page HTML statique)

CV en ligne simple, lisible et responsive, publié avec GitHub Pages.

- **Dépôt GitHub :** https://github.com/Valentin1838/page_cv
- **Site en ligne :** https://valentin1838.github.io/page_cv/

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

Tests réalisés le 16/09/2026 sur l'URL publique https://valentin1838.github.io/page_cv/ (V1 = commit `4325f0e`, finale = commit `9f8c957` et suivants).

### 1. Résultats des outils

| Outil | V1 | Version finale |
|---|---|---|
| **W3C Validator** (HTML) | 0 erreur / 0 avertissement | 0 erreur / 0 avertissement |
| **Outiref** — H1 unique | Oui (`Valentin`) | Oui |
| **Outiref** — hiérarchie H2–H6 | Correcte : 8 H2, 15 H3, aucun saut de niveau | Correcte (inchangée) |
| **Outiref** — Title | 50 caractères, 9 mots (« peut être rallongé ») | 59 caractères, 11 mots (dans la fourchette 10–12 conseillée) |
| **Outiref** — Meta description | 141 caractères (« légèrement trop courte ») | 248 caractères (dans la fourchette 200–300 conseillée) |
| **Outiref** — Canonical / Robots | Absentes | Présentes |
| **PageSpeed mobile** — Performance | 99 | **100** |
| **PageSpeed mobile** — Accessibilité | 100 | **100** |
| **PageSpeed mobile** — Bonnes pratiques | 100 | **100** |
| **PageSpeed mobile** — SEO | 100 | **100** |
| **PageSpeed mobile** — FCP / LCP / TBT / CLS | 0,8 s / 0,8 s / 0 ms / 0 | 0,8 s / 0,8 s / 0 ms / 0 |

**W3C :** aucun message, dès la V1. Le HTML a été écrit avec une structure simple (`header` / `nav` / `main` / `section` / `article` / `footer`) et vérifié localement avant publication (un seul `h1`, pas de saut de niveau, toutes les balises fermées).

**Outiref :** H1 unique et hiérarchie H2 → H3 validées dès la V1. L'outil a remonté quatre points SEO améliorables (title un peu court, meta description trop courte, absence de `canonical` et de meta `robots`) qui ont tous été corrigés. Il signale aussi le tiret bas dans l'URL (`page_cv`) : c'est le nom de dépôt imposé par la consigne, donc conservé. « Aucune image dans la page » est un choix : le CV est purement textuel, ce qui évite toute ressource lourde.

**PageSpeed (mobile) :** 99 / 100 / 100 / 100 en V1, 100 / 100 / 100 / 100 en finale. Aucun point bloquant. Deux « insights » informatifs subsistent : la feuille CSS externe (6 ko) est une requête bloquant le rendu (~120–300 ms estimés) et la durée de cache de GitHub Pages est fixée à 10 minutes. Voir l'analyse ci-dessous pour les choix faits. Les 10 vérifications manuelles d'accessibilité ont été testées à la main : navigation au clavier (Tab) → lien d'évitement en premier, puis les 7 liens du menu, puis les liens du contenu dans l'ordre du DOM ; contour de focus orange 3 px visible sur chaque élément.

### 2. Corrections effectuées entre la V1 et la version finale

| # | Problème constaté (outil) | Cause | Correction | Impact mesuré |
|---|---|---|---|---|
| 1 | Meta description « légèrement trop courte » : 141 caractères (Outiref) | Description rédigée pour tenir en 150 caractères (ancienne recommandation) | Réécriture à 248 caractères en gardant les mots clés dans les 150 premiers signes et une vraie phrase | Outiref : dans la fourchette 200–300 conseillée ; SEO PageSpeed toujours 100 |
| 2 | Title à 9 mots, « peut être rallongé » (Outiref) | Title volontairement court (50 caractères) | Ajout de « en ligne » → 11 mots, 59 caractères, toujours < 600 px donc non tronqué par Google | Outiref : longueur satisfaisante, dans la fourchette 10–12 mots |
| 3 | Balise `canonical` absente (Outiref) | Oubli : une page unique ne semblait pas en avoir besoin | Ajout de `<link rel="canonical" href="https://valentin1838.github.io/page_cv/">` + `og:url` | Outiref : canonical détectée ; évite le contenu dupliqué entre `/page_cv` et `/page_cv/index.html` |
| 4 | Meta `robots` absente (Outiref) | Absente = `index, follow` par défaut, mais l'outil la signale | Ajout explicite de `<meta name="robots" content="index, follow">` | Outiref : balise détectée |
| 5 | Score Performance 99 avec un insight « ajustement forcé de la mise en page » (PageSpeed) | Variabilité de mesure sur connexion 4G lente simulée | Aucune modification de code ; nouvelle mesure après le déploiement de la finale | Performance 100, insight disparu, Speed Index 3,5 s → 2,2 s |
| 6 | Section « Projets » annonçait « scores PageSpeed ≥ 90 » avant mesure | Texte rédigé avant les tests | Remplacement par les scores réels (100 / 100 / 100 / 100) | Contenu du CV exact et vérifiable (critère C1 « orienté résultats ») |

### 3. Analyse

- **Ce qui a bien fonctionné :** partir du contenu (`cv.md`) avant le HTML a permis une structure Hn propre du premier coup (0 erreur W3C en V1). Le choix « CSS pur, police système, zéro requête tierce » donne directement des scores PageSpeed de 99–100 sans optimisation d'image ni minification.
- **Ce qui a posé problème :** les recommandations SEO d'Outiref (description 200–300 caractères) sont plus longues que les recommandations classiques (~150) ; j'ai choisi de suivre Outiref tout en plaçant les mots clés dans les 150 premiers signes pour satisfaire les deux. Côté outillage, la première tentative de `push` a échoué car le terminal avait été ouvert avant l'installation de Git (PATH non rechargé) : il a suffi d'ouvrir un nouveau terminal.
- **Choix assumés (non corrigés) :** la feuille CSS reste un fichier externe `css/style.css` (structure imposée par la consigne, et un CSS inline empêcherait la mise en cache). Le tiret bas de l'URL `page_cv` est imposé. La durée de cache de 10 minutes est fixée par GitHub Pages. Aucune image n'est utilisée : rien à optimiser, page de 9 ko.
- **Ce que je ferais différemment :** faire passer Outiref dès la V1 locale (via un tunnel) pour intégrer ses recommandations de longueur avant la première publication.

## Historique des versions

- **V1** (`cdf026a`, `4325f0e`) — première publication : structure HTML sémantique, CSS responsive mobile-first, contenu complet, liens GitHub.
- **Version finale** (`9f8c957` et suivants) — corrections SEO après passage des validateurs (title, meta description, canonical, robots, og:url), mise à jour des résultats affichés dans le CV et rédaction de cette auto-évaluation.