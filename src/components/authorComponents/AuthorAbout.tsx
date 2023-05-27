import React from 'react';
import 
  { Typography, 
    Grid,
    Link,
    Tooltip,
} from '@mui/material/';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const questionaire2 =  {
  "favorVideoGameConsole": {
    "link": 'https://en.wikipedia.org/wiki/PlayStation_(console)',
    "name": "PS One",
  },
};

const AuthorAbout: React.FC<Props> = ({
    turnPaddingOn,
    aboutData,
}) => {
  const questionaireData = aboutData.about[0].questionaire[0];

  return (
    <Grid 
    container
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
      sx={{
        padding: turnPaddingOn ? '16px' : '32px',
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
          // padding: '2px 16px 2px 16px',
          display: 'flex',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#667A6E',
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Questionnaire:
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Video Game Console:
        </Typography>
        <Link 
              href={questionaireData.FavoriteVideoGameConsole.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',  
                paddingRight: '4px',
                color: '#551A8B',
                "&:hover": {
                    color: "#667A6E",
                },     
              }}
            >
              {questionaireData.FavoriteVideoGameConsole.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Video Game:
        </Typography>
        <Link 
              href={questionaireData.FavoriteVideoGame.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                    color: "#667A6E",
                },       
              }}
            >
              {questionaireData.FavoriteVideoGame.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Video Game Series:
        </Typography>
        <Link 
              href={questionaireData.FavoriteVideoGameSeries.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                    color: "#667A6E",
                },      
              }}
            >
              {questionaireData.FavoriteVideoGameSeries.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Video Game Genere:
        </Typography>
        <Link 
              href={questionaireData.FavoriteVideoGameGenere.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                    color: "#667A6E",
                },           
              }}
            >
               {questionaireData.FavoriteVideoGameGenere.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite JRPG:
        </Typography>
        <Link 
              href={questionaireData.FavoriteJRPG.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },          
              }}
            >
              {questionaireData.FavoriteJRPG.name} 
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite RPG:
        </Typography>
        <Link 
              href={questionaireData.FavoriteRPG.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteRPG.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Action Game:
        </Typography>
        <Link 
              href={questionaireData.FavoriteActionGame.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteActionGame.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Platformer:
        </Typography>
        <Link 
              href={questionaireData.FavoritePlatformer.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoritePlatformer.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Horror:
        </Typography>
        <Link 
              href={questionaireData.FavoriteHorror.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },          
              }}
            >
             {questionaireData.FavoriteHorror.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Beat 'em up:
        </Typography>
        <Link 
              href={questionaireData.FavoriteBeatEmUp.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },          
              }}
            >
              {questionaireData.FavoriteBeatEmUp.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Stealth Game:
        </Typography>
        <Link 
              href={questionaireData.FavoriteStealthGame.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteStealthGame.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Life Simulation Game:
        </Typography>
        <Link 
              href={questionaireData.FavoriteLifeSimulationGame.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteLifeSimulationGame.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Visual Novel:
        </Typography>
        <Link 
              href={questionaireData.FavoriteVisualNovel.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },          
              }}
            >
              {questionaireData.FavoriteVisualNovel.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite RTS:
        </Typography>
        <Link 
              href={questionaireData.FavoriteRTS.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },          
              }}
            >
              {questionaireData.FavoriteRTS.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite MMO:
        </Typography>
        <Link 
              href={questionaireData.FavoriteMMO.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
             {questionaireData.FavoriteMMO.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Shooter:
        </Typography>
        <Link 
              href={questionaireData.FavoriteShooter.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
             {questionaireData.FavoriteShooter.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Fighting Game:
        </Typography>
        <Link 
              href={questionaireData.FavoriteFightingGame.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },          
              }}
            >
             {questionaireData.FavoriteFightingGame.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Racing Game:
        </Typography>
        <Link 
              href={questionaireData.FavoriteRacingGame.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteRacingGame.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Sports Game:
        </Typography>
        <Link 
              href={questionaireData.FavoriteSportsGame.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteSportsGame.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Waifu:
        </Typography>
        <Link 
              href={questionaireData.FavoriteWaifu.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteWaifu.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Anime:
        </Typography>
        <Link 
              href={questionaireData.FavoriteAnime.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteAnime.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Movie:
        </Typography>
        <Link 
              href={questionaireData.FavoriteMovie.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteMovie.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Food:
        </Typography>
        <Link 
              href={questionaireData.FavoriteFood.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteFood.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Card Game:
        </Typography>
        <Link 
              href={questionaireData.FavoriteCardGame.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteCardGame.name}
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
          color="#2F4C69"
          sx={{
            paddingRight: '8px',
            // fontWeight: 'bold',
          }}
        >
          Favorite Board Game:
        </Typography>
        <Link 
              href={questionaireData.FavoriteBoardGame.link}
              underline="none"
              target="_blank"
              rel="noopener"
              sx={{
                // fontsize: '16px',
                fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#551A8B',
                "&:hover": {
                  color: "#667A6E",
                },           
              }}
            >
              {questionaireData.FavoriteBoardGame.name}
            </Link>
      </Grid>
    </Grid>
  );
}

export type Props = {
  turnPaddingOn: boolean,
  aboutData: any;
};

export default AuthorAbout;
