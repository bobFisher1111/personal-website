import React, { Fragment} from 'react';
import {
  Drawer,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import CookiesManagementComponent from '../cookiesManagementComponent/CookiesManagementComponent';
import {
  DrawerStyles,
  SettingTitleStyles,
} from './CookiesManagementDrawerStyles';

type Anchor = 'left';

const CookiesManagementDrawer: React.FC<Props> = ({
  closeParentDrawer,
  optionalCookie,
}) => {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  return (
    <Grid>
      {(['left'] as const).map((anchor) => (
        <Fragment 
          key={anchor}
        >
          <Grid
            onClick={closeParentDrawer}
          >
            <Typography
              aria-label="Menu for Sections Mobile"
              color="primary"
              onClick={toggleDrawer(anchor, true)}
              sx={SettingTitleStyles}
            >
              Settings
            </Typography>
          </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={DrawerStyles}
          >
            <CookiesManagementComponent
              closeDrawer={toggleDrawer(anchor, false)}
              optionalCookies={optionalCookie}
            />
          </Drawer>
        </Fragment>
      ))}
    </Grid>
  );
};

export type Props = {
  closeParentDrawer: any,
  optionalCookie: any,
};

export default CookiesManagementDrawer;
