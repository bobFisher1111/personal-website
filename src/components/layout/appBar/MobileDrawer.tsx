import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SocialMediaComponent from '../../socialMediaComponent/SocialMediaComponent';

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
    <Box
      sx={{
        width:  '75vw',
        height: '100vh',
        backgroundColor: "white",
      }}
    >
      <Grid
        container
        justifyContent="flex-start"
        sx={{
          backgroundColor: "#667A6E",
          maxHeight: '36px',
          padding: '0px 0px 0px 8px',
          borderBottom: 'solid #2F4C69 1px',
        }}
      >
        <Grid
          item
          justifyContent="flex-start"
          alignItems="center"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none"
            }}
          >
            <Typography variant="h6"
              sx={{
                color: "white",
                cursor: "pointer",
                "&:hover": {
                    color: "black",
                },
                fontSize: '20px',
              }}
            >
              React2Python
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
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '16px 0px 16px 0px',
          }}
        >
          <SocialMediaComponent
            facebook={facebookUrl}
            twitter={twitterUrl}
            youtube={youtubeUrl}
          />
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
            to="/"
            style={{textDecoration: "none"}}
          >
            <Typography variant="h6"
              onClick={toggleDrawer(anchor, false)}
              sx={{
                color: "#2F4C69",
                cursor: "pointer",
                "&:hover": {
                  color: "black",
                },
                fontSize: '20px',
              }}
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
          <Link
            to="/coding"
            style={{textDecoration: "none"}}
          >
            <Typography variant="h6"
              onClick={toggleDrawer(anchor, false)}
                sx={{
                  color: "#2F4C69",
                  cursor: "pointer",
                  "&:hover": {
                      color: "black",
                  },
                  fontSize: '20px',
              }}
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
          <Link to="/videoGames"
            style={{textDecoration: "none"}}
          >
            <Typography variant="h6"
              onClick={toggleDrawer(anchor, false)}
                sx={{
                  color: "#2F4C69",
                  cursor: "pointer",
                  "&:hover": {
                      color: "black",
                  },
                  fontSize: '20px',
              }}
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
          <Link to="/showsMovies"
            style={{textDecoration: "none"}}
          >
            <Typography variant="h6"
              onClick={toggleDrawer(anchor, false)}
                sx={{
                  color: "#2F4C69",
                  cursor: "pointer",
                  "&:hover": {
                      color: "black",
                  },
                  fontSize: '20px',
              }}
            >
              Shows/Movies
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
            style={{textDecoration: "none"}}
          >
            <Typography variant="h6"
              onClick={toggleDrawer(anchor, false)}
                sx={{
                  color: "#2F4C69",
                  cursor: "pointer",
                  "&:hover": {
                      color: "black",
                  },
                  fontSize: '20px',
              }}
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
            style={{textDecoration: "none"}}
          >
            <Typography variant="h6"
              onClick={toggleDrawer(anchor, false)}
                sx={{
                  color: "#2F4C69",
                  cursor: "pointer",
                  "&:hover": {
                      color: "black",
                  },
                  fontSize: '20px',
              }}
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
            style={{textDecoration: "none"}}
          >
            <Typography variant="h6"
              onClick={toggleDrawer(anchor, false)}
                sx={{
                  color: "#2F4C69",
                  cursor: "pointer",
                  "&:hover": {
                      color: "black",
                  },
                  fontSize: '20px',
              }}
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
              sx={{
                color: 'white',
              }}
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
