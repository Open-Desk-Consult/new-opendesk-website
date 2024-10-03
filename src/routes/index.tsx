import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import MainNavigation from "../layout/MainNavigation";
import TermsOfUse from "../pages/TermsOfUse";
import DataPrivacy from "../pages/DataPrivacy";
import SupportPolicy from "../pages/SupportPolicy";

const pageRoutes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/zverify/customer/terms-of-use", element: <TermsOfUse /> },
  { path: "/zverify/customer/data-privacy", element: <DataPrivacy /> },
  { path: "/zverify/customer/support-policy", element: <SupportPolicy /> },
];

export const router = createBrowserRouter([
  { path: "/", element: <MainNavigation />, children: pageRoutes },
]);
