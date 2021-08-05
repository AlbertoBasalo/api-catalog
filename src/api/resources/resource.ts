export interface Resource {
  id: string;
  name: string;
  description?: string;
  url?: string;
  gitHub?: {
    url: string;
  };
  npm?: {
    score: number;
    tags: string[];
  };
  categoryId: string;
  ownerId?: string;
}
