import type { RouteDefinition } from "../../interface";
import AboutPageSection from "../../pages/aboutPageSection/AboutPageSection";
import ContactPageSection from "../../pages/contactPageSection/ContactPageSection";
import HomePageSection from "../../pages/homePageSection/HomePageSection";
import NotFoundPageSection from "../../pages/notFoundPageSection/NotFoundPageSection";
import ServicePageSection from "../../pages/servicePageSection/ServicePageSection";
import { UserPath } from "../paths/userPath";

export const NotFoundRoute: RouteDefinition = {
  path: "*",
  element: NotFoundPageSection,
  protected: false,
  title: "NotFound Section",
};

export const userRoutePath: RouteDefinition[] = [
  {
    path: UserPath.homePath,
    element: HomePageSection,
    protected: false,
    title: "Home Page Section",
  },
  {
    path: UserPath.homePath,
    element: ServicePageSection,
    protected: false,
    title: "Service Page Section",
  },
  {
    path: UserPath.homePath,
    element: ContactPageSection,
    protected: false,
    title: "Contact Page Section",
  },
  {
    path: UserPath.homePath,
    element: AboutPageSection,
    protected: false,
    title: "About Page Section",
  },
];
