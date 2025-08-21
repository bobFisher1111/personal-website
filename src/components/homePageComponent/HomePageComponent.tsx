import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import ArticleList from "../articleList/ArticleList";
import SeriesComponent from "../seriesList/SeriesComponent";
import {
  GridRoot,
  LatestTextStyles,
  SeriesButtonStyles,
  SeriesTextStyles,
} from "./HomePageComponentStyles";
import Sections from "./Sections";


const HomePageComponent: React.FC = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData && getWebsiteData?.articles;
  const authorsData = getWebsiteData && getWebsiteData?.authors;
  const seriesData = getWebsiteData && getWebsiteData?.series;
  const [data, setData] = useState<any>(articleData);
  const [series, setSeries] = useState<any>(seriesData);

  return (
    <Grid container justifyContent="center" alignItems="center" sx={GridRoot}>
      <Grid size={12}>
        <Sections
          data={articleData}
          series={seriesData}
          setData={setData}
          setSeries={setSeries}
        />
      </Grid>
      <Grid size={12}>
        <Button sx={SeriesButtonStyles}>
          <Typography color="primary" sx={SeriesTextStyles}>
            Series
          </Typography>
        </Button>
        <SeriesComponent series={series?.slice(0, 4)} />
      </Grid>
      <Grid size={12}>
        <Typography color="primary" sx={LatestTextStyles}>
          Latest
        </Typography>
        <ArticleList
          authorData={authorsData}
          data={data}
          turOnAuthorForArticle={false}
        />
      </Grid>
    </Grid>
  );
};

export default HomePageComponent;
