import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import achatReducer from "./reducers/achatReducer";
import produitReducer from "./reducers/produitReducer";
import clientReducer from "./reducers/clientReducer";

const reducers = combineReducers({
  achatReducer: achatReducer,
  produitReducer: produitReducer,
  clientReducer: clientReducer,
});

const store = legacy_createStore(reducers);

export default store;
