import {
  Box,
  Grid,
  useTheme,
} from '@mui/material';
import { useSelector } from 'react-redux';
import HorizontalArticlePageInfoComponent from './HorizontalArticlePageInfoComponent';
import {
  articlePageRoot,
  gridHorizontalArticleContainer,
  gridHorizontalArticleMaxWidth,
  imageHorizontalArticleStyles,
} from './HorizontalArticleCardComponentStyles';

const HorizontalArticleCardComponent = ({
  author,
  date,
  imageWidth,
  articlePage,
  section,
  authorsId,
  videoOrImageCover,
  articlePageList,
  mobileImageWidth,
}: Props) => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const muiTheme = useTheme();
  const getAuthorData = getWebsiteData?.authors?.filter((item: any) => item.author_id === authorsId);

  return (
    <Grid
      container
      direction="row"
      justifyContent={!articlePage || articlePageList ? 'left' : 'center'}
      sx={gridHorizontalArticleContainer(muiTheme, articlePage, darkTheme)}
    >
      <Grid sx={gridHorizontalArticleMaxWidth(muiTheme, imageWidth, darkTheme, articlePage)}>
          <Box
            component="img"
            alt="Article Cover Image"
            src={videoOrImageCover}
            sx={imageHorizontalArticleStyles(muiTheme, articlePage, mobileImageWidth, darkTheme)}
          />
        {articlePage && (
          <Grid container justifyContent="flex-start" alignItems="center" sx={articlePageRoot(muiTheme)}>
            <HorizontalArticlePageInfoComponent
              author={author}
              authorsId={authorsId}
              date={date}
              getAuthorData={getAuthorData}
              section={section}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export type Props = {
  author: string;
  date: string;
  imageWidth: string;
  articlePage: boolean;
  section: string;
  authorsId: string;
  videoOrImageCover: string;
  articlePageList?: any;
  mobileImageWidth: string;
};

export default HorizontalArticleCardComponent;
