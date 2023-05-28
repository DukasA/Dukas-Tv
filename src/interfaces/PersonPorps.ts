import { IMovieCardProps } from './MovieCardProps';

export interface IPersonProps {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  gender: number;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  known_for_department: string;
  combined_credits: {
    cast: [
      {
        id: number;
        poster_path: string;
        name?: string;
        title?: string;
        media_type: string;
      },
    ];
  };
}
