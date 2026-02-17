import { COLORS } from 'src/store/redux/theme/CONSTANTS';

export const AcceptButtonStyles = {
  boxShadow: 'none',
  textTransform: 'none',
};

export const AcceptanceMessageGrid = {
  margin: '0px 32px 0px 0px',
  '@media only screen and (max-width: 600px)': {
    margin: '0px 26px 0px 0px',
  }
};

export const ButtonGridStyles = {
  padding: '26px',
  '@media only screen and (max-width: 600px)': {
    padding: '16px',
  },
};

export const CloseIconGridStyles = {
  alignItems: "center",
  justifyContent: "flex-end",
  display: "flex",
};

export const CloseIconStyles = {
  '&.MuiButtonBase-root': {
    '&.MuiButton-root': {
      justifyContent: 'flex-end',
    }
  },
};

export const RejectButtonStyles = {
  marginRight: '16px',
  textTransform: 'none',
};

export const RootStyles = {
  width: '100%',
  height: '22vh',
  borderTop: `2px solid ${COLORS.common.border}`,
  padding: '36px',
  '@media only screen and (max-width: 1570px)': {
    height: '25vh',
  },
  '@media only screen and (max-width: 800px)': {
    height: '30vh',
  },
  '@media only screen and (max-width: 600px)': {
    height: '40vh',
    padding: '16px',
  },
};

export const SettingButtonStyles = {
  marginRight: '16px',
};

export const TitleStyles = {
  fontWeight: 'bold',
  fontSize: '20px',
};

export const TitleGridStyles = {
  alignItems: "center",
  display: "flex",
};
