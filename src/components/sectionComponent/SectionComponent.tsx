import React from 'react';
import {
    Grid,
} from "@mui/material";
import SectionCard from '../sectionsCard/SectionCard';
import xenob3 from '../../assets/images/xenob3.jpg';
// look into, most likely not being used
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
          linkTo=''
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
           linkTo=''
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
           linkTo=''
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
          linkTo=''
        />
       </Grid>
    </>
  );
}

export default SectionPage;
