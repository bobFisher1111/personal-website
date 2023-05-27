import React from "react";
import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import SocialMediaComponent from '../../socialMediaComponent/SocialMediaComponent';
import AppBarLinksToPages from './AppBarLinksToPages';

const AppBarLargeXLarge = () => {
  const facebook = "https://www.facebook.com/";
  const twitter = "https://twitter.com/";
  const youtube = "https://www.youtube.com/channel/UC8GJo4nTgJlfhWdpsdT5rHQ";

  return (
    <Box 
      sx={{ 
        display: 'flex',
        maxWidth: "1024px",
        minWidth: "980px",
        margin: 'auto', 
      }}
    >
      <Grid 
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          display:{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
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
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          display:{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          }
        }}
      >
        <SocialMediaComponent
          facebook={facebook}
          twitter={twitter}
          youtube={youtube}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        sx={{
          // display:{
          //   xs: "none",
          //   sm: "none",
          //   md: "none",
          //   lg: "flex",
          //   xl: "flex",
          // }
        }}
      >
        <AppBarLinksToPages />
      </Grid>
  </Box>
)}

export default AppBarLargeXLarge;
