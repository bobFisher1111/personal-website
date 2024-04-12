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
import ComingSoon from '../comingSoon/ComingSoon';

const Works: React.FC<Props> = ({
  authorsPage,
  bookData,
  aboutWorks,
  articlePage,
}) => {
  const bookImageHeightRef = useRef<any>();
  const titleHeightRef = useRef<any>();
  const bookPlotHeightRef = useRef<any>();
  const articleExtraInfoRef = useRef<any>();
  const [articlePageExtraInfo, setArticlePageExtraInfo] = useState<number>(0);
  const [infoHeight, setInfoHeight] = useState<string>('');

  useEffect(() => {
    if (titleHeightRef && titleHeightRef?.current && titleHeightRef?.current.clientHeight) {
      const titleHeight: number = titleHeightRef && titleHeightRef?.current?.clientHeight;
      const plotHieght: number = bookPlotHeightRef && bookPlotHeightRef?.current?.clientHeight;
      const bookHeight = bookImageHeightRef && bookImageHeightRef?.current?.clientHeight;
      const articleExtraInfo: number = articleExtraInfoRef && articleExtraInfoRef?.current?.clientHeight;
      setArticlePageExtraInfo(bookHeight - titleHeight - plotHieght - articleExtraInfo);
      const bottomHeight = articlePageExtraInfo.toString();
      const bottomHPixel = bottomHeight + 'px';
      setInfoHeight(bottomHPixel);
    }
  }, [infoHeight]);

  const noBooks = bookData?.length === 0;
  const articlePageBookExtrainfo = (item: any, bottomHeight: string) => {
    return (
      <Grid
        ref={articleExtraInfoRef}
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
            color="grey"
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
            color={aboutWorks ? '#667A6E' : '#0C0D0D'}
            sx={WorksTitle(authorsPage)}
          >
            {aboutWorks ? 'Favorite books' : 'Author Book\'s'}
          </Typography>
          {noBooks && 
            <ComingSoon />
          }
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
            xs={5}
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
                image={item.bookCoverLarge}
                sx={WorksCoverImage(authorsPage)}
              />
            </Button>
          </Grid>
          <Grid
            item
            xs={articlePage ? 6 : 7}
            sm={articlePage ? 6 : 8}
            md={articlePage ? 6 : 8}
            lg={articlePage ? 6 : 8}
            xl={articlePage ? 6 : 8}
            sx={WorksGridInfo}
          >
            <Typography
              color={aboutWorks ? '#2F4C69' : '#0C0D0D'}
              ref={titleHeightRef}
              sx={WorksInfoTitle(aboutWorks)}
            >
              {item.bookTitle}
            </Typography>
            {authorsPage &&
            <Typography
              color={aboutWorks ? '#667A6E' : '#0C0D0D'}
              ref={bookPlotHeightRef}
              variant="subtitle1"
              sx={WorksInfoSubTitle}
            >
              {item.bookSubtitle}
            </Typography>
            }
            {authorsPage ?
              articlePageBookExtrainfo(item, infoHeight)
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
  articlePage?: boolean;
};

export default Works;
