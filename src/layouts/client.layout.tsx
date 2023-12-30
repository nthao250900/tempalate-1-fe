import NotFoundCommon from "common/NotFound";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "routes";
import { TRouteChildren, TRoutes } from "types";

const ClientLayout = () => {
 const getRoutes = (routes: TRoutes[]) => {
  return routes.map(
   (route: TRoutes, keyRoute: number) =>
    route.layout === "client" && (
     <Route path={`/${route.path}`} element={route.component} key={keyRoute}>
      {route.views.map((view: TRouteChildren, keyViews: number) => (
       <Route
        path={view.path}
        element={view.component}
        key={`${keyRoute}-${keyViews}`}
       />
      ))}
     </Route>
    )
  );
 };

 return (
  <Routes>
   {getRoutes(routes)}
   {/* <Route path='/' element={<Navigate to='/' />} /> */}

   <Route path='*' element={<NotFoundCommon />} />
  </Routes>
 );
};

export default ClientLayout;
