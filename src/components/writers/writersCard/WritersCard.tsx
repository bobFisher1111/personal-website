import React from 'react';
import {
  Typography,
  CardMedia,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import SocialMediaComponent from '../../socialMediaComponent/SocialMediaComponent';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import {
  WritersCardGridRoot,
  WritersCardAvatar,
  WritersCardTextAuthorName,
  WritersCardGridAuthorName,
  WritersCardTextAuthorTitle,
} from './WritersCardStyle';

const WritersCard: React.FC<Props> = ({
  authorImage,
  authorName,
  authorsTitle,
  authorId,
  facebook,
  twitter,
  youtube,
  email,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  return (
    <Grid
      container
      sx={WritersCardGridRoot}
    >
      <Grid
        size={{
          xs: 3,
          sm: 3,
          md: 4,
          lg: 4,
          xl: 4,
        }}
      >
        <Link 
          to={`/author/${authorId}`}
          style={LinkStyles(theme)}
        >
          <CardMedia
            component="img"
            image={authorImage}
            sx={WritersCardAvatar}
            alt={`${authorName} image`}
          />
        </Link>
      </Grid>
      <Grid
        size={{
          xs: 9,
          sm: 9,
          md: 8,
          lg: 8,
          xl: 8,
        }}
        sx={WritersCardGridAuthorName}
      >
        <Link 
          to={`/author/${authorId}`}
          style={LinkStyles(theme)}
        >
          <Typography
            color="primary"
            sx={WritersCardTextAuthorName}
          >
            {authorName}
          </Typography>
        </Link>
        <Link 
          to={`/author/${authorId}`}
          style={LinkStyles(theme)}
        >
          <Typography
            color="primary"
            variant="subtitle1"
            sx={WritersCardTextAuthorTitle}
          >
            {authorsTitle}
          </Typography>
        </Link>
        <Grid
          container
        >
          <SocialMediaComponent
            widthPadding={'8px 8px 8px 0px'}
            turnOnStyle={true}
            turnOnEmail={true}
            turnOnEmailStyle={true}
            facebook={facebook}
            twitter={twitter}
            youtube={youtube}
            email={email}
            alignContent={"flex-start"}
            justifyContent={"flex-start"}
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
