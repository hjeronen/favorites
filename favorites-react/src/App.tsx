import { useState, useEffect } from 'react';
import favoritesService from './services/favoritesService';
import React from 'react';

type Greeting = string;

const App = (): JSX.Element => {
  const [greeting, setGreeting] = useState<Greeting>('');

  useEffect(() => {
    try {
      favoritesService
        .getHello()
        .then((response) => setGreeting(response.message));
    } catch (error: any) {
      console.log(`Error: ${error}`);
    }
  });

  return (
    <div>
      <h2>Favorite things</h2>
      <p>{greeting}</p>
      <p>List here all your favorite things.</p>
    </div>
  );
};

export default App;
