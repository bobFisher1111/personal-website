import React from 'react';
import {
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const AppBarLinksToPages = () => {
  return (
    <>
      <Grid item>
        <Link to="/" 
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
            Sections
          </Typography>
          </Link> 
        </Grid>
        <Grid item>
          <Link to="/writers"
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
              Writers
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
    </>
  );
}

export default AppBarLinksToPages;
