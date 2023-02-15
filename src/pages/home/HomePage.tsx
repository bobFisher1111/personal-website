import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import SectionCard from '../../components/sectionsCard/SectionCard';
import xenob3 from '../../assets/images/xenob3.jpg';
import LatestArticalCard from "../../components/cards/latestArticalCard/LatestArticalCard";
import PopularArticals from "../../components/cards/popularArticalCard/PopularArticals";

const HomePage = () => {
  return (
    <Grid
      container
      sx={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
      }}
    >
      <Grid
        container
        direction="row"
        sx={{ 
          display: 'flex',
          margin: 'auto', 
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
          sx={{
            padding: '50px 0px 0px 0px'
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
        }}
      >
        <Grid
          item
          sx={{
            margin: 'auto',
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
            margin: 'auto',
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
              maxWidth: "1024px",
              margin: 'auto',
              '& button': { m: 1 },
              padding: '4px',
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
            <LatestArticalCard 
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
            <LatestArticalCard 
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
            <LatestArticalCard 
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
            <LatestArticalCard 
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
