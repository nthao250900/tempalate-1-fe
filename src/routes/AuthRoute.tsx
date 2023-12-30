import SignIn from "components/Auth/SignIn";
import { TRouteChildren } from "types";

const AuthRoute: TRouteChildren[] = [
 {
  name: "login",
  path: "sign-in",
  component: <SignIn />,
 },
 {
  name: "register",
  path: "sign-up",
  component: <SignIn />,
 },
];

export default AuthRoute;
