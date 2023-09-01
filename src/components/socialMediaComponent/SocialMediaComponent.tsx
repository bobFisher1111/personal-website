import React, {useState} from 'react';
import TwitterLogo from '../../assets/icons/TwitterLogo.svg';
import YoutTubeLogo from '../../assets/icons/YoutTubeLogo.png';
import FacebookLogo from '../../assets/icons/FacebookLogo.png';
import { Grid, Box } from "@mui/material";
import CopyLinkComponent from '../copyLinkComponent/CopyLinkComponent';

const SocialMediaComponent: React.FC<Props> = ({
  widthPadding,
  turnOnStyle,
  turnOnEmail,
  turnOnEmailStyle,
  email,
  facebook,
  twitter,
  youtube,
}) => {
  return (
    <>
      <Grid
        item
        sx={{
          padding: turnOnStyle ? widthPadding : '',
        }}
      >
          <a 
            href={facebook}
            target="_blank"
            rel="noreferrer"
            >
            <Box
              component="img"
              src={FacebookLogo}
              alt="Facebook logo"
              sx={{
                height: '20px',
                '@media only screen and (max-width: 600px)': {
                  height: '15px',
                },
              }}
            />
          </a>
        </Grid>
        <Grid
          item
          sx={{
            padding: turnOnStyle ? widthPadding : '',
          }}
        >
          <a 
            href={twitter}
            target="_blank"
            rel="noreferrer"
            >
            <Box
              component="img"
              src={TwitterLogo}
              // height="20px"
              alt="Twitter logo"
              sx={{
                height: '20px',
                '@media only screen and (max-width: 600px)': {
                  height: '15px',
                },
              }}
            />
          </a>
        </Grid>
        <Grid
          item
          sx={{
            padding: turnOnStyle ? widthPadding : '',
          }}
        >
          <a 
            href={youtube}
            target="_blank"
            rel="noreferrer"
            >
            <Box
              component="img"
              src={YoutTubeLogo} 
              height="20px"
              alt="YouTube logo"
              sx={{
                height: '20px',
                '@media only screen and (max-width: 600px)': {
                  height: '15px',
                },
              }}
            />
          </a>
        </Grid>
        {turnOnEmail && 
          <Grid
            item
            sx={{
              padding: turnOnEmailStyle ? '0px' : '10px 0px 16px 16px'
            }}
          >
            <CopyLinkComponent
              defaultColor={'#667A6E'}
              email={true}
              authorsEmail={email}
            />
          </Grid>
        }
    </>
  );
}

export type Props = {
  widthPadding?: string,
  turnOnStyle?: boolean,
  turnOnEmail?: boolean,
  turnOnEmailStyle?: boolean,
  email?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
};

export default SocialMediaComponent;
