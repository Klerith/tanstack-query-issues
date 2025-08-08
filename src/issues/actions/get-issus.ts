import { githubApi } from '../../api/github.api';
import { sleep } from '../../helpers/sleep';
import { GithubIssus, State } from '../interface/Issus.interface';

/*
 * Función para recuperar incidencias de GitHub según su estado. Toma un parámetro de estado
 *y devuelve una promesa de la matriz GitHubIssus.
 */
export const getIssus = async (
	state: State,
	selectedLabels: string[],
	page: number
): Promise<GithubIssus[]> => {
	//* Añadir un retraso artificial de 1,5 segundos
	await sleep(1500);

	//* inicializar parámetros de URL
	const params = new URLSearchParams();

	//* Solo agregue el parámetro de estado si no se detectan todos los problemas
	if (state !== State.All) {
		params.append('state', state);
	}

	if (selectedLabels.length > 0) {
		params.append('labels', selectedLabels.join(','));
	}

	params.append('page', `${page}`);
	params.append('per_page', '5');

	//* Realizar una llamada API al punto final de problemas de GitHub con el parámetro de estado.
	//* Desestructurar la respuesta para obtener solo los datos.
	const { data } = await githubApi.get<GithubIssus[]>('issues', { params });

	// Return the issues data
	return data;
};
