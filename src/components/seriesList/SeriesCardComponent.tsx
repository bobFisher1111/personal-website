import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Card, CardMedia, Typography, useTheme } from "@mui/material";
import { LinkStyles } from "src/util/styles/LinkStyles";
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
            <Link to={serieslUrl} rel="noreferrer">
              <CardMedia
                component="img"
                alt={`Cover image for series ${articleData?.series_title}`}
                image={
                  articleData?.series_cover_image_or_video ||
                  articleData?.series_cover_image_or_video
                }
                sx={CardMediaVerticalCardImage(theme)}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </Link>

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
                    src={authorAvatar}
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
              style={{
                ...LinkStyles(darkTheme),
                display: "block",
                width: "100%",
              }}
            >
              <Typography
                sx={TypographyVerticalCardNameStyleHover(theme, darkTheme)}
              >
                {articleData?.series_title}
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
