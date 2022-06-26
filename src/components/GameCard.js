import { useNavigate } from 'react-router-dom';

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  const generateBadges = () => {
    const { genres } = game;
    console.log('GENEREATEBADEGE', genres);
    return genres.map((genre) => {
      const { name } = genre;
      return (
        <span className='text-xs inline-block mx-1 mt-1 py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded'>
          {name}
        </span>
      );
    });
  };

  return (
    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-125'>
      <img
        className='rounded-t-lg h-3/6 w-full'
        src={game.background_image}
        alt={game.name}
      />
      <div className='p-5'>
        <h4
          className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer'
          onClick={(e) => {
            e.preventDefault();
            navigate(`/game/${game.id}`);
          }}
        >
          {game.name}
        </h4>

        {generateBadges()}
      </div>
    </div>
  );
};

export default GameCard;
