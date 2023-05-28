import React, { useEffect, useState } from 'react';
import {
  Typography,
  Grid,
} from "@mui/material";
import HeaderComponent from "../headerComponent/HeaderComponent";
import HorizontalArticalCardComponent from "../cards/articalCards/horizontalCard/HorizontalArticalCardComponent";
import AuthorComp from '../authorComponents/AuthorComp';
import { useSelector } from 'react-redux';
import createArtical from '../../utilities/createArtical';


const ArticalPage: React.FC<Props> = ({
}) => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const webData = getWebsiteData && getWebsiteData
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/").reverse()[1];
    return (getIdFromCurrentLocation);

  }
  const getArticalNameFromUrl = () => {
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
  const currentArtical = getArticals?.filter((item: any) => {
    return item.articalId === getArticalNameFromUrl();
  });
  const getBook = webData?.books?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  // const listOfArticals = getArticals();
  const authorData = getAuthor && getAuthor[0]
  const articalData = currentArtical && currentArtical[0];
  const bookData = getBook && getBook;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Grid
      container
      justifyContent='flex-end'
      alignContent='center'
      sx={{
        background: '#fff',
        paddingBottom: '200px',
        maxWidth: "3000px",
        margin: 'auto',
        top: '30px',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={9}
        xl={9}
        sx={{
            alignItems: 'center',
          }}
      >
       <HeaderComponent
          title={articalData?.articalTitle}
          backgroundColor={'white'}
          fontColor='#2F4C69'
          lineHeight={'40px'}
          fontSize={'32px'}
          authorAvatar={false}
          headerTopPadding={true}
        />
      <HorizontalArticalCardComponent
          title={'First JRPG ever played, was given money for birthday and the cover art looked cool. Had no idea what to expect'}
          backgroundColor={'white'}
          fontColor={'black'}
          author={authorData?.name}
          likes='5'
          cardTextWidth={'1000px'}
          date={articalData?.publishedDate}
          imageWidth={'1000px'}
          articalPage={true}
          articalSubTitle={articalData?.articalSubTitle}
          useVideoInsteadOfImage={articalData?.useVideoInsteadOfImage}
          articalData={articalData}
          authorsId={articalData?.authorId}
          articalId={articalData?.articalId}
          videoOrImageCover={articalData?.coverImageOrVideo}
          sectionLink={articalData?.sectionLink}
          section={articalData?.section}
      />
        {articalData  && articalData.artical?.map((item: any) => (
          createArtical(item)
        ))}
    </Grid>
        <Grid
        item
        xs={0}
        sm={0}
        md={0}
        lg={3}
        xl={3}
      >
        <AuthorComp
          turOnArticalPage={true}
          turnOnSectionTabsPadding={true}
          articalAuthorData={authorData}
          articalData={getArticals}
          authorName={authorData?.name}
          bookData={bookData}
          authorsData={authorData}
        />
      </Grid>
    </Grid>
  </>
);
}

export type Props = {
};

export default ArticalPage;