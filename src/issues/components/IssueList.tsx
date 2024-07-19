import { FC } from 'react';
import { GithubIssue } from '../interfaces';
import { IssueItem } from './IssueItem';

interface Props {
  issues: GithubIssue[];
}

export const IssueList: FC<Props> = ({ issues }) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
