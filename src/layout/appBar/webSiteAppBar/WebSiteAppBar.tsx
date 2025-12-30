import { Grid, Typography, useTheme } from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import SocialMediaComponent from '../../../components/socialMediaComponent/SocialMediaComponent';
import AppBarLinksToPages from 'src/layout/appBar/appBarLinksToPages/AppBarLinksToPages';
import LightDarkMode from 'src/layout/appBar/lightDarkMode/LightDarkMode';
import MobileDrawer from 'src/components/writers/writersCard/mobileDrawer/MobileDrawer';
import {
  AppBarStyle,
  // GridDesktopAppBar,
  GridMobileAppBarTitle,
  TypographyDesktopTitle,
  GridDesktopAppBar2
} from './WebSiteAppBarStyles';
import { LinkStyles } from 'src/util/styles/LinkStyles';
// import AppConfig from '../../../config';

const WebSiteAppBar = () => {
  const theme = useTheme();
  const isDarkTheme = useSelector((state: any) => state.theme.darkTheme);
  // const { facebookURL, twitterURL, youtubeURL } = AppConfig;

  return (
    <Grid 
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={AppBarStyle(theme)}
    >
      <Grid
        size={{
          xs: 6,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
        }}
      >
        <Link to="/" style={LinkStyles(isDarkTheme)}>
          <Typography
            color="primary"
            sx={TypographyDesktopTitle(theme)}
          >
            {"Children of Time"}
          </Typography>
        </Link>
      </Grid>

      {/* <Grid
        size={{
          xs: 0,
          sm: 4,
          md: 4,
          lg: 4,
          xl: 4,
        }}
        sx={GridDesktopAppBar(theme)}
      >
        <SocialMediaComponent
          widthPadding={'8px 0px 0px 16px'}
          turnOnStyle={true}
          facebook={facebookURL}
          twitter={twitterURL}
          youtube={youtubeURL}
          alignContent={"center"}
          justifyContent={"center"}
        />
      </Grid> */}

      <Grid
        id="2"
        size={{
          xs: 0,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
        }}
        sx={GridDesktopAppBar2(theme)}
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
        sx={GridMobileAppBarTitle(theme)}
      >
        <MobileDrawer />
      </Grid>
    </Grid>
  );
};

export default WebSiteAppBar;
