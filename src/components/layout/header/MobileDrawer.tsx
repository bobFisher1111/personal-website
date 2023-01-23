import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import HeaderSocialMedia from './HeaderSocialMedia';

type Anchor = 'left';

const MobileDrawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const facebookUrl = 'https://www.facebook.com/';
  const twitterUrl = 'https://twitter.com/';
  const youtubeUrl = 'https://www.youtube.com/';

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
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
  const sectionList = {
    'Projects': '/codingprojects',
    'Hobbies': '/hobbies',
    'About': '/about',
    'Contact': '/contact',
  };

  const SectionItems = () => {
    const siteItem = Object.entries(sectionList).map((key, value) => {
      return (
        <div>
          <ListItem
            sx={{
              color: 'white',
            }}
            key={value} 
            disablePadding
          >
            <ListItemButton href={key[1]}>
              <ListItemText primary={key[0]} />
            </ListItemButton>
          </ListItem>
        </div>
      )
    })
    return siteItem;
  }

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: "#282c34",
      }}
    >
      <Grid
        item
        xs={12}
        container
        sx={{
          backgroundColor: "#2F4C69",
          maxHeight: '32px'
        }}
      >
        <Grid
          item
          xs={4}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            display:{
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
          }}
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
              margin: "0px 0px 0px 15px",
              fontSize: '20px',
          }}
          >
            React2Python
          </Typography>
        </Link>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          xs={6}
          sm={4}
      >
       <HeaderSocialMedia />
      </Grid>
        <Grid
          container
          item
          xs={2}
          sm={4}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{
            maxHeight: '32px',
          }}
        >
          <IconButton
            sx={{
              color: "white",
              padding: '0px'
            }}
          >
            <CloseIcon
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            />
          </IconButton>
        </Grid>



      </Grid>
      <Divider />
      <List>
        {SectionItems()}
        </List>
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
            sx={{
              display:{
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
        ))}
        </div>
  );
}

export default MobileDrawer;
