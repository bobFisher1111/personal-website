import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import YoutTubeLogo from '../../assets/icons/YoutTubeLogo.png';
import YoutTubeLogoDark from '../../assets/icons/yt_icon_mono_dark.png';
import {
  RootStyles,
  YouTubeDisabledStyle,
} from './DisabledVideoStyles';

const DisabledVideo: React.FC<Props> = ({
  articlePage,
  authorSectionArticlePage,
  youtubeUrl,
  carousel,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={RootStyles(theme, articlePage, carousel)}
    >
      <a 
        href={youtubeUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="youtube logo"
      >
      
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          size={12}
        >
          <Box
            component="img"
            src={theme ? YoutTubeLogoDark : YoutTubeLogo} 
            height="20px"
            width={authorSectionArticlePage ? '68px' : '90px'}
            alt="YouTube logo"
            sx={YouTubeDisabledStyle}
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          size={12}
        >
          <Typography>
            Disabled
          </Typography>
        </Grid>
      </a>
    </Grid>
  );
};

export type Props = {
  articlePage: boolean,
  authorSectionArticlePage: boolean,
  youtubeUrl: any,
  carousel: boolean,
};
  
export default DisabledVideo;
