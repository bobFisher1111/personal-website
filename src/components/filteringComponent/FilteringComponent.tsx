import React from 'react';
import { 
  Grid, Button 
} from '@mui/material';

const FilteringComponent = () => {
  return (
    <>
      <Grid 
          container
          direction="row"
          sx={{
            padding: '16px'
          }}
        >
          <Grid 
            item
            sx={{
              maxWidth: "1024px",
              margin: 'auto',
              '& button': { m: 1 },
              padding: '4px',
            }}
          >
            <Button 
              variant="outlined" 
              size="medium"
              sx={{
                color: '#282c34',
                borderColor: '#282c34',
                pointerEvent: 'none'
              }}
            >
              All
            </Button>
            <Button 
              variant="outlined" 
              size="medium"
              sx={{
                color: '#282c34',
                borderColor: '#282c34',
                pointerEvent: 'none'
              }}
            >
              Coding
            </Button>
            <Button 
              variant="outlined" 
              size="medium"
              sx={{
                color: '#2F4C69',
                borderColor: '#2F4C69',
              }}
            >
              Data
            </Button>
            <Button 
              variant="outlined" 
              size="medium"
              sx={{
                color: '#667A6E',
                borderColor: '#667A6E',
              }}
            >
              Game Dev
            </Button>
            <Button 
              variant="outlined" 
              size="medium"
              sx={{
                color: '#B784A7',
                borderColor: '#B784A7',
              }}
            >
              Projects
            </Button>
          </Grid>
        </Grid>
    </>
  );
}

export default FilteringComponent;
