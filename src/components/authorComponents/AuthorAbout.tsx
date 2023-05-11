import React from 'react';
import 
  { Typography, 
    Grid,
    Link,
    Tooltip,
} from '@mui/material/';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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

const questionaire2 =  {
  "favorVideoGameConsole": {
    "link": 'https://en.wikipedia.org/wiki/PlayStation_(console)',
    "name": "PS One",
  },
};

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
        <Link 
              href={'https://en.wikipedia.org/wiki/PlayStation_(console)'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',  
                paddingRight: '4px',         
              }}
            >
              {'PS One'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Metal_Gear_Solid_(1998_video_game)'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Metal Gear Solid'}
            </Link>
            
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Yakuza_(franchise)'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Yakuza / Like A Dragon'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/History_of_Eastern_role-playing_video_games#Japanese_role-playing_games'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
               {'JRPG'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Final_Fantasy_VIII'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Final Fantasy VIII'} 
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/The_Elder_Scrolls_IV:_Oblivion'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'The Elder Scrolls IV: Oblivion'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Ocarina_of_Time'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'The Legend of Zelda: Ocarina of Time'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Sonic_Adventure'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Sonic Adventure'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Resident_Evil_2'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
             {'Resident Evil 2'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Yakuza_0'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Yakuza 0'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/The_Last_of_Us_Part_II'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'The Last of Us Part II'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Shenmue'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Shenmue'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/13_Sentinels:_Aegis_Rim'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'13 Sentinels: Aegis Rim'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Final_Fantasy_XIV'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
             {'Final Fantasy XIV'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/GoldenEye_007_(1997_video_game)'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
             {'Golden Eye 007'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Tekken_2'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
             {'Tekken 2'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Mario_Kart_64'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Mario Kart 64'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Virtua_Tennis'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Virtua Tennis'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Rinoa_Heartilly'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Rinoa Heartilly, from Final Fantasy VIII'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Code_Geass'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Code Geass'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Braveheart'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Braveheart'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Sushi'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Sushi'}
            </Link>
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Magic:_The_Gathering'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Magic: The Gathering'}
            </Link>
          
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
        <Link 
              href={'https://en.wikipedia.org/wiki/Monopoly_(game)'}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',           
              }}
            >
              {'Monopoly'}
            </Link>
      </Grid>
    </Grid>
  );
}

export type Props = {
};

export default AuthorAbout;
