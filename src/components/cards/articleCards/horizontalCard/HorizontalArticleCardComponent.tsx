import React, { useEffect, useState } from 'react';
import {
  Card,
  Grid,
  CardMedia,
  Box,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HorizontalArticleInfoComponent from './horizontalArticleInfoComponent/HorizontalArticleInfoComponent';
import HorizontalArticlePageInfoComponent from './horizontalArticlePageInfoComponent/HorizontalArticlePageInfoComponent';
import {
  CardHorizontalArticleInfo,
  CardMedaiArticleVideo,
  GridHorizontalArticleContainer,
  GridHorizontalArticleMaxWidth,
  ImageHorizonatalArticleStyles,
  TypographyHorizontalArticleDate,
  TypographyHorizontalArticleSubTitle,
  TypographyHorizontalArticleTitle,
} from './HorizontalArticleCardComponentStyles';
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
}) => {
  const [authorPage, setAuthorPage] = useState<boolean>();
  const [sectionPage, setSectionPage] = useState<boolean>();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
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
  }, []);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent={!articlePage || articlePageList ? 'left' : 'center'}
        sx={GridHorizontalArticleContainer}
      >
        <Grid
          sx={GridHorizontalArticleMaxWidth(imageWidth)}
        >
          {!useVideoInsteadOfImage ?
            <Link 
              to={`/article/${authorsId}/${articleId}`}
              reloadDocument={true}
              style={LinkStyles()}
            >
              <Box
                // series
                component="img"
                alt="Article Cover Image"
                // imageProps={{ referrerPolicy: "no-referrer" }}
                // style={{height:'100%', width:'100%'}}
                src={videoOrImageCover}
                sx={ImageHorizonatalArticleStyles(articlePage, mobileImageWidth)}
              />
              {/* <Box
                // sx={ImageHorizonatalArticalsStyles(articalPage, mobileImageWidth)}
              >
                <img
                  alt="Artical Cover Image"
                  src={videoOrImageCover}
                />
              </Box> */}
            </Link>
            :
            <CardMedia
              component="iframe"
              image={videoOrImageCover}
              allowFullScreen
              sx={CardMedaiArticleVideo(articlePage, videoHeight, mobileImageWidth)}
            />
          }
          {articlePage && 
            <Grid
              container
              justifyContent="center"
              alignItems="center"
            >
              <HorizontalArticlePageInfoComponent
                authorsId={authorsId}
                author={author}
                date={date}
                sectionLink={sectionLink}
                section={section}
                articleId={articleId}
                series={series}
              />
            </Grid>
          }
        </Grid>
        {!articlePage && 
          <Card
            sx={CardHorizontalArticleInfo(articlePageList)}
          >
            <Link 
              to={`/article/${authorsId}/${articleId}`}
              reloadDocument={true}
              style={LinkStyles()}
            >
              {!articlePageList &&
                <Typography
                  sx={TypographyHorizontalArticleTitle(articlePage)}
                  color="#2F4C69"
                >
                  {title}
                </Typography>
              }
              <Typography
                sx={TypographyHorizontalArticleSubTitle(articlePageList, cardTextWidth)}
              >
                {articleSubTitle}
              </Typography>
              {!articlePage &&
                  <Typography
                    color="#76468c"
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
            />
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
};
  
export default HorizontalArticleCardComponent;
