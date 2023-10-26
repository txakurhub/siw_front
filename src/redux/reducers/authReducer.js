import {
  GET_USER_PENDING,
  GET_USER_REJECTED,
  GET_USER_SUCCESS,
  LOGIN_USER_PENDING,
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
  RECOVERY_PASSWORD_PENDING,
  RECOVERY_PASSWORD_REJECTED,
  RECOVERY_PASSWORD_SUCCESS,
  SIGNUP_USER_PENDING,
  SIGNUP_USER_REJECTED,
  SIGNUP_USER_SUCCESS,
  UPDATE_USER_PENDING,
  UPDATE_USER_REJECTED,
  UPDATE_USER_SUCCESS,
} from "../types/authTypes";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_PENDING:
      return { ...state, isLoading: true, user: null, error: null };
    case LOGIN_USER_SUCCESS:
      return { ...state, isLoading: false, user: payload, error: null };
    case LOGIN_USER_REJECTED:
      return { ...state, isLoading: false, user: null, error: payload };
    case UPDATE_USER_PENDING:
      return { ...state, isLoading: true, user: null, error: null };
    case UPDATE_USER_SUCCESS:
      return { ...state, isLoading: false, user: payload, error: null };
    case UPDATE_USER_REJECTED:
      return { ...state, isLoading: false, user: null, error: payload };
    case SIGNUP_USER_PENDING:
      return { ...state, isLoading: true, user: null, error: null };
    case SIGNUP_USER_SUCCESS:
      return { ...state, isLoading: false, user: payload, error: null };
    case SIGNUP_USER_REJECTED:
      return { ...state, isLoading: false, user: null, error: payload };
    case GET_USER_PENDING:
      return { ...state, isLoading: true, user: null, error: null };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, user: payload, error: null };
    case GET_USER_REJECTED:
      return { ...state, isLoading: false, user: null, error: payload };
    case RECOVERY_PASSWORD_PENDING:
      return { ...state, isLoading: true, user: null, error: null };
    case RECOVERY_PASSWORD_SUCCESS:
      return { ...state, isLoading: false, user: payload, error: null };
    case RECOVERY_PASSWORD_REJECTED:
      return { ...state, isLoading: false, user: null, error: payload };
    default:
      return { ...state };
  }
};
