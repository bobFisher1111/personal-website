import { useRef } from 'react';
import {
  Button,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import {
  WorksGridRootTitle,
  WorksTitle,
  WorksGridRoot,
  WorksCoverImage,
  WorksGridCover,
  WorksGridInfo,
  WorksInfoTitle,
  WorksInfoSubTitle,
} from './WorksStyle';
import ComingSoon from 'src/components/comingSoon/ComingSoon';
// Currently not really being used but may use later for authors page or article page
const Works = ({
  bookData,
}: Props) => {
  const bookImageHeightRef = useRef<any>(null);
  const titleHeightRef = useRef<any>(null);
  const bookPlotHeightRef = useRef<any>(null);

  const noBooks = bookData?.length === 0;
  return (
    <>
      <Grid
        container
        sx={WorksGridRootTitle}
      >
        <Grid 
          size={12}
        >
          <Typography
            color="primary"
            sx={WorksTitle}
          >
            {"Author Books"}
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
          sx={WorksGridRoot}
        >
          <Grid
            size={{
              xs: 5,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 1,
            }}
            sx={WorksGridCover}
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
                sx={WorksCoverImage}
                referrerPolicy="no-referrer"
              />
            </Button>
          </Grid>
          <Grid
            size={{
              xs: 7,
              sm: 8,
              md: 8,
              lg: 8,
              xl: 8,
            }}
            sx={WorksGridInfo}
          >
            <Typography
              color="primary"
              ref={titleHeightRef}
              sx={WorksInfoTitle}
            >
              {item.bookTitle}
            </Typography>
            <Typography
              color="primary"
              ref={bookPlotHeightRef}
              variant="subtitle1"
              sx={WorksInfoSubTitle}
            >
              {item.bookSubtitle}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export type Props = {
  bookData?: any;
};

export default Works;
