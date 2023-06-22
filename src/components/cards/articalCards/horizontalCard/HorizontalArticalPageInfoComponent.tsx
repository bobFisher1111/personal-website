import React from 'react';
import {
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import CopyLinkComponent from '../../../copyLinkComponent/CopyLinkComponent';

const HorizontalArticalPageInfoComponent: React.FC<Props> = ({
  authorsId,
  author,
  date,
  sectionLink,
  section,
  articalID,
  series,
}) => {
  console.log('5 series page', series);
  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    const seriesId = currentLocation.split("/").reverse()[0];
    return (seriesId);
  }
  console.log('........', sectionLink);
  return (
    <>
      <Grid 
        container 
        direction="row" 
        sx={{
          alignItems: 'center',
          padding: '4px 0px 0px 0px',
        }}
      >
        <Link 
          to={`/author/${authorsId}`}
          style={{
            textDecoration: "none"
          }}
        >
          <div 
            className={"material-symbols-outlined"}
            style={{
              fontSize: '20px',
              color: '#2F4C69',
              marginRight: '4px',
            }}
          >
            account_circle
          </div>
        </Link>
        <Link 
          to={`/author/${authorsId}`}
          style={{
           textDecoration: "none"
          }}
        >
          <Typography
            color="#2F4C69"
            sx={{
              fontSize: '16px',
              paddingRight: '16px'
            }}
          >
            {author} 
          </Typography>
        </Link>
        <Typography
          color="black"
          sx={{
            fontSize: '16px',
            paddingRight: '16px'
          }}
        >
          |
        </Typography>
        <Typography
          variant="subtitle1"
          color="#667A6E"
          component="div"
          sx={{
            fontSize: '16px',
            paddingRight: '16px',
          }}
        >
          {date}
        </Typography>
        <Typography
          color="#26282c34162e"
          sx={{
            fontSize: '16px',
            paddingRight: '16px'
          }}
        >
          |
        </Typography>
        <Link 
          to={`/${sectionLink}`}
          style={{
            textDecoration: "none"
          }}
        >
          <Chip
            color="primary"
            label={section}
            variant="outlined"
            size="small"
            sx={{
              color: 'black',
              cursor: 'pointer',
            }}
          />
        </Link>
        <Typography
          color="#26282c34162e"
          sx={{
            fontSize: '16px',
            paddingLeft: '16px'
          }}
        >
          |
        </Typography>
        {series ? 
          <CopyLinkComponent
            seriesId={getSeriesIdFromUrl()}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
            turnOnSeries={true}
        />
        :
          <CopyLinkComponent
            authorsId={authorsId}
            articalId={articalID}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
          />
        }
      </Grid>
    </>
  )
};

export type Props = {
  authorsId: string;
  author: string;
  date: string;
  sectionLink: string;
  section: string;
  articalID: string;
  series: boolean | undefined;
};

export default HorizontalArticalPageInfoComponent;
