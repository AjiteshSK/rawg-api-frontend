import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameCardSkeleton from './GameCardSkeleton';
import axios from 'axios';

const GamePage = () => {
  const [game, setGame] = useState(null);
  const [axiosError, setAxiosError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const fetchedGame = await axios.get(
          `https://tivix-assignment.herokuapp.com/get/${id}`
        );
        console.log('fetchedGame', fetchedGame);
        setGame(fetchedGame.data);
      } catch (error) {
        setAxiosError(error.response.data.message);
        console.log('ERROR in Gamepage fetch', error);
      }
    })();
  }, []);

  if (axiosError) return <div>{axiosError}</div>;
  if (!game)
    return (
      <div>
        <GameCardSkeleton />
      </div>
    );
  return (
    <div className='w-full h-full p-10'>
      <img
        className='rounded-t-lg h-1/5 max-h-96 w-full'
        src={game.background_image}
        alt={game.name}
      />

      <h3 className='mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white '>
        {game.name}
      </h3>

      <p>{game.description_raw}</p>

      <button
        className='inline-block mt-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        onClick={(e) => {
          e.preventDefault();
          window.open(game.website, '_blank');
        }}
      >
        Go to website
      </button>
    </div>
  );
};

export default GamePage;
