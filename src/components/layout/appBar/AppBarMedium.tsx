import React from "react";
import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import SocialMediaComponent from '../../socialMediaComponent/SocialMediaComponent';
import AppBarLinksToPages from './AppBarLinksToPages';

const AppBarMedium = () => {
  return (
    <Box sx={{ 
      display: 'flex' }}>
      <Grid 
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          display:{
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "none",
            xl: "none",
          }
        }}
        >
        <Link to="/" 
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
              margin: "0px 0px 0px 22px",
              textAlign: "center",
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
        sx={{
          display:{
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "none",
            xl: "none",
          }
        }}
      >
        <SocialMediaComponent />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        sx={{
          display:{
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <AppBarLinksToPages />
      </Grid>
  </Box>
)}

export default AppBarMedium;
