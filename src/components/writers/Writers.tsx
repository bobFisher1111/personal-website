import {
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { useSelector } from 'react-redux';
import HeaderComponent from '../headerComponent/HeaderComponent';
import WritersCard from './WritersCard';

const Writers = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const authorsData = getWebsiteData.authors;

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
          padding: '40px 24px 0px 24px',
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
            // padding: '16px',
          }}
        >
          <HeaderComponent
            title='Writers'
            authorAvatar={false}
            avatarImage={authorsData?.avatarImage}
          />
          <Divider
            sx={{
              borderColor: '#282c34',
              // padding: '16px 0px 16px 0px',
              padding: '0px 0px 16px 0px',
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
            padding: '16px 0px',
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
        {authorsData && authorsData?.map((item: any, index: any) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
          >
            <WritersCard
              authorImage={item.avatarImage}
              authorName={item.name}
              authorsTitle={item.titles}
              authorId={item.authorId}
              facebook={item.facebook}
              twitter={item.twitter}
              youtube={item.youtube}
              email={item.email}
            />
          </Grid>
        ))}
      </Grid>
     </>
       
    );
  }
  
  export default Writers;
  