import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USER,
  SET_REPOS,
  GET_USER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CLEAR_USER:
      return {
        ...state,
        users: [],
        loading: false
      }
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    }
    case SET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    }
    default:
      return state;
  }
};