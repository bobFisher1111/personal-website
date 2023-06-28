import React, { useEffect, useRef, useState } from 'react';
import { 
  Typography,
  CardMedia,  
  Grid,
  Link,
  Button,
} from '@mui/material/';

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
  const [artaicalPageExtraInfo, setArticalPageExtraInfo] = useState<number>(0)
  const [infoHeight, setInfoHeight] = useState<string>('');

  useEffect(() => {
    if (titleHeightRef && titleHeightRef?.current && titleHeightRef?.current.clientHeight) {
      const titleHeight: number = titleHeightRef && titleHeightRef?.current?.clientHeight;
      const plotHieght: number = bookPlotHeightRef && bookPlotHeightRef?.current?.clientHeight;
      const bookHeight = bookImageHeightRef && bookImageHeightRef?.current?.clientHeight;
      const articalExtraInfo: number = articalExtraInfoRef && articalExtraInfoRef?.current?.clientHeight;
      setArticalPageExtraInfo(bookHeight - titleHeight - plotHieght - articalExtraInfo)
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
          sx={{
            padding: `${bottomHeight} 0px 0px 0px`,
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
          color={aboutWorks ? "#667A6E" : "#2F4C69"}
          variant="h6"
          sx={{
            padding: authorsPage ? '' : '16px',
          }}
        >
          {aboutWorks ? 'Favorite books' : "Author Book's"}
        </Typography>
      </Grid>
    </Grid>
    { bookData?.map((item: any) => (
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
            width: '100px'
        }}
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
            sx={{
              width: authorsPage ? "148px" : "55px",
              height: authorsPage ? "235px" : "85px",
            }}
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
        sx={{
          padding: '0px 0px 0px 8px',
        }}
      >
        <Typography
          color={aboutWorks ? "#2F4C69" : "#667A6E"}
          ref={titleHeightRef}
          // variant="h6"
          sx={{
            fontSize: aboutWorks ? "20px" : "20px",
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
            color={aboutWorks ? "#667A6E" : "#2F4C69"}
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
  authorsPage?: boolean;
  bookData?: any;
  aboutWorks?: boolean;
  articalPage?: boolean;
};

export default Works;
