import { Grid, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import ArticleList from "src/components/articleList/ArticleList";
import SeriesComponent from "src/components/seriesList/SeriesComponent";
import Sections from "./Sections";
import {
  GridRoot,
  SectionTextStyles,
  SeriesTitleGridStyles,
} from "./HomePageComponentStyles";
//
const HomePage = () => {
  const theme = useTheme();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
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
        <SeriesComponent series={seriesData} />
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
