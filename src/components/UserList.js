import React, { useEffect } from 'react';

export default ({ deleteUser, editUser, getUsers, handleAddUser, users }) => {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {users.map(({ name, birthday, gender }, i) => (
        <div key={i}>
          {name} - {birthday} - {gender}
          <button onClick={() => deleteUser(i)}>Remove</button>
          <button
            onClick={() =>
              editUser(i, {
                name: 'Tuan',
                birthday: '1999-01-01',
                gender: 'male'
              })
            }
          >
            Edit
          </button>
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
};
