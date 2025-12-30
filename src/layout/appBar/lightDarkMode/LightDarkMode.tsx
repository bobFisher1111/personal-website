import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from '../../../store/redux/theme/ThemeSlice';
import {
  Button
} from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


const LightDarkMode = () => {
  // get theme from store
  const rejectCookie = useSelector((state: any) => state.rejectCookie);
  const theme = useSelector((state: any) => state.theme.darkTheme);
  // initialize dispatch variable
  const dispatch = useDispatch();

  const disableButton = () => {
    if (localStorage.getItem('darkMode') === null) {
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