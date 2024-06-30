type AppConfig = {
  appBaseURL: string;
  apiBaseURL: string;
  facebookURL: string;
  youtubeURL: string;
  twitterURL: string;
  userAgreementValue: string;
  websiteAPI: string;
  websiteHomePageImage: string;
}

export const appBaseURL = process.env.REACT_APP_APP_BASE_URL;
export const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
export const facebookURL = process.env.REACT_APP_FACEBOOK_URL;
export const youtubeURL = process.env.REACT_APP_YOUTUBE_URL;
export const twitterURL = process.env.REACT_APP_TWITTER_URL;
export const userAgreementValue = process.env.REACT_APP_USER_AGREEMENT_VALUE;
export const websiteAPI = process.env.REACT_APP_WEBSITE_API_URL;
export const websiteHomePageImage = process.env.REACT_APP_HOMEPAGE_IMAGE;

export default {
  appBaseURL,
  apiBaseURL,
  facebookURL,
  youtubeURL,
  twitterURL,
  userAgreementValue,
  websiteAPI,
  websiteHomePageImage,
} as AppConfig;
