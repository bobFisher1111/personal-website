import React from "react";
import { Box, useTheme } from "@mui/material";
import DOMPurify from "dompurify";
import { useAppSelector } from "src/store/redux/hooks";
import { MARKDOWN_STYLES } from "src/store/redux/theme/CONSTANTS";

interface ArticleBodyProps {
  html: string;
}

const ensureAccessibleImages = (safeHtml: string): string => {
  if (typeof DOMParser === "undefined") return safeHtml;

  const document = new DOMParser().parseFromString(safeHtml, "text/html");

  for (const img of document.querySelectorAll("img")) {
    if (!img.hasAttribute("alt")) {
      const captionText =
        img.closest("figure")?.querySelector("figcaption")?.textContent ?? "";
      const derivedAlt = captionText
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 160);
      img.setAttribute("alt", derivedAlt);
    }

    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
  }

  return document.body.innerHTML;
};

const ArticleBody: React.FC<ArticleBodyProps> = ({ html }) => {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);
  const theme = useTheme();
  const markdownStyles = darkTheme
    ? MARKDOWN_STYLES.dark
    : MARKDOWN_STYLES.light;
  const { headings, text, lists, links, images, code, blockquote, table } =
    markdownStyles;
  const contentHtml = html || "<p></p>";
  const safeHtml = DOMPurify.sanitize(contentHtml, {
    FORBID_TAGS: ["svg", "math"],
  });
  const enhancedHtml = ensureAccessibleImages(safeHtml);

  const contentSx = {
    ...markdownStyles.container,
    maxWidth: "100%",
    width: "auto",
    px: 0,
    pt: 0,
    "& h1": headings.h1.sx,
    "& h2": headings.h2.sx,
    "& h3": headings.h3.sx,
    "& h4": headings.h4.sx,
    "& h5": headings.h5.sx,
    "& h6": headings.h6.sx,
    "& p": {
      ...text.paragraph.sx,
      maxWidth: "none",
    },
    "& strong": text.strong.sx,
    "& em": text.em.sx,
    "& del": text.del.sx,
    "& ul": lists.ul.sx,
    "& ol": lists.ol.sx,
    "& li": lists.li.sx,
    "& li > p": lists.liParagraph.sx,
    "& li:has(> p > strong:first-of-type)::marker": {
      fontWeight: 700,
    },
    '& li:has(span[style*="font-size: 0.9rem"])': {
      fontSize: "0.9rem",
    },
    '& li:has(span[style*="font-size: 1.2rem"])': {
      fontSize: "1.2rem",
    },
    "& a": links.sx,
    "& img": {
      ...images.sx,
      [theme.breakpoints.down("sm")]: {
        maxWidth: "calc(100% - 72px) !important",
        width: "auto !important",
        height: "auto !important",
        maxHeight: "50vh !important",
        margin: "16px auto !important",
      },
    },
    "& code": code.inline.sx,
    "& pre, & pre code": code.block.sx,
    "& blockquote": blockquote.sx,
    "& table": table.table.sx,
    "& thead": table.thead.sx,
    "& tr": table.tr.sx,
    "& th": table.th.sx,
    "& td": table.td.sx,
  };

  return (
    <Box sx={contentSx} dangerouslySetInnerHTML={{ __html: enhancedHtml }} />
  );
};

export default ArticleBody;
