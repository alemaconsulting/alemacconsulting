import parseMetadata from './parseMetadata';
import processFiles from './processFiles';
import { CONTENT_FOLDER } from '../constants';

export async function getAllPostSlugs() {
	const postsData = await processFiles(CONTENT_FOLDER, (matterResult, filepath) => {
		return parseMetadata(matterResult, filepath);
	});
	return postsData.map((res) => {
		return { slug: res?.slug };
	});
}

const postMetadata = async () => {
	return await processFiles(CONTENT_FOLDER, (matterResult, filepath) => {
		return parseMetadata(matterResult, filepath);
	});
};

export default postMetadata;
