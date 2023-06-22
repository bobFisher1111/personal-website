import React, { useEffect } from 'react';
import {
  Grid,
} from "@mui/material";
import HeaderComponent from "../headerComponent/HeaderComponent";
import HorizontalArticalCardComponent from "../cards/articalCards/horizontalCard/HorizontalArticalCardComponent";
import AuthorComponent from '../authorComponents/AuthorComponent';
import { useSelector } from 'react-redux';
import createArtical from '../../utilities/createArtical';
import getNameFromUrl from '../../utilities/getNameFromUrl';


const ArticalPage: React.FC<Props> = ({
}) => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const webData = getWebsiteData && getWebsiteData
  const getIdFromUrl = () => {
    const currentLocation = window.location.href;
    const getIdFromCurrentLocation = currentLocation.split("/").reverse()[1];
    return (getIdFromCurrentLocation);

  }
  const getAuthor = webData?.authors?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const getArticals = webData?.articals?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const currentArtical = getArticals?.filter((item: any) => {
    return item.articalId === getNameFromUrl();
  });
  const getBook = webData?.books?.filter((item: any) => {
    return item.authorId === getIdFromUrl();
  });
  const authorData = getAuthor && getAuthor[0]
  const articalData = currentArtical && currentArtical[0];
  console.log('cat, articalData', articalData?.sectionLink);

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
          author={authorData?.name}
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
          turnOnSubTitle={true}
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
        <AuthorComponent
          turOnArticalPage={true}
          articalAuthorData={authorData}
          articalData={getArticals}
          authorName={authorData?.name}
          bookData={getBook}
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