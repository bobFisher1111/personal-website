import React, {useState} from 'react';
import TwitterLogo from '../../assets/icons/TwitterLogo.svg';
import YoutTubeLogo from '../../assets/icons/YoutTubeLogo.png';
import FacebookLogo from '../../assets/icons/FacebookLogo.png';
import { Grid } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const SocialMediaComponent: React.FC<Props> = ({
  widthPadding,
  turnOnStyle,
  turnOnEmail,
}) => {
  const [emailIcon, setEmailIcon] = useState<string>('#667A6E');
  const facebookUrl = 'https://www.facebook.com/';
  const twitterUrl = 'https://twitter.com/';
  const youtubeUrl = 'https://www.youtube.com/';
  const copyEmail = () => {
    const copy = navigator.clipboard.writeText('bobthefisher@gmail.com');
    setEmailIcon('#2F4C69');
    return copy;
  }
  return (
    <>
      <Grid
        item
        sx={{
          padding: turnOnStyle ? widthPadding : '',
        }}
      >
          <a 
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            >
            <img src={FacebookLogo} height="20px" alt="Facebook logo" />
          </a>
        </Grid>
        <Grid
          item
          sx={{
            padding: turnOnStyle ? widthPadding : '',
          }}
        >
          <a 
            href={twitterUrl}
            target="_blank"
            rel="noreferrer"
            >
            <img src={TwitterLogo} height="20px" alt="Twitter logo" />
          </a>
        </Grid>
        <Grid
          item
          sx={{
            padding: turnOnStyle ? widthPadding : '',
          }}
        >
          <a 
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
            >
            <img src={YoutTubeLogo} height="20px" alt="YouTube logo" />
          </a>
        </Grid>
        {turnOnEmail && <Grid
          item
          sx={{
            // padding: turnOnStyle ? widthPadding : '',
            padding: '10px 0px 16px 16px'
          }}
        >
          <EmailOutlinedIcon
            id="copyEmail"
            fontSize="large"
            sx={{
              color: emailIcon,
            }}
            onClick={copyEmail}
          />
        </Grid>}
    </>
  );
}

export type Props = {
  widthPadding?: string,
  turnOnStyle?: boolean,
  turnOnEmail?: boolean,
};

export default SocialMediaComponent;
