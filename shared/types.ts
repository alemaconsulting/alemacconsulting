export type resultObj = {
	title: string;
	subtitle: string;
	date: string;
	author: string;
	category: string;
	slug: string;
	content: string;
};

export type postData = {
	postMetadata: Omit<resultObj, 'content'>;
	content: string;
};
