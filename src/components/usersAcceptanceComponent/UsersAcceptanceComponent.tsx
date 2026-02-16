import { Fragment, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import UserAcceptanceTextMessage from 'src/components/usersAcceptanceComponent/userAcceptanceTextMessage/UserAcceptanceTextMessage';
import Grid from '@mui/material/Grid';
import { userAgreementValue } from 'src/config';

type Anchor = 'bottom';
// Come back to this later, and refactor and also constants file sheet
const UsersAcceptanceComponent = () => {
  const [state, setState] = useState(() =>(
    localStorage.getItem('userAgreement') !== `${userAgreementValue}`) ? { bottom: true} : {bottom: false}
  );

	const closeDrawerProgrammatically = (anchor: Anchor) => {
		if (document.activeElement instanceof HTMLElement) {
			document.activeElement.blur();
		}
		setState({ [anchor]: false });
	};

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
			if (!open && document.activeElement instanceof HTMLElement) {
				document.activeElement.blur();
			}
        setState({ [anchor]: open });
      };

  return (
    <Grid>
      {(['bottom'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={() => closeDrawerProgrammatically(anchor)}
            onOpen={toggleDrawer(anchor, true)}
				ModalProps={{
					disableAutoFocus: true,
					disableEnforceFocus: true,
					disableRestoreFocus: true,
				}}
          >
            <UserAcceptanceTextMessage
					    closeDrawer={() => closeDrawerProgrammatically(anchor)}
            />
          </SwipeableDrawer>
        </Fragment>
      ))}
    </Grid>
  );
};

export default UsersAcceptanceComponent;
