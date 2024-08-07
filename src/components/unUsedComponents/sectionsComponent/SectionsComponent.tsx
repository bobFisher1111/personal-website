import React from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  Grid,
} from '@mui/material/';
import {
  ButtonBorderLeftStyles,
  ButtonBorderRightStyles,
  ButtonStyles,
  Rootstyle,
} from './SectionsComponentStyles';
import { Link } from 'react-router-dom';

const SectionsComponent: React.FC = () => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  return (
    <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={Rootstyle}
    >
      <Grid
        item
        sx={{
          // padding: '8px',
        }}
      >
        <Link
          to={`/videoGames`}
        >
          <Button
            color="primary"
            variant="outlined"
            sx={ButtonBorderLeftStyles(theme)}
          >
            Gaming
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        sx={{
          // padding: '8px',
        }}
      >
        <Link
          to={`/reviews`}
        >
          <Button
            color="primary"
            variant="outlined"
            sx={ButtonStyles(theme)}
          >
            Reviews
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        sx={{
          // padding: '8px',
        }}
      >
        <Link
          to={`/coding`}
        >
          <Button
            color="primary"
            variant="outlined"
            sx={ButtonStyles(theme)}
          >
            Coding
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        sx={{
          // padding: '8px',
        }}
      >
        <Link
          to={`/stories`}
        >
          <Button
            color="primary"
            variant="outlined"
            sx={ButtonBorderRightStyles(theme)}
          >
            Stories
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default SectionsComponent;
