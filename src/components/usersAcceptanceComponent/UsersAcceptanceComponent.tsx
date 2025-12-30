import { Fragment, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import UserAcceptanceTextMessage from 'src/components/usersAcceptanceComponent//userAcceptanceTextMessage/UserAcceptanceTextMessage';
import Grid from '@mui/material/Grid';
import { userAgreementValue } from 'src/config';

type Anchor = 'bottom';
// Come back to this later, and refactor and also constants file sheet
const UsersAcceptanceComponent = () => {
  const [state, setState] = useState(() =>(
    localStorage.getItem('userAgreement') !== `${userAgreementValue}`) ? { bottom: true} : {bottom: false}
  );
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
        setState({ [anchor]: open });
      };

  return (
    <Grid>
      {(['bottom'] as const).map((anchor) => (
        <Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, true)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <UserAcceptanceTextMessage
              closeDrawer={toggleDrawer(anchor, false)}
              setStateStatus={setState}
            />
          </SwipeableDrawer>
        </Fragment>
      ))}
    </Grid>
  );
};

export default UsersAcceptanceComponent;
