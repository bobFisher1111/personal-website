import { useState } from "react";
import { Grid, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleList from "src/components/articleList/ArticleList";
import PageContainer from "src/components/pageContainer/PageContainer";
import Sections from "./Sections";
import { SeriesTitleGridStyles } from "./HomePageComponentStyles";
import HomePageSeriesScroller from "./HomePageSeriesScroller";
import HomePageSelect from "./HomePageSelect";

type Article = {
  article_id: number;
  author_id: number;
  article_title: string;
  published_date: string;
  section: string;
  is_review: boolean;
};

type Series = {
  series_id?: number;
  series_title?: string;
  section?: string;
};

type Author = Record<string, never>;

type WebsiteData = {
  articles: Article[];
  authors: Author[];
  series: Series[];
};

type RootState = {
  webSiteData: {
    data: WebsiteData;
  };
  theme: {
    darkTheme: boolean;
  };
};

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
  const websiteData = useSelector((state: RootState) => state.webSiteData.data);
  const darkTheme = useSelector((state: RootState) => state.theme.darkTheme);
  const articleData = websiteData?.articles;
  const authorsData = websiteData?.authors;
  const seriesData = websiteData?.series;

  const allArticleData = Array.isArray(articleData) ? articleData : [];
  const allSeriesData = Array.isArray(seriesData) ? seriesData : [];
  const allAuthorsData = Array.isArray(authorsData) ? authorsData : undefined;

  const filteredArticleData =
    activeSection === "All"
      ? allArticleData
      : activeSection === "Reviews"
        ? allArticleData.filter(
            (item) => item.is_review === true || item.section === "Reviews",
          )
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
          darkTheme={darkTheme}
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
