import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import CopyLinkComponent from 'src/components/copyLinkComponent/CopyLinkComponent';
import TwitterLogo from 'src/assets/icons/logo-black.png';
import TwitterLogoDark from 'src/assets/icons/logo-white.png';
import YoutTubeLogo from 'src/assets/icons/YoutTubeLogo.png';
import YoutTubeLogoDark from 'src/assets/icons/yt_icon_mono_dark.png';
// import FacebookLogo from 'src/assets/icons/FacebookLogo.png';
import {
  socialMediaIconStyle,
  socialMediaGridItemStyle,
  emailGridStyle,
} from './SocialMediaComponentStyles';

const SocialMediaComponent = ({
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
}: Props) => {
  const colorTheme = useSelector((state: any) => state.theme.darkTheme);
  const theme = useTheme();

  return (
    <Grid container justifyContent={justifyContent} alignContent={alignContent}>
      {/* Facebook section is commented out */}
      {/* <Grid sx={socialMediaGridItemStyle(muiTheme, widthPadding, turnOnStyle)}>
        <a href={facebook} target="_blank" rel="noreferrer">
          <Box
            component="img"
            src={darkTheme ? FacebookLogoDark : FacebookLogo}
            alt="Facebook logo"
            sx={socialMediaIconStyle(muiTheme)}
          />
        </a>
      </Grid> */}

      {/* <Grid sx={socialMediaGridItemStyle(theme, widthPadding, turnOnStyle)}>
        <a href={twitter} target="_blank" rel="noreferrer" aria-label="X logo">
          <Box
            component="img"
            src={colorTheme ? TwitterLogoDark : TwitterLogo}
            alt="X logo"
            sx={socialMediaIconStyle(theme)}
          />
        </a>
      </Grid>

      <Grid sx={socialMediaGridItemStyle(theme, widthPadding, turnOnStyle)}>
        <a href={youtube} target="_blank" rel="noreferrer" aria-label="YouTube logo">
          <Box
            component="img"
            src={colorTheme ? YoutTubeLogoDark : YoutTubeLogo}
            alt="YouTube logo"
            sx={socialMediaIconStyle(theme)}
          />
        </a>
      </Grid> */}

      {turnOnEmail && (
        <Grid sx={emailGridStyle(turnOnEmailStyle)}>
          <CopyLinkComponent email authorsEmail={email} />
        </Grid>
      )}
    </Grid>
  );
};

export type Props = {
  widthPadding?: string;
  turnOnStyle?: boolean;
  turnOnEmail?: boolean;
  turnOnEmailStyle?: boolean;
  email?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  justifyContent: string;
  alignContent: string;
};

export default SocialMediaComponent;
