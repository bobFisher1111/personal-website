import React from 'react';
import {
  Grid,
  Typography,
  CardMedia,
} from '@mui/material';
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
  return (
    <Grid
      container
      sx={WritersCardGridRoot}
    >
      <Grid
        item
        xs={3}
        sm={3}
        md={4}
        lg={4}
        xl={4}
      >
        <Link 
          to={`/author/${authorId}`}
          style={LinkStyles()}
        >
          <CardMedia
            component="img"
            image={authorImage}
            sx={WritersCardAvatar}
          />
        </Link>
      </Grid>
      <Grid
        item
        xs={9}
        sm={9}
        md={8}
        lg={8}
        xl={8}
        sx={WritersCardGridAuthorName}
      >
        <Link 
          to={`/author/${authorId}`}
          style={LinkStyles()}
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
          style={LinkStyles()}
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
