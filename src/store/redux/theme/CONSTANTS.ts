import { createTheme } from '@mui/material';

// ============================================================================
// COLOR PALETTE
// https://coolors.co/palettes/trending
// ============================================================================

const COLORS = {
  light: {
    primary: '#344e41',      // Green 4 (darkest)
    secondary: '#dad7cd',    // Beige (background)
    accent: {
      green1: '#a3b18a',     // Green 1 (lightest)
      green2: '#588157',     // Green 2
      green3: '#3a5a40',     // Green 3
      green4: '#344e41',     // Green 4 (darkest) - same as primary
    },
    appBar: '#dad7cd',
    code: '#f5f5f5',
    codeBg: '#f0f0f0',
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
  dark: {
    primary: '#dad7cd', // '#588157',
    secondary: '#1E1E1E',
    appBar: '#1E1E1E',
    code: '#2a2a2a',
    codeBg: '#2a2a2a',
    text: {
      primary: '#FFFFFF',
      secondary: '#AAAAAA',
    },
  },
};

// ============================================================================
// TYPOGRAPHY
// ============================================================================

const FONT_SIZES = {
  base: '0.875rem',        // 14px
  h1: '2.5rem',            // 40px
  h2: '2rem',              // 32px
  h3: '1.75rem',           // 28px
  body1: '1rem',           // 16px
  body2: '0.875rem',       // 14px
  small: '0.75rem',        // 12px
  large: '1.375rem',       // 22px
  xlarge: '2.25rem',       // 36px
  sectionTitle: '1.25rem', // 20px
  title: '1.25rem',        // 20px
  subtitle: '1rem',        // 16px
  avatarName: '1rem',      // 16px
  date: '1rem',            // 16px
};

const LINE_HEIGHTS = {
  tight: '1.25rem',        // 20px
  normal: '1.5rem',        // 24px
};

const FONT_WEIGHTS = {
  regular: 400,
  bold: 700,
};

// ============================================================================
// SPACING & SIZING
// ============================================================================

const SPACING_VALUES = {
  none: '0rem',
  xxs: '0.25rem',         // 4px
  xs: '0.5rem',           // 8px
  sm: '1rem',             // 16px
  md: '2rem',             // 32px
  lg: '3rem',             // 48px
  xl: '7.5rem',           // 120px
  xxl: '11.25rem',        // 180px
  titlePad: '3.125rem',   // 50px
  contentPad: '9.5rem',   // 152px
};

const SPACING_NUMERIC = {
  none: 0,
  xxs: 0.25,       // 4px
  xs: 0.5,         // 8px
  sm: 1,           // 16px
  md: 2,           // 32px
  lg: 3,           // 48px
  xl: 7.5,         // 120px
  xxl: 11.25,      // 180px
  titlePad: 3.125, // 50px
  contentPad: 9.5, // 152px
};

const SIZES = {
  borderRadius: '0.375rem',        // 6px
  border: '0.0625rem solid',       // 1px
  avatar: {
    sm: '1.25rem',                 // 20px
    md: '1.875rem',                // 30px
  },
  chip: {
    heightSm: '1.5rem',            // 24px
    borderRadius: '0.25rem',       // 4px
    fontSizeSm: '0.625rem',        // 10px
    containerHeightMobile: '1.75rem',  // 28px - mobile chips container
  },
  maxWidth: {
    appBar: '54rem',               // 780px (WCAG AA optimal reading width)
    screenWidth: '54rem',          // 780px (WCAG AA optimal reading width)
  },
  padding: {
    linkGridMobile: '0.25rem 1rem 0.25rem 0rem', // 4px 16px 4px 0px
    desktopTitle: '0rem 0rem 0rem 1rem',         // 0px 0px 0px 16px
    cardLarge: '1.5rem',                          // 24px
    cardSmall: '0.375rem',                        // 6px
    articlePageRoot: '0.5rem 0px 0px 0px',        // 8px 0px 0px 0px
  },
  spacing: SPACING_VALUES,
  spacingNumeric: SPACING_NUMERIC,
  width: {
    full: '100%',
    imageMin: '15rem',     // 240px
    imageMax: '18.75rem',  // 300px
    seriesCardImage: '12.75rem', // 204px - series card image width
    seriesCard: '12.75rem', // 204px - series card container width
    horizontalCardContainer: '41.25rem', // 660px - container width
    horizontalCardMedium: '46.875rem', // 750px - medium card width
    horizontalCardSmall: '20.0625rem', // 321px - small card width
    horizontalCardImageMedium: '18.75rem', // 300px - medium image width
  },
  height: {
    appBar: '2.5rem',           // 40px
    articleShort: '6.25rem',    // 100px
    articleTall: '7rem',        // 112px
    articleTallExact: '7.172rem',  // 114.75px - matches 16:9 aspect ratio at 300px width
    articleShortSm: '5rem',     // 80px
    articleTallSm: '6.875rem',  // 110px
    horizontalCard: '11.25rem', // 180px - horizontal card height
    horizontalCardSm: '10.375rem', // 166px - mobile horizontal card height
    horizontalCardImage: '11.3125rem', // 181px - horizontal card image height
    horizontalCardVideoTall: '27.75rem', // 444px - video height
    horizontalCardVideoArticle: '35rem', // 560px - article page video height
    rootTall: '12rem',        // 200px
    rootShort: '9.0625rem',     // 145px
    rootSm: '8.75rem',          // 140px
    socialMediaIcons: '1rem',
  },
  imageAspectRatio16by9: {
    width: '18.75rem',     // 300px
    height: '10.5625rem',  // 168.75px
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1200,
    xl: 1536,
    ipadPortrait: 1024,
    mobileLandscapeMax: 812,
  },
  orientation: {
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',
  },
  deviceHeights: {
    ipadMaxHeight: 1366,
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    tooltip: 1500,
  },
};

// ============================================================================
// TYPOGRAPHY FAMILIES (internal use only)
// ============================================================================

const TYPOGRAPHY_FAMILY = {
  markdown: '"Inter", "Segoe UI", "Helvetica Neue", "Arial", sans-serif',
  code: '"Source Code Pro", "Roboto Mono", monospace',
};

// ============================================================================
// MARKDOWN STYLES FACTORY
// ============================================================================

const createMarkdownStyles = (mode: 'light' | 'dark') => {
  const colors = COLORS[mode];
  const fontFamily = TYPOGRAPHY_FAMILY;

  return {
    container: {
      fontFamily: fontFamily.markdown,
      color: colors.text.primary,
      backgroundColor: colors.secondary,
      px: { xs: 2, sm: 3, md: 4 },
      py: 4,
    },
    headings: {
      h1: {
        variant: 'h3',
        sx: { fontWeight: 'bold', color: colors.primary, mt: 2, mb: 1 },
      },
      h2: {
        variant: 'h4',
        sx: { fontWeight: 600, color: colors.primary, mt: 2, mb: 1 },
      },
      h3: {
        variant: 'h5',
        sx: { fontWeight: 500, color: colors.text.primary, mt: 1.5, mb: 0.5 },
      },
      h4: {
        variant: 'h6',
        sx: { fontWeight: 500, color: colors.text.primary, mt: 1.5, mb: 0.5 },
      },
      h5: {
        variant: 'subtitle1',
        sx: { fontWeight: 500, color: colors.text.primary, mt: 1, mb: 0.5 },
      },
      h6: {
        variant: 'subtitle2',
        sx: { fontWeight: 500, color: colors.text.primary, mt: 1, mb: 0.5 },
      },
    },
    text: {
      paragraph: {
        variant: 'body1',
        sx: { textIndent: '20px', mb: 2, color: colors.text.primary },
      },
      strong: {
        sx: { fontWeight: 'bold', color: colors.text.primary },
      },
      em: {
        sx: { fontStyle: 'italic', color: colors.text.primary },
      },
      del: {
        sx: { textDecoration: 'line-through', color: colors.text.secondary },
      },
    },
    lists: {
      ul: {
        sx: { pl: 4, mb: 2, listStyleType: 'disc', color: colors.text.primary },
      },
      ol: {
        sx: { pl: 4, mb: 2, listStyleType: 'decimal', color: colors.text.primary },
      },
      li: {
        sx: { mb: 1, color: colors.text.primary },
      },
    },
    links: {
      sx: { underline: 'hover', color: colors.primary },
    },
    images: {
      sx: {
        display: 'block',
        maxWidth: '90%',
        height: 'auto',
        margin: '0 auto',
        borderRadius: 2,
        my: 2,
        border: `1px solid ${colors.text.secondary}`,
      },
    },
    code: {
      inline: {
        sx: { fontFamily: 'monospace', backgroundColor: colors.codeBg, color: colors.text.primary, px: 0.5, borderRadius: 1 },
      },
      block: {
        sx: {
          fontFamily: fontFamily.code,
          backgroundColor: colors.code,
          color: colors.text.primary,
          p: 2,
          borderRadius: 2,
          overflowX: 'auto',
          fontSize: '0.9rem',
          my: 2,
          border: `1px solid ${colors.text.secondary}`,
        },
      },
    },
    blockquote: {
      sx: {
        borderLeft: `4px solid ${colors.primary}`,
        pl: 2,
        ml: 0,
        color: colors.text.secondary,
        fontStyle: 'italic',
        my: 2,
      },
    },
    table: {
      table: {
        sx: { width: '100%', borderCollapse: 'collapse', my: 3 },
      },
      thead: {
        sx: { backgroundColor: colors.code, color: colors.text.primary },
      },
      tr: {
        sx: { borderBottom: `1px solid ${colors.text.secondary}` },
      },
      th: {
        sx: { textAlign: 'left', p: 1, fontWeight: 'bold', color: colors.text.primary },
      },
      td: {
        sx: { textAlign: 'left', p: 1, color: colors.text.primary },
      },
    },
  };
};

// ============================================================================
// THEMES
// ============================================================================

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLORS.light.primary,        // #344e41
      light: COLORS.light.accent.green3, // #3a5a40
      dark: COLORS.light.accent.green4,  // #344e41
    },
    secondary: {
      main: COLORS.light.secondary,      // #dad7cd
      light: COLORS.light.accent.green1, // #a3b18a
    },
    background: {
      default: COLORS.light.secondary,   // #dad7cd
      paper: COLORS.light.secondary,     // #dad7cd
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.light.appBar
        }
      },
    },
  }
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.dark.primary,
    },
    secondary: {
      main: COLORS.dark.secondary,
    },
    background: {
      default: '#1E1E1E',
      paper: '#1E1E1E',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.dark.appBar,
          backgroundImage: 'none', // Remove the overlay gradient
        }
      },
    },
  }
});

// ============================================================================
// EXPORTS
// ============================================================================

// Consolidated THEME object
export const THEME = {
  colors: COLORS,
  typography: {
    sizes: FONT_SIZES,
    weights: FONT_WEIGHTS,
    lineHeights: LINE_HEIGHTS,
  },
  sizes: SIZES,
  light: lightTheme,
  dark: darkTheme,
};

// Export individual constants for backward compatibility
export { COLORS, lightTheme, darkTheme, FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS, SIZES };

// Markdown styles generated from colors
export const MARKDOWN_STYLES = {
  light: createMarkdownStyles('light'),
  dark: createMarkdownStyles('dark'),
};
