import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { GithubIssus, State } from '../interface/Issus.interface';
import { useQueryClient } from '@tanstack/react-query';
import { getIssue } from '../actions/get-issue';
import { getIssueComments } from '../actions/get-issue-comment';
import { timeSince } from '../../helpers/time-since';

declare interface Props {
	isssue: GithubIssus;
}

export const IssueItem = ({ isssue }: Props) => {
	const navigate = useNavigate();

	//? Obtiene una instancia del cliente de consulta para gestionar el caché y las consultas
	const queryClinet = useQueryClient();

	//? Función que pre-carga los datos del issue y sus comentarios cuando el usuario hace hover
	const prefetchData = () => {
		//? Pre-carga los datos básicos del issue
		queryClinet.prefetchQuery({
			queryKey: ['issus', isssue.number], //* Clave única para identificar la consulta
			queryFn: () => getIssue(isssue.number), //* Función que obtiene los datos
			staleTime: 1000 * 60 * 60, //* Tiempo en que los datos se consideran frescos (1 hora)
		});

		//? Pre-carga los comentarios del issue
		queryClinet.prefetchQuery({
			queryKey: ['issus', isssue.number, 'commets'], //* Clave única para los comentarios
			queryFn: () => getIssueComments(isssue.number), //* Función que obtiene los comentarios
			staleTime: 1000 * 60 * 60, //* Tiempo en que los datos se consideran frescos (1 hora)
		});
	};

	//? Función que establece los datos del issue directamente en el caché de React Query
	//? Esto evita una nueva petición al servidor cuando se navega al detalle del issue
	//? El updatedAt establece cuando los datos en caché se considerarán obsoletos (1 hora)
	const presetData = () => {
		queryClinet.setQueryData(['issus', isssue.number], isssue, {
			updatedAt: Date.now() + 1000 * 60 * 60, //* Actualiza el tiempo de los datos en caché
		});
	};

	return (
		<div
			onMouseEnter={presetData}
			className='animate-fade-in  flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800'
		>
			{isssue.state === State.Close ? (
				<FiCheckCircle size={30} color='green' className='min-w-10' />
			) : (
				<FiInfo size={30} color='red' className='min-w-10' />
			)}

			<div className='flex flex-col flex-grow px-2'>
				<a
					onClick={() => navigate(`/issues/issue/${isssue.number}`)}
					className='hover:underline'
				>
					{isssue.title}
				</a>
				<span className='text-gray-500'>
					#{isssue.number} opened {timeSince(isssue.created_at)} ago by
					<span className='font-bold'>{isssue.user.login}</span>
				</span>

				<div className='flex flex-wrap'>
					{isssue.labels.map(label => (
						<span
							key={label.id}
							className='px-2 my-2 py-1 text-xs text-white border rounded-full'
							style={{ borderColor: label.color }}
						>
							{label.name}
						</span>
					))}
				</div>
			</div>

			<img
				src={isssue.user.avatar_url}
				alt='User Avatar'
				className='w-8 h-8 rounded-full'
			/>
			<div className='flex flex-col mx-2 items-center'>
				<FiMessageSquare size={30} className='min-w-5' color='gray' />
				<span className='px-4 text-gray-400'>{isssue.comments}</span>
			</div>
		</div>
	);
};
