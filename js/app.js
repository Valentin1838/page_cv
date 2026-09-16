// Script facultatif, chargé avec `defer` : n'impacte pas le rendu initial.
// Met à jour automatiquement l'année du pied de page.
(function () {
  "use strict";

  const annee = document.getElementById("annee");
  if (annee) {
    annee.textContent = String(new Date().getFullYear());
  }
})();
