import React from 'react';
import SectionCard from "../sectionsCard/SectionCard";
import Persona5Hacker from '../../assets/images/Persona5Hacker.jpg';
import legendOfZelda from '../../assets/images/legendOfZelda.jpg';
import suzuka from '../../assets/images/suzuka.jpeg';
import goldenboy2 from '../../assets/images/goldenboy2.png';
import { GridSections, GridMaxWidth } from '../../styles/GridStyles';

const SectionComponent: React.FC<Props> = ({
  homePage
}) => {

  return (
    <GridMaxWidth
      container
    >
       <GridSections 
          homepage={homePage.toString()}
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
        </GridSections>
        <GridSections
          homepage={homePage.toString()}
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
        </GridSections>
        <GridSections
          homepage={homePage.toString()}
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
        </GridSections>
        <GridSections
          homepage={homePage.toString()}
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
      </GridSections>
    </GridMaxWidth>
  );
}

export type Props = {
  homePage: boolean;
};
export default SectionComponent;
  