import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import ArticleList from '../articleList/ArticleList';
import {
  GridAlignItems,
  GridRoot,
  HomePageImage,
  LatestTextStyles,
  SectionNotSelectedStyles,
  SectionSelectedStyles,
  SeriesIconStyles,
  SeriesButtonStyles,
  SeriesGridStyles,
  SeriesTextStyles,
} from './HomePageComponentStyles';
import CarouselComponent from '../carousel/carouselArticles/CarouselComponent';
import SeriesComponent from '../seriesList/SeriesComponent';

const HomePageComponent: React.FC = () => {
  const [numOfSeriesDisplayed, SetNumOfSeriesDisplayed] = useState<number>(4);
  const [seriesExpanded, SetSeriesExpanded] = useState<boolean>(false);
  const [sectionSelect, setSectionSelect] = useState<number>(1);
  const [defaultSectionStyle, setDefualtSectionStyle] = useState<any>({
    marginRight: '8px',
    padding: '4px',
  });
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.websiteData?.articles;
  const authorsData = getWebsiteData && getWebsiteData?.websiteData?.authors;
  const seriesData = getWebsiteData && getWebsiteData?.websiteData?.series;
  const [articles, setArticles] = useState<any>();
  const [author,] = useState<any>(authorsData);
  const articlesData = articles === undefined ? articleData : articles;
  const reviewsFilter = articleData?.filter((item: any) => {
    return item.sections === 'Reviews';
  });
  const gamingFilter = articleData?.filter((item: any) => {
    return item.sections === 'Video Games';
  });
  const codingFilter = articleData?.filter((item: any) => {
    return item.sections === 'Coding';
  });
  const storiesFilter = articleData?.filter((item: any) => {
    return item.sections === 'Stories';
  });

  useEffect(() => {
    if (sectionSelect === 1) {
      return setArticles(articleData);
    }
    if (sectionSelect === 2) {
      setDefualtSectionStyle(SectionSelectedStyles);
      return setArticles(reviewsFilter);
    }
    if (sectionSelect === 3) {
      setDefualtSectionStyle(SectionSelectedStyles);
      return setArticles(gamingFilter);
    }
    if (sectionSelect === 4) {
      setDefualtSectionStyle(SectionSelectedStyles);
      return setArticles(codingFilter);
    }
    if (sectionSelect === 5) {
      setDefualtSectionStyle(SectionSelectedStyles);
      return setArticles(storiesFilter);
    }
  }, [sectionSelect]);

  return (
    <Grid
      container
      sx={GridRoot}
    >
      <Grid
        item
        container
        justifyContent='center'
        alignItems="center"
        sx={SeriesGridStyles}
      >
        <Typography
          id="All_Button"
          onClick={() => setSectionSelect(1)}
          sx={(sectionSelect === 1) ? SectionSelectedStyles : SectionNotSelectedStyles}
        >
          ALL
        </Typography>
        <Typography
          id="Reviews_Button"
          onClick={() => setSectionSelect(2)}
          sx={(sectionSelect === 2) ? defaultSectionStyle : SectionNotSelectedStyles}
        >
          Reviews
        </Typography>
        <Typography
          id="Gaming_Button"
          onClick={() => setSectionSelect(3)}
          sx={(sectionSelect === 3) ? defaultSectionStyle : SectionNotSelectedStyles}
        >
          Gaming
        </Typography>
        <Typography
          id="Coding_Button"
          onClick={() => setSectionSelect(4)}
          sx={(sectionSelect === 4) ? defaultSectionStyle : SectionNotSelectedStyles}
        >
          Coding
        </Typography>
        <Typography
          id="Stories_Button"
          onClick={() => setSectionSelect(5)}
          sx={(sectionSelect === 5) ? defaultSectionStyle : SectionNotSelectedStyles}
        >
          Stories
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent='center'
        alignItems="center"
        sx={HomePageImage}
      >
        <CarouselComponent author={authorsData} articles={articleData} />
      </Grid>
      <Grid
        item
        container
        justifyContent='flex-start'
        alignItems="center"
        sx={GridAlignItems}
      >
        <Grid
          item
          xs={12}
        >
          <Button
            sx={SeriesButtonStyles}
          >
            <Typography
              color="primary"
              sx={SeriesTextStyles}
            >
              Series 
            </Typography>
            {!seriesExpanded ? 
              <AddIcon
                onClick={() => {
                  SetNumOfSeriesDisplayed(seriesData.length);
                  return SetSeriesExpanded(true);
                }}
                sx={SeriesIconStyles}
              /> 
              : 
              <RemoveIcon
                sx={SeriesIconStyles}
                onClick={() => {
                  SetNumOfSeriesDisplayed(4);
                  return SetSeriesExpanded(false);
                }}
              />
            }
          </Button>
        </Grid>
        <Grid
          item
          container
          justifyContent='center'
          alignItems="center"
          sx={SeriesGridStyles}
        >
          <SeriesComponent series={seriesData?.slice(0, numOfSeriesDisplayed)} />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography
            color="primary"
            sx={LatestTextStyles}
          >
            Latest
          </Typography>
          <ArticleList authorData={author} data={articlesData} turOnAuthorForArticle={false} />
        </Grid>
      </Grid>
    </Grid> 
  );
};

export default HomePageComponent;
