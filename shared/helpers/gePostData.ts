import parseMetadata from './parseMetadata';
import processFiles from './processFiles';
import { CONTENT_FOLDER } from '../constants';
import { postData } from '../types';

export const getPostData = async (slug: string) => {
	const matchingPosts: postData[] = await processFiles(CONTENT_FOLDER, (matterResult, filepath) => {
		const postMetadata = parseMetadata(matterResult, filepath);
		if (postMetadata.slug === slug) {
			return { content: matterResult.content, postMetadata };
		} else {
			return { content: 'content', postMetadata };
		}
	});

	const filteredPosts = matchingPosts.filter((post) => post.content !== 'content');

	if (filteredPosts.length) {
		return filteredPosts[0];
	}

	throw new Error(`Post with slug "${slug}" not found.`);
};
