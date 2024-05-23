import React from 'react';
import { Link } from 'react-router-dom';
import {
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CopyLinkComponent from '../../../../copyLinkComponent/CopyLinkComponent';
import { LinkStyles } from '../../../../../util/styles/LinkStyles';
import {
  AvatarImageStyles,
  ChipStyle,
  GridArticleInfoComponent,
  HorizAriclePageInfoCompAuthor,
  HorizArticlePageInfoCompDate,
  TypographyArticleInfoRight,
  TypographyArticleInfoLeft,
} from './HorizontalArticlePageInfoComponentStyles';

const HorizontalArticlePageInfoComponent: React.FC<Props> = ({
  getAuthorData,
  authorsId,
  author,
  date,
  justifyContent,
  sectionLink,
  section,
  articleId,
  series,
}) => {
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
    <>
      <Grid 
        container 
        direction="row"
        justifyContent={justifyContent}
        sx={GridArticleInfoComponent}
      >
        <Link 
          to={`/author/${authorsId}`}
          style={LinkStyles()}
        >
          <Img
            alt="complex"
            src={getAuthorData && getAuthorData[0]?.avatarImage}
            sx={AvatarImageStyles}
          />
        </Link>
        <Link 
          to={`/author/${authorsId}`}
          style={LinkStyles()}
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
        <Link 
          to={`/${sectionLink}`}
          style={{
            textDecoration: 'none'
          }}
        >
          <Chip
            color="primary"
            label={section}
            variant="outlined"
            size="small"
            sx={ChipStyle}
          />
        </Link>
        <Typography
          color="primary"
          sx={TypographyArticleInfoLeft}
        >
          |
        </Typography>
        {series ? 
          <CopyLinkComponent
            seriesId={getSeriesIdFromUrl()}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
            turnOnSeries={true}
          />
          :
          <CopyLinkComponent
            authorsId={authorsId}
            articleId={articleId}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
          />
        }
      </Grid>
    </>
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
