import { Box, Grid, useTheme } from "@mui/material";
import { useAppSelector } from "src/store/redux/hooks";
import type { Author } from "src/types/authors";
import HorizontalArticlePageInfoComponent from "./HorizontalArticlePageInfoComponent";
import {
  articlePageRoot,
  gridHorizontalArticleContainer,
  gridHorizontalArticleMaxWidth,
  imageHorizontalArticleStyles,
} from "./HorizontalArticleCardComponentStyles";

const HorizontalArticleCardComponent = ({
  author,
  date,
  imageWidth,
  section,
  authorsId,
  videoOrImageCover,
  articlePageList,
}: Props) => {
  const getWebsiteData = useAppSelector((state) => state.webSiteData.data);
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);
  const muiTheme = useTheme();
  const getAuthorData =
    getWebsiteData?.authors?.filter((item: Author) => item.author_id === authorsId) ??
    [];

  return (
    <Grid
      container
      direction="row"
      justifyContent={articlePageList ? "left" : "center"}
      sx={gridHorizontalArticleContainer(muiTheme)}
    >
      <Grid sx={gridHorizontalArticleMaxWidth(muiTheme, imageWidth)}>
        <Box
          component="img"
          alt="Article Cover Image"
          src={videoOrImageCover}
          sx={imageHorizontalArticleStyles(muiTheme, darkTheme)}
        />

        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          sx={articlePageRoot(muiTheme)}
        >
          <HorizontalArticlePageInfoComponent
            author={author}
            authorsId={authorsId}
            date={date}
            getAuthorData={getAuthorData}
            section={section}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export type Props = {
  author: string;
  date: string;
  imageWidth: string;
  section: string;
  authorsId: number;
  videoOrImageCover: string;
  articlePageList?: boolean;
};

export default HorizontalArticleCardComponent;
