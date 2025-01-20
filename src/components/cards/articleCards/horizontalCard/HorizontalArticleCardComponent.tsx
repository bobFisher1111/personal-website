import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import {
  Card,
  CardMedia,
  Box,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import HorizontalArticleInfoComponent from './horizontalArticleInfoComponent/HorizontalArticleInfoComponent';
import HorizontalArticlePageInfoComponent from './horizontalArticlePageInfoComponent/HorizontalArticlePageInfoComponent';
import {
  ArticlePageRoot,
  CardGrid,
  CardHorizontalArticleInfo,
  CardMedaiArticleVideo,
  GridHorizontalArticleContainer,
  GridHorizontalArticleMaxWidth,
  ImageHorizonatalArticleStyles,
  TypographyHorizontalArticleDate,
  TypographyHorizontalArticleSubTitle,
  TypographyHorizontalArticleTitle,
  TitleStyle,
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
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const getAuthorData = getWebsiteData && getWebsiteData?.websiteData?.authors?.filter((item: any) => {
    return item.authorId === authorsId;
  });
  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/');
    const checkIfIncludesAuthor = getIdFromCurrentLocation.includes('author');
    setAuthorPage(checkIfIncludesAuthor);
  }, []);

  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/');
    const checkIfIncludesSection = getIdFromCurrentLocation.includes(sectionLink);
    setSectionPage(checkIfIncludesSection);
  }, [rejectCookie.enabledYouTubeVideos]);

  const disableButton = () => {
    if (localStorage.getItem('enableYouTubeVideo') === null) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent={!articlePage || articlePageList ? 'left' : 'center'}
        sx={GridHorizontalArticleContainer(articlePage, theme, turOnAuthorForArticle)}
      >
        <Grid
          sx={GridHorizontalArticleMaxWidth(imageWidth, theme, articlePage)}
        >
          {!useVideoInsteadOfImage ?
            <Box
              component="img"
              alt="Article Cover Image"
              src={videoOrImageCover}
              sx={ImageHorizonatalArticleStyles(articlePage, mobileImageWidth)}
            />
            :
            disableButton() ? 
              <CardMedia
                component="iframe"
                image={videoOrImageCover}
                allowFullScreen
                sx={CardMedaiArticleVideo(articlePage, videoHeight, mobileImageWidth)}
              />
              :
              <DisabledVideo 
                articlePage={articlePage}
                authorSectionArticlePage={false}
                youtubeUrl={videoOrImageCover}
                carousel={false}
              />
          }
          {articlePage && 
            <Grid
              container
              justifyContent="flex-start"
              alignItems="center"
              sx={ArticlePageRoot}
            >
              {section !== 'Stories' &&
                <Typography
                  color="primary"
                  sx={TitleStyle}
                >
                  {title}
                </Typography>
              }
              {series ?
                <HorizontalArticlePageInfoComponent
                  getAuthorData={getAuthorData}
                  authorsId={authorsId}
                  author={author}
                  date={date}
                  sectionLink={sectionLink}
                  section={section}
                  articleId={articleId}
                  series={series}
                  justifyContent={'center'}
                />
                :
                <HorizontalArticlePageInfoComponent
                  getAuthorData={getAuthorData}
                  authorsId={authorsId}
                  author={author}
                  date={date}
                  sectionLink={sectionLink}
                  section={section}
                  articleId={articleId}
                  series={series}
                  justifyContent={'flex-start'}
                />
              }
            </Grid>
          }
        </Grid>
        {!articlePage && 
          <Card
            sx={CardHorizontalArticleInfo(articlePageList)}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              sx={CardGrid}
            >
              <Link
                to={`/article/${authorsId}/${articleId}`}
                reloadDocument={true}
                style={LinkStyles(theme)}
              >
                <Typography
                  color="primary"
                  sx={TypographyHorizontalArticleTitle(articlePage)}
                >
                  {title}
                </Typography>
                <Typography
                  color="primary"
                  sx={TypographyHorizontalArticleSubTitle(articlePageList, cardTextWidth)}
                >
                  {articleSubTitle}
                </Typography>
                {!articlePage &&
                  <Typography
                    color="primary"
                    sx={TypographyHorizontalArticleDate}
                  >
                    {date}
                  </Typography>
                }
              </Link>
              <HorizontalArticleInfoComponent
                section={section}
                authorsId={authorsId}
                articleId={articleId}
                authorPage={authorPage}
                aughtorsName={getAuthorData[0]?.authorName}
                sectionLink={sectionLink}
                sectionPage={sectionPage}
                series={series}
                seriesId={seriesId}
                sectionType={sectionType}
              />
            </Grid>
          </Card>
        }
      </Grid>
    </div>
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
