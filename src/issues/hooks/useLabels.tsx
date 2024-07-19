import { useQuery } from '@tanstack/react-query';
import { getLabels } from '../actions';

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hora de stale time
  });

  return {
    labelsQuery,
  };
};
