export interface postData {
  content: string;
  postMetadata: Omit<resultObject, "content">;
}

export interface resultObject {
  author: string;
  content: string;
  date: string;
  description: string;
  slug: string;
  tags?: string[];
  title: string;
  weight: number;
}
