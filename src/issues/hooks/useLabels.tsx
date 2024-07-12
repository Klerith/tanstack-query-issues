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
  });

  return {
    ...labelsQuery,
  };
};
