import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { addUser } from './store/actions';

// import { getUsers, deleteUser, editUser, addUser } from './services';

function App({ users, handleAddUser }) {
  // const [users, setUsers] = useState([]);
  // const handleDeleteUser = async userId => {
  //   const users = await deleteUser(userId);
  //   setUsers(users);
  // };

  // const handleGetUsers = async () => {
  //   const users = await getUsers();
  //   setUsers(users);
  // };

  // const handleEditUser = async (userId, user) => {
  //   const updatedUser = await editUser(userId, user);

  //   const newUsers = [...users];
  //   newUsers[userId] = updatedUser;
  //   setUsers(newUsers);
  // };

  // const handleAddUser = async user => {
  //   const createdUser = await addUser(user);

  //   setUsers([...users, createdUser]);
  // };

  // useEffect(() => {
  //   handleGetUsers();
  // }, []);

  return (
    <div>
      {users.map(({ name, birthday, gender }, i) => (
        <div key={i}>
          {name} - {birthday} - {gender}
          {/* <button onClick={() => handleDeleteUser(i)}>Remove</button>
          <button
            onClick={() =>
              handleEditUser(i, {
                name: 'Tuan',
                birthday: '1999-01-01',
                gender: 'male'
              })
            }
          >
            Edit
          </button> */}
        </div>
      ))}
      <button
        onClick={() =>
          handleAddUser({
            name: 'Tuan',
            birthday: '1999-01-01',
            gender: 'male'
          })
        }
      >
        Add
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.user.users
});

const mapDispatchToProps = dispatch => ({
  handleAddUser: async user => await dispatch(addUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
