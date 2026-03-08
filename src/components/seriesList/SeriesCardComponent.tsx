import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Card, CardMedia, Typography, useTheme } from "@mui/material";
import { LinkStyles } from "src/util/styles/LinkStyles";
import {
  getOptimizedExternalImageSrc,
  getOptimizedExternalImageSrcSet,
} from "src/util/optimizeExternalImages";
import {
  AuthorAvatarOverlayImageStyles,
  AuthorAvatarOverlayLinkStyles,
  CardMediaVerticalCardImage,
  CardRootStyle,
  CardFooterStyle,
  CardVerticalCard,
  DivVerticalArticleRoot,
  SeriesImageContainerStyles,
  TypographyVerticalCardNameStyleHover,
} from "./SeriesCardStyles";
import type { AuthorItem, SeriesItem } from "./SeriesComponent";

const SeriesCardComponent = ({
  articleData,
  layout = "grid",
  authors,
  showAuthorAvatarOverlay,
}: Props) => {
  const darkTheme = useSelector(
    (state: { theme: { darkTheme: boolean } }) => state.theme.darkTheme,
  );
  const theme = useTheme();
  const serieslUrl = `/series/${articleData?.series_id}`;

  const seriesTitle =
    typeof articleData?.series_title === "string" &&
    articleData.series_title.trim().length > 0
      ? articleData.series_title
      : "Series";

  const seriesLinkLabel = `View series: ${seriesTitle}`;

  const rawCoverSrc =
    typeof articleData?.series_cover_image_or_video === "string"
      ? articleData.series_cover_image_or_video
      : "";

  const coverSrc =
    getOptimizedExternalImageSrc(rawCoverSrc, {
      width: 600,
      height: 338,
      quality: 70,
    }) ?? rawCoverSrc;

  const coverSrcSet = getOptimizedExternalImageSrcSet(
    rawCoverSrc,
    {
      widths: [140, 204, 300, 408, 600],
      aspectRatio: 16 / 9,
      quality: 70,
    },
  );

  const coverSizes =
    layout === "scroller"
      ? `(max-width:600px) 8.75rem, 12.75rem`
      : `(max-width:600px) 100vw, 18.75rem`;

  const seriesAuthorId =
    typeof articleData?.author_id === "number" ? articleData.author_id : null;

  let authorAvatar: string | null = null;
  if (seriesAuthorId !== null && Array.isArray(authors)) {
    for (const author of authors) {
      if (author.author_id !== seriesAuthorId) continue;
      if (typeof author.avatar_image === "string" && author.avatar_image) {
        authorAvatar = author.avatar_image;
      }
      break;
    }
  }

  return (
    <Box sx={DivVerticalArticleRoot(theme, layout)}>
      <Card sx={CardVerticalCard(theme, darkTheme, layout)}>
        <Box sx={CardRootStyle}>
          <Box style={SeriesImageContainerStyles}>
            <CardMedia
              component="img"
              alt={`Cover image for series ${seriesTitle}`}
              image={coverSrc}
              srcSet={coverSrcSet}
              sizes={coverSizes}
              sx={CardMediaVerticalCardImage(theme)}
              referrerPolicy="no-referrer"
              loading="lazy"
            />

            {showAuthorAvatarOverlay &&
              seriesAuthorId !== null &&
              typeof authorAvatar === "string" &&
              authorAvatar.length > 0 && (
                <Link
                  to={`/author/${seriesAuthorId}`}
                  rel="noreferrer"
                  style={AuthorAvatarOverlayLinkStyles}
                  aria-label="View author"
                >
                  <Box
                    component="img"
                    alt="Author avatar"
                    src={getOptimizedExternalImageSrc(authorAvatar, { width: 64 })}
                    srcSet={getOptimizedExternalImageSrcSet(authorAvatar, {
                      widths: [32, 64, 96],
                    })}
                    sizes="1.25rem"
                    style={AuthorAvatarOverlayImageStyles(darkTheme)}
                    referrerPolicy="no-referrer"
                  />
                </Link>
              )}
          </Box>
          <Box sx={CardFooterStyle(theme, darkTheme)}>
            <Link
              to={serieslUrl}
              rel="noreferrer"
              aria-label={seriesLinkLabel}
              style={{
                ...LinkStyles(darkTheme),
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                sx={TypographyVerticalCardNameStyleHover(theme, darkTheme)}
              >
                {seriesTitle}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export type Props = {
  articleData: SeriesItem;
  layout?: "grid" | "scroller";
  authors?: readonly AuthorItem[];
  showAuthorAvatarOverlay?: boolean;
};

export default SeriesCardComponent;
