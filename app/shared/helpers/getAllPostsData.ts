import parseMetadata from './parseMetadata';
import processFiles from './processFiles';
import { CONTENT_FOLDER } from '../constants';
import { resultObj } from '../types';

export async function getAllPostsData(): Promise<resultObj[]> {
	return await processFiles(CONTENT_FOLDER, (matterResult, filepath) => {
		const postMetadata = parseMetadata(matterResult, filepath);
		return { content: matterResult.content, ...postMetadata };
	});
}
