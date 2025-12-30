import { Fragment, KeyboardEvent, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SocialMediaComponent from 'src/components/socialMediaComponent/SocialMediaComponent';
import LightDarkMode from 'src/layout/appBar/lightDarkMode/LightDarkMode';
import AppConfig from 'src/config';
import {
  MenuIconStyle,
  BoxMobileDrawerStyle,
  AppBarStyles,
  CloseDrawerIconStyle,
  GridMobileDrawerAppBar,
  GridSectionsStyle,
  TypographyMobileDrawer,
} from './MobileDrawerStyle';
import { LinkStyles } from 'src/util/styles/LinkStyles';

type Anchor = 'left';

const MobileDrawer = () => {
  const [state, setState] = useState({ left: false });
  const theme = useTheme();
  const colorTheme = useSelector((state: any) => state.theme.darkTheme);
  
  const facebook = AppConfig.facebookURL;
  const twitter = AppConfig.twitterURL;
  const youtube = AppConfig.youtubeURL;

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box sx={BoxMobileDrawerStyle(theme)}>
      <AppBar sx={AppBarStyles}>
        <Grid container justifyContent="center" alignItems="center" sx={GridMobileDrawerAppBar(theme)}>
          <Grid size={2}>
            <LightDarkMode />
          </Grid>
          <Grid size={8}>
            <SocialMediaComponent
              turnOnStyle={true}
              widthPadding="8px 0px 0px 8px"
              facebook={facebook}
              twitter={twitter}
              youtube={youtube}
              alignContent="center"
              justifyContent="center"
            />
          </Grid>
          <Grid container size={2} sx={{ justifyContent: 'flex-end' }}>
            <Button sx={CloseDrawerIconStyle} onClick={toggleDrawer(anchor, false)}>
              <CloseIcon />
            </Button>
          </Grid>
          <Grid size={12} sx={GridSectionsStyle}>
            <Link to="/" style={LinkStyles(colorTheme)}>
              <Typography color="primary" sx={TypographyMobileDrawer(theme)}>
                About
              </Typography>
            </Link>
          </Grid>
          <Grid size={12}>
            <Link to="/writers" style={LinkStyles(colorTheme)}>
              <Typography
                color="primary"
                sx={TypographyMobileDrawer(theme)}
                onClick={toggleDrawer(anchor, false)}
              >
                Writers
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );

  return (
    <Grid>
      {(['left'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Button aria-label="Menu for Sections Mobile" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={MenuIconStyle} />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </Grid>
  );
};

export default MobileDrawer;
