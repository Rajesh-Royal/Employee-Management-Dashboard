import { lazy } from "react";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const Home = lazy(() => import("../Pages/Home"));
const Page404 = lazy(() => import("../Pages/404"));

export const adminRoutes = [
  {
    path: "/dashboard",
    component: Home,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export const userRoutes = [
  {
    path: "/auth/login",
    component: Login,
  },
  {
    path: "/auth/signup",
    component: SignUp,
  },
];
