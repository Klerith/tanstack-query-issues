export const sleep = (milisecons: number) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(true);
		}, milisecons);
	});
};
