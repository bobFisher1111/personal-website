import { Grid } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import ScrollArrowButton from "src/components/scrollArrowButton/ScrollArrowButton";
import SeriesComponent from "src/components/seriesList/SeriesComponent";
import {
  SeriesScrollerRootStyles,
  SeriesScrollerStyles,
} from "./HomePageSeriesScrollerStyles";

type HomePageSeriesScrollerProps = {
  series: any;
  darkTheme: boolean;
};

const HomePageSeriesScroller = ({ series, darkTheme }: HomePageSeriesScrollerProps) => {
  const seriesScrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const seriesCount = useMemo(() => series?.length ?? 0, [series]);

  const updateSeriesScrollButtons = () => {
    const el = seriesScrollerRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const atStart = el.scrollLeft <= 1;
    const atEnd = el.scrollLeft >= maxScrollLeft - 1;
    const scrollable = maxScrollLeft > 1;

    setCanScrollLeft(scrollable && !atStart);
    setCanScrollRight(scrollable && !atEnd);
  };

  const scrollSeriesBy = (direction: "left" | "right") => {
    const el = seriesScrollerRef.current;
    if (!el) return;

    const amount = Math.max(240, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateSeriesScrollButtons();
  }, [seriesCount]);

  useEffect(() => {
    const el = seriesScrollerRef.current;
    if (!el) return;

    const onScroll = () => updateSeriesScrollButtons();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Grid sx={SeriesScrollerRootStyles()}>
      {canScrollLeft && (
        <ScrollArrowButton
          ariaLabel="Scroll series left"
          direction="left"
          darkTheme={darkTheme}
          onClick={() => scrollSeriesBy("left")}
        />
      )}

      {canScrollRight && (
        <ScrollArrowButton
          ariaLabel="Scroll series right"
          direction="right"
          darkTheme={darkTheme}
          onClick={() => scrollSeriesBy("right")}
        />
      )}

      <Grid
        ref={seriesScrollerRef}
        sx={SeriesScrollerStyles()}
      >
        <SeriesComponent series={series} />
      </Grid>
    </Grid>
  );
};

export default HomePageSeriesScroller;
