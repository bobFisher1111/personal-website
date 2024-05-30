import React from 'react';
import { useSelector } from 'react-redux';
import TwitterLogo from '../../assets/icons/logo-black.png';
import TwitterLogoDark from '../../assets/icons/logo-white.png';
import YoutTubeLogo from '../../assets/icons/YoutTubeLogo.png';
import YoutTubeLogoDark from '../../assets/icons/yt_icon_mono_dark.png';
// import FacebookLogo from '../../assets/icons/FacebookLogo.png';
import { Grid, Box } from '@mui/material';
import CopyLinkComponent from '../copyLinkComponent/CopyLinkComponent';

const SocialMediaComponent: React.FC<Props> = ({
  widthPadding,
  turnOnStyle,
  turnOnEmail,
  turnOnEmailStyle,
  email,
  // facebook,
  twitter,
  youtube,
  justifyContent,
  alignContent,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);

  return (
    <Grid 
      container
      justifyContent={justifyContent}
      alignContent={alignContent}
    >
      {/* <Grid
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
      </Grid> */}
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
          aria-label="X logo"
        >
          <Box
            component="img"
            src={theme ? TwitterLogoDark : TwitterLogo}
            alt="X logo"
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
          aria-label="youtube logo"
        >
          <Box
            component="img"
            src={theme ? YoutTubeLogoDark : YoutTubeLogo} 
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
              padding: turnOnEmailStyle ? '0px' : '10px 0px 16px 16px',
              alignContent: 'center',
            }}
          >
            <CopyLinkComponent
              email={true}
              authorsEmail={email}
            />
          </Grid>
      }
    </Grid>
  );
};

export type Props = {
  widthPadding?: string,
  turnOnStyle?: boolean,
  turnOnEmail?: boolean,
  turnOnEmailStyle?: boolean,
  email?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  justifyContent: string,
  alignContent: string,
};

export default SocialMediaComponent;
