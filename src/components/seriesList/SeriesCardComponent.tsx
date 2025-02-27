import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import {
  Card,
  CardMedia,
  Box,
  Typography,
} from '@mui/material/';
import Grid from '@mui/material/Grid2';
import { appBaseURL } from '../../config';
import { LinkStyles } from '../../util/styles/LinkStyles';
import {
  CardMediaVerticalCardImage,
  CardRootStyle,
  CardFooterStyle,
  CardVerticalCard,
  DivVerticalArticleRoot,
  TypographyVerticalCardNameStyleHover,
} from './SeriesCardStyles';

const SeriesCardComponent: React.FC<Props> = ({
  articleData,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
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
          <Link 
            to={serieslUrl}
            rel="noreferrer"
          >
            <CardMedia
              aria-label={`Series ${articleData?.seriesTitle} Image`}
              component="img"
              image={articleData?.coverImageOrVideo || articleData?.seriesCoverImageOrVideo}
              sx={CardMediaVerticalCardImage}
            />
          </Link>
          <Box
            sx={CardFooterStyle} 
          >
            <Grid 
              container
            >
              <Grid 
                size={12}
              >
                <Link 
                  to={serieslUrl}
                  rel="noreferrer"
                  style={LinkStyles(theme)}
                >
                  <Typography
                    sx={TypographyVerticalCardNameStyleHover(theme)}
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
};

export default SeriesCardComponent;
