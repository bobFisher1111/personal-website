type AppConfig = {
  facebookURL: string;
  youtubeURL: string;
  twitterURL: string;
}

export const facebookURL = process.env.NX_FACEBOOK_URL;
export const youtubeURL = process.env.NX_YOUTUBE_URL;
export const twitterURL = process.env.NX_TWITTER_URL;
console.log('......', process.env.NX_TWITTER_URL);

export default {
  facebookURL,
  youtubeURL,
  twitterURL,
} as AppConfig;
