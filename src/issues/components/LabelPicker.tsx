import { useLabels } from '../hooks/useLabels';
import { Loading } from '../../shared';

// const getLabels = async (): Promise<GitHubLabel[]> => {
//   const { data } = await githubApi.get<GitHubLabel[]>(`/labels`);
//   // const resp = await fetch(
//   //   'https://api.github.com/repos/facebook/react/labels'
//   // ).then((res) => res.json());
//   console.log(data);
//   return data;
// };

export const LabelPicker = () => {
  // const labelsQuery = useQuery({
  //   queryKey: ['labels'],
  //   queryFn: getLabels,
  //   // refetchOnWindowFocus: false, // Disable refetching on window focus
  // });

  const { data: labels = [], isLoading } = useLabels();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-52">
        <Loading />
      </div>
    );
  }

  return (
    // La clase animate-fadeIn sale de tailwind config
    <div className="flex flex-wrap gap-2 justify-center">
      {labels.map((label) => (
        <span
          className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer  animate-fadeIn"
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          key={label.id}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
