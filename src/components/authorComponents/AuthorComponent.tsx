import React from 'react';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import HeaderComponent from '../headerComponent/HeaderComponent';
import SocialMediaComponent from '../socialMediaComponent/SocialMediaComponent';
import TabsComponent from '../tabsComponent/TabsComponent';
import { useSelector } from 'react-redux';
import AuthorComponetTabData from './AuthorComponetTabData';
import {
  AuthorComponentGridRoot,
  AuthorComponentGridBiography,
  AuthorComponentGridBiographyTitle,
  AuthorComponentGridBiographyText,
  HeaderComponentStyles,
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
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const webData = getWebsiteData;
  const authorWebData = getWebsiteData?.authors;
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = turOnArticlePage ? currentLocation.split('/').reverse()[1] : currentLocation.split('/').reverse()[0];
    return Number(getIdFromCurrentLocation);
  };
  const getAuthor = webData?.authors?.filter((item: any) => {
    return item.author_id === getIdFromUrl();
  });
  const getArticles = webData?.articles?.filter((item: any) => {
    return item.author_id === getIdFromUrl();
  });
  const getBooks = webData?.books?.filter((item: any) => {
    return item.author_id === getIdFromUrl();
  });
  const authorData = getAuthor && getAuthor[0];

  return (
    <Grid
      container
      justifyContent="center"
      sx={AuthorComponentGridRoot(turOnArticlePage)}
    >
      <Grid
        size={12}
        sx={HeaderComponentStyles}
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
        sx={AuthorComponentGridBiography}
      >
        <Typography
          color="primary"
          variant="h6"
          sx={AuthorComponentGridBiographyTitle}
        >
          {'Biography'}
        </Typography>
        <Typography
          color="primary"
          sx={AuthorComponentGridBiographyText}
        >
          {authorData?.biography || articleAuthorData?.biography}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
      >
        <Grid>
          <SocialMediaComponent
            widthPadding={'16px 0px 16px 16px'}
            turnOnStyle={true}
            turnOnEmail={true}
            email={authorData?.email || articleAuthorData?.email}
            facebook={authorData?.facebook || articleAuthorData?.facebook}
            twitter={authorData?.twitter || articleAuthorData?.twitter}
            youtube={authorData?.you_tube || articleAuthorData?.you_tube}
            alignContent={"center"}
            justifyContent={"center"}
          />
        </Grid>
        {turOnArticlePage ?
          <TabsComponent
            turnonsectiontabspadding={false}
            tabsData={
              AuthorComponetTabData(
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
            }
          />
          :
          <TabsComponent
            turnonsectiontabspadding={false}
            tabsData={
              AuthorComponetTabData(
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
        }
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
