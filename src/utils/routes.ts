import AnimePage from '../pages/AnimePage';
import CartoonsPage from '../pages/CartoonsPage';
import HomePage from '../pages/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage';
import SeriesPage from '../pages/SeriesPage';
import {
  ANIME_ROUTES,
  CARTOONS_ROUTE,
  HOME_ROUTE,
  MOVIES_ROUTE,
  MOVIE_DETAILS_ROUTE,
  NOT_FOUND_ROUTE,
  SERIES_ROUTE,
} from './routesConsts';

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: MOVIES_ROUTE,
    Component: MoviesPage,
  },
  {
    path: NOT_FOUND_ROUTE,
    Component: NotFoundPage,
  },
  {
    path: SERIES_ROUTE,
    Component: SeriesPage,
  },
  {
    path: CARTOONS_ROUTE,
    Component: CartoonsPage,
  },
  {
    path: ANIME_ROUTES,
    Component: AnimePage,
  },
  {
    path: MOVIE_DETAILS_ROUTE,
    Component: MovieDetailsPage,
  },
];
