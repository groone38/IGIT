import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  routerConfig,
  routerConfigPrivate,
} from "app/providers/config/routerConfig/routerConfig";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
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
