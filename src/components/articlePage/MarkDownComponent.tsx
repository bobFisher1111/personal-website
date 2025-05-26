import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from '@mui/material';

const MarkDownComponent = () => {
  const markdown = `
  # Title
  Once upon a time, in a "land far", **far away**, there was a small village nestled in a lush valley. The villagers were known for their kindness and hospitality, and they lived in harmony with nature.

  Every morning, the sun would rise over the mountains, casting a golden glow over the valley. The villagers would wake up to the sound of birds singing and the gentle rustling of leaves in the breeze. Life in the village was peaceful and content.

  However, one day, a mysterious stranger arrived in the village. The stranger was tall and cloaked in shadows, with eyes that seemed to pierce through the soul. The villagers were wary but curious, and they gathered around to hear the stranger's story.

  As the days went by, the stranger's presence began to change the village. Some villagers grew fearful, while others became more open and adventurous. The stranger's tales of distant lands and incredible adventures ignited a spark in the hearts of the villagers, and they began to dream of exploring beyond the valley.

  ## Subtitle

  ### Things to do ###

  - List item 1
  - List item 2
  - List item 3

  1. First item
  2. Second item
  3. Third item
      1. Indented item
      2. Indented item
  4. Fourth item

  \`\`\`
  const codeSample = () => {
    console.log("Hello, world!");
  };
  \`\`\`
  `;
  // https://www.markdownguide.org/basic-syntax/
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
          // list title
          ul: ({ ...props }) => (
            <Box component="ul" sx={{ paddingLeft: '40px', listStyleType: 'disc', color: 'orange' }} {...props} />
          ),
          ol: ({ ...props }) => (
            <Box component="ol" sx={{ paddingLeft: '40px', listStyleType: 'decimal', color: 'red' }} {...props} />
          ),
          li: ({ ...props }) => (
            <Box component="li" sx={{ fontSize: '1em', marginBottom: '8px', color: 'darkgrey' }} {...props} />
          ),
          // code syntax
          code: ({ ...props }) => (
            <Box component="code" sx={{ fontFamily: 'monospace', backgroundColor: '#f0f0f0', padding: '4px', borderRadius: '4px', display: 'block', maxWidth: '100%' }} {...props} />
          ),
          p: ({ ...props }) => (
            <Box component="p" sx={{ marginBottom: '16px', textIndent: '20px' }} {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkDownComponent;
