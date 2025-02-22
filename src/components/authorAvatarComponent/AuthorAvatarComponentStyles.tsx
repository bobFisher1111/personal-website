import {
  LIGHT_PRIMARY,
  DARK_PRIMARY,
} from '../../store/redux/theme/CONSTANTS';

export const AvatarAuthorLinkStyles = (theme: boolean) => ({
  textDecoration: 'none',
  display: 'flex',
  color: theme ? `${DARK_PRIMARY}` : `${LIGHT_PRIMARY}`,
});

export const AvatarImageStyles = (theme: boolean) => ({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: theme ? `1px solid ${DARK_PRIMARY}` : `1px solid ${LIGHT_PRIMARY}`,
  '@media only screen and (max-width: 600px)': {
    width: '20px',
    height: '20px',
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    width: '16px',
    height: '16px',
  }
});

export const AuthorNameStyles = {
  padding: '0px 0px 0px 8px',
  alignContent: 'center',
  '@media only screen and (max-width: 600px)': {
    fontSize: '14px'
  },
  '@media only screen and (max-device-width: 812px) and (orientation: landscape)': {
    fontSize: '12px'
  }
};
