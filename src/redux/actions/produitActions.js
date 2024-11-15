import { AJOUTER_PRODUIT, MODIFIER_PRODUIT, SUPPRIMER_PRODUIT } from "./types";

function ajouterProduitAction(newProduit) {
  return {
    type: AJOUTER_PRODUIT,
    payload: newProduit,
  };
}

function modifierProduitAction(newProduit) {
  return {
    type: MODIFIER_PRODUIT,
    payload: newProduit,
  };
}

function supprimerProduitAction(ProduitID) {
  return {
    type: SUPPRIMER_PRODUIT,
    payload: ProduitID,
  };
}

export { ajouterProduitAction, modifierProduitAction, supprimerProduitAction };
