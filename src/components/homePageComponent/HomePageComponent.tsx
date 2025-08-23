import React, { useState } from "react";
import { Button, Grid, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import ArticleList from "../articleList/ArticleList";
import SeriesComponent from "../seriesList/SeriesComponent";
import Sections from "./Sections";
import {
  GridRoot,
  LatestTextStyles,
  SeriesButtonStyles,
  SeriesTextStyles,
} from "./HomePageComponentStyles";

const HomePageComponent: React.FC = () => {
  const theme = useTheme();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const articleData = getWebsiteData?.articles;
  const authorsData = getWebsiteData?.authors;
  const seriesData = getWebsiteData?.series;
  const [data, setData] = useState<any>(articleData);
  const [series, setSeries] = useState<any>(seriesData);

  return (
    <Grid container justifyContent="center" alignItems="center" sx={GridRoot(theme)}>
      <Grid size={12}>
        <Sections
          data={articleData}
          series={seriesData}
          setData={setData}
          setSeries={setSeries}
        />
      </Grid>

      <Grid size={12}>
        <Button sx={SeriesButtonStyles()}>
          <Typography color="primary" sx={SeriesTextStyles(theme)}>
            Series
          </Typography>
        </Button>
        <SeriesComponent series={series?.slice(0, 4)} />
      </Grid>

      <Grid size={12}>
        <Typography color="primary" sx={LatestTextStyles(theme)}>
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
