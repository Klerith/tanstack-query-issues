import { useInfiniteQuery } from '@tanstack/react-query';
import { getIssus } from '../actions/get-issus';
import { State } from '../interface/Issus.interface';

declare interface IssuesProps {
	readonly state: State;
	readonly selectedLabels?: string[];
}

export const useIssuesInifiteScroll = ({ state, selectedLabels = [] }: IssuesProps) => {
	const issusQuery = useInfiniteQuery({
		queryKey: ['issus', 'inifinute', { state, selectedLabels }],
		queryFn: ({ pageParam, queryKey }) => {
			console.log({ queryKey, pageParam });

			const [, , args] = queryKey;

			const { state, selectedLabels = [] } = args as IssuesProps;

			return getIssus(state, selectedLabels, pageParam);
		},
		staleTime: 1000 * 60,
		initialPageParam: 0,
		getNextPageParam: (lastPage, pages) =>
			lastPage.length > 0 ? pages.length + 1 : undefined,
	});

	return {
		issusQuery,
	};
};
