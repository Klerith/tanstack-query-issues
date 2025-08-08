import { githubApi } from '../../api/github.api';
import { sleep } from '../../helpers/sleep';
import { GithubIssus } from '../interface/Issus.interface';

export const getIssue = async (issueNumber: number): Promise<GithubIssus> => {
	await sleep(1500);

	const { data } = await githubApi.get<GithubIssus>(`issues/${issueNumber}`);

	return data;
};
