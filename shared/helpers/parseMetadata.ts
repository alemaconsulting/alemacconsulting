import path from 'path';

import matter from 'gray-matter';

import { resultObj } from '../types';

function parseMetadata(
	matterResult: matter.GrayMatterFile<string>,
	filepath: string
): Omit<resultObj, 'content'> {
	return {
		title: matterResult.data.title,
		subtitle: matterResult.data.subtitle || '',
		date:
			matterResult.data.date instanceof Date
				? matterResult.data.date.toISOString()
				: new Date().toISOString(),
		author: matterResult.data.author || 'admin',
		category: matterResult.data.category || '',
		slug: matterResult.data.slug || path.basename(filepath).replace('.md', ''),
	};
}

export default parseMetadata;
