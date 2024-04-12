import React from 'react';
import {
  Typography,
  Grid,
} from '@mui/material';
import HeaderComponent from '../../components/headerComponent/HeaderComponent';
import SocialMediaComponent from '../socialMediaComponent/SocialMediaComponent';
import { 
  AboutCompGridRoot,
  AboutCompGridSocialMediaStyle,
  AboutCompAboutTitle,
  AboutCompTitles,
  AboutCompAboutText,
  AboutCompAboutTextWithPAdding,
} from './AboutComponentStyles';

const AboutComponent: React.FC = () => {
  const aboutText = 'Gamers Shrine, is a hobbyist site from professional writes and software engineers and game enthusiast. This is passion project that will bring weakly articles along with update youtube videos that are connected to this website.';
  const reportIssueText = 'Let us know if you experience any issues on mobile or desktop. We are a small team but will have an engineer address the issue. Contact us by email and if you experienced it on mobile, include the make of the phone in the email. Thanks from our team.';

  return (
    <Grid
      container
      sx={AboutCompGridRoot}
    >
      <HeaderComponent
        title="Gamers Shrine"
        authorAvatar={false}
      />
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Typography
          variant="h6"
          sx={AboutCompAboutTitle}
        >
            About
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
          {aboutText}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Typography
          variant='h6'
          sx={AboutCompTitles}
        >
            Follow us on Social Media:
        </Typography>
        <Grid
          item
          sx={AboutCompGridSocialMediaStyle}
        >
          <SocialMediaComponent
            widthPadding={'0px 0px 0px 16px'}
            turnOnStyle={true}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Typography
          variant="h6"
          sx={AboutCompTitles}
        >
            Contact us on:
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h6"
            sx={AboutCompAboutTextWithPAdding}
          >
            GamersShrine.com
          </Typography> 
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          flex: 'auto',
        }}
      >
        <Typography
          variant="h6"
          sx={AboutCompTitles}
        >
            Report Issues:
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
          {reportIssueText}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Typography
          variant="h6"
          sx={AboutCompTitles}
        >
            Road Map:
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
          Update fonts throughout website
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
          Create careousel for homepage
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
          Overhaul to Article Page
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
            Dark Theme
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
            Mobile version 2.0
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
            Desktop version 2.0
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
            Interactive yearly magazine
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
          Migrate backend to .Net
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
          Allow user interaction on website
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          flex: 'auto',
        }}
      >
        <Typography
          variant="h6"
          sx={AboutCompTitles}
        >
            Built with open source technology:
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
            React
        </Typography>
        <Typography
          variant='h6'
          sx={AboutCompAboutText}
        >
          Express.js
        </Typography>
        <Typography
          variant="h6"
          sx={AboutCompAboutText}
        >
          MUI
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutComponent;
