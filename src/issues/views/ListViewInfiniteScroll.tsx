import { useState } from 'react';
import { LoaderSpiner } from '../../shared/components/loader';

import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';

import { State } from '../interface/Issus.interface';
import { useIssuesInifiteScroll } from '../hooks/useIssuesInfiniteScoll';

export const ListViewInfinute = () => {
	const [state, setState] = useState<State>(State.All);
	const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

	const { issusQuery } = useIssuesInifiteScroll({
		state: state,
		selectedLabels: selectedLabels,
	});

	// [ [issues1], [issues2],[issues3],[issues4],[issues5], ] -> asi viene la data
	const issues = issusQuery.data?.pages.flat() ?? [];
	// [ issues1, issues2 ,issues3, issues4, issues5, ] -> con flat() aplanamos el arrglo

	const onLabelSeleted = (label: string) => {
		if (selectedLabels.includes(label)) {
			setSelectedLabels(selectedLabels.filter(l => l !== label));
		} else {
			setSelectedLabels([...selectedLabels, label]);
		}
	};

	return (
		<div className='grid grid-cols-1 sm:grid-cols-3 mt-5'>
			<div className='col-span-1 sm:col-span-2'>
				{issusQuery.isLoading ? (
					<LoaderSpiner />
				) : (
					<div className='flex flex-col justify-center'>
						<IssueList onStateChange={setState} isssues={issues} state={state} />
						<div className='flex justify-center items-center'>
							<button
								disabled={issusQuery.isFetchingNextPage}
								onClick={() => issusQuery.fetchNextPage()}
								className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all'
							>
								{issusQuery.isFetchingNextPage ? 'Cargando mas...' : 'Cargas mas '}
							</button>
						</div>
					</div>
				)}
			</div>

			<div className='col-span-1 px-2'>
				<LabelPicker onLabelSeleted={onLabelSeleted} selectedLabels={selectedLabels} />
			</div>
		</div>
	);
};
