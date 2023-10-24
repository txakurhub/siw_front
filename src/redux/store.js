import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { ticketReducer } from "./reducers/ticketReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ticket: ticketReducer,
});

export const store = createStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk)
);
