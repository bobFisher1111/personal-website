import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SocialMediaComponent from '../../../components/socialMediaComponent/SocialMediaComponent';
import { 
  TypographyMobileDrawer,
  TypograohyMobileDrawerWebistieName,
} from '../../../styles/TypographyStyles';
import { MenuIconStyle } from './MobileDrawerStyle';
import { GridMobileDrawerAppBar, GridCenterItems } from '../../../styles/GridStyles';
import { BoxMobileDrawer } from '../../../styles/BoxStyles';
import { LinkStyles } from '../../../styles/LinkStyles';

type Anchor = 'left';

const MobileDrawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const facebookUrl = 'https://www.facebook.com/';
  const twitterUrl = 'https://twitter.com/';
  const youtubeUrl = 'https://www.youtube.com/';

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
    <BoxMobileDrawer>
      <GridMobileDrawerAppBar
        container
        justifyContent="flex-start"
      >
        <Grid
          item
        >
          <Link
            to="/"
            style={LinkStyles()}
          >
            <TypograohyMobileDrawerWebistieName>
              WebsiteName
            </TypograohyMobileDrawerWebistieName>
          </Link>
        </Grid>
        <GridCenterItems
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <SocialMediaComponent
            turnOnStyle={true}
            widthPadding={'0px 0px 0px 8px'}
            facebook={facebookUrl}
            twitter={twitterUrl}
            youtube={youtubeUrl}
          />
        </GridCenterItems>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Link
            to="/"
            style={LinkStyles()}
          >
            <TypographyMobileDrawer 
              onClick={toggleDrawer(anchor, false)}
            >
              Home
            </TypographyMobileDrawer>
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
            <TypographyMobileDrawer 
              onClick={toggleDrawer(anchor, false)}
            >
              Coding
            </TypographyMobileDrawer>
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
            <TypographyMobileDrawer 
              onClick={toggleDrawer(anchor, false)}
            >
              Video Games
            </TypographyMobileDrawer>
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
          <Link to="/showsMovies"
            style={LinkStyles()}
          >
            <TypographyMobileDrawer 
              onClick={toggleDrawer(anchor, false)}
            >
              Shows/Movies
            </TypographyMobileDrawer>
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
           <TypographyMobileDrawer 
              onClick={toggleDrawer(anchor, false)}
            >
              Stories
            </TypographyMobileDrawer>
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
            <TypographyMobileDrawer 
              onClick={toggleDrawer(anchor, false)}
            >
              Writers
            </TypographyMobileDrawer>
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
            <TypographyMobileDrawer 
              onClick={toggleDrawer(anchor, false)}
            >
              About
            </TypographyMobileDrawer>
          </Link>
        </Grid>
      </GridMobileDrawerAppBar>
      <Divider id={`${uniqueID}`}/>
    </BoxMobileDrawer>
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
}

export default MobileDrawer;
