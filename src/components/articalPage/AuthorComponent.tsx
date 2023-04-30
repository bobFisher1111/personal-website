import React from 'react';
import {
  Grid, Typography, Avatar,
} from "@mui/material";
import SocialMediaComponent from '../socialMediaComponent/SocialMediaComponent';
import Card from "../sections/Card";
import Works from "./Works";
import LatestArticalCard from "../cards/latestArticalCard/LatestArticalCard";
import FilteringComponent from "../../components/filteringComponent/FilteringComponent";
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';
import solidSnakePortrait2 from '../../assets/images/solidSnakePortrait2.jpeg';

const AuthorComponent: React.FC<Props> = ({
}) => {
  const bioText1 = "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur. ";
  const bioText = bioText1 + bioText1;
  return (
    <>
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{
        // borderTop: '3px solid #667A6E',
        borderLeft: '1px solid #667A6E',
        // borderRight: '3px solid #667A6E',
        margin: '184px 0px 0px 0px',
      }}
    >
      <Grid
        item
        sx={{
          padding: '16px 0px 16px 16px'
        }}
      >
         <Avatar 
           alt="Remy Sharp"
           src={solidSnakePortrait2}
           sx={{
            width: 56,
            height: 56,
           }}
        />
    </Grid>
    <Grid
        item
        // xs={10}
        // sm={10}
        // md={10}
        // lg={10}
        // xl={10}
        sx={{
          alignItems: 'center',
          padding: '16px',
        }}
      >
        
        <Typography
          variant="h5"
          sx={{
            textAlign: 'fled-start',
            color: 'black',
            lineHeight: '2'
          }}
        >
              {'Bob the fisher'}
        </Typography>
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
       <Works
         bookTitle="Handbook of Regression Modeling in People"
         bookYear='2001'
       />
      </Grid>
    </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{
          borderLeft: '1px solid #667A6E',
        //   borderRight: '3px solid #667A6E',
        }}
      >
        <FilteringComponent
          category={[]}
          categoryColor={"#2F4C69"}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{
          borderLeft: '1px solid #667A6E',
        //   borderRight: '3px solid #667A6E',
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
          padding: '16px 0px 16px 16px'
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
          padding: '0px 0px 8px 16px',
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
          padding: '0px 0px 8px 16px',
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
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '0px 0px 36px 16px',
          // borderBottom: '3px solid #667A6E',
          // borderRight: '1px solid grey',
        }}
      ></Grid>
    </Grid>
    </>
  );
}

export type Props = {

};

export default AuthorComponent;
