import {
    Typography,
    Grid,
    Divider,
  } from "@mui/material";
  import HeaderComponent from '../headerComponent/HeaderComponent';
  import WritersCard from './WritersCard';
  
  const Writers = () => {
    const contactDescription = "Mission Statement....";
  
    return (
        <>
        <Grid
        container
        sx={{
          background: '#fff',
          display: 'flex',
          paddingBottom: '200px',
          maxWidth: "1024px",
          margin: 'auto',
          padding: '16px 24px 0px 24px',
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
            title='Writers'
            backgroundColor='white'
            fontColor='#2F4C69'
            lineHeight={'40px'}
            fontSize={'32px'}
            authorAvatar={false}
            headerTopPadding={true}
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
            padding: '0px 0px 0px 16px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#667A6E',
          }}
        >
          Current Writers
        </Typography>
      </Grid>
      </Grid>
      <Grid
        container
        sx={{
          background: '#fff',
          display: 'flex',
          paddingBottom: '200px',
          maxWidth: "1024px",
          margin: 'auto',
          padding: '16px 24px 0px 24px',
        }}
        >
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
        >
         <WritersCard />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
        >
          <WritersCard />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
        >
          <WritersCard />
        </Grid>
      </Grid>
     </>
       
    );
  }
  
  export default Writers;
  