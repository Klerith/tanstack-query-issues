import { useQuery } from '@tanstack/react-query';

import { getIssue } from '../actions/get-issue';
import { getIssueComments } from '../actions/get-issue-comment';

export const useIssue = (issueNumber: number) => {
	const issueQuery = useQuery({
		queryKey: ['issus', issueNumber],
		queryFn: () => getIssue(issueNumber),
		staleTime: 1000 * 60,
		retry: false,
	});
	/*
	 *para hacer una query de manera secuencial
	 *si queres ejcutar una query dependiendo del resultado  de otra query entonces abiita
	 *la opcion enabled con una condicion por ejemplo enabled: issueQuery.data?.comments > 0 y asi ya me enties
	 */
	const commentsQuery = useQuery({
		queryKey: ['issus', issueQuery.data?.number, 'commets'],
		queryFn: () => getIssueComments(issueQuery.data!.number),
		staleTime: 1000 * 60,
		enabled: issueQuery.data !== undefined,
	});

	return { issueQuery, commentsQuery };
};
