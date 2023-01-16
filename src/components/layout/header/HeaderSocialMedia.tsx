import React from 'react';
import TwitterLogo from '../../../assets/icons/TwitterLogo.svg';
import YoutTubeLogo from '../../../assets/icons/YoutTubeLogo.png';
import FacebookLogo from '../../../assets/icons/FacebookLogo.png';
import { Grid } from "@mui/material";

const HeaderSocialMedia = () => {
  const facebookUrl = 'https://www.facebook.com/';
  const twitterUrl = 'https://twitter.com/';
  const youtubeUrl = 'https://www.youtube.com/';
  return (
    <>
      <Grid item>
          <a href={facebookUrl} target="_blank">
            <img src={FacebookLogo} height="20px" alt="Facebook logo" />
          </a>
        </Grid>
        <Grid item>
          <a href={twitterUrl} target="_blank">
            <img src={TwitterLogo} height="20px" alt="Twitter logo" />
          </a>
        </Grid>
        <Grid item>
          <a href={youtubeUrl} target="_blank">
            <img src={YoutTubeLogo} height="20px" alt="YouTube logo" />
          </a>
        </Grid>
    </>
  );
}

export default HeaderSocialMedia;
