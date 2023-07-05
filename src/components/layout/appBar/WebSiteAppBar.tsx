import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import SocialMediaComponent from '../../socialMediaComponent/SocialMediaComponent';
import AppBarLinksToPages from './AppBarLinksToPages';
import MobileDrawer from './MobileDrawer';

const WebSiteAppBar = () => {
  const facebook = "https://www.facebook.com/";
  const twitter = "https://twitter.com/";
  const youtube = "https://www.youtube.com/channel/UC8GJo4nTgJlfhWdpsdT5rHQ";

  return (
    <Box 
      sx={{ 
        display: 'flex',
        maxWidth: "1024px",
        minWidth: "1024px",
        margin: 'auto',
        // desktop less than normal max width
        '@media only screen and (max-width: 1023px)': {
          maxWidth: "1023px",
          minWidth: "820px",
          margin: 0,
        },
        // apple air
        '@media only screen and (max-width:820px)': {
          maxWidth: "820px",
          minWidth: "520px",
        },
        // note ultra 20+
        '@media only screen and (max-width:414px)': {
          maxWidth: "414px",
          minWidth: "412px",
        },
        // pixel 5 & iphone pro plus 12
        '@media only screen and (max-width:393px)': {
          maxWidth: "393px",
          minWidth: "390px",
        },
        // Galaxy S8+
        '@media only screen and (max-width:360px)': {
          maxWidth: "360px",
          minWidth: "360px",
        },
      }}
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
          sx={{
            padding: '0px 16px 0px 16px',
            '@media (max-width: 1023px)': {
              display: 'none',
            },
          }}
        >
          <Link to="/" 
            style={{
              textDecoration: "none"
            }}
            >
            <Typography variant="h6"
              sx={{
                fontSize: '20px',
                color: "white",
                cursor: "pointer",
                "&:hover": {
                    color: "black",
                },
            }}
            >
              React2Python
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
          sx={{
            padding: '0px 16px 0px 16px',
            '@media (max-width: 1023px)': {
              display: 'none',
            },
          }}
        >
          <Grid 
            container
            spacing={2}
            justifyContent="center"
          >
            <SocialMediaComponent
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
          sx={{
            padding: '0px 16px 0px 16px',
            '@media (max-width: 1023px)': {
              display: 'none',
            },
          }}
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
          sx={{
            padding: '0px 16px 0px 16px',
            '@media (min-width: 1023px)': {
              display: 'none',
            },
          }}
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
          sm={6}
          md={6}
          lg={0}
          xl={0}
          sx={{
            padding: '0px 16px 0px 16px',
            '@media (min-width: 1023px)': {
              display: 'none',
            },
          }}
        >
          <Grid
            container
            justifyContent="flex-end"
          >
            <Link to="/" 
              style={{
                textDecoration: "none"
              }}
            >
              <Typography variant="h6"
                sx={{
                  fontSize: '16px',
                  color: "white",
                  cursor: "pointer",
                  "&:hover": {
                      color: "black",
                  },
                }}
              >
                React2Python
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
)}

export default WebSiteAppBar;
