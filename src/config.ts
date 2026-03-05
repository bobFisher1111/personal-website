type AppConfig = {
  appBaseURL: string;
  apiBaseURL: string;
  facebookURL: string;
  youtubeURL: string;
  twitterURL: string;
  userAgreementValue: string;
  websiteAPI: string;
  websiteEmail: string;
  websiteHomePageImage: string;
  websiteName: string;
  websiteURL: string;
};

const requireStringEnv = (key: string): string => {
  const value = import.meta.env[key];
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

export const appBaseURL =
  import.meta.env.VITE_APP_BASE_URL || window.location.origin;
export const apiBaseURL = requireStringEnv("VITE_API_BASE_URL");
export const facebookURL = requireStringEnv("VITE_FACEBOOK_URL");
export const youtubeURL = requireStringEnv("VITE_YOUTUBE_URL");
export const twitterURL = requireStringEnv("VITE_TWITTER_URL");
export const userAgreementValue = requireStringEnv("VITE_USER_AGREEMENT_VALUE");
export const websiteAPI = requireStringEnv("VITE_WEBSITE_API_URL");
export const websiteEmail = requireStringEnv("VITE_WEBSTIE_EMAIL");
export const websiteHomePageImage = requireStringEnv("VITE_HOMEPAGE_IMAGE");
export const websiteName = requireStringEnv("VITE_SITE_NAME");
export const websiteURL = requireStringEnv("VITE_WEBSITE_URL");

const appConfig = {
  appBaseURL,
  apiBaseURL,
  facebookURL,
  youtubeURL,
  twitterURL,
  userAgreementValue,
  websiteAPI,
  websiteEmail,
  websiteHomePageImage,
  websiteName,
  websiteURL,
} satisfies AppConfig;

export default appConfig;
