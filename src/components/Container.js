import React from 'react';
import GameCard from './GameCard.js';

const Container = ({ games }) => {
  console.log('GAMES', games);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 py-3'>
      {games.map((game) => {
        return <GameCard game={game} />;
      })}
    </div>
  );
};

export default Container;
