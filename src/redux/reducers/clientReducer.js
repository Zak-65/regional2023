import initialData from "../../data/data";

const initialClients = {
  clients: initialData.clients,
};

export default function achatsReducer(state = initialClients, action) {
  switch (action.type) {
    case "AJOUTER_CLIENT":
      return { ...state, clients: [...state.clients, action.payload] };

    default:
      return state;
  }
}
