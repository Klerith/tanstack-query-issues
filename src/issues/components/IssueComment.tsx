import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  body: string;
}

export const IssueComment: FC<Props> = ({ body }) => {
  return (
    <div className="w-full">
      <div className="border border-gray-200 mt-2 rounded-md shadow-sm">
        <div className="flex items-center bg-blue-500 text-white p-2 rounded-t-md">
          <img
            src="https://avatars.githubusercontent.com/u/1933404?v=4"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="mx-2">Pandaiolo commented</span>
        </div>
        <div className="p-4 bg-gray-700 text-white">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
