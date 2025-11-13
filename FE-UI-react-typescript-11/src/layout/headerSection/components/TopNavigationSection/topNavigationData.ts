import type { NavigationItem } from "../../../../interface";
import { Paths } from "../../../../routes/path";

export const topNavigationData: NavigationItem[] = [
  { label: "Home", path: Paths.HOME },
  { label: "About", path: Paths.ABOUT },
  { label: "Services", path: Paths.SERVICES },
  { label: "Contact", path: Paths.CONTACT },
];
