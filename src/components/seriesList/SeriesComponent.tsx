import { Grid, useTheme } from '@mui/material';
import { CarouselComponentGridStyles, SeriesOuterBlockStyles } from './SeriesComponentStyles';
import SeriesCardComponent from './SeriesCardComponent';

export type Props = {
  series: any;
};

const SeriesComponent = ({ series }: Props) => {
  const theme = useTheme();
  const count = series?.length ?? 0;

  return (
    <Grid container justifyContent="center">
      <Grid
        sx={SeriesOuterBlockStyles(count)}
      >
        <Grid
          className="carouselOne1"
          container
          justifyContent="flex-start"
          columnGap={1}
          rowGap={1}
          sx={CarouselComponentGridStyles(theme)}
        >
          {series?.map((item: any, index: any) => (
            <SeriesCardComponent key={index} articleData={item} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeriesComponent;
