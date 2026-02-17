import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Grid,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { userAgreementValue } from 'src/config';
import { cookiesOff } from 'src/store/redux/cookies/CookiesSlice';
import CookiesManagementDrawer from 'src/usersAcceptanceComponent/cookiesManagementDrawer/CookiesManagementDrawer';
import TermsOfServiceDrawer from 'src/usersAcceptanceComponent/termsOfServiceDrawer/TermsOfServiceDrawer';
import { websiteName } from 'src/config';
import {
  AcceptButtonStyles,
  ButtonGridStyles,
  CloseIconGridStyles,
  CloseIconStyles,
  AcceptanceMessageGrid,
  RejectButtonStyles,
  RootStyles,
  SettingButtonStyles,
  TitleGridStyles,
  TitleStyles,
} from './UserAcceptanceTextMessageStyles';

const UserAcceptanceTextMessage = ({
  closeDrawer,
}: Props) => {
  const dispatch = useDispatch();
  const rejectCookie = useSelector((state: any) => state.rejectCookie);
  const acceptanceMessage = `${websiteName} uses cookies for functionality of the website. By accepting cookies you agree to placement of the cookie. Without accepting certain features and functionality will be disabled.`;

  const setLocalStorage = () => {
    if (localStorage.getItem('darkMode') === null) {
      localStorage.setItem('darkMode', 'false');
    }
    if (localStorage.getItem('enableYouTubeVideo') === null) {
      localStorage.setItem('enableYouTubeVideo', 'true');
    }
    localStorage.setItem('userAgreement', `${userAgreementValue}`);
    dispatch(cookiesOff());
    return closeDrawer();
  };

  const turnCookiesOff = () => {
    if (rejectCookie.rejectCookies) {
      return closeDrawer();
    }
    closeDrawer();
    return dispatch(cookiesOff());
  };

  return (
    <Grid
      sx={RootStyles}
    >
      <Grid
        container
      >
        <Grid
          size={10}
          sx={TitleGridStyles}
        >
          <Typography
            color="primary"
            sx={TitleStyles}
          >
            Site uses cookies
          </Typography>
        </Grid>
        <Grid
          size={2}
          sx={CloseIconGridStyles}
        >
          <Button
            color="primary"
            onClick={turnCookiesOff}
            sx={CloseIconStyles}
          >
            <CloseIcon/>
          </Button>
        </Grid>
        <Grid
          size={12}
          sx={AcceptanceMessageGrid}
        >
          <Typography
            color="primary"
          >
            {acceptanceMessage}
          </Typography>
        </Grid>
        <Grid
          size={12}
        >
          <TermsOfServiceDrawer />
        </Grid>
        <Grid
          container
          justifyContent={'flex-end'}
          alignItems="center"
          sx={ButtonGridStyles}
        >
          <Button
            color="primary"
            variant="outlined"
            sx={SettingButtonStyles}
          >
            <CookiesManagementDrawer
              closeParentDrawer={closeDrawer} 
              optionalCookie={turnCookiesOff} 
            />
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => turnCookiesOff()}
            sx={RejectButtonStyles}
          >
            Reject All
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={setLocalStorage}
            sx={AcceptButtonStyles}
          >
            Accept All
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export type Props = {
  closeDrawer: () => void;
};

export default UserAcceptanceTextMessage;
