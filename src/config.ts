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

const getStringEnv = (key: string): string | undefined => {
  const value = import.meta.env[key];
  return typeof value === "string" && value.length > 0 ? value : undefined;
};

const requireStringEnv = (key: string): string => {
  const value = getStringEnv(key);
  if (value === undefined) {
    throw new Error(
      `Missing required env var: ${key}. ` +
        `For local dev, set it in .env.local. ` +
        `For Vercel, set it in Project Settings → Environment Variables (VITE_ vars are baked at build time) and redeploy.`
    );
  }
  return value;
};

const requireAnyStringEnv = (keys: readonly string[]): string => {
  for (const key of keys) {
    const value = getStringEnv(key);
    if (value !== undefined) {
      return value;
    }
  }

  throw new Error(
    `Missing required env var: ${keys.join(" or ")}. ` +
      `For local dev, set it in .env.local. ` +
      `For Vercel, set it in Project Settings → Environment Variables (VITE_ vars are baked at build time) and redeploy.`
  );
};

export const appBaseURL =
  import.meta.env.VITE_APP_BASE_URL || window.location.origin;
export const apiBaseURL = requireStringEnv("VITE_API_BASE_URL");
export const facebookURL = requireStringEnv("VITE_FACEBOOK_URL");
export const youtubeURL = requireStringEnv("VITE_YOUTUBE_URL");
export const twitterURL = requireStringEnv("VITE_TWITTER_URL");
export const userAgreementValue = requireStringEnv("VITE_USER_AGREEMENT_VALUE");
export const websiteAPI = requireStringEnv("VITE_WEBSITE_API_URL");
export const websiteEmail = requireAnyStringEnv([
  "VITE_WEBSITE_EMAIL",
  "VITE_WEBSTIE_EMAIL",
]);
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
