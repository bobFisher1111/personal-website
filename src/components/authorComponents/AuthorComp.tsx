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
import SectionTabComponent from "../sectionsTab/SectionTabComponent";
import Works from '../works/Works';
import book1 from '../../assets/images/book1.png';
import book2 from '../../assets/images/book2.png';
import Card from '../sections/Card';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';
import moment from 'moment';
import ArticalTabs from '../articalTabs/ArticalTabs';
import AuthorAbout from './AuthorAbout';
import LatestArticalCard from "../cards/latestArticalCard/LatestArticalCard";

const AuthorComp: React.FC<Props> = ({
  turOnArticalPage,
}) => {
  const bioText1 = "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur. ";
  const bioText = bioText1 + bioText1;
  const ArticalDate = moment().format('ll');

  const tabsPosistionOne =() => {

    return (
      <ArticalTabs
        turOnAuthorForArtical={turOnArticalPage}
      />
    )
  }
  const tabsPosistionTwo = () => {
    return (
      <ProjectsComponent />
    )
  };
  const tabsPosistionThree = () => {
    return (
      <Works
          bookTitle="Handbook of Regression Modeling in People"
          bookPlot="Handbook of Regression Modeling in People"
          buyBookLink="https://www.ign.com"
          bookGenere="Science"
          bookYear='2001'
          authorsPage={turOnArticalPage ? false : true}
          bookCover={turOnArticalPage ? book1 : book2}
        />
    )
  }
  const tabsPosistionFour = () => {
    return (
      <AuthorAbout />
    )
  }

  return (
    <Grid
      container
      sx={{
        background: '#fff',
        display: 'flex',
        paddingBottom: '200px',
        maxWidth: "1024px",
        margin: 'auto',
        padding: '16px 16px 100px 16px',
        borderLeft: turOnArticalPage ?'1px solid #667A6E' : '',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '16px',
          //borderLeft: '1px solid #667A6E',
        }}
      >
        <HeaderComponent
          title='Bob The Fisher'
          backgroundColor='white'
          fontColor='#667A6E'
          lineHeight={'40px'}
          fontSize={'32px'}
          authorAvatar={true}
          headerTopPadding={false}
        />
        {!turOnArticalPage && 
        <Divider
          sx={{
            borderColor: '#282c34',
            padding: '16px 0px 16px 0px',
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
          sx={{
            textAlign: 'fled-start',
            color: 'black',
            fontSize: '18px',
            padding: '0px 0px 8px 0px',
          }}
        >
          {"Biography"}
        </Typography>
        <Typography
          sx={{
            textAlign: 'fled-start',
            color: 'grey',
            fontSize: '16px',
            textIndent: '15px',
          }}
        >
          {bioText}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          // borderLeft: '1px solid #667A6E',
        }}
      >
        <SocialMediaComponent
          widthPadding={'16px 0px 16px 16px'}
          turnOnStyle={true}
          turnOnEmail={true}
        />
        <TabsComponent
          turnOnSectionTabsPadding={false}
          extraTabs={true}
          position1={tabsPosistionOne}
          position2={tabsPosistionTwo}
          position3={tabsPosistionThree}
          position4={tabsPosistionFour}
          position1Name={'Articals'}
          position2Name={'Projects'}
          position3Name={'Books'}
          position4Name={'About'}
        />
      </Grid>
   </Grid>
  )
}

export type Props = {
  turOnArticalPage: boolean;
};

export default AuthorComp;
