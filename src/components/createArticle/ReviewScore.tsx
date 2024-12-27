import React from 'react';
import { 
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  AlignTextStyle,
  FinalScoreStyle,
  LeftRootItemBottomStyles,
  LeftRootItemStyles,
  LeftRootItemTopStyles,
  LeftRootStyles,
  RootStyles,
  TextScoreStyles,
  TextStyles,
} from './ReviewScoreStyles';

const ReviewScore: React.FC<Props> = ({
  text,
}) => {
  const removeReview = text.slice(8);
  const createObjectForReview = removeReview.split(', ');
  const GameplayArray = new Array(createObjectForReview[0]);
  const GameplayScore = Number(GameplayArray[0].split(': ')[1]);
  const VisualsArray = new Array(createObjectForReview[1]);
  const VisualsScore = Number(VisualsArray[0].split(': ')[1]);
  const AudioArray = new Array(createObjectForReview[2]);
  const AuidoScore = Number(AudioArray[0].split(': ')[1]);
  const ConceptArray = new Array(createObjectForReview[3]);
  const ConceptScore = Number(ConceptArray[0].split(': ')[1]);
  const ValueArray = new Array(createObjectForReview[4]);
  const ValueScore = Number(ValueArray[0].split(': ')[1]);
  const ReviewScore = GameplayScore + VisualsScore + AuidoScore + ConceptScore + ValueScore;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={RootStyles}
    >
      <Grid
        size={{
          xs: 7,
        }}
        container
        sx={LeftRootStyles}
      >
        <Grid
          container
          size={{
            xs: 12,
          }}
          sx={LeftRootItemTopStyles}
        >
          <Grid
            size={{
              xs: 8,
            }}
          >
            <Typography
              sx={TextStyles}
            >
              GAMEPLAY
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {GameplayScore}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          size={{
            xs: 12,
          }}
          container
          sx={LeftRootItemStyles}
        >
          <Grid
            size={{
              xs: 8,
            }}
          >
            <Typography
              sx={TextStyles}
            >
              VISUALS
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {VisualsScore}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          size={{
            xs: 12,
          }}
          sx={LeftRootItemStyles}
        >
          <Grid
            size={{
              xs: 8,
            }}
          >
            <Typography
              sx={TextStyles}
            >
              AUDIO
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {AuidoScore}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          size={{
            xs: 12,
          }}
          container
          sx={LeftRootItemStyles}
        >
          <Grid
            size={{
              xs: 8,
            }}
          >
            <Typography
              sx={TextStyles}
            >
              CONCEPT
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {ConceptScore}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          size={{
            xs: 12,
          }}
          sx={LeftRootItemBottomStyles}
        >
          <Grid
            size={{
              xs: 8,
            }}
          >
            <Typography
              sx={TextStyles}
            >
              VALUE
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography
              sx={TextScoreStyles}
            >
              {ValueScore}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        size={{
          xs: 5,
        }}
      >
        <Grid
          size={{
            xs: 12,
          }}
        >
          <Typography
            sx={FinalScoreStyle}
          >
            {ReviewScore}
          </Typography>   
        </Grid>
        <Grid
          size={{
            xs: 12,
          }}
        >
          <Typography
            sx={AlignTextStyle}
          >
            OUT OF 25
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export type Props = {
  text: string;
};

export default ReviewScore;
