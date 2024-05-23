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
        style={{alignContent: 'center'}}
      >
        <Link to="/about"
          style={LinkStyles()}
        >
          <Typography
            color="primary"
            sx={TypographyLinkTwoPage}
          >
            About
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        style={{alignContent: 'center'}}
      >
        <Link to="/writers"
          style={LinkStyles()}
        >
          <Typography
            color="primary"
            sx={TypographyLinkTwoPage}
          >
            Writers
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        sx={GridPointer}
        style={{padding: '16px 0px 0px 0px'}}
      >
        <SectionsDropDown />
      </Grid>
    </>
  );
};

export default AppBarLinksToPages;
