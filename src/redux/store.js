import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { ticketReducer } from "./reducers/ticketReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer,
  },
  middleware: [thunk],
});

export default store;
