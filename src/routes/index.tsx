import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import Design from "../pages/Design";
import MainNavigation from "../layout/MainNavigation";

const pageRoutes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/design", element: <Design /> },
];

export const router = createBrowserRouter([
  { path: "/", element: <MainNavigation />, children: pageRoutes },
]);
