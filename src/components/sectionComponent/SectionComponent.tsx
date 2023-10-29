import React from 'react';
import {
  Grid,
} from '@mui/material/';
import SectionCard from '../sectionsCard/SectionCard';
import Persona5Hacker from '../../assets/images/Persona5Hacker.jpg';
import legendOfZelda from '../../assets/images/legendOfZelda.jpg';
import suzuka from '../../assets/images/suzuka.jpeg';
import goldenboy2 from '../../assets/images/goldenboy2.png';
import {
  GridMaxWidth,
  GridSections,
} from './SectionComponentStyles';

const SectionComponent: React.FC<Props> = ({
  homePage
}) => {

  return (
    <Grid
      container
      sx={GridMaxWidth}
    >
      <Grid 
        sx={GridSections(homePage)}
        item
        xs={2}
        sm={3}
        md={3}
        lg={3}
        xl={3}
      >
        <SectionCard
          imgCover={Persona5Hacker}
          section='Coding'
          linkTo='coding'
        />
      </Grid>
      <Grid
        sx={GridSections(homePage)}
        item
        xs={4}
        sm={3}
        md={3}
        lg={3}
        xl={3}
      >
        <SectionCard
          imgCover={legendOfZelda}
          section='Video Games'
          linkTo='videoGames'
        />
      </Grid>
      <Grid
        sx={GridSections(homePage)}
        item
        xs={3}
        sm={3}
        md={3}
        lg={3}
        xl={3}
      >
        <SectionCard
          imgCover={goldenboy2}
          section='Anime'
          linkTo='showsMovies'
        />
      </Grid>
      <Grid
        sx={GridSections(homePage)}
        item
        xs={3}
        sm={3}
        md={3}
        lg={3}
        xl={3}
      >
        <SectionCard
          imgCover={suzuka}
          section='Stories'
          linkTo='stories'
        />
      </Grid>
    </Grid>
  );
};

export type Props = {
  homePage: boolean;
};

export default SectionComponent;
