import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
};

interface IParams {
  [key: string]: string;
}

export const tmdbApi = {
  getMoviesList: (type: keyof typeof movieType, params: IParams) => {
    const url = `movie/${movieType[type]}/`;
    return axiosClient.get(url, params);
  },
  getTvList: (type: keyof typeof tvType, params: IParams) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },
};
