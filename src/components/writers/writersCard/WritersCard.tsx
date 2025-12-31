import {
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SocialMediaComponent from 'src/components/socialMediaComponent/SocialMediaComponent';
import { LinkStyles } from 'src/util/styles/LinkStyles';
import {
  WritersCardGridRoot,
  WritersCardAvatar,
  WritersCardTextAuthorName,
  WritersCardGridAuthorName,
  WritersCardTextAuthorTitle,
} from './WritersCardStyle';

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
  const colorTheme = useSelector((state: any) => state.theme.darkTheme);

  return (
    <Grid container sx={WritersCardGridRoot()}>
      <Grid
        sx={{
          flex: '0 0 auto',
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
          flex: '1 1 auto',
          minWidth: 0,
        }}
        component="div"
      >
        <Link to={`/author/${authorId}`} style={LinkStyles(colorTheme)}>
          <Typography color="primary" sx={WritersCardTextAuthorName(theme)}>
            {authorName}
          </Typography>
        </Link>
        <Link to={`/author/${authorId}`} style={LinkStyles(colorTheme)}>
          <Typography
            color="primary"
            variant="subtitle1"
            sx={WritersCardTextAuthorTitle(theme)}
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
  authorId: string;
  facebook: string;
  twitter: string;
  youtube: string;
  email: string;
};

export default WritersCard;
