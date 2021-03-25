export interface Resource {
  name: string;
  description?: string;
  url?: string;
  event?: {
    date: Date;
    location: string;
  };
  course?: {
    date: Date;
    location: string;
    teacher: string;
    academy: string;
  };
  price?: number;
  id: string;
  categoryId: string;
  ownerId?: string;
}
