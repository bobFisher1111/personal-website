import React, { useEffect, useRef, useState } from 'react';
import { 
  Typography,
  CardMedia,  
  Grid,
  Link,
} from '@mui/material/';

const Works: React.FC<Props> = ({
  bookTitle,
  bookYear,
  authorsPage,
  bookCover,
  buyBookLink,
  bookGenere,
  bookPlot,
}) => {
  const bookImageHeightRef = useRef<any>();
  const titleHeightRef = useRef<any>();
  const bookPlotHeightRef = useRef<any>();
  const articalExtraInfoRef = useRef<any>();
  const [artaicalPageExtraInfo, setArticalPageExtraInfo] = useState<number>(0)
  const [extraInfo, setExtraInfo] = useState<string>('');

  useEffect(() => {
    if (titleHeightRef && titleHeightRef?.current && titleHeightRef?.current.clientHeight) {
      const titleHeight: number = titleHeightRef && titleHeightRef?.current?.clientHeight;
      const plotHieght: number = bookPlotHeightRef && bookPlotHeightRef?.current?.clientHeight;
      const bookHeight = bookImageHeightRef && bookImageHeightRef?.current?.clientHeight;
      const articalExtraInfo: number = articalExtraInfoRef && articalExtraInfoRef?.current?.clientHeight;
      setArticalPageExtraInfo(bookHeight - titleHeight - plotHieght - articalExtraInfo)
      const bottomHeight = artaicalPageExtraInfo.toString();
      const bottomHPixel = bottomHeight + 'px';
      setExtraInfo(bottomHPixel);
    }
  }, [extraInfo]);

  const articalPageBookExtrainfo = (bottomHeight: string) => {
    return (
        <Grid
          ref={articalExtraInfoRef}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          sx={{
            padding: `${bottomHeight} 0px 0px 0px`, // get the height form useRef
          }}
          
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
              href={buyBookLink}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },          
              }}
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
            <Typography>
              {bookGenere}
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
            <Typography>
              {bookYear}
            </Typography>
          </Grid>
        </Grid>

    );
  };

  return (
    <>
    <Grid
      container
      sx={{
        padding: authorsPage ? '32px 0px 16px 16px' : '0px',
      }}
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
          variant="h6"
        >
          Author Book's
        </Typography>
      </Grid>
    </Grid>
    <Grid 
      container
      sx={{
        padding: authorsPage ? '0px 24px' : '0px',
      }}
    >
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        sx={{
            padding: authorsPage ? '0px 160px 36px 0px' : '0px 65px 8px 0px',
            width:'55px'
        }}
      >
        <CardMedia
          component="img"
          image={bookCover}
          sx={{
            width: authorsPage ? "148px" : "55px",
            height: authorsPage ? "235px" : "85px",
          }}
        />
      </Grid>
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        sx={{
          padding: '0px 0px 0px 0px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {bookTitle}
        </Typography>
        {authorsPage &&
          <Typography
            variant="subtitle1"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
              color: 'grey',
            }}
          >
            {bookPlot}
          </Typography>
        }
        {authorsPage ?
            articalPageBookExtrainfo(extraInfo)
         :
         <Typography>
          {bookYear}
        </Typography>
        }
      </Grid>
      <Grid container>
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        sx={{
            padding: authorsPage ? '0px 160px 16px 0px' : '0px 65px 8px 0px',
            width:'55px'
          }}
      >
        <CardMedia
          ref={bookImageHeightRef}
          component="img"
          image={bookCover}
          sx={{
            width: authorsPage ? "148px" : "55px",
            height: authorsPage ? "235px" : "85px",
          }}
        />
      </Grid>
      <Grid
        item
        xs={8}
        sm={8}
        md={8}
        lg={8}
        xl={8}
        sx={{
          padding: '0px 0px 0px 0px',
        }}
      >
        <Typography
          ref={titleHeightRef}
          variant="h6"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {bookTitle}
        </Typography>
        {authorsPage &&
          <Typography
          ref={bookPlotHeightRef}
          variant="subtitle1"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            color: 'grey',
          }}
        >
          {bookPlot}
        </Typography>
        }
        {authorsPage ?
            articalPageBookExtrainfo(extraInfo)
         :
         <Typography>
          {bookYear}
        </Typography>
        }
      </Grid>
    </Grid>
    </Grid>
  </>
  );
}

export type Props = {
  bookTitle: string;
  bookYear: string;
  authorsPage?: boolean;
  bookCover?: string;
  bookPlot?: string;
  buyBookLink?: string;
  bookGenere?: string;
};

export default Works;
