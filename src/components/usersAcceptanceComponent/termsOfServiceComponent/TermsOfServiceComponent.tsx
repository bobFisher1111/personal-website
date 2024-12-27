import React, { FC } from 'react';
import {
  Button,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import CloseIcon from '@mui/icons-material/Close';
import {
  CloseButtonStyles,
  CloseGridRootStyles,
  // CloseGridStyles,
  CloseIconButtonStyles,
  GridStyles,
  MarginGridStyles,
  RootStyles,
  TitleStyles,
  UserAgreementTitleStyles,
} from './TermsOfServiceComponentStyles';

const TermsOfServiceComponent: FC<Props> = ({
  closeDrawer,
}) => {
  const Subtitle: string = "Please read this agreement carefully. It sets forth legally binding terms and conditions for your use of the services, as defined below.";
  const AgreementBetweenUserAndGamersShrine = "By entering our website you agree to not sue for any reason. This is a hobbyist site created by a group of friends. We may get information wrong and it’s always up to the user to do additional research verifying what we are saying is correct. We offer news, reviews, and tutorials. Not responsible if information given causes any damages or wrong. Before taking our information and applying it, it’s up to you to verify it’s correct. We also believe in freedom of speech and if you disagree with anything above. Do not enter the website.";
  const ChildrenUnderThirteen = "Gamers Shrine does not knowingly collect, either online or offline, personal information from persons under the age of thirteen. If you are under 18, you may use https://www.gamersshrine.com/ only with permission of a parent or guardian.";
  const LinksThirdPartySites = `https://www.gamersshrine.com/may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of Gamer Shrine and Gamer Shrine is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. GS is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Gamer Shrine of the site or any association with it.`;
  const LiabilityDisclaimerPartOne = "THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. GAMERS SHRINE AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.";
  const LiabilityDisclaimerPartTwo = `GAMERS SHRINE AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. GAMERS SHRINE AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.`;
  const InternationalUsers = "The Service is controlled, operated and administered by Gamers Shrine from our offices within the USA. If you access the Service from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the Gamers Shrine Content accessed through https://www.gamersshrine.com/ in any country or in any manner prohibited by any applicable laws, restrictions or regulations.";
  const ChangesToTerms = "Gamers Shrine reserves the right, in its sole discretion, to change the Terms under which https://www.gamersshrine.com/ is offered. The most current version of the Terms will supersede all previous versions. Gamers Shrine encourages you to periodically review the Terms to stay informed of our";
  const ContactUS = "Gamers Shrine welcomes your questions or comments regarding the Terms: Email Address: gamersshrine1@gmail.com";

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={RootStyles}
    >
      <Grid
        container
        size={12}
        sx={MarginGridStyles}
      >
        <Grid
          size={10}
          sx={GridStyles}
        >
          <Typography
            color="primary"
            sx={TitleStyles}
          >
            Disclaimer Terms of Service
          </Typography>
        </Grid>
        <Grid
          size={2}
        >
          <Button
            color="primary"
            onClick={closeDrawer}
            sx={CloseIconButtonStyles}
          >
            <CloseIcon
              color="primary"
            />
          </Button>
        </Grid>
        <Typography
          color="primary"
        >
          Effective Date: June 13, 2024
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={MarginGridStyles}
      >
        <Typography
          color="primary"
        >
          {Subtitle}
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={GridStyles}
      >
        <Typography
          color="primary"
          sx={UserAgreementTitleStyles}
        >
          Agreement between User and Gamers Shrine
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={MarginGridStyles}
      >
        <Typography
          color="primary"
        >
          {AgreementBetweenUserAndGamersShrine}
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={GridStyles}
      >
        <Typography
          color="primary"
          sx={TitleStyles}
        >
          Children Under Thirteen
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={MarginGridStyles}
      >
        <Typography
          color="primary"
        >
          {ChildrenUnderThirteen}
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={GridStyles}
      >
        <Typography
          color="primary"
          sx={TitleStyles}
        >
          Links to Third Party Sites/Third Party Services
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={MarginGridStyles}
      >
        <Typography
          color="primary"
        >
          {LinksThirdPartySites}
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={GridStyles}
      >
        <Typography
          color="primary"
          sx={TitleStyles}
        >
          Liability Disclaimer
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={MarginGridStyles}
      >
        <Typography
          color="primary"
        >
          {LiabilityDisclaimerPartOne}
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={MarginGridStyles}
      >
        <Typography
          color="primary"
        >
          {LiabilityDisclaimerPartTwo}
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={GridStyles}
      >
        <Typography
          color="primary"
          sx={TitleStyles}
        >
          International Users
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={MarginGridStyles}
      >
        <Typography
          color="primary"
        >
          {InternationalUsers}
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={GridStyles}
      >
        <Typography
          color="primary"
          sx={TitleStyles}
        >
          Changes to Terms
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={MarginGridStyles}
      >
        <Typography
          color="primary"
        >
          {ChangesToTerms}
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={GridStyles}
      >
        <Typography
          color="primary"
          sx={TitleStyles}
        >
          Contact US
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={MarginGridStyles}
      >
        <Typography
          color="primary"
        >
          {ContactUS}
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={CloseGridRootStyles}
      >
        <Button
          color="primary"
          variant="contained"
          onClick={closeDrawer}
          sx={CloseButtonStyles}
        >
          Close
        </Button>
      </Grid>
    </Grid>
  );
};

export type Props = {
  closeDrawer: any;
};

export default TermsOfServiceComponent;
