import React, { useState, useEffect } from 'react';
import {
  Card,
  CardMedia,
  Grid,
  Link,
  Box,
  Typography,
} from '@mui/material/';
import { appBaseURL } from '../../../../config';
import CopyLinkComponent from '../../../copyLinkComponent/CopyLinkComponent';
import { LinkStyles } from '../../../../util/styles/LinkStyles';
import {
  CardMediaVerticalCardImage,
  CardMediaVerticalCardVideo,
  CardRootStyle,
  CardFooterStyle,
  CardVerticalCard,
  DivVerticalArticleRoot,
  GridPadding,
  GridVeriticalCardVideo,
  TypographyVerticalCardNameStyle,
  TypographyVerticalCardNameStyleHover,
} from './VerticalArticleCardComponentStyles';

const VerticalArticleCardComponent: React.FC<Props> = ({
  name,
  articleData,
  series,
}) => {
  const [articlePage, setArticlePage] = useState<boolean>();
  const articleUrl = `${appBaseURL}/article/${articleData?.authorId}/${articleData?.articleId}`;
  const serieslUrl = `${appBaseURL}/series/${articleData?.seriesId}`;
  const authorUrl = `${appBaseURL}/author/${articleData?.authorId}`;

  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/');
    const checkIfIncludesCurrentAricle = getIdFromCurrentLocation.includes(articleData?.articleId);
    setArticlePage(checkIfIncludesCurrentAricle);
  }, []);

  return (
    <div  
      style={DivVerticalArticleRoot()}
    >
      <Card
        sx={CardVerticalCard}
      >
        <Box
          sx={CardRootStyle}
        >
          {articleData?.useVideoInsteadOfImage ?
            <Link 
              href={series ? serieslUrl : articleUrl}
              rel="noreferrer"
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={GridVeriticalCardVideo}
              >
                <CardMedia
                  component="iframe"
                  image={articleData?.coverImageOrVideo || articleData?.seriesCoverImageOrVideo}
                  allowFullScreen
                  sx={CardMediaVerticalCardVideo}
                />
              </Grid>
            </Link>
            :
            <Link 
              href={series ? serieslUrl : articleUrl}
              rel="noreferrer"
            >
              <CardMedia
                component="img"
                image={articleData?.coverImageOrVideo || articleData?.seriesCoverImageOrVideo}
                sx={CardMediaVerticalCardImage}
              />
            </Link>
          }
          <Box
            sx={CardFooterStyle} 
          >
            <Grid 
              container
            >
              <Grid 
                item 
                xs={10}
                sm={10}
                md={10}
                lg={10}
                xl={10}
              >
                {!articlePage ?
                  <Link 
                    href={series? authorUrl : articleUrl}
                    rel="noreferrer"
                    sx={LinkStyles}
                  >
                    <Typography
                      sx={TypographyVerticalCardNameStyleHover}
                      // color="white"
                    >
                      by {name}
                    </Typography>
                  </Link>
                  :
                  <Typography 
                    sx={TypographyVerticalCardNameStyle}
                    // color="white"
                  >
                    by {name}
                  </Typography>
                }           
              </Grid>
              <Grid 
                item 
                xs={2}
                sx={GridPadding}
              >
                <CopyLinkComponent
                  authorsId={articleData?.authorId}
                  articleId={articleData?.articleId}
                  defaultColor={'#ffffff'}
                  padding={'0px 0px 0px 0px'}
                  email={false}
                  seriesId={articleData?.seriesId}
                  turnOnSeries={true}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export type Props = {
  name: string | undefined;
  articleData: any;
  series?: boolean,
};

export default VerticalArticleCardComponent;
