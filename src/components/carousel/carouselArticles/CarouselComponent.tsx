import React, { useState, useEffect, FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  Grid,
  styled,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import formatDate from '../../../util/formatDate';
import CarouselArticles from './CarouselArticles';
import {
  AlignGridStyles,
  ArrowButtonGridStyles,
  ArrowButtonIconStyles,
  CarouselComponentGridStyles,
} from './CarouselComponentStyles';


const CarouselComponent: FC<Props> = ({
  author,
  articles,
}) => {
  const widthRef = useRef<any>();
  const [count, setCount] = useState<any>(0);
  const [marginWidth, setMarginWidth] = useState<any>(widthRef);
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const count1: string = count.toString();

  const updatedLeftMargin = () => {
    setMarginWidth(widthRef.current?.offsetLeft);
  };

  useEffect(() => {
    if (widthRef && widthRef.current) {
      setMarginWidth(widthRef.current.offsetLeft);
      window.addEventListener("resize", updatedLeftMargin);
    }
    return () => {
      if(widthRef && widthRef.current) {
        window.removeEventListener("resize", updatedLeftMargin);
      }
    };
  }, [marginWidth]);

  const AlignGrid = styled(Grid) ({
    justifyContent: 'flex-start',
    alignItems: "center",
    padding: '0px 16px 0px 16px',
    margin: 'auto',
    width: '1430px',
    maxWidth: '100%',
    '@media only screen and (max-width: 600px)': {
      padding: '0px',
    },
  });

  const asyncUpdateNext = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 10);
  };

  const asyncUpdatePrev = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 10);
  };

  useEffect(() => {
    if (count === 5) {
      setCount(1);
    }
    if (count === 0) {
      setCount(4);
    }
    if (count || theme) {
      document.getElementById(count1)?.scrollIntoView({ 
        behavior: "auto",
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [count, theme]);

  const carouselData: any = [];
  articles?.map((item: any) =>  item).sort((a: any, b: any) => {
    return b.articleId - a.articleId;
  }).map((item: any, index: number) => {
    author?.filter((x: any) => {
      if (x.authorId === item.authorId) {
        return carouselData.push({
          id: index,
          alt: 'article image', // add to database ********, for next release
          avatarImage: x.avatarImage,
          authorName: x.authorName,
          coverImageOrVideo: item.coverImageOrVideo,
          Date: formatDate(item.publishedDate),
          articleTitle: item.articleTitle,
          articleSubTitle: item.articleSubTitle,
          articleId: item.articleId,
          authorId: x.authorId,
          useVideoInsteadOfImage: item.useVideoInsteadOfImage,
          series: item.series,
          seriesId: item.seriesId,
        });
      }
    });
  });

  return (
    <AlignGrid
      id="Align Grid"
      container
      sx={AlignGridStyles}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={1}
        sx={ArrowButtonGridStyles}
      >
        <Button
          onClick={asyncUpdatePrev}
        >
          <ArrowBackIosIcon
            color={'primary'}
            sx={ArrowButtonIconStyles}
          />
        </Button>
      </Grid>
      <Grid
        className="carouselOne1"
        item
        xs={12}
        sm={10}
        md={10}
        lg={10}
        xl={10}
        container
        sx={CarouselComponentGridStyles}
      >
        {carouselData.map((item: any, index: any) => (
          <CarouselArticles key={index} data={item} />
        ))}
      </Grid> 
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={1}
        sx={ArrowButtonGridStyles}
      >
        <Button
          onClick={asyncUpdateNext}
        >
          <ArrowForwardIosIcon
            color="primary"
            sx={ArrowButtonIconStyles}
          />
        </Button>
      </Grid>
    </AlignGrid>
  );
};

export type Props = {
  author: any,
  articles: any,
};

export default CarouselComponent;
