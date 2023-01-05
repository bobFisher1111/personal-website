import React from "react";
import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import TwitterLogo from '../../assets/icons/TwitterLogo.svg';
import YoutTubeLogo from '../../assets/icons/YoutTubeLogo.png';
import FacebookLogo from '../../assets/icons/FacebookLogo.png';
// import AccountMenu from './HeaderMenu'; // implement later

const HeaderLargeXLarge = () => {
  const facebookUrl = 'https://www.facebook.com/';
  const twitterUrl = 'https://twitter.com/';
  const youtubeUrl = 'https://www.youtube.com/';

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
        <Grid item>
          <a href={facebookUrl}>
            <img src={FacebookLogo} height="20px" alt="Facebook logo" />
          </a>
        </Grid>
        <Grid item>
          <a href={twitterUrl}>
            <img src={TwitterLogo} height="20px" alt="Twitter logo" />
          </a>
        </Grid>
        <Grid item>
          <a href={youtubeUrl}>
            <img src={YoutTubeLogo} height="20px" alt="YouTube logo" />
          </a>
        </Grid>
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
            }}
            >
              Contact
            </Typography>
          </Link>
        </Grid>

        {/*
          <Grid item
            style={{position: 'relative'}}
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
            <AccountMenu />
          </Grid>
        */}
       
      </Grid>
  </Box>
)}

export default HeaderLargeXLarge;
