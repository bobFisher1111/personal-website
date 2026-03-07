import { Grid, Typography, useTheme } from "@mui/material";
import { useAppSelector } from "src/store/redux/hooks";
import { Link } from "react-router-dom";
import { LinkStyles } from "src/util/styles/LinkStyles";
import { TypographyLinkTwoPage } from "./AppBarLinksToPagesStyles";

const AppBarLinksToPages = () => {
  const theme = useTheme();
  const colorTheme = useAppSelector((state) => state.theme.darkTheme);

  return (
    <Grid container spacing={2} component="nav" aria-label="Primary">
      <Link to="/" style={LinkStyles(colorTheme)}>
        <Typography color="primary" sx={TypographyLinkTwoPage(theme)}>
          About
        </Typography>
      </Link>
      <Link to="/writers" style={LinkStyles(colorTheme)}>
        <Typography color="primary" sx={TypographyLinkTwoPage(theme)}>
          Writers
        </Typography>
      </Link>
    </Grid>
  );
};

export default AppBarLinksToPages;
