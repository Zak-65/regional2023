import initialData from "../../data/data";

const initialAchats = {
  achats: initialData.achats,
};

export default function achatsReducer(state = initialAchats, action) {
  switch (action.type) {
    case "AJOUTER_ACHAT":
      return { ...state, achats: [...state.achats, action.payload] };

    case "MODIFIER_ACHAT":
      return {
        ...state,
        achats: state.achats.map((achat) => (achat.id === action.payload.id ? action.payload : achat)),
      };

    case "SUPPRIMER_ACHAT":
      console.log(action);
      return {
        ...state,
        achats: state.achats.filter((achat) => achat.numero != action.payload.numero && achat.codeProduit != action.payload.codeProduit),
      };

    default:
      return state;
  }
}
