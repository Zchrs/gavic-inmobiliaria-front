import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import { productReducer} from "../reducers/productReducer";
import { authReducer, authReducerAdmin, authReducerAdvisor  } from "../reducers/authReducer";
import { uxReducer } from "../reducers/uxReducer";
import cartReducer from "../reducers/cartReducer";
import {thunk} from "redux-thunk";



const reducers = combineReducers({
  cart: cartReducer,
  product: productReducer,
  langUI: uxReducer,
  auth: authReducer,
  authAdmin: authReducerAdmin,
  authAdvisor: authReducerAdvisor,
});

// Combina los enhancers en una sola función utilizando compose
const enhancers = compose(
  applyMiddleware(thunk),
  // applyMiddleware(socketIoMiddleware)
);

// Crea la tienda utilizando createStore y los enhancers combinados
export const store = createStore(
  reducers,
  enhancers
);

