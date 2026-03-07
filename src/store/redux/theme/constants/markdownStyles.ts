import { COLORS } from "./colors";

const TYPOGRAPHY_FAMILY = {
  markdown: '"Inter", "Segoe UI", "Helvetica Neue", "Arial", sans-serif',
  code: '"Source Code Pro", "Roboto Mono", monospace',
};

const createMarkdownStyles = (mode: "light" | "dark") => {
  const colors = COLORS[mode];
  const fontFamily = TYPOGRAPHY_FAMILY;

  return {
    container: {
      fontFamily: fontFamily.markdown,
      color: colors.primary,
      backgroundColor: colors.secondary,
      maxWidth: "72ch",
      lineHeight: 1.7,
      mx: "auto",
      px: { xs: 2, sm: 3, md: 4 },
      py: 4,
    },
    headings: {
      h1: {
        variant: "h3",
        sx: { fontWeight: "bold", color: colors.primary, mt: 2, mb: 1 },
      },
      h2: {
        variant: "h4",
        sx: {
          fontWeight: 600,
          color: colors.primary,
          fontSize: "1.25rem",
          textIndent: "20px",
          mt: 2,
          mb: 1,
        },
      },
      h3: {
        variant: "h5",
        sx: { fontWeight: 500, color: colors.primary, mt: 1.5, mb: 0.5 },
      },
      h4: {
        variant: "h6",
        sx: { fontWeight: 500, color: colors.primary, mt: 1.5, mb: 0.5 },
      },
      h5: {
        variant: "subtitle1",
        sx: { fontWeight: 500, color: colors.primary, mt: 1, mb: 0.5 },
      },
      h6: {
        variant: "subtitle2",
        sx: { fontWeight: 500, color: colors.primary, mt: 1, mb: 0.5 },
      },
    },
    text: {
      paragraph: {
        variant: "body1",
        sx: {
          color: colors.primary,
          fontSize: "1rem",
          lineHeight: 1.7,
          maxWidth: "65ch",
          textIndent: "20px",
          mb: 2,
          whiteSpace: "pre-wrap",
        },
      },
      strong: {
        sx: { fontWeight: "bold", color: colors.primary },
      },
      em: {
        sx: { fontStyle: "italic", color: colors.primary },
      },
      del: {
        sx: { textDecoration: "line-through", color: colors.primary },
      },
    },
    lists: {
      ul: {
        sx: {
          pl: 4,
          mb: 2,
          listStyleType: "disc",
          color: colors.primary,
          lineHeight: 1.6,
        },
      },
      ol: {
        sx: {
          pl: 4,
          mb: 2,
          listStyleType: "decimal",
          color: colors.primary,
          lineHeight: 1.6,
        },
      },
      li: {
        sx: { mb: 1, color: colors.primary },
      },
      liParagraph: {
        sx: {
          display: "inline",
          margin: 0,
        },
      },
    },
    links: {
      sx: {
        textDecoration: "underline",
        textDecorationThickness: "0.06em",
        textDecorationSkipInk: "auto",
        color: colors.primary,
        fontWeight: 500,
        "&:focus-visible": {
          outline: `2px solid ${colors.primary}`,
          outlineOffset: "2px",
        },
      },
    },
    images: {
      sx: {
        display: "block",
        maxWidth: "90%",
        height: "auto",
        margin: "16px auto",
        borderRadius: 2,
        my: 2,
        border: `1px solid ${colors.primary}`,
      },
    },
    code: {
      inline: {
        sx: {
          fontFamily: "monospace",
          backgroundColor: colors.codeBg,
          color: colors.primary,
          px: 0.5,
          borderRadius: 1,
        },
      },
      block: {
        sx: {
          fontFamily: fontFamily.code,
          backgroundColor: colors.code,
          color: colors.primary,
          p: 2,
          lineHeight: 1.6,
          borderRadius: 2,
          overflowX: "auto",
          fontSize: "0.9rem",
          my: 2,
          border: `1px solid ${colors.secondary}`,
        },
      },
    },
    blockquote: {
      sx: {
        display: "block",
        width: "fit-content",
        maxWidth: "min(60ch, 100%)",
        color: colors.primary,
        fontStyle: "italic",
        border: `1px solid ${colors.primary}`,
        borderRadius: 4,
        padding: "0.75rem 1rem",
        marginTop: "1.25rem",
        marginBottom: "1.25rem",
        marginLeft: 0,
        marginRight: "auto",
        "& p": {
          margin: 0,
          textIndent: 0,
        },
        '&[style*="text-align: center"]': {
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        },
        '&[style*="text-align: right"]': {
          marginLeft: "auto",
          marginRight: 0,
          textAlign: "right",
        },
      },
    },
    table: {
      table: {
        sx: { width: "100%", borderCollapse: "collapse", my: 3 },
      },
      thead: {
        sx: { backgroundColor: colors.code, color: colors.primary },
      },
      tr: {
        sx: { borderBottom: `1px solid ${colors.primary}` },
      },
      th: {
        sx: {
          textAlign: "left",
          p: 1,
          fontWeight: "bold",
          color: colors.primary,
        },
      },
      td: {
        sx: { textAlign: "left", p: 1, color: colors.primary },
      },
    },
  };
};

export const MARKDOWN_STYLES = {
  light: createMarkdownStyles("light"),
  dark: createMarkdownStyles("dark"),
};
