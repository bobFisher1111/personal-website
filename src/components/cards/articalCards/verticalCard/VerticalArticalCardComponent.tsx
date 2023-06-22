import React, { useState, useEffect } from 'react';
import {
  Typography,
  Card,
  CardMedia,
  Grid,
  Box,
  Link,
} from '@mui/material/';
import CopyLinkComponent from '../../../copyLinkComponent/CopyLinkComponent';

const VerticalArticalCardComponent: React.FC<Props> = ({
  name,
  articalData,
  seriesCopyLink,
  series,
}) => {
  const [articalPage, setArticalPage] = useState<boolean>();
  const articalUrl = `http://localhost:3000/artical/${articalData?.authorId}/${articalData?.articalId}`; // add first part to configFile
  const serieslUrl = `http://localhost:3000/series/${articalData?.seriesId}`; // add first part to configFile
  const authorUrl = `http://localhost:3000/author/${articalData?.authorId}`;
  console.log('articalData', authorUrl)

  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/");
    const checkIfIncludesCurrentArtical = getIdFromCurrentLocation.includes(articalData?.articalId);
    setArticalPage(checkIfIncludesCurrentArtical);
  }, []);

  return (
    <div
      style={{
        padding: '0px 0px 16px 0px',
      }}
    >
      <Card 
        sx={{
          minWidth: '345px',
          maxWidth: '345px',
          transition: 'transform .5s',
          '&::after': {
            posisition: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transition: 'opacity 2s cubic-bezier(.165, .84, .44, 1)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            opacity: 0,
            zIndex: -1,
          },
          '&:hover, &:focus': {
            transform: 'scale3d(1.006, 1.006, 2)',
            '&::after': {
              opacity: 1,
            }
          },
        }}
      >
        <Box 
          sx={{ 
            position: 'relative',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              color: 'white',
            }}
          >
            <Typography 
              variant="h6" 
              color="white"
              sx={{
                textShadow: 'black 2px 2px 2px',
                padding: '16px',
              }}
            >
              {articalData?.articalTitle}
            </Typography>
          </Box>
          {articalData?.useVideoInsteadOfImage ?
            <Link 
              href={series ? serieslUrl : articalUrl}
              // target="_blank"
              rel="noreferrer"
            >
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: '345px',
                  height: '400px',
                  background: '#2F4C69'
                }}
              >
                <CardMedia
                  component="iframe"
                  image={articalData?.coverImageOrVideo || articalData?.seriesCoverImageOrVideo}
                  allowFullScreen
                  style={{
                    border: '0px',
                    borderRadius: '7px',
                  }}
                />
              </Grid>
            </Link>
            :
            <Link 
                href={series ? serieslUrl : articalUrl}
                // target="_blank"
                rel="noreferrer"
              >
              <CardMedia
                component="img"
                height="400px"
                image={articalData?.coverImageOrVideo || articalData?.seriesCoverImageOrVideo}
              />
              </Link>
          }
          <Box
            sx={{ 
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              bgcolor: 'black',
              color: 'white',
              opacity: 0.70,
            }}
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
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      color="white"
                      sx={{ 
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                        padding: '16px',
                        "&:hover": {
                          color: "#667A6E",
                        },
                      }} 
                    >
                      by {name}
                    </Typography>
                  </Link>
                :
                  <Typography 
                    variant="subtitle1" 
                    color="white"
                    sx={{ 
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '1',
                      WebkitBoxOrient: 'vertical',
                      padding: '16px'
                    }} 
                  >
                    by {name}
                  </Typography>
                }           
              </Grid>
              <Grid 
                item 
                xs={2}
                sx={{
                  padding: '16px'
                }}
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
  )
};

export type Props = {
  name: string | undefined;
  articalData: any;
  seriesCopyLink?: string,
  series?: boolean,
};

export default VerticalArticalCardComponent;
