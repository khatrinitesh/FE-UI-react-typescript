import type { RouteDefinition } from "../../interface";
import AboutPageSection from "../../pages/aboutPageSection/AboutPageSection";
import ContactPageSection from "../../pages/contactPageSection.tsx/ContactPageSection";
import HomePageSection from "../../pages/homePageSection/HomePageSection";
import ServicePageSection from "../../pages/servicePageSection/ServicePageSection";
import NotFoundPageSection from "../../pages/notFoundPageSection/NotFoundPageSection";
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
    path: UserPath.aboutPath,
    element: AboutPageSection,
    protected: false,
    title: "About Page Section",
  },
  {
    path: UserPath.servicePath,
    element: ServicePageSection,
    protected: false,
    title: "Service Page Section",
  },
  {
    path: UserPath.contactPath,
    element: ContactPageSection,
    protected: false,
    title: "Contact Page Section",
  },
].concat(NotFoundRoute as any);
