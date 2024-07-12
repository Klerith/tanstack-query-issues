import { IssueItem } from './IssueItem';

export const IssueList = () => {
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
        {[1, 2, 3].map((issue) => (
          <IssueItem key={issue} />
        ))}
      </div>
    </>
  );
};
