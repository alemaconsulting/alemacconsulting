import path from 'path';

import matter from 'gray-matter';

import { resultObj } from '../types';

function parseMetadata(
	matterResult: matter.GrayMatterFile<string>,
	filepath: string
): Omit<resultObj, 'content'> {
	return {
		title: matterResult.data.title,
		date:
			matterResult.data.date instanceof Date
				? matterResult.data.date.toISOString()
				: new Date().toISOString(),
		author: matterResult.data.author || 'admin',
		slug: matterResult.data.slug || path.basename(filepath).replace('.md', ''),
		weight: matterResult.data.weight || 1,
		description:
			matterResult.data.description || 'Alema Consulting Unternehmensberatung in Berlin.',
	};
}

export default parseMetadata;
