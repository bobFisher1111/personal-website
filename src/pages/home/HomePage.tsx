import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import SectionCard from '../../components/sectionsCard/SectionCard';
import xenob3 from '../../assets/images/xenob3.jpg';
import LatestArticalXSSmall from "../../components/articalCards/latestArticalCard/LatestArticalCard";
import PopularArticals from "../../components/articalCards/popularArticalCard/PopularArticals";

const HomePage = () => {
  const contactDescription = "Mission Statement....";
  const testMessage1 = "Whats going on in the world today? all the little girls feeling up the world today when the good comes the bad and the bad becomes good Im livin life like i should";
  const testMessage2 = "Whats going on in the world today? all the little girls feeling up the world today when the good";

  return (
    <Grid
      container
      sx={{
        background: '#fff', // #282c34',
        minHeight: '100vh',
        // padding: '32px 16px 32px 16px',
        display: 'flex',
        // backgroundColor: "#667A6E",
      }}
    >
    <Grid
      container
      direction="row"
      sx={{ 
        display: 'flex',
        //maxWidth: "1024px",
        margin: 'auto', 
        // padding: '32px 0px 25px 0px',
        backgroundColor: '#282c34',
        borderBottom: '2px solid red',
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        // direction="row"
        sx={{
          padding: '50px 0px 0px 0px'
          // maxWidth: "1024px",
          // backgroundColor: '#2F4C69'
        }}
      >
        <Typography
          variant="h5"
          style={{
            textAlign: 'center',
            color: 'white',
            padding: '25px 0px 75px 0px',
          }}
        >
        React2Python
      </Typography>
    </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          padding: '32px 16px 16px 16px',
          maxWidth: "1024px",
          margin: 'auto',
          // backgroundColor: '#667A6E',
        }}
      >
      <Grid
        item
        sx={{
          // padding: '0px 0px 20px 0px',
          // maxWidth: "1024px",
          margin: 'auto',
          // minWidth: "220px",
          // maxWidth: "220px",
        }}
      >
        <SectionCard
          imgCover={xenob3}
          section={'React'}
          backGroundColor={'#282c34'}
        />
      </Grid>
      <Grid
        item
        sx={{
          // padding: '0px 0px 20px 0px',
          // maxWidth: "1024px",
          margin: 'auto',
          // minWidth: "220px",
          // maxWidth: "220px",
        }}
      >
         <SectionCard
          imgCover={xenob3}
          section={'Python'}
          backGroundColor={'#2F4C69'}
        />
      </Grid>
      <Grid
        item
        sx={{
          // padding: '0px 0px 20px 0px',
          // minWidth: "220px",
          // maxWidth: "220px",
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
          // minWidth: "220px",
          // maxWidth: "220px",
          margin: 'auto',
        }}
      >
         <SectionCard
          imgCover={xenob3}
          section={'Projects'}
          backGroundColor={'#B784A7'}
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
          maxWidth: "1024px",
          margin: 'auto',
          padding: '16px 8px 0px 8px',
        }}
      >
      {/*<Typography
        variant="h6"
        sx={{
          textAlign: 'fled-start',
          color: '#2F4C69',
          // padding: '75px 0px 75x 0px',
          // textDecoration: 'underline',
          // maxWidth: "1024px",
          borderBottom: '1px solid #282c34',
          padding: '16px 0px 0px 0px',
        }}
      >
        
      </Typography>*/}
      <Divider
        sx={{
          borderColor: '#282c34',
          // borderBottomWidth: 1,
          padding: '16px 0px 0px 0px',
        }}
      />
      </Grid>
      <Grid 
        container
        direction="row"
        sx={{
          // backgroundColor: "#A6A5C7",
          padding: '16px'
        }}
      >
      <Grid 
        item
        sx={{
          // padding: '0px 0px 20px 0px',
          maxWidth: "1024px",
          margin: 'auto',
          '& button': { m: 1 },
          padding: '4px',
          // backgroundColor: "#282c34",
          // borderBottomRightRadius: '10px', //
          // borderBottomLeftRadius: '10px', //
          // borderTopColor: 'red !important',
          // borderStyle: 'groove',
          // borderTop: 'solid #667A6E',
          // borderTopRightRadius: '10px', //
          // borderTopLeftRadius: '10px', //
          // borderColor: '#667A6E', //
          // borderStyle: 'solid',
          // border: '1px solid #667A6E',
          // border: '1px solid #282c34', //
        }}
      >
        <Button 
          variant="outlined" 
          size="medium"
          sx={{
              color: '#282c34',
              borderColor: '#282c34',
              pointerEvent: 'none'
            }}
        >
          React
        </Button>
        <Button 
          variant="outlined" 
          size="medium"
          sx={{
              color: '#2F4C69',
              borderColor: '#2F4C69',
            }}
        >
          Python
        </Button>
        <Button 
          variant="outlined" 
          size="medium"
          sx={{
              color: '#667A6E',
              borderColor: '#667A6E',
            }}
        >
          Game Dev
        </Button>
        <Button 
          variant="outlined" 
          size="medium"
          sx={{
              color: '#B784A7',
              borderColor: '#B784A7',
            }}
        >
            Projects
        </Button>
      </Grid>
    </Grid>
      <Grid 
        container
        sx={{ 
          // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
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
          maxWidth: "1024px",
          margin: 'auto',
          padding: '0px 8px 0px 8px',
        }}
      >
      <Typography
        variant="h6"
        sx={{
          textAlign: 'fled-start',
          color: '#2F4C69',
          // padding: '75px 0px 75x 0px',
          // textDecoration: 'underline',
          // maxWidth: "1024px",
          // borderBottom: '1px solid #282c34',
          // padding: '16px 0px 0px 0px',
        }}
      >
        Lastest Articals  
      </Typography>
      </Grid>
      <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '8px',
          }}
        >
          <LatestArticalXSSmall 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Small size'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '8px',
          }}
        >
          <LatestArticalXSSmall 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Small size'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '8px',
          }}
        >
          <LatestArticalXSSmall 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Small size'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '8px',
          }}
        >
          <LatestArticalXSSmall 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Small size'}
            articalInfo={'...'}
            articalImage={xenob3}
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
          maxWidth: "1024px",
          margin: 'auto',
          padding: '0px 8px 0px 8px',
        }}
      >
      <Typography
        variant="h6"
        sx={{
          textAlign: 'fled-start',
          color: '#2F4C69',
          // padding: '75px 0px 75x 0px',
          // textDecoration: 'underline',
          // maxWidth: "1024px",
          // borderBottom: '1px solid #282c34',
          padding: '16px 0px 0px 0px',
        }}
      >
        Popular Articals
      </Typography>
      </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '8px',
          }}
        >
          <PopularArticals 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'.......................'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '8px',
          }}
        >
          <PopularArticals 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'.......................'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '8px',
          }}
        >
          <PopularArticals 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'.......................'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '8px',
          }}
        >
          <PopularArticals 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'.......................'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            padding: '8px',
          }}
        >
          <PopularArticals 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'.......................'}
            articalImage={xenob3}
          />
        </Grid>
      </Grid>
      </Grid>
    </Grid> 
  );
}

export default HomePage;
