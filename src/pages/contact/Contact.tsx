import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Button,
  styled,
  Checkbox,
} from "@mui/material";
import DarkTextField from "../../themes/DarkThemes";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";

// future updates. UI Changes example: https://nova.apple.com/business/
// https://www.youtube.com/watch?v=sGQSz22U8VM 
// https://stackoverflow.com/questions/7381150/how-to-send-an-email-from-javascript // look at this

const Contact = () => {

  const contactDescription = "Thank you for reaching out, we are looking forward to hearing from you. From the team at React2Python.";

  // move this to themes later on
  const BlueCheckBox = styled(Checkbox) ({
    padding: '0',
    color: '#2F4C69',
      '&.MuiCheckbox-root': {
        '&.Mui-checked': {
          color: '#2F4C69'
        }
      }
  });

  return (
    <Grid
      container
      sx={{
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        // paddingBottom: '200px',
        margin: 'auto',
        padding: '36px 24px 0px 24px',
        // maxWidth: "1024px",
      }}
    >
      <HeaderComponent
        title='React2Python'
        backgroundColor='white'
        fontColor='#2F4C69'
        lineHeight={'40px'}
        fontSize={'32px'}
        authorAvatar={false}
        headerTopPadding={true}
      />
    {/* <Box
      sx={{
        background: 'white',
        minHeight: '100vh',
        padding: '32px 16px 32px 0px',
        display: 'flex'
      }}
    > */}
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{ 
          display: 'flex',
          maxWidth: "1024px",
          margin: 'auto', 
          paddingTop: '30px',
          paddingBottom: '200px',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            flex: 'auto',
          }}
        >
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              color: '#2F4C69',
              padding: '75px 0px 12px 0px',
            }}
          >
            Contact US
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            flex: 'auto',
            paddingBottom: '75px',
          }}
        >
          <Typography
            sx={{
              color: '#667A6E',
              textAlign: 'center'
            }}
          >
            {contactDescription}
          </Typography>
        </Grid>
        <Grid
          item
          justifyContent="flex-start"
        >
          <DarkTextField 
            label="First Name"
            size="small"
          />
        </Grid>
        <Grid
          item
          justifyContent="flex-end"
          alignItems="center"
        >
          <DarkTextField 
            label="Last Name"
            size="small"
          />
        </Grid>
        <Grid 
          item
          justifyContent="flex-start"
          xs={12}
        >
          <DarkTextField
              fullWidth
              label="Email" 
              size="small"
          />
        </Grid>
        <Grid 
          item
          justifyContent="flex-start"
          xs={12}
        >
          <DarkTextField
            label="Subject" 
            multiline
            rows={4}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid
          item
          sx={{ padding: '-16px'}}
        >
          <BlueCheckBox />
        </Grid>
        <Grid item>
          <Typography
            sx={{ 
              color: '#667A6E'
            }}
          >
            Opt in to receive future posts
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Button
            variant="outlined"
            sx={{
              color: 'black',
              borderColor: '#2F4C69',
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    {/* </Box> */}
    </Grid>
  );
}

export default Contact;
