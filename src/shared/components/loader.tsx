import { BiLoaderCircle } from 'react-icons/bi';

export const LoaderSpiner = () => {
	return (
		<div className='loading'>
			<div className='flex w-full justify-center items-center'>
				<BiLoaderCircle size={30} className='animate-spin' />
			</div>
		</div>
	);
};
