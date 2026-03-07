import { CardMedia, Grid, Typography } from "@mui/material";
import { useAppSelector } from "src/store/redux/hooks";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import SocialMediaComponent from "src/components/socialMediaComponent/SocialMediaComponent";
import { LinkStyles } from "src/util/styles/LinkStyles";
import {
  WritersCardGridRoot,
  WritersCardAvatar,
  WritersCardTextAuthorName,
  WritersCardTextAuthorTitle,
} from "./WritersCardStyle";

const WritersCard = ({
  authorImage,
  authorName,
  authorsTitle,
  authorId,
  facebook,
  twitter,
  youtube,
  email,
}: Props) => {
  const theme = useTheme();
  const colorTheme = useAppSelector((state) => state.theme.darkTheme);

  return (
    <Grid container sx={WritersCardGridRoot()}>
      <Grid
        sx={{
          flex: "0 0 auto",
        }}
      >
        <Link to={`/author/${authorId}`} style={LinkStyles(colorTheme)}>
          <CardMedia
            component="img"
            image={authorImage}
            sx={WritersCardAvatar(theme, colorTheme)}
            alt={`${authorName} image`}
            referrerPolicy="no-referrer"
          />
        </Link>
      </Grid>
      <Grid
        sx={{
          flex: "1 1 auto",
          minWidth: 0,
        }}
        component="div"
      >
        <Link to={`/author/${authorId}`} style={LinkStyles(colorTheme)}>
          <Typography component="h2" color="primary" sx={WritersCardTextAuthorName}>
            {authorName}
          </Typography>
        </Link>
        <Link to={`/author/${authorId}`} style={LinkStyles(colorTheme)}>
          <Typography
            color="primary"
            variant="subtitle1"
            component="p"
            sx={WritersCardTextAuthorTitle}
          >
            {authorsTitle}
          </Typography>
        </Link>
        <Grid container>
          <SocialMediaComponent
            widthPadding="8px 8px 8px 0px"
            turnOnStyle={true}
            turnOnEmail={true}
            turnOnEmailStyle={true}
            facebook={facebook}
            twitter={twitter}
            youtube={youtube}
            email={email}
            alignContent="flex-start"
            justifyContent="flex-start"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export type Props = {
  authorImage: string;
  authorName: string;
  authorsTitle: string;
  authorId: number;
  facebook: string;
  twitter: string;
  youtube: string;
  email: string;
};

export default WritersCard;
