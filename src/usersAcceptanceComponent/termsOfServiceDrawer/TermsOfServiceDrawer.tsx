import { Fragment, useState } from 'react';
import {
  Button,
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import TermsOfServiceComponent from 'src/usersAcceptanceComponent/termsOfServiceComponent/TermsOfServiceComponent';
import { 
  DisclaimerTitleStyles,
  DrawerStyles,
} from './TermsOfServiceDrawerStyles';

type Anchor = 'left';

const TermsOfServiceDrawer = () => {
  const theme = useSelector((state: any) => state.theme.darkTheme);

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
            <Button size="small">
              <Typography
                aria-label="User Agreement terms of service"
                onClick={toggleDrawer(anchor, true)}
                color="primary"
                sx={DisclaimerTitleStyles(theme)}
              >
                Terms of Service
              </Typography>
            </Button>
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
