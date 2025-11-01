import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import HeaderComponent from '../headerComponent/HeaderComponent';
import SocialMediaComponent from '../socialMediaComponent/SocialMediaComponent';
import TabsComponent from '../tabsComponent/TabsComponent';
import AuthorComponetTabData from './AuthorComponetTabData';
import {
  authorComponentGridRoot,
  authorComponentGridBiography,
  authorComponentGridBiographyTitle,
  authorComponentGridBiographyText,
  headerComponentStyles,
} from './AuthorComponentStyles';

const AuthorComponent: React.FC<Props> = ({
  turOnArticlePage,
  articleAuthorData,
  articlelData,
  bookData,
  authorsData,
  authorName,
  seriesForArticlePage,
}) => {
  const muiTheme = useTheme();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const webData = getWebsiteData;
  const authorWebData = getWebsiteData?.authors;

  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = turOnArticlePage
      ? currentLocation.split('/').reverse()[1]
      : currentLocation.split('/').reverse()[0];
    return Number(getIdFromCurrentLocation);
  };

  const getAuthor = webData?.authors?.filter(
    (item: any) => item.author_id === getIdFromUrl()
  );
  const getArticles = webData?.articles?.filter(
    (item: any) => item.author_id === getIdFromUrl()
  );
  const getBooks = webData?.books?.filter(
    (item: any) => item.author_id === getIdFromUrl()
  );

  const authorData = getAuthor?.[0];

  return (
    <Grid container justifyContent="center" sx={authorComponentGridRoot(turOnArticlePage)}>
      <Grid
        size={12}
        sx={headerComponentStyles(muiTheme)}
      >
        <HeaderComponent
          title={authorData?.author_name || articleAuthorData?.author_name}
          authorAvatar={true}
          avatarImage={authorData?.avatar_image || articleAuthorData?.avatar_image}
          authorId={articleAuthorData?.author_id}
          articlePage={turOnArticlePage}
        />
      </Grid>

      <Grid
        size={12}
        sx={authorComponentGridBiography()}
      >
        <Typography color="primary" variant="h6" sx={authorComponentGridBiographyTitle(muiTheme)}>
          Biography
        </Typography>
        <Typography color="primary" sx={authorComponentGridBiographyText(muiTheme)}>
          {authorData?.biography || articleAuthorData?.biography}
        </Typography>
      </Grid>

      <Grid container justifyContent="center">
        <Grid>
          <SocialMediaComponent
            widthPadding="16px 0px 16px 16px"
            turnOnStyle={true}
            turnOnEmail={true}
            email={authorData?.email || articleAuthorData?.email}
            facebook={authorData?.facebook || articleAuthorData?.facebook}
            twitter={authorData?.twitter || articleAuthorData?.twitter}
            youtube={authorData?.you_tube || articleAuthorData?.you_tube}
            alignContent="center"
            justifyContent="center"
          />
        </Grid>

        <TabsComponent
          turnonsectiontabspadding={false}
          tabsData={
            turOnArticlePage
              ? AuthorComponetTabData(
                  authorWebData,
                  articlelData,
                  true,
                  authorName,
                  false,
                  true,
                  bookData,
                  authorsData,
                  seriesForArticlePage,
                  false
                )
              : AuthorComponetTabData(
                  authorWebData,
                  getArticles,
                  false,
                  getIdFromUrl(),
                  false,
                  true,
                  getBooks,
                  authorData,
                  false,
                  true
                )
          }
        />
      </Grid>
    </Grid>
  );
};

export type Props = {
  turOnArticlePage: boolean;
  articleAuthorData?: any;
  articlelData?: any;
  bookData?: any;
  authorsData?: any;
  authorName?: string;
  seriesForArticlePage?: boolean;
};

export default AuthorComponent;
