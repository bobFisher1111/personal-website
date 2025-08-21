import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from 'react-router';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import {
  TypographyLinkTwoPage,
} from './AppBarLinksToPagesStyles';

const AppBarLinksToPages: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  return (
    <Grid
      container 
      spacing={2}
    >
      <Typography
        color="primary"
        sx={TypographyLinkTwoPage}
      >
        About
      </Typography>
      <Link to="/writers"
        style={LinkStyles(theme)}
      >
        <Typography
          color="primary"
          sx={TypographyLinkTwoPage}
        >
          Writers
        </Typography>
      </Link>
    </Grid>
  );
};

export default AppBarLinksToPages;
