import { useSelector } from 'react-redux';
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  avatarAuthorLinkStyles,
  avatarImageStyles,
  authorNameStyles,
} from './AuthorAvatarComponentStyles';
// May not need but will need to refactor styling with constants if I use this later, usually was with carousel
const AuthorAvatarComponent = ({ author }: Props) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const muiTheme = useTheme();

  const Img = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Grid>
      <Link
        to={`/author/${author?.author_id}`}
        style={avatarAuthorLinkStyles(darkTheme)}
      >
        <Img
          alt="Author avatar"
          src={author?.avatar_image}
          sx={avatarImageStyles(muiTheme, darkTheme)}
          referrerPolicy="no-referrer"
        />
        <Typography color="primary" sx={authorNameStyles(muiTheme)}>
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
