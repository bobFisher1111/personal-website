import React, { FC } from 'react';
import {
  Grid,
  styled,
  useTheme,
} from '@mui/material';
import {
  AlignGridStyles,
  CarouselComponentGridStyles,
} from './SeriesComponentStyles';
import SeriesCardComponent from './SeriesCardComponent';

const SeriesComponent: FC<Props> = ({ series }) => {
  const theme = useTheme();

  const AlignGrid = styled(Grid)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: "center",
    margin: 'auto',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
    },
  }));

  return (
    <AlignGrid
      id="Align Grid"
      container
      justifyContent={'center'}
      alignContent={'center'}
      sx={AlignGridStyles(theme)}
    >
      <Grid
        className="carouselOne1"
        size={12}
        container
        sx={CarouselComponentGridStyles(theme)}
      >
        {series?.map((item: any, index: any) => (
          <SeriesCardComponent key={index} articleData={item} />
        ))}
      </Grid>
    </AlignGrid>
  );
};

export type Props = {
  series: any;
};

export default SeriesComponent;
