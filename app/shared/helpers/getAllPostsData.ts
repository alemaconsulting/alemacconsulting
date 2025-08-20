import parseMetadata from "@/app/shared/helpers/parseMetadata";

import processFiles from "@/app/shared/helpers/processFiles";

import { CONTENT_FOLDER } from "../constants";

import { resultObject } from "../types";

export async function getAllPostsData(): Promise<resultObject[]> {
  return await processFiles(CONTENT_FOLDER, (matterResult, filepath) => {
    const postMetadata = parseMetadata(matterResult, filepath);
    return { content: matterResult.content, ...postMetadata };
  });
}
