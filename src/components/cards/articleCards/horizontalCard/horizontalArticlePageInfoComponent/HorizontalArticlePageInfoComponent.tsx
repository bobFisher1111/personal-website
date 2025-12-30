import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Typography, useTheme, styled } from '@mui/material';
import CopyLinkComponent from '../../../../copyLinkComponent/CopyLinkComponent';
import { LinkStyles } from '../../../../../util/styles/LinkStyles';
import {
  avatarImageStyles,
  gridArticleInfoComponent,
  authorTextStyles,
  dateTextStyles,
  separatorStyles,
} from './HorizontalArticlePageInfoComponentStyles';

const HorizontalArticlePageInfoComponent = ({
  getAuthorData,
  authorsId,
  author,
  date,
  justifyContent,
  section,
  articleId,
  series,
}: Props) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const muiTheme = useTheme();

  const Img = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    return currentLocation.split('/').reverse()[0];
  };

  return (
    <Grid container direction="row" justifyContent={justifyContent} sx={gridArticleInfoComponent(muiTheme)}>
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

      <Typography color="primary" sx={separatorStyles}>|</Typography>

      {series ? (
        <CopyLinkComponent
          seriesId={getSeriesIdFromUrl()}
          padding="0px 0px 0px 16px"
          email={false}
          turnOnSeries={true}
        />
      ) : (
        <CopyLinkComponent
          authorsId={authorsId}
          articleId={articleId}
          padding="0px 0px 0px 16px"
          email={false}
        />
      )}
    </Grid>
  );
};

export type Props = {
  getAuthorData: any;
  authorsId: string;
  author: string;
  date: string;
  section: string;
  articleId: string;
  series?: boolean;
  justifyContent: string;
};

export default HorizontalArticlePageInfoComponent;
