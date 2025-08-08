import { useQuery } from '@tanstack/react-query';
import { getIssus } from '../actions/get-issus';
import { State } from '../interface/Issus.interface';
import { useEffect, useState } from 'react';

declare interface IssuesProps {
	readonly state: State;
	readonly selectedLabels?: string[];
}

export const useIssus = ({ state, selectedLabels = [] }: IssuesProps) => {
	const [page, setPage] = useState<number>(1);

	const issusQuery = useQuery({
		queryKey: ['issus', { state, selectedLabels, page }],
		queryFn: () => getIssus(state, selectedLabels, page),
		staleTime: 1000 * 60,
	});

	useEffect(() => {
		setPage(1);
	}, [state]);

	useEffect(() => {
		setPage(1);
	}, [selectedLabels]);

	const nexPage = () => {
		if (issusQuery.data?.length === 0) return;

		setPage(prev => prev + 1);
	};

	const prePage = () => {
		if (page === 1) return;

		setPage(prev => prev - 1);
	};
	return {
		issusQuery,

		// Getters
		page,

		// actions
		nexPage,
		prePage,
	};
};
