import type { RouteDefinition } from "../../interface";
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
    path: UserPath.registerPath,
    element: RegisterFormPageSection,
    protected: false,
    title: "Register Form Page Section",
  },
  {
    path: UserPath.loginPath,
    element: LoginPageSection,
    protected: false,
    title: "Login Page Section",
  },
  {
    path: UserPath.resetPasswordPath,
    element: ResetPasswordSection,
    protected: false,
    title: "Reset Password Page Section",
  },
  {
    path: UserPath.welcomePath,
    element: LearningJourneyPageSection,
    protected: true,
    title: "Learning Journey Page Section",
  },
  {
    path: UserPath.trainingCoursePath,
    element: LearningJourneyCoursePageSection,
    protected: true,
    title: "Learning Journey Course PageSection",
  },
  {
    path: UserPath.trainingCourseDetailJournalPath,
    element: LearningJourneyCourseDetailPageSection,
    protected: true,
    title: "Learning Journey Course Detail PageSection",
  },
  {
    path: UserPath.thankyouPath,
    element: ThankYouPageSection,
    protected: true,
    title: "ThankYou Page Section",
  },
].concat(NotFoundRoute as any);
