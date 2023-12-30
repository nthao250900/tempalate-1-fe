/* eslint-disable array-callback-return */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TRouteChildren, TRoutes } from "types";

interface TProps {
 routes: TRoutes[];
}

const SidebarLinks = ({ routes }: TProps) => {
 const location = useLocation();

 const activeRoute = (routeName: string) => location.pathname === routeName;

 const createLink = (routes: TRoutes[]) =>
  routes?.map((route: TRoutes, key: number) => {
   if (route.layout === "admin") {
    console.log("🚀 ~ file: SidebarLinks.tsx:18 ~ routes?.map ~ route:", route);
    return (
     <>
      <div className='title__routes' key={key}>
       <p>{route.title}</p>
      </div>
      {route.views?.map((view: TRouteChildren, key: number) => (
       <Link key={key} to={route.path + "/" + view.path}>
        <div
         className={`link ${
          activeRoute(route.path + "/" + view.path) === true ? "active" : ""
         }`}
        >
         <li key={key}>
          <div className='icon'>{view.icon}</div>
          <p>{view.name}</p>
         </li>
        </div>
       </Link>
      ))}
     </>
    );
   }
  });
 return <>{createLink(routes)}</>;
};

export default SidebarLinks;
