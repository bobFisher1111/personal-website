import React from 'react';
import {
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import CopyLinkComponent from '../../../copyLinkComponent/CopyLinkComponent';
import { Link } from "react-router-dom";

const HorizontalArticalInfoComponent: React.FC<Props> = ({
  section,
  authorsId,
  articalId,
  authorPage,
  aughtorsName,
  sectionLink,
  sectionPage,
  series,
  seriesId,
}) => {
    const articalUrl = `/artical/${authorsId}/${articalId}`;
    return (
        <Grid 
          container
          direction="row"
          sx={{
            alignItems: 'center',
            padding: '8px 0px 0px 0px'
          }}
        >
          {!authorPage ? 
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
                  lineHeight: '24px'
                }}
              >
                account_circle
              </div>
            </Link>
          :
            <div 
              className={"material-symbols-outlined"}
              style={{
                fontSize: '20px',
                color: '#2F4C69',
                marginRight: '4px',
                lineHeight: '24px'
              }}
            >
              account_circle
            </div>
          }
          {!authorPage ? 
            <Link 
              to={`/author/${authorsId}`}
              style={{
                textDecoration: "none"
              }}
            >
              <Typography
                color="#2F4C69"
                sx={{
                  // lineHeight: '16.8px',
                  fontSize: '16px',
                  paddingRight: '16px',
                  lineHeight: '24px',
                }}
              >
                {aughtorsName}
              </Typography> 
            </Link>
          :
            <Typography
              color="#2F4C69"
              sx={{
                fontSize: '16px',
                paddingRight: '16px',
                lineHeight: '24px',
              }}
            >
              {aughtorsName}
            </Typography>
          }
          {!sectionPage ?
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
          :
            <Chip
              color="primary"
              label={section}
              variant="outlined"
              size="small"
              sx={{
                color: 'black'
              }}
            />
          }
          {series &&
           <div
            style={{
              padding: '0px 0px 0px 16px',
            }}
          >
           <Link 
              to={`/series/${seriesId}`}
              style={{
                textDecoration: "none"
              }}
            >
              <Chip
                color="secondary"
                label={'Series'}
                variant="outlined"
                size="small"
                sx={{
                  color: 'black',
                  cursor: 'pointer',
                }}
              />
            </Link>
            </div>
          }
          <CopyLinkComponent
            authorsId={authorsId}
            articalId={articalId}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
          />
        </Grid>
    )
}

export type Props = {
  section: string;
  authorsId: string;
  articalId: string;
  authorPage: boolean | undefined;
  aughtorsName: string;
  sectionLink: string;
  sectionPage: boolean | undefined;
  series?: boolean | undefined;
  seriesId?: string;
};
    
export default HorizontalArticalInfoComponent;
