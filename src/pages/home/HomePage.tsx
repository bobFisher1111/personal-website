import { useMemo, useState } from "react";
import { Grid, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import ArticleList from "src/components/articleList/ArticleList";
import PageContainer from 'src/components/pageContainer/PageContainer';
import Sections from "./Sections";
import {
  SeriesTitleGridStyles,
} from "./HomePageComponentStyles";
import HomePageSeriesScroller from "./HomePageSeriesScroller";
import HomePageSelect from './HomePageSelect';

const HomePage = () => {
  const [selectedSeriesPath, setSelectedSeriesPath] = useState('');
  const [selectedArticlePath, setSelectedArticlePath] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const articleData = getWebsiteData?.articles;
  const authorsData = getWebsiteData?.authors;
  const seriesData = getWebsiteData?.series;


  const seriesOptions = useMemo(() => {
    if (!Array.isArray(seriesData)) return [];
    const byId = new Map<string, { series_id: unknown; series_title: unknown }>();
    for (const series of seriesData) {
      const seriesId = series?.series_id;
      if (seriesId == null) continue;
      byId.set(String(seriesId), series);
    }
    return Array.from(byId.values()).map((series: any) => ({
      value: `/series/${String(series.series_id)}`,
      label: String(series.series_title ?? ''),
    }));
  }, [seriesData]);

  const handleSeriesChange = (nextPath: string) => {
    setSelectedSeriesPath(nextPath);
    if (nextPath) navigate(nextPath);
  };

  const articleOptions = useMemo(() => {
    if (!Array.isArray(articleData)) return [];
    return [...articleData]
      .filter((a: any) => a?.article_id != null)
      .sort((a: any, b: any) => {
        const aTime = a?.published_date ? new Date(a.published_date).getTime() : 0;
        const bTime = b?.published_date ? new Date(b.published_date).getTime() : 0;
        return bTime - aTime;
      })
      .map((article: any) => ({
        value: `/article/${String(article.author_id)}/${String(article.article_id)}`,
        label: String(article.article_title ?? ''),
      }));
  }, [articleData]);

  const handleLatestArticleChange = (nextPath: string) => {
    setSelectedArticlePath(nextPath);
    if (nextPath) navigate(nextPath);
  };

  return (
    <PageContainer>
        <Sections
          data={articleData}
          series={seriesData}
          setData={() => {}}
          setSeries={() => {}}
        />
      <Grid size={12} sx={SeriesTitleGridStyles(theme)}>
          <HomePageSelect
            id="series-select"
            label="Series"
            value={selectedSeriesPath}
            options={seriesOptions}
            onChange={handleSeriesChange}
            darkTheme={darkTheme}
            minWidth={80}
          />
        <HomePageSeriesScroller series={seriesData} darkTheme={darkTheme} />
      </Grid>
      <Grid size={12}>
        <HomePageSelect
          id="latest-article-select"
          label="Latest"
          value={selectedArticlePath}
          options={articleOptions}
          onChange={handleLatestArticleChange}
          darkTheme={darkTheme}
          minWidth={80}
        />
        <ArticleList
          authorData={authorsData}
          data={articleData}
        />
      </Grid>
    </PageContainer>
  );
};

export default HomePage;
