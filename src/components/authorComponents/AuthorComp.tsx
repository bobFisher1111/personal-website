import React from 'react';
import {
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import HeaderComponent from '../headerComponent/HeaderComponent';
import SocialMediaComponent from '../socialMediaComponent/SocialMediaComponent';
import TabsComponent from '../tabsComponent/TabsComponent';
import ProjectsComponent from "../projects/ProjectsComponent";
// import SectionTabComponent from "../sectionsTab/SectionTabComponent";
import Works from '../works/Works';
import book1 from '../../assets/images/book1.png';
import book2 from '../../assets/images/book2.png';
import Card from '../sections/Card';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';
import moment from 'moment';
import ArticalTabs from '../articalTabs/ArticalTabs';
import AuthorAbout from './AuthorAbout';
import { useSelector } from 'react-redux';
import LatestArticalCard from "../cards/latestArticalCard/LatestArticalCard";

const AuthorComp: React.FC<Props> = ({
  turOnArticalPage,
  turnOnSectionTabsPadding,
  articalAuthorData,
  articalData,
  authorName,
  bookData,
  authorsData,
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

  const books = bookData;
  console.log('tiger 2', books);


  const tabsPosistionOne = () => {
    return (
      <ArticalTabs
        turOnAuthorForArtical={turOnArticalPage}
        oneLayerExtraTab={false}
        nameOne={'Latest Articals'}
        nameTwo={'All Articals'}
        nameThree={'Popular Articals'}
        nameFour={'Series'}
        websiteData={getArticals}
        articalPageData={articalData}
        authorName={authorName}
      />
    )
  }
  const tabsPosistionTwo = () => {
    return (
        <Works
          bookTitle="Handbook of Regression Modeling in People"
          bookPlot="Handbook of Regression Modeling in People"
          buyBookLink="https://www.ign.com"
          bookGenere="Science"
          bookYear={'2001'}
          authorsPage={turOnArticalPage ? false : true}
          bookCover={turOnArticalPage ? book1 : book2}
          bookData={getBooks}
          bookDataFromArtical={bookData}
        />
    )
  }
  const tabsPosistionThree = () => {
    return (
      <AuthorAbout
        turnPaddingOn={turOnArticalPage}
        aboutData={authorData || authorsData}
      />
    )
  }

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
          // borderLeft: '1px solid #667A6E',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: 'fled-start',
            color: '#667A6E',
            // fontSize: '18px',
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
        sx={{
          // borderLeft: '1px solid #667A6E',
          // padding: '32px',
        }}
      >
        <SocialMediaComponent
          widthPadding={'16px 0px 16px 16px'}
          turnOnStyle={true}
          turnOnEmail={true}
        />
        <TabsComponent
          turnOnSectionTabsPadding={turnOnSectionTabsPadding}
          extraTabs={false}
          position1={tabsPosistionOne}
          position2={tabsPosistionTwo}
          position3={tabsPosistionThree}
          position1Name={'Articals'}
          position2Name={'Books'}
          position3Name={'About'}
        />
      </Grid>
   </Grid>
  )
}

export type Props = {
  turOnArticalPage: boolean;
  turnOnSectionTabsPadding: boolean;
  articalAuthorData?: any;
  articalData?: any;
  authorName?: string;
  bookData?: any;
  authorsData?: any;
};

export default AuthorComp;
