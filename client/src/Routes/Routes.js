import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const Page404 = lazy(() => import("../Pages/404"));

const Routes = [
  {
    path: "/dashboard",
    component: Home,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export default Routes;
