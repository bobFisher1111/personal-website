import React from 'react';
import {
  Typography,
  Grid,
} from "@mui/material";

const HorizontalArticleSubTextComponent: React.FC<Props> = ({
  articalSubTitle,
}) => {
    return (
      <Grid 
        container
        justifyContent={'center'}
        sx={{
          padding: '0px 0px 16px 0px',
        }}
      >
        <Typography 
          variant="body1"
          color="primary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
            lineHeight: '28px',
            fontSize: '22px',
          }} 
        >
          {articalSubTitle}
        </Typography>
      </Grid>
    )
}

export type Props = {
  articalSubTitle: string | undefined;
};
      
export default HorizontalArticleSubTextComponent;
  