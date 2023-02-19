import React from "react";
import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MobileDrawer from './MobileDrawer';

const AppBarSmalls = () => {
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
              xs: "none",
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
            xs: "none",
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
  </Box>
  )}

export default AppBarSmalls;
