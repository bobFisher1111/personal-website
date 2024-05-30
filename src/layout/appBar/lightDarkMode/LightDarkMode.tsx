import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from '../../../store/redux/theme/ThemeSlice';
import {
  Button
} from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';


const LightDarkMode: React.FC = () => {
  // get theme from store
  const theme = useSelector((state: any) => state.theme.darkTheme);
  // initialize dispatch variable
  const dispatch = useDispatch();

  return (
    <>
      <Button
        aria-label="toggle on and off dark mode"
        onClick={() => dispatch(toggleTheme())}
      >
        {theme ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </Button>
    </>
  );
};

export default LightDarkMode;