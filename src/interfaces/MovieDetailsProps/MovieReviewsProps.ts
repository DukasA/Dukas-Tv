export interface IMovieReviewsProps {
  results: [
    {
      author: string;
      content: string;
      created_at: string;
      author_details: {
        username: string;
        avatar_path: string;
      };
    },
  ];
}
