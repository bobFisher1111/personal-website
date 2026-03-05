import { useAppSelector } from "src/store/redux/hooks";
import { Link } from "react-router-dom";
import { Grid, Typography, useTheme, styled } from "@mui/material";
import { LinkStyles } from "src/util/styles/LinkStyles";
import type { Author } from "src/types/authors";
import {
  avatarImageStyles,
  gridArticleInfoComponent,
  authorTextStyles,
  dateTextStyles,
  separatorStyles,
} from "./HorizontalArticlePageInfoComponentStyles";

const HorizontalArticlePageInfoComponent = ({
  author,
  authorsId,
  date,
  getAuthorData,
  section,
}: Props) => {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);
  const muiTheme = useTheme();
  const authorLink = authorsId == null ? "/" : `/author/${authorsId}`;

  const Img = styled("img")({
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent={"center"}
      sx={gridArticleInfoComponent(muiTheme)}
    >
      <Link to={authorLink} style={LinkStyles(darkTheme)}>
        <Img
          alt="Author avatar"
          src={getAuthorData?.[0]?.avatar_image}
          sx={avatarImageStyles(muiTheme, darkTheme)}
          referrerPolicy="no-referrer"
        />
      </Link>

      <Link to={authorLink} style={LinkStyles(darkTheme)}>
        <Typography color="primary" sx={authorTextStyles(muiTheme)}>
          {author}
        </Typography>
      </Link>

      <Typography color="primary" sx={separatorStyles}>
        |
      </Typography>

      <Typography color="primary" sx={dateTextStyles(muiTheme)}>
        {date}
      </Typography>

      <Typography color="primary" sx={separatorStyles}>
        |
      </Typography>

      <Typography color="primary" sx={authorTextStyles(muiTheme)}>
        {section}
      </Typography>
    </Grid>
  );
};

export type Props = {
  getAuthorData?: Author[];
  authorsId?: number | string;
  author: string;
  date: string;
  section: string;
};

export default HorizontalArticlePageInfoComponent;
