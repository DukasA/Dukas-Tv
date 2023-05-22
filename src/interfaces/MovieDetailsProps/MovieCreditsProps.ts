export interface IMovieCreditsProps {
  cast: [
    {
      id: number;
      name: string;
      profile_path: string;
      character: string;
    },
  ];
  crew?: [
    {
      id: number;
      name: string;
      profile_path: string;
      character: string;
    },
  ];
}
