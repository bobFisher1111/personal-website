import React, { useEffect, useRef, useState } from 'react';
import { 
  Typography,
  CardMedia,  
  Grid,
  Link,
  Button,
} from '@mui/material/';
import {
  ArtPageBookExtraInfoGridRoot,
  ArtPageBookExtraInfoLinkBuy,
  ArtPageBookExtraInfoText,
  WorksGridRootTitle,
  WorksTitle,
  WorksGridRoot,
  WorksCoverImage,
  WorksGridCover,
  WorksGridInfo,
  WorksInfoTitle,
  WorksInfoSubTitle,
  WorksInfoDate,
} from './WorksStyle';

const Works: React.FC<Props> = ({
  authorsPage,
  bookData,
  aboutWorks,
  articalPage,
}) => {
  const bookImageHeightRef = useRef<any>();
  const titleHeightRef = useRef<any>();
  const bookPlotHeightRef = useRef<any>();
  const articalExtraInfoRef = useRef<any>();
  const [artaicalPageExtraInfo, setArticalPageExtraInfo] = useState<number>(0);
  const [infoHeight, setInfoHeight] = useState<string>('');

  useEffect(() => {
    if (titleHeightRef && titleHeightRef?.current && titleHeightRef?.current.clientHeight) {
      const titleHeight: number = titleHeightRef && titleHeightRef?.current?.clientHeight;
      const plotHieght: number = bookPlotHeightRef && bookPlotHeightRef?.current?.clientHeight;
      const bookHeight = bookImageHeightRef && bookImageHeightRef?.current?.clientHeight;
      const articalExtraInfo: number = articalExtraInfoRef && articalExtraInfoRef?.current?.clientHeight;
      setArticalPageExtraInfo(bookHeight - titleHeight - plotHieght - articalExtraInfo);
      const bottomHeight = artaicalPageExtraInfo.toString();
      const bottomHPixel = bottomHeight + 'px';
      setInfoHeight(bottomHPixel);
    }
  }, [infoHeight]);

  const articalPageBookExtrainfo = (item: any, bottomHeight: string) => {
    return (
      <Grid
        ref={articalExtraInfoRef}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-end"
        sx={ArtPageBookExtraInfoGridRoot(bottomHeight)}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Link 
            href={item.buy}
            underline="none"
            target="_blank"
            rel="noopener"
            sx={ArtPageBookExtraInfoLinkBuy}
          >
            Buy
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Typography
            color="#667A6E"
            sx={ArtPageBookExtraInfoText}
          >
            {item.genre}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Typography
            color="#2F4C69"
            sx={ArtPageBookExtraInfoText}
          >
            {item.year}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Grid
        container
        sx={WorksGridRootTitle(authorsPage)}
      >
        <Grid 
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Typography
            color={aboutWorks ? '#667A6E' : '#2F4C69'}
            sx={WorksTitle(authorsPage)}
          >
            {aboutWorks ? 'Favorite books' : 'Author Book\'s'}
          </Typography>
        </Grid>
      </Grid>
      {bookData?.map((item: any) => (
        <Grid 
          container
          key={item.id}
          sx={WorksGridRoot(authorsPage)}
        >
          <Grid
            item
            xs={1}
            sm={1}
            md={1}
            lg={1}
            xl={1}
            sx={WorksGridCover(authorsPage)}
          >
            <Button
              href={item.buy}
              target="_blank"
              rel="noreferrer"
            >
              <CardMedia
                ref={bookImageHeightRef}
                component="img"
                image={item.bookCoverSmall}
                sx={WorksCoverImage(authorsPage)}
              />
            </Button>
          </Grid>
          <Grid
            item
            xs={articalPage ? 6 : 8}
            sm={articalPage ? 6 : 8}
            md={articalPage ? 6 : 8}
            lg={articalPage ? 6 : 8}
            xl={articalPage ? 6 : 8}
            sx={WorksGridInfo}
          >
            <Typography
              color={aboutWorks ? '#2F4C69' : '#667A6E'}
              ref={titleHeightRef}
              sx={WorksInfoTitle(aboutWorks)}
            >
              {item.bookTitle}
            </Typography>
            {authorsPage &&
            <Typography
              color={aboutWorks ? '#667A6E' : '#2F4C69'}
              ref={bookPlotHeightRef}
              variant="subtitle1"
              sx={WorksInfoSubTitle}
            >
              {item.bookSubtitle}
            </Typography>
            }
            {authorsPage ?
              articalPageBookExtrainfo(item, infoHeight)
              :
              <Typography
                color="#2F4C69"
                sx={WorksInfoDate(authorsPage)}
              >
                {item.year}
              </Typography>
            }
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export type Props = {
  authorsPage?: boolean;
  bookData?: any;
  aboutWorks?: boolean;
  articalPage?: boolean;
};

export default Works;
