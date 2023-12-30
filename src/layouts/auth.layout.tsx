import NotFoundCommon from "common/NotFound";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "routes";
import { TRouteChildren, TRoutes } from "types";

const AuthLayout = () => {
 const getRoutes = (routes: TRoutes[]) => {
  return routes.map(
   (route: TRoutes) =>
    route.layout === "auth" &&
    route.views.map((view: TRouteChildren, keyView) => (
     <Route
      path={`/${route.layout}/${view.path}`}
      element={view.component}
      key={keyView}
     />
    ))
  );
 };

 return (
  <Routes>
   {getRoutes(routes)}
   <Route path='/' element={<Navigate to='/auth/sign-in' replace />} />
   <Route path='*' element={<NotFoundCommon />} />
  </Routes>
 );
};

export default AuthLayout;
