import {
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import SectionsDropDown from './SectionsDropDown';

const AppBarLinksToPages = () => {
  return (
    <>
      <Grid
        item
      >
        <Link to="/about"
          style={{textDecoration: "none"}}
        >
          <Typography
            sx={{
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
      <Grid
        item
      >
        <Link to="/writers"
          style={{textDecoration: "none"}}
        >
          <Typography
            sx={{
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
