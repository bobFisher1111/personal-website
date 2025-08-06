import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
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
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const [articlePage, setArticlePage] = useState<boolean>();
  const articleUrl = `${appBaseURL}/article/${articleData?.author_id}/${articleData?.article_id}`;
  const serieslUrl = `${appBaseURL}/series/${articleData?.series_id}`;
  const authorUrl = `${appBaseURL}/author/${articleData?.author_id}`;

  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/');
    const checkIfIncludesCurrentAricle = getIdFromCurrentLocation.includes(articleData?.article_id);
    setArticlePage(checkIfIncludesCurrentAricle);
  }, []);

  return (
    <div  
      style={DivVerticalArticleRoot()}
    >
      <Card
        sx={CardVerticalCard(theme)}
      >
        <Box
          sx={CardRootStyle}
        >
          {articleData?.use_video_instead_of_image ?
            <Link 
              to={series ? serieslUrl : articleUrl}
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
                  image={articleData?.cover_image_or_video || articleData?.series_cover_image_or_video}
                  allowFullScreen
                  sx={CardMediaVerticalCardVideo}
                />
              </Grid>
            </Link>
            :
            <Link 
              to={series ? serieslUrl : articleUrl}
              rel="noreferrer"
            >
              <CardMedia
                component="img"
                image={articleData?.cover_image_or_video || articleData?.series_cover_image_or_video}
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
                size={10}
              >
                {!articlePage ?
                  <Link 
                    to={series? authorUrl : articleUrl}
                    rel="noreferrer"
                    style={LinkStyles(theme)}
                  >
                    <Typography
                      color="secondary"
                      sx={TypographyVerticalCardNameStyleHover}
                    >
                      by {name}
                    </Typography>
                  </Link>
                  :
                  <Typography
                    color="secondary"
                    sx={TypographyVerticalCardNameStyle}
                  >
                    by {name}
                  </Typography>
                }           
              </Grid>
              <Grid 
                size={2}
                sx={GridPadding}
              >
                <CopyLinkComponent
                  authorsId={articleData?.author_id}
                  articleId={articleData?.article_id}
                  padding={'0px 0px 0px 0px'}
                  email={false}
                  seriesId={articleData?.series_id}
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
