import React, { useEffect, useState } from 'react';
import {
    Typography,
    Grid,
    Box,
    Card,
    CardMedia,
  } from "@mui/material";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import HorizontalArticalInfoComponent from './HorizontalArticalInfoComponent';
import HorizontalArticalSubTextComponent from './HorizontalArticalSubTextComponent';
import HorizontalArticalPageInfoComponent from './HorizontalArticalPageInfoComponent';

const HorizontalArticalCardComponent: React.FC<Props> = ({
  title,
  author,
  cardTextWidth,
  date,
  imageWidth,
  articalPage,
  articalSubTitle,
  useVideoInsteadOfImage,
  section,
  authorsId,
  articalId,
  videoOrImageCover,
  sectionLink,
  turnOnSubTitle,
  series,
  articalPageList,
  seriesId,
}) => {
  const [authorPage, setAuthorPage] = useState<boolean>();
  const [sectionPage, setSectionPage] = useState<boolean>();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const getAuthorData = getWebsiteData?.authors?.filter((item: any) => {
    return item.authorId === authorsId;
  });

  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/");
    const checkIfIncludesAuthor = getIdFromCurrentLocation.includes('author');
    setAuthorPage(checkIfIncludesAuthor);
  }, []);

  useEffect(() => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/");
    const checkIfIncludesSection = getIdFromCurrentLocation.includes(sectionLink);
    setSectionPage(checkIfIncludesSection);
  }, []);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent={!articalPage || articalPageList ? 'left' : 'center'}
        sx={{
          width: '100%',
          background: '#fff',
          display: 'flex',
          margin: '0px 0px 16px 0px',
        }}
      >
        <Grid
          sx={{
            maxWidth: imageWidth,
          }}
        >
          {turnOnSubTitle && 
            <Grid
              container
              justifyContent="center"
              alignItems="center"
            >
              <HorizontalArticalSubTextComponent
                articalSubTitle={articalSubTitle}
              />
            </Grid>
          }
          {!useVideoInsteadOfImage ?
            <Link 
              to={`/artical/${authorsId}/${articalId}`}
              reloadDocument={true}
              style={{
                textDecoration: "none"
              }}
            >
              <Box
                component="img"
                sx={{
                  // maxWidth: '100%',
                  height: articalPage ? '576px' : '181px',
                  borderRadius: '7px',
                  aspectRatio: '16/9',
                  width: articalPage ? '960px' : '321px',
                }}
                alt="Artical Cover Image"
                src={videoOrImageCover}
              />
            </Link>
          :
            <CardMedia
              component="iframe"
              image={videoOrImageCover}
              allowFullScreen
              style={{
                width: articalPage ? '960px' : '321px',
                height: articalPage ? '576px' : '181px',
                border: '0px',
                borderRadius: '7px',
              }}
            />
          }
          {articalPage && 
            <Grid
              container
              justifyContent="center"
              alignItems="center"
            >
              <HorizontalArticalPageInfoComponent
                authorsId={authorsId}
                author={author}
                date={date}
                sectionLink={sectionLink}
                section={section}
                articalID={articalId}
                series={series}
              />
            </Grid>
          }
        </Grid>
        {!articalPage && 
          <Card
            sx={{ 
              maxWidth: '740px',
              backgroundColor: 'white',
              boxShadow: "none",
              padding: !articalPageList ? '4px 0px 0px 24px' : '',
            }}
          >
            <Link 
                to={`/artical/${authorsId}/${articalId}`}
                reloadDocument={true}
                style={{
                  textDecoration: "none"
                }}
              >
                {!articalPageList &&
                <Typography 
                  variant="body1"
                  color="#2F4C69" 
                  sx={{ 
                    fontSize: '20px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    fontFamily: 'sans-serif',
                    maxWidth: articalPage ? '960px' : '321px',
                  }} 
                  component="div"
                >
                  {title}
                </Typography>
                }
                <Typography 
                  variant="body1"
                  color="#667A6E" 
                  sx={{ 
                    fontSize: '16px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    fontFamily: 'sans-serif',
                    maxWidth: articalPageList ? '321px' : `${cardTextWidth} !important`,
                  }} 
                  component="div"
                >
                  {articalSubTitle}
                </Typography>
                {!articalPage &&
                  <Typography
                    variant="subtitle1"
                    color="#76468c"
                    component="div"
                    sx={{
                      fontSize: '14px',
                    }}
                  >
                    {date}
                  </Typography>
                }
              </Link>
                <HorizontalArticalInfoComponent
                  section={section}
                  authorsId={authorsId}
                  articalId={articalId}
                  authorPage={authorPage}
                  aughtorsName={getAuthorData[0]?.name}
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
}

export type Props = {
  title?: string;
  author: string;
  cardTextWidth: string;
  date: string;
  imageWidth: string;
  articalPage: boolean;
  articalSubTitle?: string;
  titleFontSize?: string;
  useVideoInsteadOfImage: boolean;
  section: string;
  articalData: any;
  authorsId: string;
  articalId: string;
  videoOrImageCover: string;
  sectionLink: string;
  turnOnSubTitle: boolean;
  series?: boolean;
  articalPageList?: boolean;
  seriesId?: string;
};
  
export default HorizontalArticalCardComponent;
