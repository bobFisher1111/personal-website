import React from 'react';
import {
    Grid,
    SwipeableDrawer,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SectionComponent from '../../../components/sectionComponent/SectionComponent';
import { GridSectionList, GridHoverBlack } from '../../../styles/GridStyles';
import { TypographyHoverBlack } from '../../../styles/TypographyStyles';

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
    <GridSectionList
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      spacing={2}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <SectionComponent
        homePage={false}
      />
    </GridSectionList>
  );

  return (
    <div>
      <GridHoverBlack
        container
        onClick={toggleDrawer(true)}
        sx={{
          "&:hover": {
            color: "white",
          },
        }}
      >
        <TypographyHoverBlack>
        <Grid
          container
        >
            Sections
            {state ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Grid>
        </TypographyHoverBlack>
      </GridHoverBlack>
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
