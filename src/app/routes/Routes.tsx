import { RouteObject } from "react-router-dom";
import { routesConfig } from "@/config/routesConfig";
import MainLayout from "@/layouts/MainLayout";

const Routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: routesConfig.MAIN,
  },
];

export default Routes;
