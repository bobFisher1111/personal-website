import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import HorizontalArticleInfoComponent from './horizontalArticleInfoComponent/HorizontalArticleInfoComponent';
import HorizontalArticlePageInfoComponent from './horizontalArticlePageInfoComponent/HorizontalArticlePageInfoComponent';
import {
  articlePageRoot,
  cardGrid,
  cardHorizontalArticleInfo,
  cardMediaArticleVideo,
  gridHorizontalArticleContainer,
  gridHorizontalArticleMaxWidth,
  imageHorizontalArticleStyles,
  typographyHorizontalArticleDate,
  typographyHorizontalArticleSubTitle,
  typographyHorizontalArticleTitle,
  titleStyle,
} from './HorizontalArticleCardComponentStyles';
import DisabledVideo from '../../../disabledVideo/DisabledVideo';
import { LinkStyles } from '../../../../util/styles/LinkStyles';

const HorizontalArticleCardComponent: React.FC<Props> = ({
  title,
  author,
  cardTextWidth,
  date,
  imageWidth,
  articlePage,
  articleSubTitle,
  useVideoInsteadOfImage,
  section,
  authorsId,
  articleId,
  videoOrImageCover,
  sectionLink,
  series,
  articlePageList,
  seriesId,
  mobileImageWidth,
  videoHeight,
  sectionType,
  turOnAuthorForArticle,
}) => {
  const [authorPage, setAuthorPage] = useState<boolean>();
  const [sectionPage, setSectionPage] = useState<boolean>();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const rejectCookie = useSelector((state: any) => state.rejectCookie);
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const muiTheme = useTheme();

  const getAuthorData = getWebsiteData?.authors?.filter((item: any) => item.author_id === authorsId);

  useEffect(() => {
    const currentLocation = window.location.href;
    setAuthorPage(currentLocation.includes('author'));
  }, []);

  useEffect(() => {
    const currentLocation = window.location.href;
    setSectionPage(currentLocation.includes(sectionLink));
  }, [rejectCookie.enabledYouTubeVideos]);

  const disableButton = () => localStorage.getItem('enableYouTubeVideo') !== null;

  return (
    <Grid
      container
      direction="row"
      justifyContent={!articlePage || articlePageList ? 'left' : 'center'}
      sx={gridHorizontalArticleContainer(muiTheme, articlePage, darkTheme, turOnAuthorForArticle)}
    >
      <Grid sx={gridHorizontalArticleMaxWidth(muiTheme, imageWidth, darkTheme, articlePage)}>
        {!useVideoInsteadOfImage ? (
          <Box
            component="img"
            alt="Article Cover Image"
            src={videoOrImageCover}
            sx={imageHorizontalArticleStyles(muiTheme, articlePage, mobileImageWidth)}
          />
        ) : disableButton() ? (
          <CardMedia
            component="iframe"
            image={videoOrImageCover}
            allowFullScreen
            sx={cardMediaArticleVideo(muiTheme, articlePage, videoHeight, mobileImageWidth)}
          />
        ) : (
          <DisabledVideo
            articlePage={articlePage}
            authorSectionArticlePage={false}
            youtubeUrl={videoOrImageCover}
            carousel={false}
          />
        )}

        {articlePage && (
          <Grid container justifyContent="flex-start" alignItems="center" sx={articlePageRoot(muiTheme)}>
            {section !== 'Stories' && (
              <Typography color="primary" sx={titleStyle(muiTheme)}>
                {title}
              </Typography>
            )}
            <HorizontalArticlePageInfoComponent
              getAuthorData={getAuthorData}
              authorsId={authorsId}
              author={author}
              date={date}
              section={section}
              articleId={articleId}
              series={series}
              justifyContent={series ? 'center' : 'flex-start'}
            />
          </Grid>
        )}
      </Grid>

      {!articlePage && (
        <Card sx={cardHorizontalArticleInfo(articlePageList)}>
          <Grid container direction="row" justifyContent="flex-start" alignItems="center" sx={cardGrid}>
            <Link
              to={`/article/${authorsId}/${articleId}`}
              reloadDocument
              style={LinkStyles(darkTheme)}
            >
              <Typography color="primary" sx={typographyHorizontalArticleTitle(muiTheme, articlePage)}>
                {title}
              </Typography>
              <Typography color="primary" sx={typographyHorizontalArticleSubTitle(muiTheme, articlePageList, cardTextWidth)}>
                {articleSubTitle}
              </Typography>
              <Typography color="primary" sx={typographyHorizontalArticleDate}>
                {date}
              </Typography>
            </Link>

            <HorizontalArticleInfoComponent
              section={section}
              authorsId={authorsId}
              articleId={articleId}
              authorPage={authorPage}
              aughtorsName={getAuthorData?.[0]?.author_name}
              sectionLink={sectionLink}
              sectionPage={sectionPage}
              series={series}
              seriesId={seriesId}
              sectionType={sectionType}
            />
          </Grid>
        </Card>
      )}
    </Grid>
  );
};

export type Props = {
  title?: string;
  author: string;
  cardTextWidth: string;
  date: string;
  imageWidth: string;
  articlePage: boolean;
  articleSubTitle?: string;
  titleFontSize?: string;
  useVideoInsteadOfImage: boolean;
  section: string;
  authorsId: string;
  articleId: string;
  videoOrImageCover: string;
  sectionLink: string;
  series?: boolean;
  articlePageList?: any;
  seriesId?: string;
  mobileImageWidth: string;
  videoHeight: boolean;
  sectionType?: string;
  turOnAuthorForArticle?: boolean;
};

export default HorizontalArticleCardComponent;
