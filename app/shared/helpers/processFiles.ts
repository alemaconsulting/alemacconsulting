import fs from 'node:fs';

import matter from 'gray-matter';

import getAllFilesRecursively from '@/app/shared/helpers/getAllFilesRecursively';

import { postData, resultObject } from '../types';

const processFiles = async <T extends Partial<resultObject> | postData>(
	folder: string,
	callback: (matterResult: matter.GrayMatterFile<string>, filepath: string) => T
): Promise<T[]> => {
	const filePaths = getAllFilesRecursively(folder);
	const results: T[] = [];

	filePaths.forEach((filepath: string) => {
		const fileContents = fs.readFileSync(filepath, 'utf8');
		const matterResult = matter(fileContents);
		const result = callback(matterResult, filepath);
		results.push(result);
	});

	return results;
};

export default processFiles;
