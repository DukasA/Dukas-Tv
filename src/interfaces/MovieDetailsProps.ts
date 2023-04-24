export interface IMovieDetailsProps {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  genres: [
    genre: {
      id: number;
      name: string;
    },
  ];
  overview: string;
  vote_average: number;
  runtime: number;
  release_date: string;
  credits: {
    cast: [
      {
        name: string;
        profile_path: string;
        character: string;
      },
    ];
  };
}
