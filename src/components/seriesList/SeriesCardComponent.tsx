import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  Grid,
  Box,
  Typography,
} from '@mui/material/';
import { appBaseURL } from '../../config';
import { LinkStyles } from '../../util/styles/LinkStyles';
import {
  CardMediaVerticalCardImage,
  CardMediaVerticalCardVideo,
  CardRootStyle,
  CardFooterStyle,
  CardVerticalCard,
  DivVerticalArticleRoot,
  GridVeriticalCardVideo,
  TypographyVerticalCardNameStyleHover,
} from './SeriesCardStyles';

const SeriesCardComponent: React.FC<Props> = ({
  articleData,
  series,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const articleUrl = `${appBaseURL}/article/${articleData?.authorId}/${articleData?.articleId}`;
  const serieslUrl = `${appBaseURL}/series/${articleData?.seriesId}`;

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
          {articleData?.useVideoInsteadOfImage ?
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
                  image={articleData?.seriesCoverImageOrVideo}
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
                <Link 
                  to={series ? serieslUrl : articleUrl}
                  rel="noreferrer"
                  style={LinkStyles(theme)}
                >
                  <Typography
                    color="secondary"
                    sx={TypographyVerticalCardNameStyleHover}
                  >
                    {articleData?.seriesTitle}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export type Props = {
  articleData: any;
  series?: boolean,
};

export default SeriesCardComponent;
