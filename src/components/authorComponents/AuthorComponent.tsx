import React from 'react';
import {
  Typography,
  Grid,
} from '@mui/material';
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
  const webData = getWebsiteData && getWebsiteData?.websiteData;
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = turOnArticlePage ? currentLocation.split('/').reverse()[1] : currentLocation.split('/').reverse()[0];
    return Number(getIdFromCurrentLocation);
  };
  const getAuthor = webData?.authors?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const getArticles = webData?.articles?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const getBooks = webData?.books?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const authorData = getAuthor && getAuthor[0];

  return (
    <Grid
      container
      justifyContent="center"
      sx={AuthorComponentGridRoot(turOnArticlePage)}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={HeaderComponentStyles}
      >
        <HeaderComponent
          title={authorData?.authorName || articleAuthorData?.authorName}
          authorAvatar={true}
          avatarImage={authorData?.avatarImage || articleAuthorData?.avatarImage}
          authorId={articleAuthorData?.authorId}
          articlePage={turOnArticlePage}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={AuthorComponentGridBiography}
      >
        <Typography
          variant="h6"
          sx={AuthorComponentGridBiographyTitle}
        >
          {'Biography'}
        </Typography>
        <Typography
          color="#0C0D0D"
          sx={AuthorComponentGridBiographyText}
        >
          {authorData?.biography || articleAuthorData?.biography}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
      >
        <Grid 
          item
        >
          <SocialMediaComponent
            widthPadding={'16px 0px 16px 16px'}
            turnOnStyle={true}
            turnOnEmail={true}
            email={authorData?.email || articleAuthorData?.email}
            facebook={authorData?.facebook || articleAuthorData?.facebook}
            twitter={authorData?.twitter || articleAuthorData?.twitter}
            youtube={authorData?.youtube || articleAuthorData?.youtube}
          />
        </Grid>
        {turOnArticlePage ?
          <TabsComponent
            turnonsectiontabspadding={false}
            tabsData={
              AuthorComponetTabData(
                true, 
                articlelData,
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
                false, 
                getArticles,
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
