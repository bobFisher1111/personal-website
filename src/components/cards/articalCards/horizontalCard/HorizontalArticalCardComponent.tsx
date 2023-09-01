import React, { useEffect, useState } from 'react';
import {
    Grid,
    CardMedia,
    Box,
  } from "@mui/material";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import HorizontalArticalInfoComponent from './HorizontalArticalInfoComponent';
import HorizontalArticalPageInfoComponent from './HorizontalArticalPageInfoComponent';
import { GridHorizontalArticalContainer, GridHorizontalArticalMaxWidth } from '../../../../styles/GridStyles';
import { ImageHorizonatalArticals } from '../../../../styles/ImageStyles';
import { CardMedaiArticalVideo } from '../../../../styles/CardMediaStyles';
import { CardHorizontalArticalInfo } from '../../../../styles/CardStyles';
import {
  TypographyHorizontalArticalTitle,
  TypographyHorizontalArticalSubTitle,
  TypographyHorizontalArticalDate,
} from '../../../../styles/TypographyStyles';
import { LinkStyles } from '../../../../styles/LinkStyles';

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
  // articalPage = true;
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

  console.log('what is articalPage', articalPage);

  return (
    <div>
      <GridHorizontalArticalContainer
        container
        direction="row"
        justifyContent={!articalPage || articalPageList ? 'left' : 'center'}
      >
        <GridHorizontalArticalMaxWidth
          imageWidth={imageWidth}
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
                sx={ImageHorizonatalArticals(articalPage, mobileImageWidth)}
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
        </GridHorizontalArticalMaxWidth>
        {!articalPage && 
          <CardHorizontalArticalInfo
            articalpagelist={articalPageList}
          >
            <Link 
                to={`/artical/${authorsId}/${articalId}`}
                reloadDocument={true}
                style={LinkStyles()}
              >
                {!articalPageList &&
                <TypographyHorizontalArticalTitle 
                  articalpage={articalPage}
                  color="#2F4C69"
                >
                  {title}
                </TypographyHorizontalArticalTitle>
                }
                <TypographyHorizontalArticalSubTitle 
                  articalpage={articalPageList}
                  cardtextwidth={cardTextWidth}
                  color="#667A6E"
                >
                  {articalSubTitle}
                </TypographyHorizontalArticalSubTitle>
                {!articalPage &&
                  <TypographyHorizontalArticalDate
                    color="#76468c"
                  >
                    {date}
                  </TypographyHorizontalArticalDate>
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
          </CardHorizontalArticalInfo>
        }
      </GridHorizontalArticalContainer>
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
  series?: boolean;
  articalPageList?: any;
  seriesId?: string;
  mobileImageWidth: string;
  videoHeight: boolean;
};
  
export default HorizontalArticalCardComponent;
