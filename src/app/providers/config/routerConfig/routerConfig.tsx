import { LoginPageAsync } from "page/LoginPage";
import { NotAuthPageAsync } from "page/NotAuthPage";
import { NotFoundPageAsync } from "page/NotFoundPage";
import { WeatherPageAsync } from "page/WeatherPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutesPrivate {
  WEATHER = "weather",
}

export enum AppRoutes {
  LOGIN = "login",
  NOT_AUTH = "not_auth",
  NOT_FOUND = "not_found",
}

export const RoutePathPrivate: Record<AppRoutesPrivate, string> = {
  [AppRoutesPrivate.WEATHER]: "/",
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.NOT_AUTH]: "/not_auth",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routerConfigPrivate: Record<AppRoutesPrivate, RouteProps> = {
  [AppRoutesPrivate.WEATHER]: {
    path: RoutePathPrivate.weather,
    element: <WeatherPageAsync />,
  },
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPageAsync />,
  },
  [AppRoutes.NOT_AUTH]: {
    path: RoutePath.not_auth,
    element: <NotAuthPageAsync />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPageAsync />,
  },
};
