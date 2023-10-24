import {
  CREATE_TICKET_PENDING,
  CREATE_TICKET_REJECTED,
  CREATE_TICKET_SUCCESS,
  GET_TICKETS_PENDING,
  GET_TICKETS_REJECTED,
  GET_TICKETS_SUCCESS,
} from "../types/ticketTypes";

const initialState = {
  isLoading: false,
  tickets: null,
  error: null,
};

export const ticketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TICKETS_PENDING:
      return { ...state, isLoading: true, tickets: null, error: null };
    case GET_TICKETS_SUCCESS:
      return { ...state, isLoading: false, tickets: payload, error: null };
    case GET_TICKETS_REJECTED:
      return {
        ...state,
        isLoading: false,
        tickets: null,
        error: payload,
      };
    case CREATE_TICKET_PENDING:
      return { ...state, isLoading: true, tickets: null, error: null };
    case CREATE_TICKET_SUCCESS:
      return { ...state, isLoading: false, tickets: payload, error: null };
    case CREATE_TICKET_REJECTED:
      return { ...state, isLoading: false, tickets: null, error: payload };
    default:
      return { ...state };
  }
};
