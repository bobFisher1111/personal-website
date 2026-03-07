import { useAppSelector } from "src/store/redux/hooks";
import { Link } from "react-router-dom";
import { Box, Chip, Grid, Typography, useTheme, styled } from "@mui/material";
import { LinkStyles } from "src/util/styles/LinkStyles";
import type { Author } from "src/types/authors";
import {
  ArticleDataGridStyles,
  ArticleImageStyles,
  AvatarAuthorLinkStyles,
  AvatarImageStyles,
  AuthorNameStyles,
  ChipStyles,
  DateStyles,
  GridNameDateStyles,
  GridWidthStyle,
  LinkGridRootStyles,
  RootStyles,
  SeriesChipStyles,
  SubTitleStyles,
  TitleStyles,
} from "./ArticleCardStyles";

const ArticleCard = ({
  articleId,
  articleMedia,
  authorId,
  authorData,
  date,
  section,
  seriesId,
  subtitle,
  title,
}: Props) => {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);
  const theme = useTheme();
  const getAuthorData = authorData.filter((item) => item.author_id === authorId);
  const Img = styled("img")({ maxWidth: "100%", maxHeight: "100%" });

  const authorName =
    typeof getAuthorData?.[0]?.author_name === "string" &&
    getAuthorData[0].author_name.trim().length > 0
      ? getAuthorData[0].author_name
      : "Author";

  const articleUrl = `/article/${authorId}/${articleId}`;
  const articleLinkLabel = `Open article: ${title}`;

  return (
    <Grid container sx={RootStyles(theme)}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        size={12}
        sx={GridNameDateStyles(theme)}
      >
        <Grid size={8}>
          <Box
            component={Link}
            to={`/author/${authorId}`}
            sx={AvatarAuthorLinkStyles(theme, darkTheme)}
          >
            <Img
              alt={`${authorName} avatar`}
              src={getAuthorData?.[0]?.avatar_image}
              sx={AvatarImageStyles(darkTheme)}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <Typography color="primary" sx={AuthorNameStyles(theme)}>
              {getAuthorData?.[0]?.author_name}
            </Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Typography color="primary" sx={DateStyles(theme)}>
            {date}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        wrap="nowrap"
        sx={GridWidthStyle}
      >
        <Grid size={{ xs: 4, sm: 3, md: 3, lg: 3, xl: 3 }}>
          <Link to={articleUrl} aria-label={articleLinkLabel}>
            <Img
              alt={`Cover image for ${title}`}
              src={articleMedia}
              sx={ArticleImageStyles(theme, darkTheme)}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </Link>
        </Grid>

        <Grid
          size={{ xs: 8, sm: 9, md: 9, lg: 9, xl: 9 }}
          sx={ArticleDataGridStyles}
        >
          <Link
            to={articleUrl}
            aria-label={articleLinkLabel}
            style={LinkStyles(darkTheme)}
          >
            <Typography
              color="primary"
              sx={{ ...TitleStyles(theme), marginBottom: "4px" }}
            >
              {title}
            </Typography>
            <Grid size={12}>
              <Typography color="primary" sx={SubTitleStyles(theme)}>
                {subtitle}
              </Typography>
            </Grid>
          </Link>

          <Grid container sx={LinkGridRootStyles(theme)}>
            <Chip
              color="primary"
              label={section}
              variant="outlined"
              size="small"
              sx={ChipStyles(theme)}
            />
            {seriesId != null && (
              <Box
                component={Link}
                to={`/series/${seriesId}`}
                sx={SeriesChipStyles(theme)}
              >
                <Chip
                  color="primary"
                  label="Series"
                  size="small"
                  sx={ChipStyles(theme)}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export type Props = {
  articleId: number;
  articleMedia: string;
  authorId: number;
  authorData: readonly Author[];
  date: string;
  section: string;
  seriesId: number | null;
  subtitle: string;
  title: string;
};

export default ArticleCard;
