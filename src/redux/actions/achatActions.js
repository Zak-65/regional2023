import { AJOUTER_ACHAT, MODIFIER_ACHAT, SUPPRIMER_ACHAT } from "./types";

function ajouterAchatAction(newAchat) {
  return {
    type: AJOUTER_ACHAT,
    payload: newAchat,
  };
}

function modifierAchatAction(newAchat) {
  return {
    type: MODIFIER_ACHAT,
    payload: newAchat,
  };
}

function supprimerAchatAction(numero, codeProduit) {
  return {
    type: SUPPRIMER_ACHAT,
    payload: {
      numero,
      codeProduit,
    },
  };
}

export { ajouterAchatAction, modifierAchatAction, supprimerAchatAction };
