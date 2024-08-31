import { useState, useEffect } from 'react';
import thingService from './services/thingService';
import React from 'react';
import AddThing from './components/AddThing';
import userService from './services/userService';
import AddUser from './components/AddUser';
import { Greeting, Thing, User } from './types';

const App = (): JSX.Element => {
  const [greeting, setGreeting] = useState<Greeting>('');
  const [things, setThings] = useState<Thing[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    try {
      thingService.getHello().then((response) => setGreeting(response.message));
    } catch (error: any) {
      console.log(`Error: ${error}`);
    }
  }, []);

  useEffect(() => {
    try {
      thingService.getAll().then((things) => setThings(things));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }, []);

  useEffect(() => {
    try {
      userService.getAllUsers().then((users) => setUsers(users));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }, []);

  const addThing = async (newThing) => {
    try {
      const created = await thingService.createThing(newThing);
      setThings(things.concat(created));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const addUser = async (newUser) => {
    try {
      const created = await userService.createUser(newUser);
      console.log(created);
      setUsers(users.concat(created));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const deleteThing = async (thingId) => {
    try {
      await thingService.deleteThing(thingId);
      setThings(things.filter((thing) => thing.id !== thingId));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await userService.deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div>
      <h2>Favorite things</h2>
      <p>{greeting}</p>
      <AddUser createUser={addUser} />
      <ul>
        {users && users.length > 0 ? (
          users.map((user, i) => (
            <li key={i}>
              {user?.name}{' '}
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No users here yet.</p>
        )}
      </ul>
      <AddThing createThing={addThing} />
      <p>List here all your favorite things:</p>
      <ul>
        {things && things.length > 0 ? (
          things.map((thing, i) => (
            <li key={i}>
              {thing?.name}{' '}
              <button onClick={() => deleteThing(thing.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No things here yet.</p>
        )}
      </ul>
    </div>
  );
};

export default App;
