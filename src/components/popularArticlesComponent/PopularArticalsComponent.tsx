import React from 'react';
import {
    Grid,
} from "@mui/material";
import PopularArticles from "../unUsedComponents/additionalCards/popularArticleCard/PopularArticles";
import xenob3 from '../../assets/images/xenob3.jpg';

const PopularArticlesComponent: React.FC<Props> = ({
  marginWidth,
}) => {
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          overflowX: 'scroll',
          flexWrap: 'nowrap',
          paddingLeft: `calc(${marginWidth}px + 16px)`,
          '&::-webkit-scrollbar': {display: 'none'}
        }}
      >
        <Grid
          item
          sx={{
            padding: '8px',
            maxWidth: '360px',
            minWidth: '360px',
          }}
        >
          <PopularArticles 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          sx={{
            padding: '8px',
            maxWidth: '360px',
            minWidth: '360px',
          }}
        >
          <PopularArticles 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          sx={{
            padding: '8px',
            maxWidth: '360px',
            minWidth: '360px',
          }}
        >
          <PopularArticles 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          sx={{
            padding: '8px',
            maxWidth: '360px',
            minWidth: '360px',
          }}
        >
          <PopularArticles 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          sx={{
            padding: '8px',
            maxWidth: '360px',
            minWidth: '360px',
          }}
        >
          <PopularArticles 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          sx={{
            padding: '8px',
            maxWidth: '360px',
            minWidth: '360px',
          }}
        >
          <PopularArticles 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
        <Grid
          item
          sx={{
            padding: '8px',
            maxWidth: '360px',
            minWidth: '360px',
          }}
        >
          <PopularArticles 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
      </Grid>
    </>
  );
}

export type Props = {
  marginWidth: any;
};

export default PopularArticlesComponent;
