import * as userServices from '../services';

export const ADD_USER = 'users/ADD_USER';
export const GET_USERS = 'users/GET_USERS';
export const EDIT_USER = 'users/EDIT_USER';
export const DELETE_USER = 'users/DELETE_USER';

// operations
export const addUser = user => async dispatch => {
  const newUser = await userServices.addUser(user);
  dispatch({
    type: ADD_USER,
    payload: { user: newUser }
  });
};

export const getUsers = () => async dispatch => {
  const users = await userServices.getUsers();
  dispatch({
    type: GET_USERS,
    payload: {
      users
    }
  });
};

export const editUser = (userId, user) => async dispatch => {
  const newUser = await userServices.editUser(userId, user);
  dispatch({
    type: EDIT_USER,
    payload: {
      userId,
      user: newUser
    }
  });
};

export const deleteUser = userId => async dispatch => {
  const users = await userServices.deleteUser(userId);
  dispatch({
    type: DELETE_USER,
    payload: {
      users
    }
  });
};
