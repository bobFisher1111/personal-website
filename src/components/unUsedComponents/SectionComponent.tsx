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
          // homePage={true} // later for dark and light theme
          imgCover={xenob3}
          section={'Coding'}
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
           // homePage={true} // later for dark and light theme
           imgCover={xenob3}
           section={'Data'}
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
           // homePage={true} // later for dark and light theme
           imgCover={xenob3}
           section={'Game Dev'}
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
          // homePage={true} // later for dark and light theme
          imgCover={xenob3}
          section={'Projects'}
          linkTo=''
        />
       </Grid>
    </>
  );
}

export default SectionPage;
