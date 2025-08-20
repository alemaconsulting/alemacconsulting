import fs from "node:fs";
import path from "node:path";

function getAllFilesRecursively(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = getAllFilesRecursively(path.join(dir, file), fileList);
    } else {
      if (file.endsWith(".md")) {
        fileList.push(path.join(dir, file));
      }
    }
  }

  return fileList;
}

export default getAllFilesRecursively;
