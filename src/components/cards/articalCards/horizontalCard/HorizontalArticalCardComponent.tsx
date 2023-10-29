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
import HorizontalArticalInfoComponent from './horizontalArticalInfoComponent/HorizontalArticalInfoComponent';
import HorizontalArticalPageInfoComponent from './horizontalArticalPageInfoComponent/HorizontalArticalPageInfoComponent';
import {
  CardHorizontalArticalInfo,
  CardMedaiArticalVideo,
  GridHorizontalArticalContainer,
  GridHorizontalArticalMaxWidth,
  ImageHorizonatalArticalsStyles,
  TypographyHorizontalArticalDate,
  TypographyHorizontalArticalSubTitle,
  TypographyHorizontalArticalTitle,
} from './HorizontalArticalCardComponentStyles';
import { LinkStyles } from '../../../../util/styles/LinkStyles';

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
  series,
  articalPageList,
  seriesId,
  mobileImageWidth,
  videoHeight,
}) => {
  const [authorPage, setAuthorPage] = useState<boolean>();
  const [sectionPage, setSectionPage] = useState<boolean>();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const getAuthorData = getWebsiteData?.authors?.filter((item: any) => {
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
        justifyContent={!articalPage || articalPageList ? 'left' : 'center'}
        sx={GridHorizontalArticalContainer}
      >
        <Grid
          sx={GridHorizontalArticalMaxWidth(imageWidth)}
        >
          {!useVideoInsteadOfImage ?
            <Link 
              to={`/artical/${authorsId}/${articalId}`}
              reloadDocument={true}
              style={LinkStyles()}
            >
              <Box
                component="img"
                alt="Artical Cover Image"
                src={videoOrImageCover}
                sx={ImageHorizonatalArticalsStyles(articalPage, mobileImageWidth)}
              />
            </Link>
            :
            <CardMedia
              component="iframe"
              image={videoOrImageCover}
              allowFullScreen
              sx={CardMedaiArticalVideo(articalPage, videoHeight, mobileImageWidth)}
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
            sx={CardHorizontalArticalInfo(articalPageList)}
          >
            <Link 
              to={`/artical/${authorsId}/${articalId}`}
              reloadDocument={true}
              style={LinkStyles()}
            >
              {!articalPageList &&
                <Typography
                  sx={TypographyHorizontalArticalTitle(articalPage)}
                  color="#2F4C69"
                >
                  {title}
                </Typography>
              }
              <Typography
                sx={TypographyHorizontalArticalSubTitle(articalPageList, cardTextWidth)}
              >
                {articalSubTitle}
              </Typography>
              {!articalPage &&
                  <Typography
                    color="#76468c"
                    sx={TypographyHorizontalArticalDate}
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
};

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
  series?: boolean;
  articalPageList?: any;
  seriesId?: string;
  mobileImageWidth: string;
  videoHeight: boolean;
};
  
export default HorizontalArticalCardComponent;
