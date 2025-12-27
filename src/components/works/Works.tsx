import React, { useRef, useState } from 'react';
import {
  Button,
  CardMedia,
  Grid,
  Link,
  Typography
} from '@mui/material';
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
// Currently not really being used but may use later for authors page or article page
const Works: React.FC<Props> = ({
  authorsPage,
  bookData,
  aboutWorks,
  articlePage,
}) => {
  const bookImageHeightRef = useRef<any>(null);
  const titleHeightRef = useRef<any>(null);
  const bookPlotHeightRef = useRef<any>(null);
  const articleExtraInfoRef = useRef<any>(null);
  const [articlePageExtraInfo, setArticlePageExtraInfo] = useState<number>(0);
  const [infoHeight, setInfoHeight] = useState<string>('');

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
          size={12}
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
          size={12}
        >
          <Typography
            color="primary"
            sx={ArtPageBookExtraInfoText}
          >
            {item.genre}
          </Typography>
        </Grid>
        <Grid
          size={12}
        >
          <Typography
            color="primary"
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
          size={12}
        >
          <Typography
            color="primary"
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
            size={{
              xs: 5,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
            }}
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
                referrerPolicy="no-referrer"
              />
            </Button>
          </Grid>
          <Grid
            size={{
              xs: articlePage ? 6 : 7,
              sm: articlePage ? 6 : 8,
              md: articlePage ? 6 : 8,
              lg: articlePage ? 6 : 8,
              xl: articlePage ? 6 : 8,
            }}
            sx={WorksGridInfo}
          >
            <Typography
              color="primary"
              ref={titleHeightRef}
              sx={WorksInfoTitle(aboutWorks)}
            >
              {item.bookTitle}
            </Typography>
            {authorsPage &&
            <Typography
              color="primary"
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
                color="primary"
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
