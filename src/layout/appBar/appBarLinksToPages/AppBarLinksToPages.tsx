import React from 'react';
import {
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from 'react-router';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import {
  TypographyLinkTwoPage,
} from './AppBarLinksToPagesStyles';

const AppBarLinksToPages: React.FC = () => {
  const theme = useTheme();
  const colorTheme = useSelector((state: any) => state.theme.darkTheme);

  return (
    <Grid container spacing={2}>
      <Typography
        color="primary"
        sx={TypographyLinkTwoPage(theme)}
      >
        About
      </Typography>
      <Link to="/writers" style={LinkStyles(colorTheme)}>
        <Typography
          color="primary"
          sx={TypographyLinkTwoPage(theme)}
        >
          Writers
        </Typography>
      </Link>
    </Grid>
  );
};


export default AppBarLinksToPages;
