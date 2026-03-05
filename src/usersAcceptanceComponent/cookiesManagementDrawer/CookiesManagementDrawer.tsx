import React, { Fragment } from "react";
import { Drawer, Grid, Typography } from "@mui/material";
import type { DrawerProps } from "@mui/material/Drawer";
import CookiesManagementComponent from "src/usersAcceptanceComponent/cookiesManagementComponent/CookiesManagementComponent";
import {
  DrawerStyles,
  SettingTitleStyles,
} from "./CookiesManagementDrawerStyles";

type Anchor = "left";

const anchors: readonly Anchor[] = ["left"];

type DrawerOnClose = Required<DrawerProps>["onClose"];

const CookiesManagementDrawer = ({
  closeParentDrawer,
  optionalCookie,
}: Props) => {
  const [state, setState] = React.useState({
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

      setState((prev) => ({ ...prev, [anchor]: open }));
    };

  const closeDrawerProgrammatically = (anchor: Anchor) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setState((prev) => ({ ...prev, [anchor]: false }));
  };

  const handleDrawerClose = (anchor: Anchor): DrawerOnClose =>
    (_event, _reason) => {
      closeDrawerProgrammatically(anchor);
    };

  return (
    <Grid>
      {anchors.map((anchor) => (
        <Fragment key={anchor}>
          <Grid onClick={closeParentDrawer}>
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
  closeParentDrawer: () => void;
  optionalCookie: () => void;
};

export default CookiesManagementDrawer;
