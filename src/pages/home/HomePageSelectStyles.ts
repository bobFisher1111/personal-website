import { COLORS } from 'src/store/redux/theme/CONSTANTS';

export type ThemeMode = 'light' | 'dark';

export const HomePageSelectFormControlSx = (minWidth: number) => ({
  m: 1,
  minWidth,
});

export const HomePageSelectMenuPaperSx = (mode: ThemeMode) => ({
  '& .MuiMenuItem-root': {
    justifyContent: 'flex-start',
    textAlign: 'left',
    color: COLORS[mode].primary,
  },
});

export const HomePageSelectSx = (mode: ThemeMode) => ({
  textAlign: 'left',
  color: COLORS[mode].primary,
  '&.MuiInput-underline:before': {
    borderBottomWidth: '2px',
    borderBottomColor: COLORS[mode].primary,
  },
  '&.MuiInput-underline:after': {
    borderBottomWidth: '2px',
    borderBottomColor: COLORS[mode].primary,
  },
  '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomWidth: '2px',
    borderBottomColor: COLORS[mode].primary,
  },
  '& .MuiSelect-icon': {
    color: COLORS[mode].primary,
  },
});
