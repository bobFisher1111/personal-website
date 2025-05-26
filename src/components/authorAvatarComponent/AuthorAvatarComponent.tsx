import React from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router';
import { styled } from '@mui/material/styles';
import {
  AvatarAuthorLinkStyles,
  AvatarImageStyles,
  AuthorNameStyles,
} from './AuthorAvatarComponentStyles';
    
const AuthorAvatarComponent: React.FC<Props> = ({
  author,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);

  const Img = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Grid>
      <Link 
        to={`/author/${author?.author_id}`}
        style={AvatarAuthorLinkStyles(theme)}
      >
        <Img
          alt="complex"
          src={author?.avatar_image}
          sx={AvatarImageStyles(theme)}
        />
        <Typography
          color="primary"
          sx={AuthorNameStyles}
        >
          {author?.author_name}
        </Typography>
      </Link>
    </Grid>
  );
};

export type Props = {
  author: any;
};

export default AuthorAvatarComponent;
