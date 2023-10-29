import React from 'react';
import {
  Grid,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SectionComponent from '../../../components/sectionComponent/SectionComponent';
import { 
  GridHoverBlack,
  GridSectionList,
  TypographyHoverBlack,
} from './SectionsDropDownStyles';

const SectionsDropDown: React.FC = () => {
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
      sx={GridSectionList}
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
        sx={GridHoverBlack}
      >
        <Typography
          sx={TypographyHoverBlack}
        >
          <Grid
            container
          >
            Sections
            {state ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Grid>
        </Typography>
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
};

export default SectionsDropDown;
