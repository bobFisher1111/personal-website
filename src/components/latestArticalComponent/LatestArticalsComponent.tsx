import React from 'react';
import {
    Grid,
} from "@mui/material";
import LatestArticalCard from "../cards/fullArticalCard/FullArticalCard";
import xenob3 from '../../assets/images/xenob3.jpg';
import mgs5 from '../../assets/images/mgs5.jpg';
import xenob2 from '../../assets/images/xenob2.jpg';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const LatestArticalsComponent: React.FC<Props> = ({
  marginWidth,
}) => {
  return (
    <>
      {/* <Grid
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
            maxWidth: '300px',
            minWidth: '300px',
          }}
        >
          <LatestArticalCard 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'...'}
            articalImage={finalfantasy7}
          />
        </Grid>
        <Grid
          item
          sx={{
            padding: '8px',
            maxWidth: '300px',
            minWidth: '300px',
          }}
        >
          <LatestArticalCard 
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
            maxWidth: '300px',
            minWidth: '300px',
          }}
        >
          <LatestArticalCard 
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
            maxWidth: '300px',
            minWidth: '300px',
          }}
        >
          <LatestArticalCard 
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
            maxWidth: '300px',
            minWidth: '300px',
          }}
        >
          <LatestArticalCard 
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
            maxWidth: '300px',
            minWidth: '300px',
          }}
        >
          <LatestArticalCard 
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
            maxWidth: '300px',
            minWidth: '300px',
          }}
        >
          <LatestArticalCard 
            title={'XenoBlade Chronicals 3 Review'}
            name={'Bob Fisher'}
            articalInfo={'...'}
            articalImage={xenob3}
          />
        </Grid>
      </Grid> */}
    </>
  );
}

export type Props = {
  marginWidth: any;
};

export default LatestArticalsComponent;
