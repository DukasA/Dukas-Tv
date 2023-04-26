export interface IMovieDetailsProps {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  runtime: number;
  release_date: string;
  status: string;
  revenue: number;
  budget: number;
  original_language: string;
  reviews: {
    results: [
      {
        author: string;
        content: string;
        created_at: string;
        author_details: {
          username: string;
          avatar_path: string;
        }
      }
    ]
  }
  genres: [
    genre: {
      id: number;
      name: string;
    },
  ];
  images?: {
    backdrops: [];
    logos: [];
    posters: [];
  };
  videos: {
    results: [
      {
        name: string;
        type: string;
        key: string;
      },
    ];
  };
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
