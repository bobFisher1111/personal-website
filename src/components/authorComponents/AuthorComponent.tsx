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

const AuthorComponent: React.FC = () => {
  const muiTheme = useTheme();
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const webData = getWebsiteData;
  const authorWebData = getWebsiteData?.authors;

  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/').reverse()[0];
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
    <Grid container justifyContent="center" sx={authorComponentGridRoot(false)}>
      <Grid
        size={12}
        sx={headerComponentStyles(muiTheme)}
      >
        <HeaderComponent
          title={authorData?.author_name}
          authorAvatar={true}
          avatarImage={authorData?.avatar_image}
          authorId={authorData?.author_id}
          articlePage={false}
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
          {authorData?.biography}
        </Typography>
      </Grid>

      <Grid container justifyContent="center">
        <Grid>
          <SocialMediaComponent
            widthPadding="16px 0px 16px 16px"
            turnOnStyle={true}
            turnOnEmail={true}
            email={authorData?.email}
            facebook={authorData?.facebook}
            twitter={authorData?.twitter}
            youtube={authorData?.you_tube}
            alignContent="center"
            justifyContent="center"
          />
        </Grid>

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
      </Grid>
    </Grid>
  );
};

export default AuthorComponent;
