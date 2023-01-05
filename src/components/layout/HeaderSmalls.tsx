import React from "react";
import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MobileDrawer from './MobileDrawer';

const HeaderSmalls = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      maxHeight: '32px',
      }}>
        <Grid
          container
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
            }
          }}
        >
        <Box sx={{ 
          flexGrow: 1,
          color: 'white',
          }}>
            <MobileDrawer />
          </Box>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{
          display:{
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          },
          marginRight: '22px'
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
          }}
          >
            React2Python
          </Typography>
        </Link>
      </Grid>
      {/*
        <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{
          position: 'block',
          display:{
            xs: "flex",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          },
          marginRight: '3px',
        }}
      >
        <AccountMenu />
      </Grid>
      */}
      
  </Box>
  )}

export default HeaderSmalls;
