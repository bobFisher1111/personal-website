import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SectionsDropDown from '../sectionsDropDown/SectionsDropDown';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import { 
  GridPointer,
  TypographyLinkTwoPage,
} from './AppBarLinksToPagesStyles';

const AppBarLinksToPages: React.FC = () => {
  return (
    <>
      <Grid
        item
      >
        <Link to="/about"
          style={LinkStyles()}
        >
          <Typography
            sx={TypographyLinkTwoPage}
          >
            About
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
      >
        <Link to="/writers"
          style={LinkStyles()}
        >
          <Typography
            sx={TypographyLinkTwoPage}
          >
            Writers
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        sx={GridPointer}
      >
        <SectionsDropDown />
      </Grid>
    </>
  );
};

export default AppBarLinksToPages;
