const CardSkeleton = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg animate-pulse opacity-80">
      <div className="w-3/5 h-40 bg-gray-700 rounded-md mb-2"></div>
      <div className="h-6 w-3/5 bg-gray-700 rounded-md mb-2"></div>
    </div>
  );
};

export default CardSkeleton;
