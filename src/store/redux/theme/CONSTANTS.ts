export const COLORS = {
  light: {
    primary: '#0C0D0D',
    secondary: '#FFFFFF',
    appBar: '#FFFFFF',
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
  dark: {
    primary: '#9DB2BF',
    secondary: '#FFFFFF',
    appBar: '#1E1E1E',
    text: {
      primary: '#FFFFFF',
      secondary: '#AAAAAA',
    },
  },
};

export const FONT_SIZES = {
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

export const LINE_HEIGHTS = {
  tight: '1.25rem',        // 20px
  normal: '1.5rem',        // 24px
};

export const FONT_WEIGHTS = {
  regular: 400,
  bold: 700,
};

export const SIZES = {
  borderRadius: '0.375rem',        // 6px
  border: '0.0625rem solid',       // 1px
  avatar: {
    sm: '1.25rem',                 // 20px
    md: '1.875rem',                // 30px
  },
  chip: {
    heightSm: '1.5rem',            // 24px
  },
  maxWidth: {
    appBar: '75rem',               // 1200px
    screenWidth: '64rem',       // 1024px 
  },
  padding: {
    linkGridMobile: '0.25rem 1rem 0.25rem 0rem', // 4px 16px 4px 0px
    desktopTitle: '0rem 0rem 0rem 1rem',         // 0px 0px 0px 16px
  },
  spacing: {
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
  },
  spacingNumeric: {
    xxs: 0.25,       // 4px
    xs: 0.5,         // 8px
    sm: 1,           // 16px
    md: 2,           // 32px
    lg: 3,           // 48px
    xl: 7.5,         // 120px
    xxl: 11.25,      // 180px
    titlePad: 3.125, // 50px
    contentPad: 9.5, // 152px
  },
  width: {
    full: '100%',
    imageMin: '15rem',     // 240px
    imageMax: '18.75rem',  // 300px
  },
  height: {
    appBar: '2.5rem',           // 40px
    articleShort: '6.25rem',    // 100px
    articleTall: '7rem',        // 112px
    articleShortSm: '5rem',     // 80px
    articleTallSm: '6.875rem',  // 110px
    rootTall: '14.6875rem',     // 235px
    rootShort: '9.0625rem',     // 145px
    rootSm: '8.75rem',          // 140px
    socialMediaIcons: '1rem' //// '1.25rem', // '20px'
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

export const MARKDOWN_STYLES = {
  light: {
    container: {
      fontFamily: '"Inter", "Segoe UI", "Helvetica Neue", "Arial", sans-serif',
      color: COLORS.light.text.primary,
      backgroundColor: COLORS.light.secondary,
      px: { xs: 2, sm: 3, md: 4 },
      py: 4,
    },
    headings: {
      h1: {
        variant: 'h3',
        sx: { fontWeight: 'bold', color: COLORS.light.primary, mt: 2, mb: 1 },
      },
      h2: {
        variant: 'h4',
        sx: { fontWeight: 600, color: COLORS.light.primary, mt: 2, mb: 1 },
      },
      h3: {
        variant: 'h5',
        sx: { fontWeight: 500, color: COLORS.light.text.primary, mt: 1.5, mb: 0.5 },
      },
      h4: {
        variant: 'h6',
        sx: { fontWeight: 500, color: COLORS.light.text.primary, mt: 1.5, mb: 0.5 },
      },
      h5: {
        variant: 'subtitle1',
        sx: { fontWeight: 500, color: COLORS.light.text.primary, mt: 1, mb: 0.5 },
      },
      h6: {
        variant: 'subtitle2',
        sx: { fontWeight: 500, color: COLORS.light.text.primary, mt: 1, mb: 0.5 },
      },
    },
    text: {
      paragraph: {
        variant: 'body1',
        sx: { textIndent: '20px', mb: 2, color: COLORS.light.text.primary },
      },
      strong: {
        sx: { fontWeight: 'bold', color: COLORS.light.text.primary },
      },
      em: {
        sx: { fontStyle: 'italic', color: COLORS.light.text.primary },
      },
      del: {
        sx: { textDecoration: 'line-through', color: COLORS.light.text.secondary },
      },
    },
    lists: {
      ul: {
        sx: { pl: 4, mb: 2, listStyleType: 'disc', color: COLORS.light.text.primary },
      },
      ol: {
        sx: { pl: 4, mb: 2, listStyleType: 'decimal', color: COLORS.light.text.primary },
      },
      li: {
        sx: { mb: 1, color: COLORS.light.text.primary },
      },
    },
    links: {
      sx: { underline: 'hover', color: COLORS.light.primary },
    },
    images: {
      sx: {
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        margin: '0 auto',
        borderRadius: 2,
        my: 2,
        border: `1px solid ${COLORS.light.text.secondary}`,
      },
    },
    code: {
      inline: {
        sx: { fontFamily: 'monospace', backgroundColor: '#f0f0f0', color: COLORS.light.text.primary, px: 0.5, borderRadius: 1 },
      },
      block: {
        sx: {
          fontFamily: '"Source Code Pro", "Roboto Mono", monospace',
          backgroundColor: '#f5f5f5',
          color: COLORS.light.text.primary,
          p: 2,
          borderRadius: 2,
          overflowX: 'auto',
          fontSize: '0.9rem',
          my: 2,
          border: `1px solid ${COLORS.light.text.secondary}`,
        },
      },
    },
    blockquote: {
      sx: {
        borderLeft: `4px solid ${COLORS.light.primary}`,
        pl: 2,
        ml: 0,
        color: COLORS.light.text.secondary,
        fontStyle: 'italic',
        my: 2,
      },
    },
    table: {
      table: {
        sx: { width: '100%', borderCollapse: 'collapse', my: 3 },
      },
      thead: {
        sx: { backgroundColor: '#f0f0f0', color: COLORS.light.text.primary },
      },
      tr: {
        sx: { borderBottom: `1px solid ${COLORS.light.text.secondary}` },
      },
      th: {
        sx: { textAlign: 'left', p: 1, fontWeight: 'bold', color: COLORS.light.text.primary },
      },
      td: {
        sx: { textAlign: 'left', p: 1, color: COLORS.light.text.primary },
      },
    },
  },
  dark: {
    container: {
      fontFamily: '"Inter", "Segoe UI", "Helvetica Neue", "Arial", sans-serif',
      color: COLORS.dark.text.primary,
      backgroundColor: COLORS.dark.appBar,
      px: { xs: 2, sm: 3, md: 4 },
      py: 4,
    },
    headings: {
      h1: {
        variant: 'h3',
        sx: { fontWeight: 'bold', color: COLORS.dark.primary, mt: 2, mb: 1 },
      },
      h2: {
        variant: 'h4',
        sx: { fontWeight: 600, color: COLORS.dark.primary, mt: 2, mb: 1 },
      },
      h3: {
        variant: 'h5',
        sx: { fontWeight: 500, color: COLORS.dark.text.primary, mt: 1.5, mb: 0.5 },
      },
      h4: {
        variant: 'h6',
        sx: { fontWeight: 500, color: COLORS.dark.text.primary, mt: 1.5, mb: 0.5 },
      },
      h5: {
        variant: 'subtitle1',
        sx: { fontWeight: 500, color: COLORS.dark.text.primary, mt: 1, mb: 0.5 },
      },
      h6: {
        variant: 'subtitle2',
        sx: { fontWeight: 500, color: COLORS.dark.text.primary, mt: 1, mb: 0.5 },
      },
    },
    text: {
      paragraph: {
        variant: 'body1',
        sx: { textIndent: '20px', mb: 2, color: COLORS.dark.text.primary },
      },
      strong: {
        sx: { fontWeight: 'bold', color: COLORS.dark.text.primary },
      },
      em: {
        sx: { fontStyle: 'italic', color: COLORS.dark.text.primary },
      },
      del: {
        sx: { textDecoration: 'line-through', color: COLORS.dark.text.secondary },
      },
    },
    lists: {
      ul: {
        sx: { pl: 4, mb: 2, listStyleType: 'disc', color: COLORS.dark.text.primary },
      },
      ol: {
        sx: { pl: 4, mb: 2, listStyleType: 'decimal', color: COLORS.dark.text.primary },
      },
      li: {
        sx: { mb: 1, color: COLORS.dark.text.primary },
      },
    },
    links: {
      sx: { underline: 'hover', color: COLORS.dark.primary },
    },
    images: {
      sx: {
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        margin: '0 auto',
        borderRadius: 2,
        my: 2,
        border: `1px solid ${COLORS.dark.text.secondary}`,
      },
    },
    code: {
      inline: {
        sx: { fontFamily: 'monospace', backgroundColor: '#2a2a2a', color: COLORS.dark.text.primary, px: 0.5, borderRadius: 1 },
      },
      block: {
        sx: {
          fontFamily: '"Source Code Pro", "Roboto Mono", monospace',
          backgroundColor: '#2a2a2a',
          color: COLORS.dark.text.primary,
          p: 2,
          borderRadius: 2,
          overflowX: 'auto',
          fontSize: '0.9rem',
          my: 2,
          border: `1px solid ${COLORS.dark.text.secondary}`,
        },
      },
    },
    blockquote: {
      sx: {
        borderLeft: `4px solid ${COLORS.dark.primary}`,
        pl: 2,
        ml: 0,
        color: COLORS.dark.text.secondary,
        fontStyle: 'italic',
        my: 2,
      },
    },
    table: {
      table: {
        sx: { width: '100%', borderCollapse: 'collapse', my: 3 },
      },
      thead: {
        sx: { backgroundColor: '#2a2a2a', color: COLORS.dark.text.primary },
      },
      tr: {
        sx: { borderBottom: `1px solid ${COLORS.dark.text.secondary}` },
      },
      th: {
        sx: { textAlign: 'left', p: 1, fontWeight: 'bold', color: COLORS.dark.text.primary },
      },
      td: {
        sx: { textAlign: 'left', p: 1, color: COLORS.dark.text.primary },
      },
    },
  },
};
