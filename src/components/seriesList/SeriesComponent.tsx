import { Grid, useTheme } from '@mui/material';
import { 
  CarouselComponentGridStyles,
  SeriesGridStyles,
  SeriesOuterBlockStyles
} from './SeriesComponentStyles';
import SeriesCardComponent from './SeriesCardComponent';

export type Props = {
  series: any;
  layout?: 'grid' | 'scroller';
};

const SeriesComponent = ({ series, layout = 'grid' }: Props) => {
  const theme = useTheme();
  const count = series?.length ?? 0;

  return (
    <Grid
      container
      justifyContent={layout === 'scroller' ? 'flex-start' : 'center'}
    >
      <Grid
        sx={SeriesOuterBlockStyles(theme, count, layout)}
      >
        <Grid
          className="carouselOne1"
          container
          justifyContent="flex-start"
          {...(layout === 'grid'
            ? {
                columnSpacing: { xs: 0.5, sm: 1 },
                rowSpacing: { xs: 0.5, sm: 1 },
              }
            : {
                columnGap: 1,
                rowGap: 1,
              })}
          sx={CarouselComponentGridStyles(theme)}
        >
          {series?.map((item: any, index: any) => (
            <Grid
              key={index}
              size={layout === 'grid' ? { xs: 6, sm: 'auto' } : 'auto'}
              sx={SeriesGridStyles}
            >
              <SeriesCardComponent articleData={item} layout={layout} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeriesComponent;
