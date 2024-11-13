import initialData from "../../data/data";

const initialClients = {
  achats: initialData.clients,
};

export default function achatsReducer(state = initialClients, action) {
  switch (action.type) {
    default:
      return state;
  }
}
