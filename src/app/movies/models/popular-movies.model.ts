export interface PopularMovie {
  page: number;
  results: PopularResults[];
  total_pages: number;
  total_results: number;
}

export interface PopularResults {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
