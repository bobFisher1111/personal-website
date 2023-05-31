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
}) => {
    return (
      <>
        <Link 
            to={`/artical/${authorsId}/${articalId}`}
            style={{
              textDecoration: "none"
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                cursor: "pointer",
                "&:hover": {
                  color: "#667A6E",
                },
                margin: "0px 22px 0px 0px"
              }}
            >
              More from the Artical
            </Typography>
        </Link> 
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
          <CopyLinkComponent
            authorsId={authorsId}
            articalId={articalId}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
          />
        </Grid>
      </>
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
};
    
export default HorizontalArticalInfoComponent;
