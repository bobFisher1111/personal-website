import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SocialMediaComponent from '../../../components/socialMediaComponent/SocialMediaComponent';
import AppBarLinksToPages from '../appBarLinksToPages/AppBarLinksToPages';
import MobileDrawer from '../mobileDrawer/MobileDrawer';
import {
  AppBarStyle,
  GridDesktopAppBar,
  GridMobileAppBar,
  GridMobileAppBarTitle,
  TypographyDesktopTitle,
  TypographyMobileTitle,
} from './WebSiteAppBarStyles';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import AppConfig from '../../../config';

const WebSiteAppBar: React.FC = () => {
  const facebook = AppConfig.facebookURL;
  const twitter = AppConfig.twitterURL;
  const youtube = AppConfig.youtubeURL;

  return (
    <Box
      sx={AppBarStyle}
    >
      <Grid 
        container
        direction="row"
        alignItems="center"
      >
        <Grid
          item 
          xs={0}
          sm={0}
          md={4}
          lg={4}
          xl={4}
          sx={GridDesktopAppBar}
        >
          <Link to="/" 
            style={LinkStyles()}
          >
            <Typography
              sx={TypographyDesktopTitle}
            >
              {"Gamers Shrine"}
            </Typography>
          </Link>
        </Grid>
        <Grid
          item 
          xs={0}
          sm={0}
          md={4}
          lg={4}
          xl={4}
          sx={GridDesktopAppBar}
        >
          <Grid 
            container
            spacing={2}
            justifyContent="center"
          >
            <SocialMediaComponent
              widthPadding={'16px 0px 0px 16px'}
              turnOnStyle={true}
              facebook={facebook}
              twitter={twitter}
              youtube={youtube}
            />
          </Grid>
        </Grid>
        <Grid
          item 
          xs={0}
          sm={0}
          md={4}
          lg={4}
          xl={4}
          sx={GridDesktopAppBar}
        >
          <Grid 
            container
            spacing={2}
            justifyContent="flex-end"
          >
            <AppBarLinksToPages />
          </Grid>
        </Grid>
        <Grid
          item 
          xs={6}
          sm={6}
          md={6}
          lg={0}
          xl={0}
          sx={GridMobileAppBar}
        >
          <Grid
            container
            justifyContent="flex-start"
          >
            <MobileDrawer />
          </Grid>
        </Grid>
        <Grid
          item 
          xs={6}
          sm={4}
          md={6}
          lg={0}
          xl={0}
          sx={GridMobileAppBarTitle}
        >
          <Grid
            container
            justifyContent="flex-end"
          >
            <Link to="/" 
              style={{
                textDecoration: 'none'
              }}
            >
              <Typography
                sx={TypographyMobileTitle}
              >
                GS
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WebSiteAppBar;
