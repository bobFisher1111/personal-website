import React from 'react';
import {
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  styled,
  Checkbox,
} from "@mui/material";
import DarkTextField from "../../themes/DarkThemes";

// future updates. UI Changes example: https://nova.apple.com/business/

// https://www.youtube.com/watch?v=sGQSz22U8VM 

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
    <Box
      sx={{
        background: '#282c34',
        minHeight: '100vh',
        padding: '32px 16px 32px 0px',
        display: 'flex'
      }}
    >
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ 
        display: 'flex',
        maxWidth: "1024px",
        margin: 'auto', 
        paddingTop: '30px',
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
            color: 'white',
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
          color: 'white',
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
        <BlueCheckBox
        />
      </Grid>
      <Grid item>
          <Typography
            sx={{ 
              color: 'white'
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
        sx={{
          color: 'white',
          borderColor: '#2F4C69',
        }}
          variant="outlined"
          >Submit
        </Button>
      </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
