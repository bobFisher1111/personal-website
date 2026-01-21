import React from 'react';
import { Box } from '@mui/material';
import DOMPurify from 'dompurify';
import { useSelector } from 'react-redux';
import { MARKDOWN_STYLES } from 'src/store/redux/theme/CONSTANTS';

interface ArticleBodyProps {
  html: string;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ html }) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const markdownStyles = darkTheme ? MARKDOWN_STYLES.dark : MARKDOWN_STYLES.light;
  const { headings, text, lists, links, images, code, blockquote, table } = markdownStyles;
  const contentHtml = html || '<p></p>';
  const safeHtml = DOMPurify.sanitize(contentHtml);

  const contentSx = {
    ...markdownStyles.container,
    maxWidth: '100%',
    mt: '100px',
    px: 0,
    pt: 0,
    '& h1': headings.h1.sx,
    '& h2': headings.h2.sx,
    '& h3': headings.h3.sx,
    '& h4': headings.h4.sx,
    '& h5': headings.h5.sx,
    '& h6': headings.h6.sx,
    '& p': text.paragraph.sx,
    '& strong': text.strong.sx,
    '& em': text.em.sx,
    '& del': text.del.sx,
    '& ul': lists.ul.sx,
    '& ol': lists.ol.sx,
    '& li': lists.li.sx,
    '& li > p': lists.liParagraph.sx,
    '& a': links.sx,
    '& img': images.sx,
    '& code': code.inline.sx,
    '& pre, & pre code': code.block.sx,
    '& blockquote': blockquote.sx,
    '& table': table.table.sx,
    '& thead': table.thead.sx,
    '& tr': table.tr.sx,
    '& th': table.th.sx,
    '& td': table.td.sx,
  };

  return (
    <Box
      sx={contentSx}
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
};

export default ArticleBody;
