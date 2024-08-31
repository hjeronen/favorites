import React, { useState } from 'react';

const AddThing = ({ createThing }): JSX.Element => {
  const [name, setName] = useState('');

  const submit = async () => {
    await createThing({ name });
    setName('');
  };

  return (
    <form onSubmit={submit}>
      <h2>Add new favorite thing:</h2>
      <p>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <button type="submit">create</button>
      </p>
    </form>
  );
};

export default AddThing;
