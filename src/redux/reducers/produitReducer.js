import initialData from "../../data/data";

const initialProduits = {
  produits: initialData.produits,
};

export default function ProduitsReducer(state = initialProduits, action) {
  switch (action.type) {
    default:
      return state;
  }
}
