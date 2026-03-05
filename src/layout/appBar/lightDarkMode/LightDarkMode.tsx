import { useAppDispatch, useAppSelector } from "src/store/redux/hooks";
import { toggleTheme } from "src/store/redux/theme/ThemeSlice";
import { Button } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const LightDarkMode = () => {
  const rejectCookie = useAppSelector((state) => state.rejectCookie);
  const theme = useAppSelector((state) => state.theme.darkTheme);
  const dispatch = useAppDispatch();

  const disableButton = () => {
    if (localStorage.getItem("darkMode") === null) {
      return rejectCookie.rejectCookies;
    } else {
      return false;
    }
  };

  return (
    <>
      <Button
        aria-label="toggle on and off dark mode"
        disabled={disableButton()}
        onClick={() => dispatch(toggleTheme())}
      >
        {theme ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </Button>
    </>
  );
};

export default LightDarkMode;
