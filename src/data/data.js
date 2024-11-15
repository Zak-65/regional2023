const initialData = {
  clients: [
    { numero: "1", nom: "merzoug", prenom: "khalid" },
    { numero: "2", nom: "sidqui", prenom: "zakaria" },
  ],
  produits: [
    { codeProduit: "1", intitule: "Produit1", prix: 10, qteStock: 10 },
    { codeProduit: "2", intitule: "Produit2", prix: 20, qteStock: 10 },
    { codeProduit: "3", intitule: "Produit3", prix: 30, qteStock: 10 },
  ],
  achats: [
    { numero: "1", codeProduit: "1", qte: 5 },
    { numero: "2", codeProduit: "2", qte: 5 },
    { numero: "1", codeProduit: "3", qte: 15 },
  ],
};

export default initialData;
