import React from 'react';
import {
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const HeaderLinksToPages = () => {
  return (
    <>
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
    </>
  );
}

export default HeaderLinksToPages;
