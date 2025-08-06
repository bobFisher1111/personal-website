import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from '@mui/material';

const MarkDownComponent = () => {
  const testData = {
    "article_subtitle": "test",
    "article_title": "test",
    "author_id": 1,
    "cover_image_or_video": "test",
    "markdown_data": "***\\n### Test One\\n***\\n***what is going on in the world today,***\\n**Movie** time is going to be good\\n> Locate the Cat\\n> 1. what is going on in the world\\n> 2. Give me a turtle\\n> - Give a monkey a dollar\\n`let cat = [monkey]`",
    "published_date": "2025-07-15",
    "section": "test",
    "section_link": "test",
    "section_type": "test",
    "series_id": 1,
    "series_chapter": "test",
    "series_type": "test"
  };
  const prepMarkdownData = (rawData: any) =>{
    // Replace escaped newlines (\\n) with actual newlines
    let cleaned = rawData.replace(/\\\\n/g, '\n');
    cleaned = cleaned.replace(/\\n/g, '\n');
    return cleaned;
  };
  const formattedMarkdown = prepMarkdownData(testData.markdown_data);
  return (
    <Box sx={{ fontSize: '20px', maxWidth: '1200px', margin: '0 auto', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
      <ReactMarkdown
        components={{
          // title
          h1: ({ ...props }) => (
            <Box component="h1" sx={{ fontSize: '2em', fontWeight: 'bold', color: 'blue' }} {...props} />
          ),
          // subtitle
          h2: ({ ...props }) => (
            <Box component="h2" sx={{ fontSize: '1.5em', fontWeight: 'medium', color: 'green' }} {...props} />
          ),
          h3: ({ ...props }) => (
            <Box component="h2" sx={{ fontSize: '1.5em', fontWeight: 'medium', color: 'green' }} {...props} />
          ),
          // list title
          ul: ({ ...props }) => (
            <Box component="ul" sx={{ paddingLeft: '40px', listStyleType: 'disc', color: 'orange' }} {...props} />
          ),
          ol: ({ ...props }) => (
            <Box component="ol" sx={{ paddingLeft: '40px', listStyleType: 'decimal', color: 'red' }} {...props} />
          ),
          li: ({ ...props }) => (
            <Box component="li" sx={{ fontSize: '1em', marginBottom: '8px', color: 'purple' }} {...props} />
          ),
          code: ({children, ...props }) => (
            <Box
              component="pre"
              sx={{
                fontFamily: '"Source Code Pro", "Roboto Mono", monospace',
                backgroundColor: '#f5f5f5',
                padding: 1,
                borderRadius: 1,
                overflowX: 'auto',
                fontSize: '0.9rem',
              }}
              {...props}
            >
              <code>{children}</code>
            </Box>
          ),
          p: ({ ...props }) => (
            <Box component="p" sx={{ marginBottom: '16px', textIndent: '20px' }} {...props} />
          ),
        }}
      >
        {formattedMarkdown}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkDownComponent;
