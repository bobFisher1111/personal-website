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
import LightDarkMode from '../lightDarkMode/LightDarkMode';
import {
  AppBarStyle,
  GridDesktopAppBar,
  GridMobileAppBar,
  GridMobileAppBarTitle,
  LinkGridMobileStyles,
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
        justifyContent="center"
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
              color="primary"
              sx={TypographyDesktopTitle}
              style={{padding: '0px 0px 0px 20px'}}
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
          item
          container
          xs={0}
          sm={0}
          md={4}
          lg={4}
          xl={4}
        >
          <Grid
            item 
            xs={0}
            sm={0}
            md={10}
            lg={10}
            xl={10}
            sx={GridDesktopAppBar}
            style={{alignContent: 'center'}}
          >
            <Grid 
              container
              spacing={2}
              justifyContent="center"
            >
              <AppBarLinksToPages />
            </Grid>
          </Grid>
          <Grid
            item
            xs={0}
            sm={0}
            md={2}
            lg={2}
            xl={2}
            container
            sx={GridDesktopAppBar}
            style={{justifyContent: 'flex-end'}}
          >
            <Typography
              color="primary"
              sx={TypographyDesktopTitle}
            >
              <LightDarkMode />
            </Typography>
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
            alignContent={"center"}
          >
            <MobileDrawer />
          </Grid>
        </Grid>
        <Grid
          item 
          xs={6}
          sm={6}
          md={6}
          lg={0}
          xl={0}
          sx={GridMobileAppBarTitle}
        >
          <Grid
            container
            justifyContent="flex-end"
            alignContent={"center"}
            sx={LinkGridMobileStyles}
          >
            <Link to="/" 
              style={{
                textDecoration: 'none'
              }}
            >
              <Typography
                color="primary"
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
