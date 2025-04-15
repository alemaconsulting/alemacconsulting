export type resultObj = {
	title: string;
	description: string;
	date: string;
	author: string;
	weight: number;
	content: string;
	slug: string;
	tags?: string[];
};

export type postData = {
	postMetadata: Omit<resultObj, 'content'>;
	content: string;
};
