import React from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
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
        to={`/author/${author?.authorId}`}
        style={AvatarAuthorLinkStyles(theme)}
      >
        <Img
          alt="complex"
          src={author?.avatarImage}
          sx={AvatarImageStyles(theme)}
        />
        <Typography
          color="primary"
          sx={AuthorNameStyles}
        >
          {author?.authorName}
        </Typography>
      </Link>
    </Grid>
  );
};

export type Props = {
  author: any;
};

export default AuthorAvatarComponent;
