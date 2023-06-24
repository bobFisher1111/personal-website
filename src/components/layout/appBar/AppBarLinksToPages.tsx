import React from 'react';
import {
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import SectionsDropDown from './AppBarSectionsDropDown';

const AppBarLinksToPages = () => {
  return (
    <>
        <Grid item>
          <Link to="/about"
            style={{textDecoration: "none"}}
          >
            <Typography
               sx={{
                // fontSize: '14px',
                color: "white",
                cursor: "pointer",
                "&:hover": {
                    color: "black",
                    // make sure to change component contact to about
                },
                //margin: "0px 22px 0px 0px"
            }}
            >
              About
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/writers"
            style={{textDecoration: "none"}}
          >
            <Typography
               sx={{
                // fontSize: '14px',
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
        <Grid
          item
          sx={{
            display: 'flex',
            cursor: "pointer",
          }}
        >
          <SectionsDropDown />
        </Grid>
    </>
  );
}

export default AppBarLinksToPages;
