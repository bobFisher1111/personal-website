import { Grid, Typography } from "@mui/material";
import { useAppSelector } from "src/store/redux/hooks";
import HeaderComponent from "src/components/headerComponent/HeaderComponent";
import PageContainer from "src/components/pageContainer/PageContainer";
import TabsComponent from "src/components/tabsComponent/TabsComponent";
import AuthorComponetTabData from "./AuthorComponetTabData";
import {
  authorComponentGridBiography,
  authorComponentGridBiographyTitle,
  authorComponentGridBiographyText,
  gridWidth,
} from "./AuthorComponentStyles";
import type { Article } from "src/types/articals";
import type { Author } from "src/types/authors";
import type { Series } from "src/types/series";

const AuthorComponent = () => {
  const webData = useAppSelector((state) => state.webSiteData.data);
  const authorWebData = webData.authors;

  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/").reverse()[0];
    return Number(getIdFromCurrentLocation);
  };

  const getAuthor = webData.authors.filter(
    (item: Author) => item.author_id === getIdFromUrl(),
  );
  const getArticles = webData.articles.filter(
    (item: Article) => item.author_id === getIdFromUrl(),
  );
  const getSeries = webData.series.filter(
    (item: Series) => item.author_id === getIdFromUrl(),
  );

  const authorData = getAuthor?.[0];

  return (
    <PageContainer>
      {authorData ? (
        <HeaderComponent
          title={authorData.author_name}
          avatarImage={authorData.avatar_image}
          authorId={authorData.author_id}
        />
      ) : null}
      <Grid size={12} sx={authorComponentGridBiography}>
        <Typography
          color="primary"
          sx={authorComponentGridBiographyTitle}
        >
          Biography
        </Typography>
        <Typography
          color="primary"
          sx={authorComponentGridBiographyText}
        > 
          {authorData?.biography}
        </Typography>
      </Grid>

      <Grid container justifyContent="center" sx={gridWidth}>
        <TabsComponent
          turnonsectiontabspadding={false}
          tabsData={AuthorComponetTabData(
            authorWebData,
            getArticles,
            getSeries,
          )}
        />
      </Grid>
    </PageContainer>
  );
};

export default AuthorComponent;
