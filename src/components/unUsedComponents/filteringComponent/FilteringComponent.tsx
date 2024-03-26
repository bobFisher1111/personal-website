import React from 'react';
import { 
  Grid, Button 
} from '@mui/material';

const FilteringComponent:  React.FC<Props> = ({
  category, 
  categoryColor,
}) => {
  const categories = [
    {
      name: 'Latest Articles',
    },
    {
      name: 'All Articles',
    },
    {
      name: 'Popular Articles',
    },
  ];
  
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
            { categories.map((item, index) => {
              return (
               <Button 
               size="medium"
               sx={{
                 color: categoryColor,
                 borderColor: '#282c34',
                 pointerEvent: 'none'
               }}
             >
               {item.name}
             </Button>
            )})}
          </Grid>
        </Grid>
    </>
  );
}

export type Props = {
  category: object,
  categoryColor: string,
  
};

export default FilteringComponent;
