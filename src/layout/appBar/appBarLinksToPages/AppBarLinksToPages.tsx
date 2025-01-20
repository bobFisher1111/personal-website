import React from 'react';
import {
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useSelector } from "react-redux";
import { Link } from 'react-router';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import {
  TypographyLinkTwoPage,
} from './AppBarLinksToPagesStyles';
import TermsOfServiceDrawer from '../../../components/usersAcceptanceComponent/termsOfServiceDrawer/TermsOfServiceDrawer';

const AppBarLinksToPages: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  return (
    <Grid
      container 
      spacing={2}
    >
      <TermsOfServiceDrawer />
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
