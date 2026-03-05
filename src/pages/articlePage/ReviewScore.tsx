import { useAppSelector } from "src/store/redux/hooks";
import { Grid, Typography } from "@mui/material";
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
} from "./ReviewScoreStyles";

export type ReviewData = {
  gameplay: number;
  visuals: number;
  audio: number;
  concept: number;
  value: number;
};

const ReviewScore = ({ text }: Props) => {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);

  const gameplayScore = text?.gameplay ?? 0;
  const visualsScore = text?.visuals ?? 0;
  const audioScore = text?.audio ?? 0;
  const conceptScore = text?.concept ?? 0;
  const valueScore = text?.value ?? 0;
  const totalScore =
    gameplayScore + visualsScore + audioScore + conceptScore + valueScore;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={RootStyles(darkTheme)}
    >
      <Grid
        size={{
          xs: 7,
        }}
        container
        sx={LeftRootStyles(darkTheme)}
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
            <Typography color="primary" sx={TextStyles(darkTheme)}>
              GAMEPLAY
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography color="primary" sx={TextScoreStyles(darkTheme)}>
              {gameplayScore}
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
            <Typography color="primary" sx={TextStyles(darkTheme)}>
              VISUALS
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography color="primary" sx={TextScoreStyles(darkTheme)}>
              {visualsScore}
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
            <Typography color="primary" sx={TextStyles(darkTheme)}>
              AUDIO
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography color="primary" sx={TextScoreStyles(darkTheme)}>
              {audioScore}
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
            <Typography color="primary" sx={TextStyles(darkTheme)}>
              CONCEPT
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography color="primary" sx={TextScoreStyles(darkTheme)}>
              {conceptScore}
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
            <Typography color="primary" sx={TextStyles(darkTheme)}>
              VALUE
            </Typography>
          </Grid>
          <Grid
            size={{
              xs: 4,
            }}
          >
            <Typography color="primary" sx={TextScoreStyles(darkTheme)}>
              {valueScore}
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
          <Typography color="primary" sx={FinalScoreStyle(darkTheme)}>
            {totalScore}
          </Typography>
        </Grid>
        <Grid
          size={{
            xs: 12,
          }}
        >
          <Typography sx={AlignTextStyle(darkTheme)}>OUT OF 25</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export type Props = {
  text: ReviewData | null;
};

export default ReviewScore;
