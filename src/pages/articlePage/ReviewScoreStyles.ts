import { COLORS, FONT_SIZES, FONT_WEIGHTS, SIZES } from 'src/store/redux/theme/CONSTANTS';

const getMode = (darkTheme: boolean) => (darkTheme ? 'dark' : 'light');

export const AlignTextStyle = (darkTheme: boolean) => {
  const mode = getMode(darkTheme);
  return {
    textAlign: 'center',
    color: COLORS[mode].text.secondary,
    fontSize: FONT_SIZES.small,
    fontWeight: FONT_WEIGHTS.regular,
  };
};

export const ReviewScoreWrapperStyles = {
  width: '100%',
};

export const FinalScoreStyle = (darkTheme: boolean) => {
  const mode = getMode(darkTheme);
  return {
    fontSize: FONT_SIZES.h1,
    lineHeight: 1,
    color: COLORS[mode].primary,
    textAlign: 'center',
    fontWeight: FONT_WEIGHTS.bold,
  };
};

export const LeftRootItemBottomStyles = {
  padding: `0px 0px ${SIZES.spacing.sm} ${SIZES.spacing.sm}`,
};

export const LeftRootItemStyles = {
  padding: `0px 0px 0px ${SIZES.spacing.sm}`,
};

export const LeftRootItemTopStyles = {
  padding: `${SIZES.spacing.sm} 0px 0px ${SIZES.spacing.sm}`,
};

export const LeftRootStyles = (darkTheme: boolean) => {
  const mode = getMode(darkTheme);
  return {
    borderRight: `${SIZES.border} ${COLORS[mode].primary}`,
  };
};

export const RootStyles = (darkTheme: boolean) => {
  const mode = getMode(darkTheme);
  return {
    maxWidth: SIZES.width.imageMax,
    minWidth: SIZES.width.imageMax,
    border: `${SIZES.border} ${COLORS[mode].primary}`,
    margin: `${SIZES.spacing.sm}`,
    borderRadius: SIZES.borderRadius,
    backgroundColor: COLORS[mode].secondary,
  };
};

export const TextScoreStyles = (darkTheme: boolean) => {
  const mode = getMode(darkTheme);
  return {
    textAlign: 'center',
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS[mode].primary,
    padding: `0px ${SIZES.spacing.sm} 0px 0px`,
    fontSize: FONT_SIZES.base,
  };
};

export const TextStyles = (darkTheme: boolean) => {
  const mode = getMode(darkTheme);
  return {
    textAlign: 'left',
    color: COLORS[mode].primary,
    fontSize: FONT_SIZES.small,
    fontWeight: FONT_WEIGHTS.bold,
  };
};

export const WhiteStyles = (darkTheme: boolean) => {
  const mode = getMode(darkTheme);
  return {
    color: COLORS[mode].primary,
  };
};

export default [
  AlignTextStyle,
  FinalScoreStyle,
  LeftRootItemBottomStyles,
  LeftRootItemStyles,
  LeftRootItemTopStyles,
  LeftRootStyles,
  RootStyles,
  TextScoreStyles,
  TextStyles,
  WhiteStyles,
];