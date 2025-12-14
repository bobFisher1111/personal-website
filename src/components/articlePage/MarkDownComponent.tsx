/* eslint-disable react/prop-types */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Box, Typography, Link as MuiLink } from '@mui/material';
// Come back here after next push, and add style to constants file later
const MarkDownComponent: React.FC = () => {
  const test_1 = {
    article_title: 'Test',
    markdown_data:
      "# Markdown Formatting Test\\n\\n## 1. Headings\\n# Heading 1\\n## Heading 2\\n### Heading 3\\n#### Heading 4\\n##### Heading 5\\n###### Heading 6\\n\\n---\\n\\n## 2. Emphasis\\n- *Italic text*\\n- _Italic text (underscore)_\\n- **Bold text**\\n- __Bold text (underscore)__\\n- ***Bold and italic***\\n- ~~Strikethrough~~\\n\\n---\\n\\n## 3. Paragraphs with Emphasis and Indents\\n\\n&nbsp;&nbsp;&nbsp;&nbsp;This is the first paragraph of our sample text. It demonstrates how to use *italic* and **bold** formatting within a standard paragraph. You can also combine them for ***bold and italic emphasis*** when needed. Markdown doesn't support true indentation, but you can simulate it using non-breaking spaces (`&nbsp;`).\\n\\n&nbsp;&nbsp;&nbsp;&nbsp;Here is a second paragraph, indented the same way. Notice how we can continue to use formatting like **highlighting important terms** or *soft emphasis* to guide the reader's attention. This is useful in documentation, notes, or styled content.\\n\\n&nbsp;&nbsp;&nbsp;&nbsp;Finally, this third paragraph wraps up the example. You can also include inline code like `let x = 10;` or links such as [Markdown Guide](https://www.markdownguide.org) to enrich your content.\\n\\n---\\n\\n## 4. Lists\\n\\n### Unordered List\\n- Item A\\n  - Subitem A1\\n    - Sub-subitem A1a\\n- Item B\\n\\n### Ordered List\\n1. First item\\n2. Second item\\n   1. Subitem 2a\\n   2. Subitem 2b\\n3. Third item\\n\\n---\\n\\n## 5. Links\\n- [Inline link to GitHub](https://github.com)\\n- [Reference-style link][github]\\n\\n[github]: https://github.com\\n\\n---\\n\\n## 6. Images\\n![Sample Image](https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-viii/9/9a/Ff8_art.jpg)\\n\\n---\\n\\n## 7. Code\\n\\n### Inline Code\\nUse the `printf()` function to display output.\\n\\n### Code Block\\n```python\\ndef greet(name):\\n    return f\"Hello, {name}!\"\\n```",
  };

  const prepMarkdownData = (rawData: string): string => {
    return rawData.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n');
  };

  const formattedMarkdown = prepMarkdownData(test_1.markdown_data);

  return (
    <Container
      maxWidth="md"
      sx={{
        fontFamily: '"Inter", "Segoe UI", "Helvetica Neue", "Arial", sans-serif',
        color: '#1a1a1a',
        backgroundColor: '#fff',
        px: { xs: 2, sm: 3, md: 4 },
        py: 4,
      }}
    >
      <ReactMarkdown
        components={{
          h1: (props) => (
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }} {...props} />
          ),
          h2: (props) => (
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, color: 'secondary.main' }} {...props} />
          ),
          h3: (props) => (
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 500 }} {...props} />
          ),
          h4: (props) => (
            <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 500 }} {...props} />
          ),
          h5: (props) => (
            <Typography variant="subtitle1" component="h5" gutterBottom {...props} />
          ),
          h6: (props) => (
            <Typography variant="subtitle2" component="h6" gutterBottom {...props} />
          ),
          p: (props) => (
            <Typography variant="body1" component="div" sx={{ textIndent: '20px', mb: 2 }} {...props} />
          ),
          strong: (props) => (
            <Box component="strong" sx={{ fontWeight: 'bold' }} {...props} />
          ),
          em: (props) => (
            <Box component="em" sx={{ fontStyle: 'italic' }} {...props} />
          ),
          del: (props) => (
            <Box component="del" sx={{ textDecoration: 'line-through' }} {...props} />
          ),
          ul: (props) => (
            <Box component="ul" sx={{ pl: 4, mb: 2, listStyleType: 'disc' }} {...props} />
          ),
          ol: (props) => (
            <Box component="ol" sx={{ pl: 4, mb: 2, listStyleType: 'decimal' }} {...props} />
          ),
          li: (props) => (
            <Box component="li" sx={{ mb: 1 }} {...props} />
          ),
          a: ({ href, children, ...props }) => (
            <MuiLink href={href ?? '#'} target="_blank" rel="noopener noreferrer" underline="hover" color="primary" {...props}>
              {children}
            </MuiLink>
          ),
          img: ({ src, alt, ...props }) => (
            <Box
              component="img"
              src={src ?? ''}
              alt={alt ?? 'Markdown image'}
              sx={{
                display: 'block',
                maxWidth: '100%',
                height: 'auto',
                margin: '0 auto',
                borderRadius: 2,
                my: 2,
              }}
              {...props}
            />
          ),
          code: (props) => {
            const { inline, children, ...rest } = props as { inline?: boolean; children?: React.ReactNode };
            return inline ? (
              <Box component="code" sx={{ fontFamily: 'monospace', backgroundColor: '#f0f0f0', px: 0.5, borderRadius: 1 }}>
                {children}
              </Box>
            ) : (
              <Box
                component="pre"
                sx={{
                  fontFamily: '"Source Code Pro", "Roboto Mono", monospace',
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 2,
                  overflowX: 'auto',
                  fontSize: '0.9rem',
                  my: 2,
                }}
                {...rest}
              >
                <code>{children}</code>
              </Box>
            );
          },
          blockquote: (props) => (
            <Box
              component="blockquote"
              sx={{
                borderLeft: '4px solid #ccc',
                pl: 2,
                ml: 0,
                color: 'text.secondary',
                fontStyle: 'italic',
                my: 2,
              }}
              {...props}
            />
          ),
          table: (props) => (
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', my: 3 }} {...props} />
          ),
          thead: (props) => <Box component="thead" sx={{ backgroundColor: '#f0f0f0' }} {...props} />,
          tbody: (props) => <Box component="tbody" {...props} />,
          tr: (props) => <Box component="tr" sx={{ borderBottom: '1px solid #ddd' }} {...props} />,
          th: (props) => (
            <Box component="th" sx={{ textAlign: 'left', p: 1, fontWeight: 'bold' }} {...props} />
          ),
          td: (props) => (
            <Box component="td" sx={{ textAlign: 'left', p: 1 }} {...props} />
          ),
        }}
      >
        {formattedMarkdown}
      </ReactMarkdown>
    </Container>
  );
};

export default MarkDownComponent;
