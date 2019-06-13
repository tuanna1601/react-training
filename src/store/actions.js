import * as userServices from '../services';

export const ADD_USER = 'users/ADD_USER';
export const GET_USERS = 'users/GET_USERS';
export const EDIT_USER = 'users/EDIT_USER';
export const DELETE_USER = 'users/DELETE_USER';

export const addUser = user => async (dispatch, getState) => {
  const newUser = await userServices.addUser(user);
  dispatch({
    type: ADD_USER,
    payload: { user: newUser }
  });
  console.log(getState());
};

export const getUsers = () => ({
  type: GET_USERS
});

export const editUser = (userId, user) => ({
  type: EDIT_USER,
  payload: {
    user,
    userId
  }
});

export const deleteUser = userId => ({
  type: DELETE_USER,
  payload: {
    userId
  }
});
