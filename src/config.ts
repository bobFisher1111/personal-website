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
}

export const appBaseURL = import.meta.env.VITE_APP_BASE_URL || window.location.origin;
export const apiBaseURL = import.meta.env.VITE_API_BASE_URL;
export const facebookURL = import.meta.env.VITE_FACEBOOK_URL;
export const youtubeURL = import.meta.env.VITE_YOUTUBE_URL;
export const twitterURL = import.meta.env.VITE_TWITTER_URL;
export const userAgreementValue = import.meta.env.VITE_USER_AGREEMENT_VALUE;
export const websiteAPI = import.meta.env.VITE_WEBSITE_API_URL;
export const websiteEmail = import.meta.env.VITE_WEBSTIE_EMAIL;
export const websiteHomePageImage = import.meta.env.VITE_HOMEPAGE_IMAGE;
export const websiteName = import.meta.env.VITE_SITE_NAME;
export const websiteURL = import.meta.env.VITE_WEBSITE_URL;

export default {
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
} as AppConfig;
