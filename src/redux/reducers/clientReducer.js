import initialData from "../../data/data";

const initialClients = {
  clients: initialData.clients,
};

export default function achatsReducer(state = initialClients, action) {
  switch (action.type) {
    default:
      return state;
  }
}
