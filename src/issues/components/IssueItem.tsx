import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const IssueItem = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800">
      <FiInfo size={30} color="red" className="min-w-10" />
      {/* <FiCheckCircle size={30} color="green" /> */}

      <div className="flex flex-col flex-grow px-2">
        <a
          onClick={() => navigate(`/issues/issue/123`)}
          className="hover:underline"
        >
          Suggestion: why not make accessing and changing the state possible
          globally?
        </a>
        <span className="text-gray-500">
          #25581 opened 2 days ago by{' '}
          <span className="font-bold">segfaulty1</span>
        </span>
      </div>

      <img
        src="https://avatars.githubusercontent.com/u/1933404?v=4"
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col mx-2 items-center">
        <FiMessageSquare size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">2</span>
      </div>
    </div>
  );
};
