import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import YoutTubeLogo from '../../assets/icons/YoutTubeLogo.png';
import YoutTubeLogoDark from '../../assets/icons/yt_icon_mono_dark.png';
import { RootStyles, YouTubeDisabledStyle } from './DisabledVideoStyles';

export type Props = {
  articlePage: boolean;
  authorSectionArticlePage: boolean;
  youtubeUrl: string;
  carousel: boolean;
};
// Going to come backlater and change how this how thing works
const DisabledVideo: React.FC<Props> = ({
  articlePage,
  authorSectionArticlePage,
  youtubeUrl,
  carousel,
}) => {
  const theme = useTheme();
  const darkTheme = theme.palette.mode === 'dark';

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={RootStyles(darkTheme, articlePage, carousel)(theme)}
    >
      <a href={youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube link">
        <Grid container justifyContent="center" alignItems="center">
          <Grid size={12}>
            <Box
              component="img"
              src={darkTheme ? YoutTubeLogoDark : YoutTubeLogo}
              alt="YouTube logo"
              width={authorSectionArticlePage ? '68px' : '90px'}
              sx={YouTubeDisabledStyle(theme)}
            />
          </Grid>
          <Grid size={12}>
            <Typography align="center">Disabled</Typography>
          </Grid>
        </Grid>
      </a>
    </Grid>
  );
};

export default DisabledVideo;
