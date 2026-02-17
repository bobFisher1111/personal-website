import { Grid, Typography, useTheme } from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import AppBarLinksToPages from 'src/layout/appBar/appBarLinksToPages/AppBarLinksToPages';
import LightDarkMode from 'src/layout/appBar/lightDarkMode/LightDarkMode';
import MobileDrawer from 'src/layout/mobileDrawer/MobileDrawer';
import { websiteName } from 'src/config';
import {
  AppBarStyle,
  GridMobileAppBarTitle,
  TypographyDesktopTitle,
  GridDesktopAppBar2
} from './WebSiteAppBarStyles';
import { LinkStyles } from 'src/util/styles/LinkStyles';

const WebSiteAppBar = () => {
  const theme = useTheme();
  const isDarkTheme = useSelector((state: any) => state.theme.darkTheme);

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
            {`${websiteName}`}
          </Typography>
        </Link>
      </Grid>
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
