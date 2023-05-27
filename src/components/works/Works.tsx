import React, { useEffect, useRef, useState } from 'react';
import { 
  Typography,
  CardMedia,  
  Grid,
  Link,
  Button,
} from '@mui/material/';

const Works: React.FC<Props> = ({
  bookTitle,
  bookYear,
  authorsPage,
  bookCover,
  buyBookLink,
  bookGenere,
  bookPlot,
  bookData,
  bookDataFromArtical,
}) => {
  const bookImageHeightRef = useRef<any>();
  const titleHeightRef = useRef<any>();
  const bookPlotHeightRef = useRef<any>();
  const articalExtraInfoRef = useRef<any>();
  const [artaicalPageExtraInfo, setArticalPageExtraInfo] = useState<number>(0)
  const [infoHeight, setInfoHeight] = useState<string>('');

  console.log('book data_',  bookDataFromArtical);

  useEffect(() => {
    if (titleHeightRef && titleHeightRef?.current && titleHeightRef?.current.clientHeight) {
      const titleHeight: number = titleHeightRef && titleHeightRef?.current?.clientHeight;
      const plotHieght: number = bookPlotHeightRef && bookPlotHeightRef?.current?.clientHeight;
      const bookHeight = bookImageHeightRef && bookImageHeightRef?.current?.clientHeight;
      const articalExtraInfo: number = articalExtraInfoRef && articalExtraInfoRef?.current?.clientHeight;
      setArticalPageExtraInfo(bookHeight - titleHeight - plotHieght - articalExtraInfo)
      const bottomHeight = artaicalPageExtraInfo.toString();
      console.log('artaicalPageExtraInfo', articalExtraInfo);
      const bottomHPixel = bottomHeight + 'px';
      setInfoHeight(bottomHPixel);
    }
  }, [infoHeight]);

  console.log('extraInfo', infoHeight);

  const articalPageBookExtrainfo = (item: any, bottomHeight: string) => {
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
              href={item.buy}
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
            <Typography
              color="#667A6E"
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
          color="#2F4C69"
          variant="h6"
          sx={{
            padding: authorsPage ? '' : '16px',
          }}
        >
          Author Book's
        </Typography>
      </Grid>
    </Grid>
    { (bookDataFromArtical || bookData)?.map((item: any) => (
    <Grid 
      container
      sx={{
        padding: authorsPage ? '0px 24px' : '0px 0px 8px 24px',
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
            width: '100px'// '55px'
        }}
      >
        <Button
          href={item.buy}
        >
          <CardMedia
            ref={bookImageHeightRef}
            component="img"
            image={item.bookCoverSmall}
            sx={{
              width: authorsPage ? "148px" : "55px",
              height: authorsPage ? "235px" : "85px",
            }}
          />
        </Button>
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
          color="#667A6E"
          ref={titleHeightRef}
          variant="h6"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {item.bookTitle}
        </Typography>
      
        {authorsPage &&
          <Typography
            color="#2F4C69"
            ref={bookPlotHeightRef}
            variant="subtitle1"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {item.bookSubtitle}
          </Typography>
        }
        {authorsPage ?
            articalPageBookExtrainfo(item, infoHeight)
         :
         <Typography
           color="#2F4C69"
           sx={{
            padding: authorsPage ? '0px' : '22px 0px 0px 0px',
          }}
         >
          {item.year}
        </Typography>
        }
      </Grid>
    </Grid>
    ))}
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
  bookData?: any;
  bookDataFromArtical?: any;
};

export default Works;
