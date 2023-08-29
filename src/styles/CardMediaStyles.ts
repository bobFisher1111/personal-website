import {
    styled,
    CardMedia,
} from "@mui/material";

export const CardMedaiArticalVideo = (articalpage: boolean, videoHeight: boolean, mobileImageWidth?: string) => ({
  height: articalpage ? '576px' : '181px',
  border: '0px',
  borderRadius: '7px',
  // artical video
  '@media only screen and (max-width: 600px)': {
    maxWidth: `calc(100vw - ${mobileImageWidth})`,
    minWidth: `calc(100vw - ${mobileImageWidth})`,
    height: '200px',
  },
  '@media only screen and (min-width: 600px)': {
    maxWidth: 'calc(100vw - 48px)',
    minWidth: 'calc(100vw - 48px)',
  },
  // here
  '@media only screen and (min-width: 768px)': {
    minWidth: articalpage ? `calc(100vw - ${mobileImageWidth})` : '321px',
    maxWidth: articalpage ? `calc(100vw - ${mobileImageWidth})` : '321px',
    height: articalpage ? '450px': videoHeight ? '444px' : '200px',
  },
  '@media only screen and (min-width: 992px)': {
    minWidth: articalpage ? '960px' : '321px',
    maxWidth: articalpage ? '960px' : '321px',
  },
  '@media only screen and (min-width: 1200px)': {
    minWidth: articalpage ? '960px' : '321px',
    maxWidth: articalpage ? '960px' : '321px',
  },
});
        
export const CardMediaVerticalCardVideo = {
  border: '0px',
  borderRadius: '7px',
};

export const CardMediaVerticalCardImage = {
  '@media only screen and (min-width: 600px)': {
    height: '400px',
  },
};

export const CardMediaSection = {
  '@media only screen and (max-width: 600px)': {
    display: 'none',
  },
  '@media only screen and (min-width: 600px)': {
    height: '86px',
  },
  '@media only screen and (min-width: 992px)': {
    height: '212.5px',
  },
};

export default [
  CardMedaiArticalVideo,
  CardMediaVerticalCardVideo,
  CardMediaVerticalCardImage,
  CardMediaSection,
];
