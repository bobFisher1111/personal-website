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
import AuthorTab from "./AuthorTab";
import Works from '../works/Works';
import book2 from '../../assets/images/book2.png';
import AboutComponent from "../about/AboutComponent";

const AuthorComp: React.FC<Props> = ({
}) => {
  const bioText1 = "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur. ";
  const bioText = bioText1 + bioText1;

  const tabsPosistionOne =() => {
    return (
      <AuthorTab />
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
          bookTitle="le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People"
          bookPlot="le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People le Handbook of Regression Modeling in People"
          buyBookLink="https://www.ign.com"
          bookGenere="Science"
          bookYear='2001'
          authorsPage={true}
          bookCover={book2}
        />
    )
  }
  const tabsPosistionFour = () => {
    return (
      <AboutComponent />
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
        padding: '16px 24px 100px 24px',
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
        }}
      >
        <HeaderComponent
          title='Bob The Fisher'
          backgroundColor='white'
          fontColor='#667A6E'
          lineHeight={'40px'}
          fontSize={'32px'}
          authorAvatar={true}
        />
        <Divider
          sx={{
            borderColor: '#282c34',
            padding: '16px 0px 16px 0px',
          }}
        />
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
      >
        <SocialMediaComponent
          widthPadding={'16px 0px 16px 16px'}
          turnOnStyle={true}
          turnOnEmail={true}
        />
        <TabsComponent
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
};

export default AuthorComp;
