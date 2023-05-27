import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardMedia,
  Grid,
  Box,
  Link,
} from '@mui/material/';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import copyLink from '../../../utilities/copyLink';

const FullArticalCard: React.FC<Props> = ({
  name,
  articalData,
}) => {
  const [copyIconColor, setCopyIconColor] = useState<string>('#ffffff');
  const articalUrl = `http://localhost:3000/artical/${articalData?.authorId}/${articalData?.articalId}` // add first part to configFile
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
              href={articalUrl}
              target="_blank"
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
                  image={articalData?.coverImageOrVideo}
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
                href={articalUrl}
                target="_blank"
                rel="noreferrer"
              >
              <CardMedia
                component="img"
                height="400px"
                image={articalData?.coverImageOrVideo}
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
            </Grid>
            <Grid 
              item 
              xs={2}
              sx={{
                padding: '16px'
              }}
            >
              <ContentCopyIcon
                onClick={() => copyLink(setCopyIconColor, articalUrl)}
                sx={{
                  color: copyIconColor,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  </div>
);}

export type Props = {
  name: string | undefined;
  articalData: any;
};

export default FullArticalCard;
