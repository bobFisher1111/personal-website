import { Fragment, useState } from 'react';
import {
  Drawer,
  Grid,
} from '@mui/material';
import TermsOfServiceComponent from 'src/components/usersAcceptanceComponent/termsOfServiceComponent/TermsOfServiceComponent';
import { 
  // DisclaimerTitleStyles,
  DrawerStyles,
} from './TermsOfServiceDrawerStyles';

type Anchor = 'left';

const TermsOfServiceDrawer = () => {
  // const theme = useSelector((state: any) => state.theme.darkTheme);

  const [state, setState] = useState({
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
          <Grid>
            {/* <Typography
              aria-label="Menu for Sections Mobile"
              onClick={toggleDrawer(anchor, true)}
              color="primary"
              sx={DisclaimerTitleStyles(theme)}
            >
              Disclaimer1
            </Typography> */}
          </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={DrawerStyles}
          >
            <TermsOfServiceComponent
              closeDrawer={toggleDrawer(anchor, false)}
            />
          </Drawer>
        </Fragment>
      ))}
    </Grid>
  );
};

export default TermsOfServiceDrawer;
