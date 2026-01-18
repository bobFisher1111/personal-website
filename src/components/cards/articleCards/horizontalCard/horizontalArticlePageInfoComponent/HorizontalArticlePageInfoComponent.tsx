import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Typography, useTheme, styled } from '@mui/material';
import { LinkStyles } from 'src/util/styles/LinkStyles';
import {
  avatarImageStyles,
  gridArticleInfoComponent,
  authorTextStyles,
  dateTextStyles,
  separatorStyles,
} from './HorizontalArticlePageInfoComponentStyles';

const HorizontalArticlePageInfoComponent = ({
  author,
  authorsId,
  date,
  getAuthorData,
  section,
}: Props) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const muiTheme = useTheme();

  const Img = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Grid container direction="row" justifyContent={'center'} sx={gridArticleInfoComponent(muiTheme)}>
      <Link to={`/author/${authorsId}`} style={LinkStyles(darkTheme)}>
        <Img
          alt="Author avatar"
          src={getAuthorData?.[0]?.avatar_image}
          sx={avatarImageStyles(muiTheme, darkTheme)}
          referrerPolicy="no-referrer"
        />
      </Link>

      <Link to={`/author/${authorsId}`} style={LinkStyles(darkTheme)}>
        <Typography color="primary" sx={authorTextStyles(muiTheme)}>
          {author}
        </Typography>
      </Link>

      <Typography color="primary" sx={separatorStyles}>|</Typography>

      <Typography color="primary" sx={dateTextStyles(muiTheme)}>
        {date}
      </Typography>

      <Typography color="primary" sx={separatorStyles}>|</Typography>

      <Typography color="primary" sx={authorTextStyles(muiTheme)}>
        {section}
      </Typography>
    </Grid>
  );
};

export type Props = {
  getAuthorData: any;
  authorsId: string;
  author: string;
  date: string;
  section: string;
};

export default HorizontalArticlePageInfoComponent;
