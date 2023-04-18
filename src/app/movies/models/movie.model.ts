export interface Movie {
  id: number;
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}

export interface Results {
  description?: string;
  id?: number;
  favoriteCount?: number;
  itemCount?: number;
  listType?: string;
  name?: string;
  posterPath?: string;
  title: string;
}
