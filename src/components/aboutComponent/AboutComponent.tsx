import React from 'react';
import {
  Typography,
  Grid,
  styled,
  Checkbox,
} from "@mui/material";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import SocialMediaComponent from '../socialMediaComponent/SocialMediaComponent';
import CopyLinkComponent from '../copyLinkComponent/CopyLinkComponent';

// future updates. UI Changes example: https://nova.apple.com/business/
// https://www.youtube.com/watch?v=sGQSz22U8VM 
// https://stackoverflow.com/questions/7381150/how-to-send-an-email-from-javascript // look at this

const AboutComponent: React.FC<Props> = () => {

  const contactDescription = "Thank you for reaching out, we are looking forward to hearing from you. From the team at React2Python.";

  // move this to themes later on, user later if implement email
  const BlueCheckBox = styled(Checkbox) ({
    padding: '0',
    color: '#2F4C69',
      '&.MuiCheckbox-root': {
        '&.Mui-checked': {
          color: '#2F4C69'
        }
      }
  });

  const aboutText = 'React2Pyhton, is a hobbyist site from professional writes and software engineers and game enthusiast. This is passion project that will bring weakly articals along with update youtube videos that are connected to this website.';

  return (
    <Grid
      container
      sx={{
        background: '#fff',
        display: 'flex',
        margin: 'auto',
        padding: '36px 24px 0px 24px',
        maxWidth: "1024px",
      }}
    >
      <HeaderComponent
        title='React2Python'
        authorAvatar={false}
      />
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
            style={{
              fontSize: '24px',
              textAlign: 'center',
              color: '#2F4C69',
              padding: '75px 0px 8px 0px',
            }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#667A6E',
            }}
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
          sx={{
            flex: 'auto',
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: '24px',
              textAlign: 'center',
              color: '#2F4C69',
              padding: '35px 0px 12px 0px',
            }}
          >
            Follow us on Social Media:
          </Typography>
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
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
          sx={{
            flex: 'auto',
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontSize: '24px',
              textAlign: 'center',
              color: '#2F4C69',
              padding: '35px 0px 0px 0px',
            }}
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
            style={{
              textAlign: 'center',
              color: '#667A6E',
              padding: '0px 8px 0px 0px',
            }}
          >
            react2python.com
          </Typography>
          {<CopyLinkComponent
              defaultColor={'#667A6E'}
              email={true}
              authorsEmail={'react2python.com'}
            />
        } 
          </Grid>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#667A6E',
              // padding: '0px 0px 12px 0px',
            }}
          >
            Discord
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
            style={{
              fontSize: '24px',
              textAlign: 'center',
              color: '#2F4C69',
              padding: '35px 0px 0px 0px',
            }}
          >
            Report Issues:
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#667A6E',
            }}
          >
            Let us know if you experience any issues on mobile or desktop. We are a small team but will have an engineer address the issue.
            Contact us by email and if you experienced it on mobile, include the make of the phone in the email. Thanks from our team.
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
            style={{
              fontSize: '24px',
              textAlign: 'center',
              color: '#2F4C69',
              padding: '35px 0px 0px 0px',
            }}
          >
            Road Map:
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#667A6E',
            }}
          >
            Create carousel for header
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#667A6E',
            }}
          >
            Overhaul to Artical Page
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#667A6E',
            }}
          >
            Dark Theme
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#667A6E',
            }}
          >
            Mobile version 2.0
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#667A6E',
            }}
          >
            Desktop version 2.0
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#667A6E',
            }}
          >
            Interactive yearly magazine
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
            style={{
              fontSize: '24px',
              textAlign: 'center',
              color: '#2F4C69',
              padding: '35px 0px 0px 0px',
            }}
          >
            Built with open source technology:
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#76468c',
            }}
          >
            React
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#76468c',
            }}
          >
            .Net
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#76468c',
            }}
          >
            MUI
          </Typography>
        </Grid>
      </Grid>
  );
}

export type Props = {};

export default AboutComponent;
