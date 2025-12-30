import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Pause } from '@mui/icons-material';
import formatDate from '../../util/formatDate';
import AuthorAvatarComponent from '../authorAvatarComponent/AuthorAvatarComponent';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LinkStyles } from '../../util/styles/LinkStyles';
import {
  cardStyles,
  controlsStyles,
  desktopArticleSubTitleStyles,
  desktopArticleTitleStyles,
  desktopCardContentStyles,
  desktopCarouselPlayStyles,
  desktopDateStyles,
  desktopGridDateStyles,
  desktopGridRootStyles,
  desktopGridRootAvatarDateStyles,
  desktopImageStyles,
  mobileArticleTitleStyles,
  mobileCardSRootStyles,
  mobileCarouselPlayStyles,
  mobileGridDateStyles,
  mobileGridRootStyles,
  mobileGridRootAvatarDateStyles,
  mobileImageStyles,
  mobileSubtitleStyles,
} from './CarouselComponentStyles';

// Come back to this later if use and add styles to constans file
const Carousel = ({
  data,
  author,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const theme = useSelector((state: any) => state.theme.darkTheme);

  const returnLastFourArticles = (arr: number[]) => {
    if (arr?.length <= 4) {
      return arr;
    } else {
      return arr?.slice(-4).reverse();
    }
  };

  const carouselData: any[] = [];
  returnLastFourArticles(data)?.map((item: any) =>  item).sort((a: any, b: any) => {
    return b.article_id - a.article_id;
  }).map((item: any) => {
    author?.filter((x: any) => {
      if (x.author_id === item.author_id) {
        return carouselData.push({
          alt: 'article image', // add to database ********, for next release
          avatar_image: x.avatar_image,
          author_name: x.author_name,
          cover_image_or_video: item.cover_image_or_video,
          Date: formatDate(item.published_date),
          article_title: item.article_title,
          article_subtitle: item.article_subtitle,
          article_id: item.article_id,
          author_id: x.author_id,
          use_video_instead_of_image: item.use_video_instead_of_image,
          series: item.series_id !== null, // may need to verify this
          series_id: item.series_id,
        });
      }
    });
  });

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          return (prevIndex + 1) % 3; // Chnage back to 4, once starting, bug if there isn't 4
        });
      }, 10000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const nextArticle = () => {
    setCurrentIndex((currentIndex + 1) % 3); // Chnage back to 4, once starting, bug if there isn't 4
  };

  const prevArticle = () => {
    setCurrentIndex((currentIndex - 1 + 4) % 3); // Chnage back to 4, once starting, bug if there isn't 4
  };

  const pauseCarousel = () => {
    setIsPaused(!isPaused);
  };

  return (
    <Card 
      sx={cardStyles(theme)}
    >
      <Grid
        sx={mobileGridRootStyles}
      >
        <Grid
          container
          sx={mobileGridRootAvatarDateStyles}
        >
          <Grid
            size={8}
          >
            <AuthorAvatarComponent author={carouselData[currentIndex]} />
          </Grid>
          <Grid
            size={4}
            sx={mobileGridDateStyles}
          >
            <Typography
              component="div"
              color="primary"
            >
              {carouselData[currentIndex]?.Date} 
            </Typography>
          </Grid>
        </Grid>
        <Link
          to={`/article/${carouselData[currentIndex]?.author_id}/${carouselData[currentIndex]?.article_id}`}
          style={LinkStyles(theme)}
        >
          <CardMedia
            component="img"
            sx={mobileImageStyles(theme)}
            image={carouselData[currentIndex]?.cover_image_or_video}
            alt="Live from space album cover"
            referrerPolicy="no-referrer"
          />
        </Link>
        <CardContent
          sx={mobileCardSRootStyles}
        >
          <Link
            to={`/article/${carouselData[currentIndex]?.author_id}/${carouselData[currentIndex]?.article_id}`}
            style={LinkStyles(theme)}
          >
            <Typography
              component="div"
              variant="h5"
              color="primary"
              sx={mobileArticleTitleStyles}
            >
              {carouselData[currentIndex]?.article_title}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              color="primary"
              sx={mobileSubtitleStyles}
            >
              {carouselData[currentIndex]?.article_subtitle}
            </Typography>
          </Link>
        </CardContent>
        <Grid
          sx={mobileCarouselPlayStyles}
        >
          <Button
            onClick={prevArticle}
            color="primary"
          >
            <ArrowBackIosIcon fontSize="small" />
          </Button>
          <Button
            onClick={pauseCarousel}
            color="primary"
          >
            {isPaused ?
              <PlayArrowIcon fontSize="small" /> : <Pause fontSize="small" />
            }
          </Button>
          <Button
            onClick={nextArticle}
            color="primary"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        sx={desktopGridRootStyles}
      >
        <CardContent 
          sx={desktopCardContentStyles}
        >
          <Link
            to={`/article/${carouselData[currentIndex]?.author_id}/${carouselData[currentIndex]?.article_id}`}
            style={LinkStyles(theme)}
          >
            <Typography
              color="primary"
              component="div"
              variant="h5"
              sx={desktopArticleTitleStyles}
            >
              {carouselData[currentIndex]?.article_title}
            </Typography>
            <Typography
              color="primary"
              variant="subtitle1"
              component="div"
              sx={desktopArticleSubTitleStyles}
            >
              {carouselData[currentIndex]?.article_subtitle}
            </Typography>
          </Link>
        </CardContent>
        <Grid
          spacing={2}
          container
          sx={desktopGridRootAvatarDateStyles}
        >
          <AuthorAvatarComponent author={carouselData[currentIndex]} />
          <Grid
            sx={desktopGridDateStyles}
          >
            <Typography
              color="primary"
              component="div"
              sx={desktopDateStyles}
            >
              {carouselData[currentIndex]?.Date} 
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={desktopCarouselPlayStyles}
        >
          <Button
            onClick={prevArticle}
            color="primary"
          >
            <ArrowBackIosIcon sx={controlsStyles} fontSize="large" />
          </Button>
          <Button
            onClick={pauseCarousel}
            color="primary"
            sx={{height: '1px'}}
          >
            {isPaused ?
              <PlayArrowIcon sx={controlsStyles} fontSize="large" /> : <Pause sx={controlsStyles} fontSize="large" />
            }
          </Button>
          <Button
            onClick={nextArticle}
            color="primary"
          >
            <ArrowForwardIosIcon sx={controlsStyles} fontSize="large" />
          </Button>
        </Grid>
      </Grid>
      <Link
        to={`/article/${carouselData[currentIndex]?.author_id}/${carouselData[currentIndex]?.article_id}`}
        style={LinkStyles(theme)}
      >
        <CardMedia
          component="img"
          sx={desktopImageStyles(theme)}
          loading="lazy"
          image={carouselData[currentIndex]?.cover_image_or_video}
          alt="Live from space album cover"
          referrerPolicy="no-referrer"
        />
      </Link>
    </Card>
  );
};

export type Props = {
  data: any;
  author: any;
};

export default Carousel;
