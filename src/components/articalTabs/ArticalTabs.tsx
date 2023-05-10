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
import book2 from '../../assets/images/book2.png';
import Card from '../sections/Card';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';
import moment from 'moment';
import LatestArticalCard from "../cards/latestArticalCard/LatestArticalCard";

const ArticalTabs: React.FC<Props> = ({
  turOnAuthorForArtical,
}) => {
    const ArticalDate = moment().format('ll'); //
    const Articals = () => {
        return (
            <>
            {!turOnAuthorForArtical &&
            <>
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
          ></Grid>
            <Card
                title={"Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"}
                backgroundColor={"white"}
                fontColor={"black"}
                img={finalfantasy7}
                author="Bob Fisher"
                likes='5'
                cardTextWidth={'639px'} // homepage 660px everywhere else so far 644px // 639
                date={ArticalDate}
                imageWidth={'321px'}
                articalPage={false}
                useVideoInsteadOfImage={true}
              />
              <Card
                title={"Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"}
                backgroundColor={"white"}
                fontColor={"black"}
                img={finalfantasy7}
                author="Bob Fisher"
                likes='5'
                cardTextWidth={'639px'} // homepage 660px everywhere else so far 644px // 639
                date={ArticalDate}
                imageWidth={'321px'}
                articalPage={false}
                useVideoInsteadOfImage={false}
              />
              <Card
                title={"Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"}
                backgroundColor={"white"}
                fontColor={"black"}
                img={finalfantasy7}
                author="Bob Fisher"
                likes='5'
                cardTextWidth={'639px'} // homepage 660px everywhere else so far 644px // 639
                date={ArticalDate}
                imageWidth={'321px'}
                articalPage={false}
                useVideoInsteadOfImage={false}
              />
              <Card
                title={"Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review Final Fantasy VII Review"}
                backgroundColor={"white"}
                fontColor={"black"}
                img={finalfantasy7}
                author="Bob Fisher"
                likes='5'
                cardTextWidth={'639px'} // homepage 660px everywhere else so far 644px // 639
                date={ArticalDate}
                imageWidth={'321px'}
                articalPage={false}
                useVideoInsteadOfImage={false}
              />
              </>
            }
            {turOnAuthorForArtical &&
            <>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
            //   borderLeft: '1px solid #667A6E',
            paddingTop:'10px',
            
            }}
        >
            <Grid
               item
               xs={8}
               sm={8}
               md={8}
               lg={8}
               xl={8}
               sx={{
                 margin: '16px 0px 16px 16px'
               }}
             >
                <LatestArticalCard 
                  title={'XenoBlade Chronicals 3 Review'}
                  name={'Bob Fisher'}
                  articalInfo={'...'}
                  articalImage={finalfantasy7}
                  turnOnStyle={true}
                />
             </Grid>
             <Grid
               item
               xs={8}
               sm={8}
               md={8}
               lg={8}
               xl={8}
               sx={{
                 margin: '16px 0px 16px 16px'
               }}
             >
                <LatestArticalCard 
                  title={'XenoBlade Chronicals 3 Review'}
                  name={'Bob Fisher'}
                  articalInfo={'...'}
                  articalImage={finalfantasy7}
                  turnOnStyle={true}
                />
             </Grid>
             <Grid
               item
               xs={8}
               sm={8}
               md={8}
               lg={8}
               xl={8}
               sx={{
                 margin: '16px 0px 16px 16px'
               }}
             >
                <LatestArticalCard 
                  title={'XenoBlade Chronicals 3 Review'}
                  name={'Bob Fisher'}
                  articalInfo={'...'}
                  articalImage={finalfantasy7}
                  turnOnStyle={true}
                />
             </Grid>
             <Grid
               item
               xs={8}
               sm={8}
               md={8}
               lg={8}
               xl={8}
               sx={{
                 margin: '16px 0px 16px 16px'
               }}
             >
                <LatestArticalCard 
                  title={'XenoBlade Chronicals 3 Review'}
                  name={'Bob Fisher'}
                  articalInfo={'...'}
                  articalImage={finalfantasy7}
                  turnOnStyle={true}
                />
             </Grid>
             <Grid
               item
               xs={8}
               sm={8}
               md={8}
               lg={8}
               xl={8}
               sx={{
                 margin: '16px 0px 16px 16px'
               }}
             >
                <LatestArticalCard 
                  title={'XenoBlade Chronicals 3 Review'}
                  name={'Bob Fisher'}
                  articalInfo={'...'}
                  articalImage={finalfantasy7}
                  turnOnStyle={true}
                />
             </Grid>
           </Grid>
           </>
            }
        </>
        )
      }
    return (
          <TabsComponent
            turnOnSectionTabsPadding={true}
            extraTabs={false}
            position1={Articals}
            position2={Articals}
            position3={Articals}
            position1Name={'Latest Articals'}
            position2Name={'All Articals'}
            position3Name={'Popular Articals'}
          />

      )
  }

export type Props = {
  turOnAuthorForArtical: boolean;
};

export default ArticalTabs;