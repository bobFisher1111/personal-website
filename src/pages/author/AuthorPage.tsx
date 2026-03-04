import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
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

const AuthorComponent = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const webData = getWebsiteData;
  const authorWebData = getWebsiteData?.authors;

  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/").reverse()[0];
    return Number(getIdFromCurrentLocation);
  };

  const getAuthor = webData?.authors?.filter(
    (item: any) => item.author_id === getIdFromUrl(),
  );
  const getArticles = webData?.articles?.filter(
    (item: any) => item.author_id === getIdFromUrl(),
  );
  const getSeries = webData?.series?.filter(
    (item: any) => item.author_id === getIdFromUrl(),
  );

  const authorData = getAuthor?.[0];

  return (
    <PageContainer>
      <HeaderComponent
        title={authorData?.author_name}
        avatarImage={authorData?.avatar_image}
        authorId={authorData?.author_id}
      />
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
