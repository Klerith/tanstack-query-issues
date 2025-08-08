import { githubApi } from '../../api/github.api';
import { sleep } from '../../helpers/sleep';

import { GithubLabel } from '../interface/label.interface';

export const getLabel = async (): Promise<GithubLabel[]> => {
	await sleep(1500);

	const { data } = await githubApi.get<GithubLabel[]>('/labels');

	return data;
};
