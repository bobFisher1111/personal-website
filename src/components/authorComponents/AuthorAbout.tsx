import React from 'react';
import 
  { Typography, 
    Grid,
} from '@mui/material/';

/*
  - Questionaire:
    - favorite movie
    - favorite anime
    - favorite series
    - favorite video game
    - favorite video game series
    - favorite food
    - favorite video game console
    - favorite resturant
    - favorite waifu
    - favorite card game
    - favorite board game
*/

const AuthorAbout: React.FC<Props> = ({
}) => {
  return (
    <Grid 
    container
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
      sx={{
        padding: '32px'
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Video Game Console:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'PS One'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Video Game:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Metal Gear Solid Tatical Explosion'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Video Game Series:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Yakuza / Like A Dragon'} 
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
            padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Video Game Genere:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'JRPG'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite JRPG:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Final Fantasy VIII'} 
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
            padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite RPG:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'The Elder Scrolls IV: Oblivion'}
        </Typography>
      </Grid>
      <Grid
        item
        // xs={12}
        // sm={12}
        // md={12}
        // lg={12}
        // xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
        //   overflow: 'hidden',
        //     // textOverflow: 'ellipsis',
        display: 'flex',
        //     WebkitLineClamp: '1',
        //     WebkitBoxOrient: 'vertical',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Action Game:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
            // max 36 characters
          }}
        >
          {'The Legend of Zelda: Ocarina of Time'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Platformer:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Crash Bandicoot 1-3'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Horror:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Resident Evil 2'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Beat 'em up:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Yakuza 0'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Stealth Game:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'The Last of Us Part II'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Life Simulation Game:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Shenmue'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite RTS:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'13 Sentinels: Aegis Rim'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite MMO:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Final Fantasy XIV'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Shooter:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Golden Eye 007'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Fighting Game:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Tekken 2'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Racing Game:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Mario Kart 64'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Sports Game:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Virtual Tennis'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Waifu:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Rinoa Heartilly, from Final Fantasy VIII'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Anime:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Code Geass'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
            padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Movie:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Brave Heart'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
            padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Food:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Sushi'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Card Game:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Magic The Gathering'}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            paddingRight: '8px',
            fontWeight: 'bold',
          }}
        >
          Favorite Board Game:
        </Typography>
        <Typography
          sx={{
            color: 'grey',
          }}
        >
          {'Monopoly'}
        </Typography>
      </Grid>
    </Grid>
  );
}

export type Props = {
};

export default AuthorAbout;
