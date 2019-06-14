import { ADD_USER, EDIT_USER, DELETE_USER, GET_USERS } from './actions';

const initialState = {
  users: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user]
      };
    case EDIT_USER:
      return {
        ...state,
        users: [
          ...state.users.map((u, i) => {
            if (i === action.payload.userId) {
              return action.payload.user;
            }
            return u;
          })
        ]
      };
    case DELETE_USER:
      return {
        ...state,
        users: action.payload.users
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload.users
      };
    default:
      return state;
  }
};
