import path from "path";

import matter from "gray-matter";

import { resultObject } from "../types";

function parseMetadata(
  matterResult: matter.GrayMatterFile<string>,
  filepath: string,
): Omit<resultObject, "content"> {
  return {
    author: matterResult.data.author || "admin",
    date:
      matterResult.data.date instanceof Date
        ? matterResult.data.date.toISOString()
        : new Date().toISOString(),
    description:
      matterResult.data.description ||
      "Alema Consulting Unternehmensberatung in Berlin.",
    slug: matterResult.data.slug || path.basename(filepath).replace(".md", ""),
    title: matterResult.data.title,
    weight: matterResult.data.weight || 1,
  };
}

export default parseMetadata;
