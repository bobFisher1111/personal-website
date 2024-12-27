import React, { useState, useEffect, FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  styled,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  AlignGridStyles,
  CarouselComponentGridStyles,
} from './SeriesComponentStyles';
import SeriesCardComponent from './SeriesCardComponent';

const SeriesComponent: FC<Props> = ({
  series,
}) => {
  const widthRef = useRef<any>(null);
  const [count, setCount] = useState<any>(0);
  const [marginWidth, setMarginWidth] = useState<any>(widthRef);
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const count1: string = count.toString();

  const updatedLeftMargin = () => {
    setMarginWidth(widthRef.current?.offsetLeft);
  };

  useEffect(() => {
    if (widthRef && widthRef.current) {
      setMarginWidth(widthRef.current.offsetLeft);
      window.addEventListener("resize", updatedLeftMargin);
    }
    return () => {
      if(widthRef && widthRef.current) {
        window.removeEventListener("resize", updatedLeftMargin);
      }
    };
  }, [marginWidth]);

  const AlignGrid = styled(Grid) ({
    justifyContent: 'center',
    alignItems: "center",
    margin: 'auto',
    maxWidth: '100%',
    '@media only screen and (max-width: 600px)': {
      padding: '0px',
    },
  });

  useEffect(() => {
    if (count === 5) {
      setCount(1);
    }
    if (count === 0) {
      setCount(4);
    }
    if (count || theme) {
      document.getElementById(count1)?.scrollIntoView({ 
        behavior: "auto",
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [count, theme]);
  
  return (
    <AlignGrid
      id="Align Grid"
      container
      justifyContent={'center'}
      alignContent={'center'}
      sx={AlignGridStyles}
    >
      <Grid
        className="carouselOne1"
        size={12}
        container
        sx={CarouselComponentGridStyles}
      >
        {series?.map((item: any, index: any) => (
          <SeriesCardComponent key={index} articleData={item} />
        ))}
      </Grid> 
    </AlignGrid>
  );
};

export type Props = {
  series: any,
};

export default SeriesComponent;
