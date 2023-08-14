import {
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { useSelector } from 'react-redux';
import HeaderComponent from '../headerComponent/HeaderComponent';
import WritersCard from './WritersCard';
import {
  WritersGridRoot,
  WritersCardGrid,
} from './WritersStyle';

const Writers = () => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const authorsData = getWebsiteData.authors;

  return (
      <>
        <Grid
          container
          sx={WritersGridRoot}
        >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <HeaderComponent
            title='Writers'
            authorAvatar={false}
            avatarImage={authorsData?.avatarImage}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={WritersCardGrid}
        >
        {authorsData && authorsData?.map((item: any, index: any) => (
          <Grid
            item
            xs={12}
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
  