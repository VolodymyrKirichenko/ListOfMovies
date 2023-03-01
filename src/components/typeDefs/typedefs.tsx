export interface Genres {
  id: number;
  name: string;
}

export interface Movie {
  id: string;
  image: string;
  title: string;
  releaseDate: string;
  genres: Genres[];
  runtime: string;
}

export interface MovieCardType {
  movie: Movie;
  onCardSelect: () => void;
}
