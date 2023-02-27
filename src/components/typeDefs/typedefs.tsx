export interface Movie {
  id: string;
  image: string;
  title: string;
  releaseDate: string;
}

export interface MovieCardType {
  movie: Movie;
  onCardSelect: () => void;
}
