import React from 'react';
import {
    Grid,
} from "@mui/material";
import PopularArticals from "../cards/popularArticalCard/PopularArticals";
import xenob3 from '../../assets/images/xenob3.jpg';

const PopularArticalsComponent: React.FC<Props> = ({
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
          <PopularArticals 
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
          <PopularArticals 
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
          <PopularArticals 
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
          <PopularArticals 
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
          <PopularArticals 
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
          <PopularArticals 
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
          <PopularArticals 
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

export default PopularArticalsComponent;
