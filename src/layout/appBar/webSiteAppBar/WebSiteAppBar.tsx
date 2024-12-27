import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import SocialMediaComponent from '../../../components/socialMediaComponent/SocialMediaComponent';
import AppBarLinksToPages from '../appBarLinksToPages/AppBarLinksToPages';
import LightDarkMode from '../lightDarkMode/LightDarkMode';
import {
  AppBarStyle,
  TypographyDesktopTitle,
} from './WebSiteAppBarStyles';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import AppConfig from '../../../config';

const WebSiteAppBar: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const facebook = AppConfig.facebookURL;
  const twitter = AppConfig.twitterURL;
  const youtube = AppConfig.youtubeURL;

  return (
    <Grid 
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={AppBarStyle}
    >
      <Grid
        size={4}
      >
        <Link to="/" 
          style={LinkStyles(theme)}
        >
          <Typography
            color="primary"
            sx={TypographyDesktopTitle}
            style={{
              padding: '0px 0px 0px 20px',

            }}
          >
            {"Gamers Shrine"}
          </Typography>
        </Link>
      </Grid>
      <Grid
        size={4}
      >
        <SocialMediaComponent
          widthPadding={'8px 0px 0px 16px'}
          turnOnStyle={true}
          facebook={facebook}
          twitter={twitter}
          youtube={youtube}
          alignContent={"center"}
          justifyContent={"center"}
        />
      </Grid>
      <Grid
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
        size={4}
      >
        <AppBarLinksToPages />
        <LightDarkMode />
      </Grid>
    </Grid>
  );
};

export default WebSiteAppBar;
