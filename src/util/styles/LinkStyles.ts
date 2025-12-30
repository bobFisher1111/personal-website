import { COLORS } from 'src/store/redux/theme/CONSTANTS';

export const LinkStyles = (theme: boolean) => ({
  textDecoration: 'none',
  color: theme ? COLORS.dark.primary : COLORS.light.primary,
});

export default [
  LinkStyles,
];
