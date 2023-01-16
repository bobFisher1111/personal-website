import React from "react";
import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import HeaderSocialMedia from './HeaderSocialMedia';
import HeaderLinksToPages from './HeaderLinksToPages';

const HeaderLargeXLarge = () => {
  return (
    <Box sx={{ 
      display: 'flex',
      maxWidth: "1024px",
          minWidth: "980px",
          margin: 'auto', 
      }}>
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
        <HeaderSocialMedia />
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
            md: "none",
            lg: "flex",
            xl: "flex",
          }
        }}
      >
        <HeaderLinksToPages />
      </Grid>
  </Box>
)}

export default HeaderLargeXLarge;
