import React from 'react';
import {
  Grid,
} from "@mui/material";
import SectionCard from "../sectionsCard/SectionCard";
import codingpicture from '../../assets/images/codingpicture.png';
import legendOfZelda from '../../assets/images/legendOfZelda.jpg';
import suzuka from '../../assets/images/suzuka.jpeg';
import goldenboy2 from '../../assets/images/goldenboy2.png';

const SectionComponent: React.FC<Props> = ({
  homePage
}) => {

  return (
    <Grid
      container
      sx={{
        maxWidth: '1600px'
      }}
    >
       <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            padding: '16px',
            '&.MuiGrid-root': {
              '&.MuiGrid-item': {
                paddingTop: homePage ? '16px' : '32px',
              }
            },
          }}
        >
          <SectionCard
            backGroundColor='blue'
            imgCover={codingpicture}
            section='Coding'
            linkTo='coding'
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            padding: '16px',
            '&.MuiGrid-root': {
                '&.MuiGrid-item': {
                  paddingTop: homePage ? '16px' : '32px',
                }
              },
          }}
        >
          <SectionCard
            backGroundColor='blue'
            imgCover={legendOfZelda}
            section='Video Games'
            linkTo='videoGames'
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            padding: '16px',
            '&.MuiGrid-root': {
              '&.MuiGrid-item': {
                paddingTop: homePage ? '16px' : '32px',
              }
            },
          }}
        >
          <SectionCard
            backGroundColor='blue'
            imgCover={goldenboy2}
            section='Shows / Movies'
            linkTo='showsMovies'
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            padding: '16px',
            '&.MuiGrid-root': {
                '&.MuiGrid-item': {
                  paddingTop: homePage ? '16px' : '32px',
                }
              },
          }}
        >
          <SectionCard
            backGroundColor='blue'
            imgCover={suzuka}
            section='Stories'
            linkTo='stories'
          />
      </Grid>
    </Grid>
  );
}

export type Props = {
  homePage: boolean;
};
export default SectionComponent;
  