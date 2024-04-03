export type resultObj = {
	title: string;
	date: string;
	author: string;
	slug: string;
	content: string;
};

export type postData = {
	postMetadata: Omit<resultObj, 'content'>;
	content: string;
};
