import { ADD_USER, EDIT_USER, DELETE_USER } from './actions';

const initialState = {
  users: [
    {
      name: 'Helen',
      birthday: '1999-01-10',
      gender: 'female'
    },
    {
      name: 'Paris',
      birthday: '1999-02-12',
      gender: 'male'
    },
    {
      name: 'Richard',
      birthday: '1999-01-19',
      gender: 'male'
    }
  ]
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
    case DELETE_USER: {
      const { users } = state;
      const {
        payload: { userId }
      } = action;
      return {
        ...state,
        users: [...users.slice(0, userId), ...users.slice(userId + 1)]
      };
    }
    default:
      return state;
  }
};
