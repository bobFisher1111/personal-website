import React from 'react';
import {
    Grid,
} from "@mui/material";
import SectionCard from '../sectionsCard/SectionCard';
import xenob3 from '../../assets/images/xenob3.jpg';

const SectionPage = () => {
  return (
    <>
      <Grid
        item
        sx={{
            margin: 'auto',
        }}
      >
        <SectionCard
          imgCover={xenob3}
          section={'Coding'}
          backGroundColor={'#282c34'}
        />
      </Grid>
      <Grid
        item
        sx={{
          margin: 'auto',
        }}
       >
         <SectionCard
           imgCover={xenob3}
           section={'Data'}
           backGroundColor={'#2F4C69'}
         />
       </Grid>
       <Grid
         item
         sx={{
           margin: 'auto',
          }}
       >
         <SectionCard
           imgCover={xenob3}
           section={'Game Dev'}
           backGroundColor={'#667A6E'}
         />
       </Grid>
       <Grid
         item
         sx={{
           margin: 'auto',
         }}
       >
         <SectionCard
          imgCover={xenob3}
          section={'Projects'}
          backGroundColor={'#B784A7'}
        />
       </Grid>
    </>
  );
}

export default SectionPage;
