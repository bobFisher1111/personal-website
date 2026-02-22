import { Grid, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import ArticleList from "src/components/articleList/ArticleList";
import Sections from "./Sections";
import {
  GridRoot,
  SectionTextStyles,
  SeriesTitleGridStyles,
} from "./HomePageComponentStyles";
import HomePageSeriesScroller from "./HomePageSeriesScroller";

const HomePage = () => {
  const theme = useTheme();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const articleData = getWebsiteData?.articles;
  const authorsData = getWebsiteData?.authors;
  const seriesData = getWebsiteData?.series;

  return (
    <Grid container justifyContent="center" alignItems="center" sx={GridRoot(theme)}>
      <Grid size={12}>
        <Sections
          data={articleData}
          series={seriesData}
          setData={() => {}}
          setSeries={() => {}}
        />
      </Grid>

      <Grid size={12} sx={SeriesTitleGridStyles(theme)}>
        <Typography color="primary" sx={SectionTextStyles(theme)}>
            Series
          </Typography>
        <HomePageSeriesScroller series={seriesData} darkTheme={darkTheme} />
      </Grid>

      <Grid size={12}>
        <Typography color="primary" sx={SectionTextStyles(theme)}>
          Latest
        </Typography>
        <ArticleList
          authorData={authorsData}
          data={articleData}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
