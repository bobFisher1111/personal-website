import React from 'react';
import {
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import HeaderComponent from '../headerComponent/HeaderComponent';
import SocialMediaComponent from '../socialMediaComponent/SocialMediaComponent';
import TabsComponent from '../tabsComponent/TabsComponent';
import { useSelector } from 'react-redux';
import AuthorComponetTabData from './AuthorComponetTabData';

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
  const webData = getWebsiteData && getWebsiteData
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/").reverse()[0];
    return (getIdFromCurrentLocation);
  }
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
      sx={{
        background: '#fff',
        display: 'flex',
        paddingBottom: '200px',
        maxWidth: "1024px",
        margin: 'auto',
        padding: '40px 16px 100px 16px',
        borderLeft: turOnArticalPage ? '1px solid #667A6E' : '',
      }}
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
          title={ authorData?.name || articalAuthorData?.name}
          backgroundColor='white'
          fontColor='#2F4C69'
          lineHeight={'40px'}
          fontSize={'32px'}
          authorAvatar={true}
          headerTopPadding={true}
          avatarImage={authorData?.avatarImage || articalAuthorData?.avatarImage}
        />
        {!turOnArticalPage && 
        <Divider
          sx={{
            borderColor: '#282c34',
            padding: '0px 0px 16px 0px',
          }}
        />
        }
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '8px 16px 16px 16px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: 'fled-start',
            color: '#667A6E',
            padding: '16px 0px 16px 0px',
          }}
        >
          {"Biography"}
        </Typography>
        <Typography
          color="#2F4C69"
          sx={{
            textAlign: 'fled-start',
            // color: 'grey',
            fontSize: '16px',
            textIndent: '15px',
          }}
        >
          {authorData?.biography || articalAuthorData?.biography}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
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
        {turOnArticalPage ?
        <TabsComponent
          turnOnSectionTabsPadding={false}
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
          turnOnSectionTabsPadding={false}
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
  )
}

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
