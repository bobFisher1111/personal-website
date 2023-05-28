import React from 'react';
import {
  Typography,
  Grid,
} from "@mui/material";

const HorizontalArticalSubTextComponent: React.FC<Props> = ({
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
          color="#667A6E" 
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
            lineHeight: '28px',
            fontSize: '22px',
          }} 
          component="div"
        >
          {articalSubTitle}
        </Typography>
      </Grid>
    )
}

export type Props = {
  articalSubTitle: string | undefined;
};
      
export default HorizontalArticalSubTextComponent;
  