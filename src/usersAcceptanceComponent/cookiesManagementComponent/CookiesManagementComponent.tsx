import { useId, useState } from "react";
import type { ChangeEvent } from "react";
import { Button, Grid, Switch, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "src/store/redux/hooks";
import { userAgreementValue } from "src/config";
import {
  AcceptButtonStyles,
  AcceptGridButtonStyles,
  CloseIconButtonStyles,
  CloseIconGridStyles,
  CookieGridSwitchStyles,
  CookieSettingsTitleStyles,
  CookieSettingGridStyles,
  CookieTextStyles,
  CookiesTitleAndCloseStyles,
  CookiesManagementTextStyles,
  GridRootButtonStyles,
  RejectButtonStyles,
  RejectGridButtonStyles,
  RootStyles,
  ToggleOnRootStyles,
  ToggleOnGridStyles,
  ToggleOnOffGridStyles,
  ToggleOnOffTitleStyles,
} from "./CookiesManagementComponentStyles";

const CookiesManagementComponent = ({
  closeDrawer,
  optionalCookies,
}: Props) => {
  const idBase = useId();
  const isDarkTheme = useAppSelector((state) => state.theme.darkTheme);
  const [darkModeToggle, setDarkModeToggle] = useState<boolean>(
    localStorage.getItem("darkMode") === "true" ? true : false,
  );
  const [userAgreementsToggle, setUserAgreementsToggle] =
    useState<boolean>(false);
  const cookiesManagementText: string =
    "When visiting our website, we will store cookies for functionality. Without these cookies certain features will be disabled.";

  const darkModeSwtich = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      setDarkModeToggle(true);
    }
    if (event.target.checked === false) {
      setDarkModeToggle(false);
    }
    if (
      event.target.checked === false &&
      localStorage.getItem("darkMode") !== null
    ) {
      localStorage.removeItem("darkMode");
      setDarkModeToggle(false);
    }
  };

  const userAgreementSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      setUserAgreementsToggle(true);
    }
    if (event.target.checked === false) {
      setUserAgreementsToggle(false);
    }
  };

  const accpetedCookies = () => {
    if (darkModeToggle) {
      localStorage.setItem("darkMode", "false");
    }
    if (userAgreementsToggle) {
      localStorage.setItem("userAgreement", `${userAgreementValue}`);
    }
  };

  const rejectOptionalCookies = () => {
    if (localStorage.getItem("darkMode") !== null) {
      localStorage.removeItem("darkMode");
    }
    if (localStorage.getItem("userAgreement") !== null) {
      localStorage.removeItem("userAgreement");
    }

    setDarkModeToggle(false);
    setUserAgreementsToggle(false);
    optionalCookies();
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={RootStyles}
    >
      <Grid container size={12} sx={CookiesTitleAndCloseStyles}>
        <Grid
          size={{
            xs: 6,
          }}
          sx={CookieSettingGridStyles}
        >
          <Typography color="primary" sx={CookieSettingsTitleStyles}>
            Cookies Settings
          </Typography>
        </Grid>
        <Grid
          size={{
            xs: 6,
          }}
          sx={CloseIconGridStyles}
        >
          <Button
            color="primary"
            aria-label="Close cookie settings"
            type="button"
            onClick={() => {
              rejectOptionalCookies();
              closeDrawer();
            }}
            sx={CloseIconButtonStyles}
          >
            <CloseIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid size={12} sx={CookiesManagementTextStyles}>
        <Typography color="primary">{cookiesManagementText}</Typography>
      </Grid>
      <Grid size={12} sx={ToggleOnOffGridStyles}>
        <Typography color="primary" sx={ToggleOnOffTitleStyles}>
          Toggle on and off Cookies
        </Typography>
      </Grid>
      <Grid container size={12} sx={ToggleOnRootStyles(isDarkTheme)}>
        <Grid size={6} sx={ToggleOnGridStyles}>
          <Typography
            id={`${idBase}-user-agreement-cookie-label`}
            color="primary"
            sx={CookieTextStyles}
          >
            User Agreement Cookie
          </Typography>
        </Grid>
        <Grid size={6} sx={CookieGridSwitchStyles}>
          <Switch
            checked={userAgreementsToggle}
            onChange={(e) => userAgreementSwitch(e)}
            slotProps={{
              input: {
                "aria-labelledby": `${idBase}-user-agreement-cookie-label`,
              },
            }}
          />
        </Grid>
        <Typography color="primary">
          Used for accepting agreement and will only be seen again if an update
          has been made for cookies.
        </Typography>
      </Grid>
      <Grid container size={12} sx={ToggleOnRootStyles(isDarkTheme)}>
        <Grid size={6} sx={ToggleOnGridStyles}>
          <Typography
            id={`${idBase}-dark-mode-label`}
            color="primary"
            sx={CookieTextStyles}
          >
            Toggle on dark mode
          </Typography>
        </Grid>
        <Grid size={6} sx={CookieGridSwitchStyles}>
          <Switch
            checked={darkModeToggle}
            onChange={(e) => darkModeSwtich(e)}
            slotProps={{
              input: { "aria-labelledby": `${idBase}-dark-mode-label` },
            }}
          />
        </Grid>
        <Typography color="primary">Used for enabling dark mode.</Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={GridRootButtonStyles}
      >
        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 6,
            lg: 6,
            xl: 6,
          }}
          sx={AcceptGridButtonStyles}
        >
          <Button
            id="accept_optional_cookies"
            color="primary"
            variant="contained"
            disabled={!darkModeToggle && !userAgreementsToggle}
            onClick={() => {
              accpetedCookies();
              closeDrawer();
            }}
            sx={AcceptButtonStyles}
          >
            Accept Optional Cookies
          </Button>
        </Grid>
        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 6,
            lg: 6,
            xl: 6,
          }}
          sx={RejectGridButtonStyles}
        >
          <Button
            color="primary"
            variant="outlined"
            onClick={() => {
              rejectOptionalCookies();
              closeDrawer();
            }}
            sx={RejectButtonStyles}
          >
            Reject Cookies
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export type Props = {
  closeDrawer: () => void;
  optionalCookies: () => void;
};

export default CookiesManagementComponent;
