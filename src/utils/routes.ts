import AnimePage from '../pages/AnimePage';
import { SignUpPage } from '../pages/SignUpPage';
import CartoonsPage from '../pages/CartoonsPage';
import HomePage from '../pages/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage';
import SeriesPage from '../pages/SeriesPage';
import { LogInPage } from '../pages/LogInPage';
import {
  ANIME_ROUTES,
  SIGN_UP_ROUTE,
  CARTOONS_ROUTE,
  HOME_ROUTE,
  MOVIES_ROUTE,
  MOVIE_DETAILS_ROUTE,
  NOT_FOUND_ROUTE,
  SERIES_ROUTE,
  LOG_IN_ROUTE,
  USER_PROFILE_ROUTE,
  CAST_CREW_ROUTE,
  PERSON_DETAILS_PAGE,
} from './routesConsts';
import { UserProfile } from '../pages/UserProfile';
import { CastAndCrewPage } from '../pages/CastAndCrewPage';
import { PersonDetailsPage } from '../pages/PersonDetailsPage';

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
  {
    path: SIGN_UP_ROUTE,
    Component: SignUpPage,
  },
  {
    path: LOG_IN_ROUTE,
    Component: LogInPage,
  },
  {
    path: CAST_CREW_ROUTE,
    Component: CastAndCrewPage,
  },
  {
    path: PERSON_DETAILS_PAGE,
    Component: PersonDetailsPage,
  },
];

export const privateRoutes = [
  {
    path: USER_PROFILE_ROUTE,
    Component: UserProfile,
  },
];
