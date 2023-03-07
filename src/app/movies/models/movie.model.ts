export class Movie {
  id: number;
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}

export class Results {
  description: string;
  id: number;
  favoriteCount: number;
  itemCount: number;
  listType: string;
  name: string;
  posterPath: string;
}
