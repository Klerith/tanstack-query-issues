import { GithubIssus, State } from '../interface/Issus.interface';
import { IssueItem } from './IssueItem';

declare interface IssuesProps {
	readonly isssues: GithubIssus[];
	readonly state: State;
	readonly onStateChange: (state: State) => void;
}

export const IssueList = ({ isssues, state, onStateChange }: IssuesProps) => {
	return (
		<>
			{/* Botones de All, Open, Closed */}
			<div className='flex gap-4'>
				<button
					onClick={() => onStateChange(State.All)}
					className={`btn ${state === State.All ? 'active' : ''}`}
				>
					All
				</button>
				<button
					onClick={() => onStateChange(State.Open)}
					className={`btn ${state === State.Open ? 'active' : ''}`}
				>
					Open
				</button>
				<button
					onClick={() => onStateChange(State.Close)}
					className={`btn ${state === State.Close ? 'active' : ''}`}
				>
					Closed
				</button>
			</div>

			{/* Lista de issues */}
			<div className='mt-4'>
				{isssues.map(issue => (
					<IssueItem key={issue.id} isssue={issue} />
				))}
			</div>
		</>
	);
};
