import React from "react";
import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import HeaderSocialMedia from './HeaderSocialMedia';

const HeaderMedium = () => {
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
            md: "flex",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Grid item>
          <Link to="/codingprojects" 
            style={{textDecoration: "none"}}
          >
            <Typography
               sx={{
                fontSize: '14px',
                color: "white",
                cursor: "pointer",
                "&:hover": {
                    color: "black",
                },
            }}
            >
              Projects
            </Typography>
          </Link> 
        </Grid>
        <Grid item>
          <Link to="/hobbies" 
            style={{textDecoration: "none"}}
          >
            <Typography
               sx={{
                fontSize: '14px',
                color: "white",
                cursor: "pointer",
                "&:hover": {
                    color: "black",
                },
            }}
            >
              Hobbies
            </Typography>
          </Link> 
        </Grid>
        <Grid item>
          <Link to="/about"
            style={{textDecoration: "none"}}
          >
            <Typography
               sx={{
                fontSize: '14px',
                color: "white",
                cursor: "pointer",
                "&:hover": {
                    color: "black",
                },
            }}
            >
              About
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/contact"
            style={{textDecoration: "none"}}
          >
            <Typography
               sx={{
                fontSize: '14px',
                color: "white",
                cursor: "pointer",
                "&:hover": {
                    color: "black",
                },
                margin: "0px 22px 0px 0px"
            }}
            >
              Contact
            </Typography>
          </Link>
        </Grid>
      </Grid>
  </Box>
)}

export default HeaderMedium;
