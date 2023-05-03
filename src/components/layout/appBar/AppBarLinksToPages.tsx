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
        <Link to="/projects" 
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
          <Link to="/coding" 
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
              Coding
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
          <Link to="/author"
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
              Author
            </Typography>
          </Link>
        </Grid>
    </>
  );
}

export default AppBarLinksToPages;
