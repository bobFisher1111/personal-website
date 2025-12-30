import ReactMarkdown from 'react-markdown';
import { Container, Box, Typography, Link as MuiLink } from '@mui/material';
import { useSelector } from 'react-redux';
import { MARKDOWN_STYLES } from 'src/store/redux/theme/CONSTANTS';

interface MarkdownData {
  article_title: string;
  markdown_data: string;
}

interface MarkDownComponentProps {
  data?: MarkdownData;
}

const MarkDownComponent = ({ data }: MarkDownComponentProps) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const styles = darkTheme ? MARKDOWN_STYLES.dark : MARKDOWN_STYLES.light;

  // Fallback to temp data if none provided
  const test_1: MarkdownData = {
    article_title: 'Test',
    markdown_data:
      "# Markdown Formatting Test\\n\\n## 1. Headings\\n# Heading 1\\n## Heading 2\\n### Heading 3\\n#### Heading 4\\n##### Heading 5\\n###### Heading 6\\n\\n---\\n\\n## 2. Emphasis\\n- *Italic text*\\n- _Italic text (underscore)_\\n- **Bold text**\\n- __Bold text (underscore)__\\n- ***Bold and italic***\\n- ~~Strikethrough~~\\n\\n---\\n\\n## 3. Paragraphs with Emphasis and Indents\\n\\n&nbsp;&nbsp;&nbsp;&nbsp;This is the first paragraph of our sample text. It demonstrates how to use *italic* and **bold** formatting within a standard paragraph. You can also combine them for ***bold and italic emphasis*** when needed. Markdown doesn't support true indentation, but you can simulate it using non-breaking spaces (`&nbsp;`).\\n\\n&nbsp;&nbsp;&nbsp;&nbsp;Here is a second paragraph, indented the same way. Notice how we can continue to use formatting like **highlighting important terms** or *soft emphasis* to guide the reader's attention. This is useful in documentation, notes, or styled content.\\n\\n&nbsp;&nbsp;&nbsp;&nbsp;Finally, this third paragraph wraps up the example. You can also include inline code like `let x = 10;` or links such as [Markdown Guide](https://www.markdownguide.org) to enrich your content.\\n\\n---\\n\\n## 4. Lists\\n\\n### Unordered List\\n- Item A\\n  - Subitem A1\\n    - Sub-subitem A1a\\n- Item B\\n\\n### Ordered List\\n1. First item\\n2. Second item\\n   1. Subitem 2a\\n   2. Subitem 2b\\n3. Third item\\n\\n---\\n\\n## 5. Links\\n- [Inline link to GitHub](https://github.com)\\n- [Reference-style link][github]\\n\\n[github]: https://github.com\\n\\n---\\n\\n## 6. Images\\n![Sample Image](https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-viii/9/9a/Ff8_art.jpg)\\n\\n---\\n\\n## 7. Code\\n\\n### Inline Code\\nUse the `printf()` function to display output.\\n\\n### Code Block\\n```python\\ndef greet(name):\\n    return f\"Hello, {name}!\"\\n```",
  };

  const markdownData = data || test_1;

  const prepMarkdownData = (rawData: string): string => {
    return rawData.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n');
  };

  const formattedMarkdown = prepMarkdownData(markdownData.markdown_data);

  return (
    <Container
      maxWidth="md"
      sx={styles.container}
    >
      <ReactMarkdown
        components={{
          h1: (props) => (
            <Typography 
              variant={styles.headings.h1.variant as any} 
              component="h1" 
              gutterBottom 
              sx={styles.headings.h1.sx}
              {...props}
            />
          ),
          h2: (props) => (
            <Typography 
              variant={styles.headings.h2.variant as any}
              component="h2" 
              gutterBottom 
              sx={styles.headings.h2.sx}
              {...props}
            />
          ),
          h3: (props) => (
            <Typography 
              variant={styles.headings.h3.variant as any}
              component="h3" 
              gutterBottom 
              sx={styles.headings.h3.sx}
              {...props}
            />
          ),
          h4: (props) => (
            <Typography 
              variant={styles.headings.h4.variant as any}
              component="h4" 
              gutterBottom 
              sx={styles.headings.h4.sx}
              {...props}
            />
          ),
          h5: (props) => (
            <Typography 
              variant={styles.headings.h5.variant as any}
              component="h5" 
              gutterBottom 
              sx={styles.headings.h5.sx}
              {...props}
            />
          ),
          h6: (props) => (
            <Typography 
              variant={styles.headings.h6.variant as any}
              component="h6" 
              gutterBottom 
              sx={styles.headings.h6.sx}
              {...props}
            />
          ),
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
