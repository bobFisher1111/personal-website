import {
    styled,
} from "@mui/material";
      
export const ImageHorizonatalArticals = (articalPage: any) => ({
    height: `${articalPage} ? '576px' : '181px'`,
    borderRadius: '7px',
    aspectRatio: '16/9',
    width: articalPage ? '960px' : '321px',
});

export default [
  ImageHorizonatalArticals,
];
