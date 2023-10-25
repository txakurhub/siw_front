import axios from "axios";
import { URL_BACK } from "../../config/config";
import {
  CREATE_TICKET_PENDING,
  CREATE_TICKET_REJECTED,
  CREATE_TICKET_SUCCESS,
  GET_TICKETS_PENDING,
  GET_TICKETS_REJECTED,
  GET_TICKETS_SUCCESS,
} from "../types/ticketTypes";
const TICKET = "/tickets";

export const getTickets = () => {
  return async function (dispatch) {
    dispatch({ type: GET_TICKETS_PENDING });
    try {
      const { data } = await axios.get(`${URL_BACK}${TICKET}`);
      return dispatch({ type: GET_TICKETS_SUCCESS, payload: data });
    } catch (error) {
      return dispatch({ type: GET_TICKETS_REJECTED, payload: error.response });
    }
  };
};

export const createTicket = (payload) => {
  return async function (dispatch) {
    dispatch({ type: CREATE_TICKET_PENDING });
    try {
      const { data } = await axios.post(`${URL_BACK}${TICKET}`, payload);
      return dispatch({ type: CREATE_TICKET_SUCCESS, payload: data });
    } catch (err) {
      return dispatch({ type: CREATE_TICKET_REJECTED, payload: err.response });
    }
  };
};
