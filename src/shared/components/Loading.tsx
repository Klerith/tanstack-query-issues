import { FiRefreshCcw } from 'react-icons/fi';

export const Loading = () => {
  return (
    <div className="loading">
      <div className="animate-spin">
        <FiRefreshCcw />
      </div>
    </div>
  );
};
