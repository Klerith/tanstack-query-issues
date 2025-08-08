import { useQuery } from '@tanstack/react-query';
import { getLabel } from '../actions/get-labels';
import { GithubLabel } from '../interface/label.interface';

export const useLabel = () => {
	const labelsQuery = useQuery({
		queryKey: ['labels'],
		queryFn: () => getLabel(),
		staleTime: 1000 * 60 * 60,

		// ? para mostar data antes de hacer la peticion y traer la data actualizada
		placeholderData: [
			{
				id: 791921801,
				node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
				url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
				name: '❤️',
				color: 'ffffff',
				default: false,
				description: '',
			} satisfies GithubLabel,
		],
	});

	return { labelsQuery };
};
