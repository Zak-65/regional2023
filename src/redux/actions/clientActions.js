function ajouterClientAction(newClient) {
  return {
    type: "AJOUTER_CLIENT",
    payload: newClient,
  };
}

function modifierClientAction(newClient) {
  return {
    type: "MODIFIER_CLIENT",
    payload: newClient,
  };
}

function supprimerClientAction(ClientID) {
  return {
    type: "SUPPRIMER_CLIENT",
    payload: ClientID,
  };
}

export { ajouterClientAction, modifierClientAction, supprimerClientAction };
