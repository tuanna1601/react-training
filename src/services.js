import axios from 'axios';

const baseURL = 'http://localhost:5000';

const client = new axios.create({
  baseURL
});

export const getUsers = async () => {
  const res = await client.get('/users');

  return res.data;
};

export const deleteUser = async userId => {
  const res = await client.delete(`/users/${userId}`);

  return res.data;
};

export const editUser = async (userId, user) => {
  const res = await client.put(`/users/${userId}`, user);

  return res.data;
};

export const addUser = async user => {
  const res = await client.post('/users', user);

  return res.data;
};
