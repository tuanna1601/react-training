import React, { useState } from 'react';

export default ({ onSubmit }) => {
  const [name, setName] = useState('');
  return (
    <form
      onSubmit={e => {
        onSubmit({ name });
        setName('');
        e.preventDefault();
      }}
    >
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
      <button type="submit">Submit</button>
    </form>
  );
};
