import React, { FC, Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import TermsOfServiceComponent from '../termsOfServiceComponent/TermsOfServiceComponent';
import { 
  DisclaimerTitleStyles,
  DrawerStyles,
} from './TermsOfServiceDrawerStyles';

type Anchor = 'left';

const TermsOfServiceDrawer: FC<Props> = ({mobile}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);

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
          <Grid>
            <Typography
              aria-label="Menu for Sections Mobile"
              onClick={toggleDrawer(anchor, true)}
              color="primary"
              sx={DisclaimerTitleStyles(mobile, theme)}
            >
              Disclaimer
            </Typography>
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

export type Props = {
  mobile?: boolean,
};

export default TermsOfServiceDrawer;
