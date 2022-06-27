import React, { useState, useEffect } from 'react';
import GameCard from './GameCard.js';
import GameCardSkeleton from './GameCardSkeleton.js';
import axios from 'axios';

const Container = () => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const fetchedGames = await axios.get(
          `https://tivix-assignment.herokuapp.com//get`
        );
        setGames(fetchedGames.data);
      } catch (error) {
        console.log('Error in fetchedGames', error);
      }
    })();
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 py-3'>
      {games
        ? games.map((game) => {
            return <GameCard game={game} />;
          })
        : [1, 2, 3, 4].map((n) => {
            return <GameCardSkeleton key={n} />;
          })}
    </div>
  );
};

export default Container;
