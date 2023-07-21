import {
    styled,
    CardMedia,
} from "@mui/material";

export const CardMedaiArticalVideo = (articalpage: boolean) => ({
  width: articalpage ? '960px' : '321px',
  height: articalpage ? '576px' : '181px',
  border: '0px',
  borderRadius: '7px',
});
        
export const CardMediaVerticalCardVideo = {
  border: '0px',
  borderRadius: '7px',
};

export const CardMediaVerticalCardImage = {
  height: '400px'
};

export default [
  CardMedaiArticalVideo,
  CardMediaVerticalCardVideo,
  CardMediaVerticalCardImage,
];
