import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import {
  AlignLinkTexts,
  TypographyLinkTwoPage,
} from './AppBarLinksToPagesStyles';
import TermsOfServiceDrawer from '../../../components/usersAcceptanceComponent/termsOfServiceDrawer/TermsOfServiceDrawer';

const AppBarLinksToPages: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  return (
    <>
      <Grid
        item
        sx={AlignLinkTexts(true)}
      >
        <TermsOfServiceDrawer mobile={false} />
      </Grid>
      <Grid
        item
        sx={AlignLinkTexts(false)}
      >
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
    </>
  );
};

export default AppBarLinksToPages;
