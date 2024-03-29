import * as React from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SocialMediaComponent from '../../../components/socialMediaComponent/SocialMediaComponent';
import { MenuIconStyle, BoxMobileDrawerStyle } from './MobileDrawerStyle';
import { 
  GridMobileDrawerAppBar,
  GridCenterItems,
  GridSectionsStyle,
  TypographyMobileDrawer,
  // TypograohyMobileDrawerWebistieName,
} from './MobileDrawerStyle';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import AppConfig from '../../../config';

type Anchor = 'left';

const MobileDrawer: React.FC = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const facebook = AppConfig.facebookURL;
  const twitter = AppConfig.twitterURL;
  const youtube = AppConfig.youtubeURL;

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const uniqueID = Number(Date.now());

  const list = (anchor: Anchor) => (
    <Box
      sx={BoxMobileDrawerStyle}
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
          {/* <Link
            to="/"
            style={LinkStyles()}
          >
            <Typography
              sx={TypograohyMobileDrawerWebistieName}
            >
              Gamers Shrine
            </Typography>
          </Link> */}
          <SocialMediaComponent
            turnOnStyle={true}
            widthPadding={'10px 0px 0px 8px'}
            facebook={facebook}
            twitter={twitter}
            youtube={youtube}
          />
        </Grid>
        {/* <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={GridCenterItems}
        >
          <SocialMediaComponent
            turnOnStyle={true}
            widthPadding={'16px 0px 0px 8px'}
            facebook={facebookUrl}
            twitter={twitterUrl}
            youtube={youtubeUrl}
          />
        </Grid> */}
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
            style={LinkStyles()}
          >
            <Typography
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
            style={LinkStyles()}
          >
            <Typography
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
            style={LinkStyles()}
          >
            <Typography
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
            style={LinkStyles()}
          >
            <Typography 
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
            style={LinkStyles()}
          >
            <Typography
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
            style={LinkStyles()}
          >
            <Typography 
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
        >
          <Link to="/about"
            style={LinkStyles()}
          >
            <Typography
              sx={TypographyMobileDrawer}
              onClick={toggleDrawer(anchor, false)}
            >
              About
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Divider id={`${uniqueID}`}/>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileDrawer;
