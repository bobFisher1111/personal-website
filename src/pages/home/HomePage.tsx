import { useState } from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useNavigate } from "react-router-dom";
import ArticleList from "src/components/articleList/ArticleList";
import PageContainer from "src/components/pageContainer/PageContainer";
import { useAppSelector } from "src/store/redux/hooks";
import Sections from "./Sections";
import { SeriesTitleGridStyles } from "./HomePageComponentStyles";
import HomePageSeriesScroller from "./HomePageSeriesScroller";
import HomePageSelect from "./HomePageSelect";
import type { Series } from "src/types/series";

const getPublishedTime = (publishedDate: string): number => {
  if (!publishedDate) return 0;
  const time = new Date(publishedDate).getTime();
  return Number.isFinite(time) ? time : 0;
};

const HomePage = () => {
  const [selectedSeriesPath, setSelectedSeriesPath] = useState("");
  const [selectedArticlePath, setSelectedArticlePath] = useState("");
  const [activeSection, setActiveSection] = useState("All");
  const theme = useTheme();
  const navigate = useNavigate();
  const websiteData = useAppSelector((state) => state.webSiteData.data);
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);
  const allArticleData = websiteData.articles;
  const allSeriesData = websiteData.series;
  const allAuthorsData = websiteData.authors;

  const filteredArticleData =
    activeSection === "All"
      ? allArticleData
      : activeSection === "Reviews"
        ? allArticleData.filter((item) => item.section === "Reviews")
        : allArticleData.filter((item) => item.section === activeSection);

  const filteredSeriesData =
    activeSection === "All"
      ? allSeriesData
      : activeSection === "Reviews"
        ? allSeriesData.filter((item) => item.section === "Reviews")
        : allSeriesData.filter((item) => item.section === activeSection);

  const seriesOptions = (() => {
    const byId = new Map<number, Series>();
    for (const series of filteredSeriesData) {
      if (typeof series.series_id !== "number") continue;
      byId.set(series.series_id, series);
    }

    return Array.from(byId.entries()).map(([seriesId, series]) => {
      const seriesTitle =
        typeof series.series_title === "string" ? series.series_title : "";
      return {
        value: `/series/${String(seriesId)}`,
        label: seriesTitle,
      };
    });
  })();

  const handleSeriesChange = (nextPath: string) => {
    setSelectedSeriesPath(nextPath);
    if (nextPath) navigate(nextPath);
  };

  const articleOptions = [...filteredArticleData]
    .filter((a) => typeof a.article_id === "number")
    .sort(
      (a, b) =>
        getPublishedTime(b.published_date) - getPublishedTime(a.published_date),
    )
    .map((article) => {
      const authorId =
        typeof article.author_id === "number" ? article.author_id : undefined;
      const articleId =
        typeof article.article_id === "number" ? article.article_id : undefined;
      const articleTitle =
        typeof article.article_title === "string" ? article.article_title : "";

      return {
        value:
          authorId === undefined || articleId === undefined
            ? ""
            : `/article/${String(authorId)}/${String(articleId)}`,
        label: articleTitle,
      };
    })
    .filter((option) => option.value.length > 0);

  const handleLatestArticleChange = (nextPath: string) => {
    setSelectedArticlePath(nextPath);
    if (nextPath) navigate(nextPath);
  };

  return (
    <PageContainer>
      <Typography component="h1" style={visuallyHidden}>
        Home
      </Typography>
      <Sections
        activeSection={activeSection}
        onSectionChange={setActiveSection}
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
        <HomePageSeriesScroller
          series={filteredSeriesData}
          authors={allAuthorsData}
          darkTheme={darkTheme}
          showAuthorAvatarOverlay
        />
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
        <ArticleList authorData={allAuthorsData} data={filteredArticleData} />
      </Grid>
    </PageContainer>
  );
};

export default HomePage;
