import React, { FC, Fragment, KeyboardEvent, MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';
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
import SocialMediaComponent from '../../../components/socialMediaComponent/SocialMediaComponent';
import { MenuIconStyle, BoxMobileDrawerStyle } from './MobileDrawerStyle';
import {
  AppBarStyles,
  CloseDrawerIconStyle,
  GridMobileDrawerAppBar,
  GridCenterItems,
  GridSectionsStyle,
  TypographyMobileDrawer,
} from './MobileDrawerStyle';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import AppConfig from '../../../config';
import LightDarkMode from '../lightDarkMode/LightDarkMode';
import TermsOfServiceDrawer from '../../../components/usersAcceptanceComponent/termsOfServiceDrawer/TermsOfServiceDrawer';

type Anchor = 'left';

const MobileDrawer: FC = () => {
  const [state, setState] = useState({
    left: false,
  });
  const theme = useSelector((state: any) => state.theme.darkTheme);
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
    <Box
      id="five"
      sx={BoxMobileDrawerStyle}
      style={{background: theme ? '#121212' : 'white'}}
    >
      <AppBar
        sx={AppBarStyles}
      >
        <Grid
          container
          justifyContent="center"
          sx={GridMobileDrawerAppBar}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}            
            lg={12}
            xl={12}
            sx={GridCenterItems}
          >
            <Grid
              item
              xs={4}
            >
              <LightDarkMode />
            </Grid>
            <Grid
              item
              xs={4}
            >
              <SocialMediaComponent
                turnOnStyle={true}
                widthPadding={'10px 0px 0px 8px'}
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
              xs={4}
              style={{justifyContent: 'flex-end'}}
            >
              <Button
                sx={CloseDrawerIconStyle}
                onClick={toggleDrawer(anchor, false)}
              >
                <CloseIcon/>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
          >
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={GridSectionsStyle}
          >
            <Link
              to="/"
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
                sx={TypographyMobileDrawer}
                onClick={toggleDrawer(anchor, false)}
              >
                Home
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Link to="/videoGames"
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
                sx={TypographyMobileDrawer}
                onClick={toggleDrawer(anchor, false)}
              >
                Video Games
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Link to="/reviews"
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
                sx={TypographyMobileDrawer}
                onClick={toggleDrawer(anchor, false)}
              >
                Reviews
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Link
              to="/coding"
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
                sx={TypographyMobileDrawer}
                onClick={toggleDrawer(anchor, false)}
              >
                Coding
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Link to="/stories"
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
                sx={TypographyMobileDrawer}
                onClick={toggleDrawer(anchor, false)}
              >
                Stories
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Link to="/writers"
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
                sx={TypographyMobileDrawer}
                onClick={toggleDrawer(anchor, false)}
              >
                Writers
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={TypographyMobileDrawer}
          >
            <TermsOfServiceDrawer mobile={true}/>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );

  return (
    <Grid>
      {(['left'] as const).map((anchor) => (
        <Fragment 
          key={anchor}
        >
          <Button
            aria-label="Menu for Sections Mobile"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon
              sx={MenuIconStyle}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </Grid>
  );
};

export default MobileDrawer;
