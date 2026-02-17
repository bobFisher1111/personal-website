import React, { Fragment} from 'react';
import {
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import CookiesManagementComponent from 'src/components/usersAcceptanceComponent/cookiesManagementComponent/CookiesManagementComponent';
import {
  DrawerStyles,
  SettingTitleStyles,
} from './CookiesManagementDrawerStyles';

type Anchor = 'left';

const CookiesManagementDrawer = ({
  closeParentDrawer,
  optionalCookie,
}: Props) => {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        (event.type === 'keydown') &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState((prev) => ({ ...prev, [anchor]: open }));
    };

  const closeDrawerProgrammatically = (anchor: Anchor) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setState((prev) => ({ ...prev, [anchor]: false }));
  };

  const handleDrawerClose = (anchor: Anchor) => (
    _event: {},
    _reason: 'backdropClick' | 'escapeKeyDown',
  ) => {
    closeDrawerProgrammatically(anchor);
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
				    onClose={handleDrawerClose(anchor)}
            ModalProps={{
              disableAutoFocus: true,
              disableEnforceFocus: true,
              disableRestoreFocus: true,
            }}
            sx={DrawerStyles}
          >
            <CookiesManagementComponent
					    closeDrawer={() => closeDrawerProgrammatically(anchor)}
              optionalCookies={optionalCookie}
            />
          </Drawer>
        </Fragment>
      ))}
    </Grid>
  );
};

export type Props = {
  closeParentDrawer: () => void,
  optionalCookie: () => void,
};

export default CookiesManagementDrawer;
