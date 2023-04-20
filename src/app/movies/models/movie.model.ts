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


export interface MovieGenre {
  page: number;
  results: ResultsGenre[];
}

export interface ResultsGenre {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}