import { Grid, useTheme } from "@mui/material";
import ComingSoon from "src/components/comingSoon/ComingSoon";
import {
  CarouselComponentGridStyles,
  SeriesGridStyles,
  SeriesOuterBlockMergedStyles,
} from "./SeriesComponentStyles";
import SeriesCardComponent from "./SeriesCardComponent";

export type SeriesItem = {
  series_id: number;
  series_title: string;
  series_cover_image_or_video: string;
  author_id?: number;
  section: string;
  [key: string]: string | number | boolean | null | undefined;
};

export type AuthorItem = {
  author_id: number;
  avatar_image?: string | null;
  [key: string]: string | number | boolean | null | undefined;
};

type OuterSx = Record<string, string | number | boolean | null | undefined>;

export type Props = {
  series: readonly SeriesItem[];
  layout?: "grid" | "scroller";
  outerSx?: OuterSx;
  authors?: readonly AuthorItem[];
  showAuthorAvatarOverlay?: boolean;
};

const SeriesComponent = ({
  series,
  layout = "grid",
  outerSx,
  authors,
  showAuthorAvatarOverlay,
}: Props) => {
  const theme = useTheme();
  const count = series.length;

  if (series.length === 0) {
    return <ComingSoon />;
  }

  return (
    <Grid container justifyContent="flex-start">
      <Grid sx={SeriesOuterBlockMergedStyles(theme, count, layout, outerSx)}>
        <Grid
          className="carouselOne1"
          container
          justifyContent={layout === "grid" ? "flex-start" : "space-between"}
          {...(layout === "grid"
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
          {series.map((item, index) => (
            <Grid
              key={typeof item.series_id === "number" ? item.series_id : index}
              size={
                layout === "grid"
                  ? { xs: 6, sm: 6, md: 4 }
                  : "auto"
              }
              sx={SeriesGridStyles}
            >
              <SeriesCardComponent
                articleData={item}
                layout={layout}
                authors={authors ?? []}
                showAuthorAvatarOverlay={showAuthorAvatarOverlay ?? false}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeriesComponent;
