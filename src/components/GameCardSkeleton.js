const GameCardSkeleton = () => {
  return (
    <div className='relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md'>
      <div className='animate-pulse flex flex-col'>
        <div class='rounded w-full h-52 bg-gray-200'></div>
        <div class='flex flex-col mt-5'>
          <div class='w-full h-5 bg-gray-200 rounded'></div>
          <div class='mt-2 w-10/12 h-3 bg-gray-200 rounded'></div>
          <div class='mt-2 w-8/12 h-3 bg-gray-200 rounded'></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
