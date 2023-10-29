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
  DivVerticalArticalRoot,
  GridPadding,
  GridVeriticalCardVideo,
  TypographyVerticalCardNameStyle,
  TypographyVerticalCardNameStyleHover,
} from './VerticalArticalCardComponentStyles';

const VerticalArticalCardComponent: React.FC<Props> = ({
  name,
  articalData,
  series,
}) => {
  const [articalPage, setArticalPage] = useState<boolean>();
  const articalUrl = `${appBaseURL}/artical/${articalData?.authorId}/${articalData?.articalId}`;
  const serieslUrl = `${appBaseURL}/series/${articalData?.seriesId}`;
  const authorUrl = `${appBaseURL}/author/${articalData?.authorId}`;

  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/');
    const checkIfIncludesCurrentArtical = getIdFromCurrentLocation.includes(articalData?.articalId);
    setArticalPage(checkIfIncludesCurrentArtical);
  }, []);

  return (
    <div  
      style={DivVerticalArticalRoot()}
    >
      <Card
        sx={CardVerticalCard}
      >
        <Box
          sx={CardRootStyle}
        >
          {articalData?.useVideoInsteadOfImage ?
            <Link 
              href={series ? serieslUrl : articalUrl}
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
                  image={articalData?.coverImageOrVideo || articalData?.seriesCoverImageOrVideo}
                  allowFullScreen
                  sx={CardMediaVerticalCardVideo}
                />
              </Grid>
            </Link>
            :
            <Link 
              href={series ? serieslUrl : articalUrl}
              rel="noreferrer"
            >
              <CardMedia
                component="img"
                image={articalData?.coverImageOrVideo || articalData?.seriesCoverImageOrVideo}
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
                {!articalPage ?
                  <Link 
                    href={series? authorUrl : articalUrl}
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
                  authorsId={articalData?.authorId}
                  articalId={articalData?.articalId}
                  defaultColor={'#ffffff'}
                  padding={'0px 0px 0px 0px'}
                  email={false}
                  seriesId={articalData?.seriesId}
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
  articalData: any;
  series?: boolean,
};

export default VerticalArticalCardComponent;
