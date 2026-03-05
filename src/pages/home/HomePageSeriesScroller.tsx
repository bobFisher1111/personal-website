import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ScrollArrowButton from "src/components/scrollArrowButton/ScrollArrowButton";
import SeriesComponent from "src/components/seriesList/SeriesComponent";
import type {
  AuthorItem,
  SeriesItem,
} from "src/components/seriesList/SeriesComponent";
import {
  SeriesScrollerRootStyles,
  SeriesScrollerStyles,
} from "./HomePageSeriesScrollerStyles";

type HomePageSeriesScrollerProps = {
  series: readonly SeriesItem[];
  authors: readonly AuthorItem[];
  darkTheme: boolean;
  showAuthorAvatarOverlay?: boolean;
};

const HomePageSeriesScroller = ({
  series,
  authors,
  darkTheme,
  showAuthorAvatarOverlay,
}: HomePageSeriesScrollerProps) => {
  const seriesScrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = seriesScrollerRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const atStart = el.scrollLeft <= 1;
    const atEnd = el.scrollLeft >= maxScrollLeft - 1;
    const scrollable = maxScrollLeft > 1;

    setCanScrollLeft(scrollable && !atStart);
    setCanScrollRight(scrollable && !atEnd);
  };

  const scrollByAmount = (direction: "left" | "right") => {
    const el = seriesScrollerRef.current;
    if (!el) return;

    const amount = Math.max(240, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollButtons();
  }, [series.length]);

  useEffect(() => {
    const el = seriesScrollerRef.current;
    if (!el) return;

    const onScroll = () => updateScrollButtons();
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
          onClick={() => scrollByAmount("left")}
        />
      )}

      {canScrollRight && (
        <ScrollArrowButton
          ariaLabel="Scroll series right"
          direction="right"
          darkTheme={darkTheme}
          onClick={() => scrollByAmount("right")}
        />
      )}

      <Grid ref={seriesScrollerRef} sx={SeriesScrollerStyles()}>
        <SeriesComponent
          series={series}
          layout="scroller"
          authors={authors}
          showAuthorAvatarOverlay={showAuthorAvatarOverlay ?? false}
        />
      </Grid>
    </Grid>
  );
};

export default HomePageSeriesScroller;
