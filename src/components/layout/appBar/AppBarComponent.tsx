import React from "react";
import {
  Box,
} from "@mui/material";
import WebSiteAppBar from './WebSiteAppBar';
import AppBarStyles from '../../../styles/AppBarStyles';

const AppBarComponent = () => {
  /*
    deside on color for appbar:
      - green: #667A6E
      - blue: #4682B4
      - dark blue: #05141f // not for background
      - another blue: #154c79 // this one looks good
      - #5E6974
      - #2E5984
      - #76468c // like this color
      - https://www.schemecolor.com/dance-of-shadows.php // most likely the color I like found here
  */
  return (
    <Box>
      <AppBarStyles>
        <WebSiteAppBar />      
      </AppBarStyles>
    </Box>
  )}

export default AppBarComponent;
