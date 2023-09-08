import React, { useState, useEffect } from 'react';
import {
  CardMedia,
  Grid,
  Link,
  Box,
} from '@mui/material/';
import { appBaseURL } from '../../../../config';
import CopyLinkComponent from '../../../copyLinkComponent/CopyLinkComponent';
import { DivVerticalArticalRoot } from '../../../../styles/DivStyles';
import { CardVerticalCard } from '../../../../styles/CardStyles';
import {
  TypographyVerticalCardNameStyleHover,
  TypographyVerticalCardNameStyle,
} from '../../../../styles/TypographyStyles';
import { GridVeriticalCardVideo, GridPadding } from '../../../../styles/GridStyles';
import { CardMediaVerticalCardVideo, CardMediaVerticalCardImage } from '../../../../styles/CardMediaStyles';
import { LinkStyles } from '../../../../styles/LinkStyles';
import { 
  CardRootStyle,
  CardFooterStyle,
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
    const getIdFromCurrentLocation = currentLocation.split("/");
    const checkIfIncludesCurrentArtical = getIdFromCurrentLocation.includes(articalData?.articalId);
    setArticalPage(checkIfIncludesCurrentArtical);
  }, []);

  return (
    <div  
      style={DivVerticalArticalRoot()}
    >
      <CardVerticalCard>
        <Box
          sx={CardRootStyle}
        >
          {articalData?.useVideoInsteadOfImage ?
            <Link 
              href={series ? serieslUrl : articalUrl}
              rel="noreferrer"
            >
              <GridVeriticalCardVideo
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <CardMedia
                  component="iframe"
                  image={articalData?.coverImageOrVideo || articalData?.seriesCoverImageOrVideo}
                  allowFullScreen
                  sx={CardMediaVerticalCardVideo}
                />
              </GridVeriticalCardVideo>
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
                    <TypographyVerticalCardNameStyleHover 
                      color="white"
                    >
                      by {name}
                    </TypographyVerticalCardNameStyleHover>
                  </Link>
                :
                  <TypographyVerticalCardNameStyle 
                    color="white"
                  >
                    by {name}
                  </TypographyVerticalCardNameStyle>
                }           
              </Grid>
              <GridPadding 
                item 
                xs={2}
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
              </GridPadding>
            </Grid>
          </Box>
        </Box>
      </CardVerticalCard>
    </div>
  )
};

export type Props = {
  name: string | undefined;
  articalData: any;
  series?: boolean,
};

export default VerticalArticalCardComponent;
