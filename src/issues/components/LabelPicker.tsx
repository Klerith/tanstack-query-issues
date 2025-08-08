// ? Hook useLAbel
import { LoaderSpiner } from '../../shared/components/loader';
import { useLabel } from '../hooks/useLabel';

declare interface LabelPickerProps {
	// Properti
	readonly selectedLabels: string[];

	// Metods
	readonly onLabelSeleted: (labelName: string) => void;
}

export const LabelPicker = ({ onLabelSeleted, selectedLabels }: LabelPickerProps) => {
	// ?  Obtener la funcion labelsQuery de nuestro custom kook
	const { labelsQuery } = useLabel();

	if (labelsQuery.isLoading) {
		return (
			<div className='flex justify-center items-center h-52 text-white'>
				<LoaderSpiner />
			</div>
		);
	}

	return (
		<section className='flex flex-wrap gap-2 items-center justify-center w-[100%]	p-2'>
			{labelsQuery.data?.map(label => (
				<span
					key={label.id}
					onClick={() => onLabelSeleted(label.name)}
					className={`
						animate-fade-in  px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer
							${selectedLabels.includes(label.name) ? 'selected-label' : ''}
						`}
					style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
				>
					{label.name}
				</span>
			))}
		</section>
	);
};
