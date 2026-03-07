import React, { Fragment } from "react";
import { Button, Drawer, Grid, Typography } from "@mui/material";
import type { DrawerProps } from "@mui/material/Drawer";
import type { SxProps, Theme } from "@mui/material/styles";
import { useAppSelector } from "src/store/redux/hooks";
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
  triggerButtonSx,
}: Props) => {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);
  const [state, setState] = React.useState({
    left: false,
  });

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
          <Button
            type="button"
            aria-label="Open cookie settings"
            variant="outlined"
            color="primary"
            onClick={() => {
              closeParentDrawer();
              setState((prev) => ({ ...prev, [anchor]: true }));
            }}
            sx={triggerButtonSx ?? {}}
          >
            <Typography color="primary" sx={SettingTitleStyles}>
              Settings
            </Typography>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={handleDrawerClose(anchor)}
            ModalProps={{
              disableAutoFocus: true,
              disableEnforceFocus: true,
              disableRestoreFocus: true,
            }}
            sx={DrawerStyles(darkTheme)}
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
  triggerButtonSx?: SxProps<Theme>;
};

export default CookiesManagementDrawer;
