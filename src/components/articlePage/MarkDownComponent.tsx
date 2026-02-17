import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Box, Typography, Link as MuiLink } from '@mui/material';
import { useSelector } from 'react-redux';
import { MARKDOWN_STYLES } from 'src/store/redux/theme/CONSTANTS';

interface MarkDownComponentProps {
  markdownData?: string;
}

const MarkDownComponent = ({ markdownData }: MarkDownComponentProps) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const styles = darkTheme ? MARKDOWN_STYLES.dark : MARKDOWN_STYLES.light;

  const prepMarkdownData = (rawData: string): string => {
    return rawData.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n');
  };

  const formattedMarkdown = useMemo(
    () => prepMarkdownData(markdownData || ''),
    [markdownData]
  );

  const createHeadingComponent = (level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
    return (props: any) => (
      <Typography 
        variant={styles.headings[level].variant as any} 
        component={level} 
        gutterBottom 
        sx={styles.headings[level].sx}
        {...props}
      />
    );
  };

  return (
    <Container
      maxWidth="md"
      sx={styles.container}
    >
      <ReactMarkdown
        components={{
          h1: createHeadingComponent('h1'),
          h2: createHeadingComponent('h2'),
          h3: createHeadingComponent('h3'),
          h4: createHeadingComponent('h4'),
          h5: createHeadingComponent('h5'),
          h6: createHeadingComponent('h6'),
          p: (props) => (
            <Typography 
              variant={styles.text.paragraph.variant as any}
              component="div" 
              sx={styles.text.paragraph.sx}
              {...props}
            />
          ),
          strong: (props) => (
            <Box component="strong" sx={styles.text.strong.sx} {...props} />
          ),
          em: (props) => (
            <Box component="em" sx={styles.text.em.sx} {...props} />
          ),
          del: (props) => (
            <Box component="del" sx={styles.text.del.sx} {...props} />
          ),
          ul: (props) => (
            <Box component="ul" sx={styles.lists.ul.sx} {...props} />
          ),
          ol: (props) => (
            <Box component="ol" sx={styles.lists.ol.sx} {...props} />
          ),
          li: (props) => (
            <Box component="li" sx={styles.lists.li.sx} {...props} />
          ),
          a: ({ href, children, ...props }) => (
            <MuiLink 
              href={href ?? '#'} 
              target="_blank" 
              rel="noopener noreferrer" 
              sx={styles.links.sx}
              {...props}
            >
              {children}
            </MuiLink>
          ),
          img: ({ src, alt, ...props }) => (
            <Box
              component="img"
              src={src ?? ''}
              alt={alt ?? 'Markdown image'}
              sx={styles.images.sx}
              {...props}
            />
          ),
          code: (props) => {
            const { inline, children, ...rest } = props as { inline?: boolean; children?: React.ReactNode };
            return inline ? (
              <Box component="code" sx={styles.code.inline.sx}>
                {children}
              </Box>
            ) : (
              <Box
                component="pre"
                sx={styles.code.block.sx}
                {...rest}
              >
                <code>{children}</code>
              </Box>
            );
          },
          blockquote: (props) => (
            <Box
              component="blockquote"
              sx={styles.blockquote.sx}
              {...props}
            />
          ),
          table: (props) => (
            <Box component="table" sx={styles.table.table.sx} {...props} />
          ),
          thead: (props) => <Box component="thead" sx={styles.table.thead.sx} {...props} />,
          tbody: (props) => <Box component="tbody" {...props} />,
          tr: (props) => <Box component="tr" sx={styles.table.tr.sx} {...props} />,
          th: (props) => (
            <Box component="th" sx={styles.table.th.sx} {...props} />
          ),
          td: (props) => (
            <Box component="td" sx={styles.table.td.sx} {...props} />
          ),
        }}
      >
        {formattedMarkdown}
      </ReactMarkdown>
    </Container>
  );
};

export default MarkDownComponent;
