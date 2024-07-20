import { FC } from 'react';
import { LoadingSpinner } from '../../shared';
import { useLabels } from '../hooks';

interface Props {
  selectedLabels: string[];

  onLabelSelected: (label: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onLabelSelected }) => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-52">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          onClick={() => onLabelSelected(label.name)}
          className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white
            ${selectedLabels.includes(label.name) ? 'selected-label' : ''}`}
          style={{ border: `1px solid #${label.color}` }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
