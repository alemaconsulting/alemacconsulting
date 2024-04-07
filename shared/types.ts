export type resultObj = {
	title: string;
	date: string;
	author: string;
	slug: string;
	content: string;
	weight: number;
};

export type postData = {
	postMetadata: Omit<resultObj, 'content'>;
	content: string;
};
