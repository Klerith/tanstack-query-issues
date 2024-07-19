import { FiRefreshCcw } from 'react-icons/fi';

export const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="flex w-full h-52 justify-center items-center">
        <FiRefreshCcw size={40} className="animate-spin" />
      </div>
    </div>
  );
};
