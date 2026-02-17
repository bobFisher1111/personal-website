import {
  AppBar,
  Box,
} from '@mui/material';
import WebSiteAppBar from './webSiteAppBar/WebSiteAppBar';
import { AppBarStyles } from './AppBarComponentStyles';

const AppBarComponent = () => {
  return (
    <Box>
      <AppBar
        sx={AppBarStyles}
      >
        <WebSiteAppBar />      
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
