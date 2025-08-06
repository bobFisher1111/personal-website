import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from 'react-router';
import SocialMediaComponent from '../../../components/socialMediaComponent/SocialMediaComponent';
import AppBarLinksToPages from '../appBarLinksToPages/AppBarLinksToPages';
import LightDarkMode from '../lightDarkMode/LightDarkMode';
import MobileDrawer from '../mobileDrawer/MobileDrawer';
import {
  AppBarStyle,
  GridDesktopAppBar,
  GridMobileAppBarTitle,
  TypographyDesktopTitle,
  GridDesktopAppBar2
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
        size={{
          xs: 6,
          sm: 4,
          md: 4,
          lg: 4,
          xl: 4,
        }}
      >
        <Link to="/" 
          style={LinkStyles(theme)}
        >
          <Typography
            color="primary"
            sx={TypographyDesktopTitle}
          >
            {"Gamers Shrine"}
          </Typography>
        </Link>
      </Grid>
      <Grid
        size={{
          xs: 0,
          sm: 4,
          md: 4,
          lg: 4,
          xl: 4,
        }}
        sx={GridDesktopAppBar}
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
        id="2"
        size={{
          xs: 0,
          sm: 4,
          md: 4,
          lg: 4,
          xl: 4,
        }}
        sx={GridDesktopAppBar2}
      >
        <AppBarLinksToPages />
        <LightDarkMode />
      </Grid>
      <Grid
        size={{
          xs: 6,
          sm: 6,
          md: 0,
          lg: 0,
          xl: 0,
        }}
        sx={GridMobileAppBarTitle}
      >
        <MobileDrawer />
      </Grid>
    </Grid>
  );
};

export default WebSiteAppBar;
