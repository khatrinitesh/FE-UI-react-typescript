import { toast } from "sonner";
import axios from "axios";

export const handleUserLogout = () => {
  localStorage.removeItem("userToken");
  window.location.href = "/login";
};

export const capitalizeText = (str: string = "") =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const getDisplayName = (
  user?: { FirstName?: string | null; LastName?: string | null } | null
): string => {
  if (!user) return "";

  const first = user.FirstName ? capitalizeText(user.FirstName) : "";
  const last = user.LastName ? capitalizeText(user.LastName) : "";

  return `${first} ${last}`.trim(); // avoids extra space if one is empty
};

export const isDisabled = (currentPlanId: number, planId: number): boolean => {
  // Always disable planId 1
  if (planId === 1) {
    return true;
  }

  if (currentPlanId === 2) {
    return planId !== 3; // only allow upgrade to 3
  }

  if (currentPlanId === 3) {
    return true; // all disabled
  }

  return false;
};

export const getPlanName = (id: number, isVerify: any): string => {
  if (!isVerify) {
    return "Basic Plan";
  }

  switch (id) {
    case 1:
      return "Basic Plan";
    case 2:
      return "Business Plan";
    case 3:
      return "Enterprise Plan";
    default:
      return "Basic Plan";
  }
};

export const getRandomName = () => {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 15); // Random string of length 13
  return `${timestamp}-${randomString}`;
};

export const uploadScormCourse = async (file: File, courseId: string) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      `https://cloud.scorm.com/api/v2/courses/importJobs/upload?courseId=${courseId}&mayCreateNewVersion=false`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          uploadedContentType: "application/zip",
          Accept: "application/json",
        },
        auth: {
          username: `${import.meta.env.VITE_LMS_USERNAME}`,
          password: `${import.meta.env.VITE_LMS_PASSWORD}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return `Upload Error:, ${error?.response?.data || error.message}`;
  }
};

export const fetchRegistrationProgressData = async (registerId: string) => {
  try {
    const response = await axios.get(
      `https://cloud.scorm.com/api/v2/registrations/${registerId}?includeChildResults=true&includeInteractionsAndObjectives=true&includeRuntime=true`,
      {
        headers: {
          Accept: "application/json",
        },
        auth: {
          username: `${import.meta.env.VITE_LMS_USERNAME}`,
          password: `${import.meta.env.VITE_LMS_PASSWORD}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching registration data:", error);
    throw error;
  }
};

export const toPercent = (
  progress: number | string | null | undefined
): number => {
  const value = Number(progress); // safely coerce
  return isNaN(value) ? 0 : Math.round(value * 100);
};

export const getValue = (arr: string[], target: string): string | null => {
  return arr.includes(target) ? target : null;
};

export const getRandomImage = (): string => {
  const imageList = ["/img/ringv1.png", "/img/ringv2.png", "/img/ringv3.png"];

  const randomIndex = Math.floor(Math.random() * imageList.length);
  return imageList[randomIndex];
};

export const handleShare = async () => {
  try {
    const shareContent = {
      title: "INDRA",
      text: "INDRA",
      url: `${import.meta.env.VITE_SITE_URL}${UserPaths.panCardCheckPath}`,
    };

    if (navigator.share) {
      await navigator.share(shareContent);
    } else {
      toast(`Sharing is not supported on your device.`, {
        icon: "⚠️",
        className: "warning-toast",
      });
    }
  } catch (error) {
    console.error("Sharing failed", error);
  }
};

export const formatCaratPoints = (points: any): number => {
  const numericPoints = Number(points);
  if (isNaN(numericPoints)) return 0;
  return parseFloat((numericPoints / 100).toFixed(2));
};

export const shouldShowUpgradeButton = (userDetails: any): boolean => {
  if (!userDetails) return false;
  const { pPlanID, isVerify, EmpRole } = userDetails;
  return (
    (pPlanID !== 3 &&
      isVerify &&
      (EmpRole === "Owner" || EmpRole === "Manager")) ||
    pPlanID === 1
  );
};
