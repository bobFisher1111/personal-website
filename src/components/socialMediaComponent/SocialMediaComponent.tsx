import React, {useState} from 'react';
import TwitterLogo from '../../assets/icons/TwitterLogo.svg';
import YoutTubeLogo from '../../assets/icons/YoutTubeLogo.png';
import FacebookLogo from '../../assets/icons/FacebookLogo.png';
import { Grid } from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import copyLink from '../../utilities/copyLink';

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
  const [emailIcon, setEmailIcon] = useState<string>('#667A6E');

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
            href={twitter}
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
            href={youtube}
            target="_blank"
            rel="noreferrer"
            >
            <img src={YoutTubeLogo} height="20px" alt="YouTube logo" />
          </a>
        </Grid>
        {turnOnEmail && <Grid
          item
          sx={{
            padding: turnOnEmailStyle ? '0px' : '10px 0px 16px 16px'
          }}
        >
          <EmailOutlinedIcon
            id="copyEmail"
            fontSize="large"
            sx={{
              color: emailIcon,
            }}
            onClick={() => copyLink(setEmailIcon, email)}
          />
        </Grid>}
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
