export const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  API_KEY: process.env.REACT_APP_API_KEY,
  originalImage: (imgPath: string) =>
    `https://api.themoviedb.org/t/p/original/${imgPath}`,
};
