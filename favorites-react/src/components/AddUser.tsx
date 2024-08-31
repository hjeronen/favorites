import React, { useState } from 'react';

const AddUser = ({ createUser }): JSX.Element => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    await createUser({ name, username, password });
    setName('');
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={submit}>
      <h2>Add new user:</h2>
      <p>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </p>
      <p>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </p>
      <p>
        <label>Password: </label>
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </p>
      <button type="submit">create</button>
    </form>
  );
};

export default AddUser;
