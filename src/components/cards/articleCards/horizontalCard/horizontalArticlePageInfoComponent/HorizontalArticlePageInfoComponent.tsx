import React from 'react';
import Grid from '@mui/material/Grid2';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CopyLinkComponent from '../../../../copyLinkComponent/CopyLinkComponent';
import { LinkStyles } from '../../../../../util/styles/LinkStyles';
import {
  AvatarImageStyles,
  GridArticleInfoComponent,
  HorizAriclePageInfoCompAuthor,
  HorizArticlePageInfoCompDate,
  TypographyArticleInfoRight,
} from './HorizontalArticlePageInfoComponentStyles';

const HorizontalArticlePageInfoComponent: React.FC<Props> = ({
  getAuthorData,
  authorsId,
  author,
  date,
  justifyContent,
  section,
  articleId,
  series,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    const seriesId = currentLocation.split('/').reverse()[0];
    return (seriesId);
  };

  const Img = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Grid 
      container 
      direction="row"
      justifyContent={justifyContent}
      sx={GridArticleInfoComponent}
    >
      <Link 
        to={`/author/${authorsId}`}
        style={LinkStyles(theme)}
      >
        <Img
          alt="complex"
          src={getAuthorData && getAuthorData[0]?.avatarImage}
          sx={AvatarImageStyles(theme)}
        />
      </Link>
      <Link 
        to={`/author/${authorsId}`}
        style={LinkStyles(theme)}
      >
        <Typography
          color="primary"
          sx={HorizAriclePageInfoCompAuthor}
        >
          {author} 
        </Typography>
      </Link>
      <Typography
        color="primary"
        sx={TypographyArticleInfoRight}
      >
        |
      </Typography>
      <Typography
        color="primary"
        sx={HorizArticlePageInfoCompDate}
      >
        {date}
      </Typography>
      <Typography
        color="primary"
        sx={TypographyArticleInfoRight}
      >
        |
      </Typography>
      <Typography
        color="primary"
        sx={HorizAriclePageInfoCompAuthor}
      >
        {section}
      </Typography>
      <Typography
        color="primary"
      >
        |
      </Typography>
      {series ? 
        <CopyLinkComponent
          seriesId={getSeriesIdFromUrl()}
          padding={'0px 0px 0px 16px'}
          email={false}
          turnOnSeries={true}
        />
        :
        <CopyLinkComponent
          authorsId={authorsId}
          articleId={articleId}
          padding={'0px 0px 0px 16px'}
          email={false}
        />
      }
    </Grid>
  );
};

export type Props = {
  getAuthorData: any;
  authorsId: string;
  author: string;
  date: string;
  sectionLink: string;
  section: string;
  articleId: string;
  series: boolean | undefined;
  justifyContent: string;
};

export default HorizontalArticlePageInfoComponent;
