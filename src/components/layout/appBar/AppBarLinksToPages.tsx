import {
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import SectionsDropDown from './SectionsDropDown';
import { TypographyLinkTwoPage } from '../../../styles/TypographyStyles';
import { GridPointer } from '../../../styles/GridStyles';
import { LinkStyles } from "../../../styles/LinkStyles";

const AppBarLinksToPages = () => {
  return (
    <>
      <Grid
        item
      >
        <Link to="/about"
          style={LinkStyles()}
        >
          <TypographyLinkTwoPage>
            About
          </TypographyLinkTwoPage>
        </Link>
      </Grid>
      <Grid
        item
      >
        <Link to="/writers"
          style={LinkStyles()}
        >
          <TypographyLinkTwoPage>
            Writers
          </TypographyLinkTwoPage>
        </Link>
      </Grid>
      <GridPointer
        item
      >
        <SectionsDropDown />
      </GridPointer>
    </>
  );
}

export default AppBarLinksToPages;
