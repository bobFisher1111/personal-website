import { COLORS, FONT_SIZES } from "src/store/redux/theme/CONSTANTS";

export const AvatarStyle = (darkTheme: boolean) => ({
  width: '100px',
  height: '100px',
  borderRadius: '4px',
  border: `1px solid ${darkTheme ? COLORS.dark.primary : COLORS.light.primary}`,
  '@media only screen and (max-width: 600px)': {
    width: '75px',
    height: '75px',
  },
});

export const GridAvatarPadding = {
  padding: '25px 16px 25px 16px',
};

export const GridHeader = {
  '@media (max-width: 1023px)': {
    padding: '0px',
  },
};

export const GridHeaderTitle = {
  padding: '25px 0px 12px 0px',
  '@media only screen and (max-width: 667px) and (orientation: landscape)': { 
    padding: '25px 0px 0px 0px',
  },
};

export const GridPaddingRight = {
  padding: '0px 0px 0px 16px'
};

export const TypographyHeaderTitle = {
  fontSize: FONT_SIZES.h3,
  lineHeight: '40px',
  '@media (min-width: 1023px)': {
    padding: '25px 0px 25px 0px',
  },
  '@media only screen and (max-width: 600px)': {
    fontSize: FONT_SIZES.h3,
  },
};

export default [
  AvatarStyle,
  GridAvatarPadding,
  GridHeader,
  GridHeaderTitle,
  GridPaddingRight,
  TypographyHeaderTitle,
];
