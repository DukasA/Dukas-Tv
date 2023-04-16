export const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  API_KEY: 'd78a4e3c6b8ed190b0d538f8965c8bbe',
  originalImage: (imgPath: string) =>
    `https://api.themoviedb.org/t/p/original/${imgPath}`,
};
