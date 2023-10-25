import axios from "axios";
import { URL_BACK } from "../../config/config";
import {
  GET_USER_PENDING,
  GET_USER_REJECTED,
  GET_USER_SUCCESS,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_PENDING,
  SIGNUP_USER_REJECTED,
  SIGNUP_USER_SUCCESS,
  UPDATE_USER_PENDING,
  UPDATE_USER_REJECTED,
  UPDATE_USER_SUCCESS,
} from "../types/authTypes";
const AUTH = "/auth";

export const login = (payload) => {
  return async function (dispatch) {
    dispatch({ type: LOGIN_USER_PENDING });
    try {
      const { data } = await axios.post(`${URL_BACK + AUTH}/login`, payload);
      console.log(data);
      localStorage.setItem("userData", data && JSON.stringify(data));
      return dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    } catch (error) {
      return dispatch({ type: LOGIN_USER_REJECTED, payload: error.response });
    }
  };
};

export const updateUser = (payload) => {
  return async function (dispatch) {
    dispatch({ type: UPDATE_USER_PENDING });
    try {
      const { data } = await axios.put(`${URL_BACK}${AUTH}/update`, payload);
      localStorage.setItem("userData", data && JSON.stringify(data.user));
      return dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch (error) {
      return dispatch({ type: UPDATE_USER_REJECTED, payload: error.response });
    }
  };
};

export const signup = (payload) => {
  return async function (dispatch) {
    dispatch({ type: SIGNUP_USER_PENDING });
    try {
      const { data } = await axios.post(`${URL_BACK}${AUTH}/signup`, payload);
      console.log(data);
      localStorage.setItem("userData", data && JSON.stringify(data));
      return dispatch({ type: SIGNUP_USER_SUCCESS, payload: data });
    } catch (error) {
      return dispatch({ type: SIGNUP_USER_REJECTED, payload: error.response });
    }
  };
};

export const getUser = () => {
  return async function (dispatch) {
    dispatch({ type: GET_USER_PENDING });
    try {
      const { data } = await axios.get(`${URL_BACK + AUTH}/recover`);
      return dispatch({ type: GET_USER_SUCCESS, payload: data });
    } catch (err) {
      return dispatch({ type: GET_USER_REJECTED, payload: err.response });
    }
  };
};
