import { Fragment, useState } from "react";
import { Button, Drawer, Grid, Typography } from "@mui/material";
import { useAppSelector } from "src/store/redux/hooks";
import TermsOfServiceComponent from "src/usersAcceptanceComponent/termsOfServiceComponent/TermsOfServiceComponent";
import {
  DisclaimerTitleStyles,
  DrawerStyles,
} from "./TermsOfServiceDrawerStyles";

type Anchor = "left";

const anchors: readonly Anchor[] = ["left"];

const TermsOfServiceDrawer = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown" && "key" in event) {
        if (event.key === "Tab" || event.key === "Shift") {
          return;
        }
      }

      setState((prevState) => ({ ...prevState, [anchor]: open }));
    };

  return (
    <Grid>
      {anchors.map((anchor) => (
        <Fragment key={anchor}>
          <Grid>
            <Button
              size="small"
              type="button"
              aria-label="Open terms of service"
              onClick={toggleDrawer(anchor, true)}
            >
              <Typography
                color="primary"
                sx={DisclaimerTitleStyles(darkTheme)}
              >
                Terms of Service
              </Typography>
            </Button>
          </Grid>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={DrawerStyles(darkTheme)}
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
