import React from 'react';
import {
    Typography,
    Grid,
    SwipeableDrawer,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SectionComponent from '../../sectionComponent/SectionComponent';

const SectionsDropDown = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState(open);
    };

  const sectionList = () => (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      spacing={2}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ 
       background: 'white',
       borderBottom: '3px solid #667A6E',
       padding: '37px',
       '&.MuiGrid-root': {
        marginTop: '0px'
      },
     }}
    >
      <SectionComponent
        homePage={false}
      />
    </Grid>
  );

  return (
    <div>
      <Grid
        container
        onClick={toggleDrawer(true)}
        sx={{
            "&:hover": {
                color: "black",
            },
        }}
      >
            <Typography
            sx={{
              color: "white",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Sections
          </Typography>
          <KeyboardArrowDownIcon />
        </Grid>
        <SwipeableDrawer
            anchor={'top'}
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {sectionList()}
          </SwipeableDrawer>
    </div>
  );
}

export default SectionsDropDown;
