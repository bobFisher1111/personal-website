import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import SectionsDropDown from '../sectionsDropDown/SectionsDropDown';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import {
  AlignLinkTexts,
  GridPointer,
  TypographyLinkTwoPage,
} from './AppBarLinksToPagesStyles';

const AppBarLinksToPages: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  return (
    <>
      <Grid
        item
        sx={AlignLinkTexts}
      >
        <Link to="/about"
          style={LinkStyles(theme)}
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
        sx={AlignLinkTexts}
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
