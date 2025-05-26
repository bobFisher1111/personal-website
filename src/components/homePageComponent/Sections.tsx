import React, { FC, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  SectionNotSelectedStyles,
  SectionSelectedStyles,
} from './HomePageComponentStyles';


const Sections: FC<Props> = ({
  data,
  series,
  setData,
  setSeries,
}) => {
  const [sectionSelect, setSectionSelect] = useState<number>(1);
  const theme = useSelector((state: any) => state.theme.darkTheme);

  const reviewsFilter = data?.filter((item: any) => {
    return item.section === 'Reviews';
  });
  const gamingFilter = data?.filter((item: any) => {
    return item.section === 'Video Games';
  });
  const codingFilter = data?.filter((item: any) => {
    return item.section === 'Coding';
  });
  const storiesFilter = data?.filter((item: any) => {
    return item.section === 'Stories';
  });

  const reviewsFilterSeries = series?.filter((item: any) => {
    return item.section === 'Reviews';
  });
  const gamingFilterSeries = series?.filter((item: any) => {
    return item.section === 'Video Games';
  });
  const codingFilterSeries = series?.filter((item: any) => {
    return item.section === 'Coding';
  });
  const storiesFilterSeries = series?.filter((item: any) => {
    return item.section === 'Stories';
  });

  useEffect(() => {
    if (sectionSelect === 1) {
      setSeries(series);
      return setData(data);
    }
    if (sectionSelect === 2) {
      setSeries(reviewsFilterSeries);
      return setData(reviewsFilter);
    }
    if (sectionSelect === 3) {
      setSeries(gamingFilterSeries);
      return setData(gamingFilter);
    }
    if (sectionSelect === 4) {
      setSeries(codingFilterSeries);
      return setData(codingFilter);
    }
    if (sectionSelect === 5) {
      setSeries(storiesFilterSeries);
      return setData(storiesFilter);
    }
  }, [data, sectionSelect]);
  
  return (
    <Grid
      container
      justifyContent='center'
      alignItems="center"
      spacing={2}
      sx={{
        margin: '24px 0px'
      }}
    >
      <Typography
        id="All_Button"
        onClick={() => setSectionSelect(1)}
        sx={(sectionSelect === 1) ? SectionSelectedStyles(theme) : SectionNotSelectedStyles(theme)}
      >
        ALL
      </Typography>
      <Typography
        id="Reviews_Button"
        onClick={() => setSectionSelect(2)}
        sx={(sectionSelect === 2) ? SectionSelectedStyles(theme) : SectionNotSelectedStyles(theme)}
      >
        Reviews
      </Typography>
      <Typography
        id="Gaming_Button"
        onClick={() => setSectionSelect(3)}
        sx={(sectionSelect === 3) ? SectionSelectedStyles(theme) : SectionNotSelectedStyles(theme)}
      >
        Gaming
      </Typography>
      <Typography
        id="Coding_Button"
        onClick={() => setSectionSelect(4)}
        sx={(sectionSelect === 4) ? SectionSelectedStyles(theme) : SectionNotSelectedStyles(theme)}
      >
        Coding
      </Typography>
      <Typography
        id="Stories_Button"
        onClick={() => setSectionSelect(5)}
        sx={(sectionSelect === 5) ? SectionSelectedStyles(theme) : SectionNotSelectedStyles(theme)}
      >
        Stories
      </Typography>
    </Grid>
  );
};

export type Props = {
  data: any,
  series: any,
  setData: any,
  setSeries: any,
};

export default Sections;
