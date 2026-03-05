import { useId } from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "src/store/redux/hooks";
import { useTheme } from "@mui/material/styles";
import ComingSoon from "src/components/comingSoon/ComingSoon";
import PageContainer from "src/components/pageContainer/PageContainer";
import formatDate from "../../util/formatDate";
import HorizontalArticleCardComponent from "src/components/cards/HorizontalArticleCardComponent";
import { LinkStyles } from "../../util/styles/LinkStyles";
import {
  seriesComponentGridArticleInfo,
  seriesComponentTitle,
  seriesComponentSubTitle,
  seriesComponentDate,
} from "./SeriesComponentStyles";
import type { Article } from "src/types/articals";
import type { Series } from "src/types/series";

const SeriesPage = () => {
  const id = useId();
  const theme = useTheme();
  const colorTheme = useAppSelector((state) => state.theme.darkTheme);
  const getWebsiteData = useAppSelector((state) => state.webSiteData.data);
  const seriesData = getWebsiteData;

  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    const seriesId = currentLocation.split("/").reverse()[0];
    return Number(seriesId);
  };

  const getSeriesFromId = seriesData?.series?.filter(
    (item: Series) => item.series_id === getSeriesIdFromUrl(),
  );

  const getSeriesArticles = seriesData?.articles?.filter(
    (item: Article) => item.series_id === getSeriesIdFromUrl(),
  );

  const seriesInfo = getSeriesFromId?.[0];
  const noArticles = getSeriesArticles?.length === 0;

  const sortSeriesList = getSeriesArticles?.slice().sort((a, b) => a.article_id - b.article_id);

  return (
    <PageContainer>
      {seriesInfo && (
        <HorizontalArticleCardComponent
          author={seriesInfo.series_authors}
          date={formatDate(seriesInfo.series_start_date)}
          imageWidth="832px"
          authorsId={seriesInfo.author_id}
          videoOrImageCover={seriesInfo.series_cover_image_or_video}
          section={seriesInfo.section}
          mobileImageWidth="30px"
        />
      )}
      {noArticles && <ComingSoon />}
      {sortSeriesList?.map((item, index) => (
        <Grid
          key={`${id}-${index}`}
          size={{
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
            xl: 6,
          }}
          sx={seriesComponentGridArticleInfo(theme)}
        >
          <Link
            to={`/article/${item.author_id}/${item.article_id}`}
            style={LinkStyles(colorTheme)}
          >
            <Typography color="primary" sx={seriesComponentTitle}>
              {`${seriesInfo?.series_type}: ${item?.article_title}`}
            </Typography>
            <Typography color="primary" sx={seriesComponentSubTitle(theme)}>
              {item.article_subtitle}
            </Typography>
            <Typography color="primary" sx={seriesComponentDate(theme)}>
              {formatDate(item.published_date)}
            </Typography>
          </Link>
        </Grid>
      ))}
    </PageContainer>
  );
};

export default SeriesPage;
