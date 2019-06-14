import React from 'react';

export default ({ handleAddUser, users }) => (
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
