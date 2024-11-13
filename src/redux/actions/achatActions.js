function ajouterAchatAction(newAchat) {
  return {
    type: "AJOUTER_ACHAT",
    payload: newAchat,
  };
}

function modifierAchatAction(newAchat) {
  return {
    type: "MODIFIER_ACHAT",
    payload: newAchat,
  };
}

function supprimerAchatAction(achatID) {
  return {
    type: "SUPPRIMER_ACHAT",
    payload: achatID,
  };
}

export { ajouterAchatAction, modifierAchatAction, supprimerAchatAction };
