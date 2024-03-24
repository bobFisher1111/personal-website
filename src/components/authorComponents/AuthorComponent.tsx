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
} from './AuthorComponentStyles';

const AuthorComponent: React.FC<Props> = ({
  turOnArticalPage,
  articalAuthorData,
  articalData,
  bookData,
  authorsData,
  authorName,
  seriesForArticalPage,
}) => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const webData = getWebsiteData && getWebsiteData?.websiteData;
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split('/').reverse()[0];
    return Number(getIdFromCurrentLocation);
  };
  const getAuthor = webData?.authors?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const getArticals = webData?.articals?.filter((item: any) => {
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
      sx={AuthorComponentGridRoot(turOnArticalPage)}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <HeaderComponent
          title={authorData?.authorName || articalAuthorData?.authorName}
          authorAvatar={true}
          avatarImage={authorData?.avatarImage || articalAuthorData?.avatarImage}
          authorId={articalAuthorData?.authorId}
          articalPage={turOnArticalPage}
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
          color="#2F4C69"
          sx={AuthorComponentGridBiographyText}
        >
          {authorData?.biography || articalAuthorData?.biography}
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
            email={authorData?.email || articalAuthorData?.email}
            facebook={authorData?.facebook || articalAuthorData?.facebook}
            twitter={authorData?.twitter || articalAuthorData?.twitter}
            youtube={authorData?.youtube || articalAuthorData?.youtube}
          />
        </Grid>
        {turOnArticalPage ?
          <TabsComponent
            turnonsectiontabspadding={false}
            tabsData={
              AuthorComponetTabData(
                true, 
                articalData,
                authorName,
                false,
                true,
                bookData,
                authorsData,
                seriesForArticalPage,
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
                getArticals,
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
  turOnArticalPage: boolean;
  articalAuthorData?: any;
  articalData?: any;
  bookData?: any;
  authorsData?: any;
  authorName?: string;
  seriesForArticalPage?: boolean;
};

export default AuthorComponent;
