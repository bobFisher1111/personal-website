import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, useTheme } from "@mui/material";
import {
  SectionNotSelectedStyles,
  SectionSelectedStyles,
} from "./HomePageComponentStyles";

const Sections = ({ data, series, setData, setSeries }: Props) => {
  const [sectionSelect, setSectionSelect] = useState<number>(1);
  const theme = useTheme();
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);

  const reviewsFilter = data?.filter((item: any) => item.section === "Reviews");
  const gamingFilter = data?.filter((item: any) => item.section === "Video Games");
  const codingFilter = data?.filter((item: any) => item.section === "Coding");
  const storiesFilter = data?.filter((item: any) => item.section === "Stories");

  const reviewsFilterSeries = series?.filter((item: any) => item.section === "Reviews");
  const gamingFilterSeries = series?.filter((item: any) => item.section === "Video Games");
  const codingFilterSeries = series?.filter((item: any) => item.section === "Coding");
  const storiesFilterSeries = series?.filter((item: any) => item.section === "Stories");

  const handleSectionChange = (id: number) => {
    setSectionSelect(id);
    switch (id) {
      case 1:
        setSeries(series);
        setData(data);
        break;
      case 2:
        setSeries(reviewsFilterSeries);
        setData(reviewsFilter);
        break;
      case 3:
        setSeries(gamingFilterSeries);
        setData(gamingFilter);
        break;
      case 4:
        setSeries(codingFilterSeries);
        setData(codingFilter);
        break;
      case 5:
        setSeries(storiesFilterSeries);
        setData(storiesFilter);
        break;
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ margin: theme.spacing(3, 0) }}
    >
      {[
        { label: "ALL", id: 1 },
        { label: "Reviews", id: 2 },
        { label: "Gaming", id: 3 },
        { label: "Coding", id: 4 },
        { label: "Stories", id: 5 },
      ].map(({ label, id }) => (
        <Typography
          key={label}
          id={`${label}_Button`}
          onClick={() => handleSectionChange(id)}
          sx={
            sectionSelect === id
              ? SectionSelectedStyles(darkTheme, theme)
              : SectionNotSelectedStyles(darkTheme, theme)
          }
        >
          {label}
        </Typography>
      ))}
    </Grid>
  );
};

export type Props = {
  data: any;
  series: any;
  setData: any;
  setSeries: any;
};

export default Sections;
