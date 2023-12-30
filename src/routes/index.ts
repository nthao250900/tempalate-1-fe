import { TRoutes } from "types";
import AuthRoute from "./AuthRoute";
import ClientRoute from "./ClientRoute";
import AdminRoute from "./AdminRoute";

const routes: TRoutes[] = [
 {
  layout: "auth",
  views: [...AuthRoute],
 },
 {
  ...ClientRoute,
 },
 ...AdminRoute,
];

export default routes;
