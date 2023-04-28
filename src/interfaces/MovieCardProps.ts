export interface IMovieCardProps {
  movie: {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    name: string;
    genre_ids: number[];
    vote_average: number;
    first_air_date: string;
  };
}
