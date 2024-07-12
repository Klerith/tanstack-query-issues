import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/github.api';
import { GitHubLabel } from '../interfaces/label';
import { sleep } from '../../helpers';

const getLabels = async (): Promise<GitHubLabel[]> => {
  const { data } = await githubApi.get<GitHubLabel[]>(`/labels`);
  // const resp = await fetch(
  //   'https://api.github.com/repos/facebook/react/labels'
  // ).then((res) => res.json());

  await sleep(2000);
  console.log(data);
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    // refetchOnWindowFocus: false, // Disable refetching on window focus
    staleTime: 1000 * 60 * 60, // 1 hour

    // ! Explicar esto después del stale time
    placeholderData: [
      {
        id: 791921801,
        node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
        url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
        name: '❤️',
        color: 'ffffff',
        default: false,
      } satisfies GitHubLabel,
      {
        id: 69105383,
        node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
        url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
        name: 'Browser: IE',
        color: 'c7def8',
        default: false,
      } satisfies GitHubLabel,
    ],

    //! InitialData
    // initialData: [
    //   {
    //     id: 69105383,
    //     node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
    //     name: 'Browser: IE',
    //     color: 'c7def8',
    //     default: false,
    //   } satisfies GitHubLabel,
    // ],
  });

  return {
    ...labelsQuery,
  };
};
