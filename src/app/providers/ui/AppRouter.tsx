import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  routerConfig,
  routerConfigPrivate,
} from "app/providers/config/routerConfig/routerConfig";
import PrivateRoute from "./PrivateRoute";
import Loader from "shared/Loader/Loader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRoute />}>
          {Object.values(routerConfigPrivate).map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route />
      </Routes>
    </Suspense>
  );
};
