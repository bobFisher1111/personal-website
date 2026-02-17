import {
  Box,
  CardMedia,
  Grid,
  useTheme,
} from '@mui/material';
import { useSelector } from 'react-redux';
import HorizontalArticlePageInfoComponent from './HorizontalArticlePageInfoComponent';
import {
  articlePageRoot,
  cardMediaArticleVideo,
  gridHorizontalArticleContainer,
  gridHorizontalArticleMaxWidth,
  imageHorizontalArticleStyles,
} from './HorizontalArticleCardComponentStyles';
import DisabledVideo from 'src/components/disabledVideo/DisabledVideo';

const HorizontalArticleCardComponent = ({
  author,
  date,
  imageWidth,
  articlePage,
  useVideoInsteadOfImage,
  section,
  authorsId,
  videoOrImageCover,
  articlePageList,
  mobileImageWidth,
  videoHeight,
}: Props) => {
  const getWebsiteData = useSelector((state: any) => state.webSiteData.data);
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const muiTheme = useTheme();
  const getAuthorData = getWebsiteData?.authors?.filter((item: any) => item.author_id === authorsId);

  const disableButton = () => localStorage.getItem('enableYouTubeVideo') !== null;
  return (
    <Grid
      container
      direction="row"
      justifyContent={!articlePage || articlePageList ? 'left' : 'center'}
      sx={gridHorizontalArticleContainer(muiTheme, articlePage, darkTheme)}
    >
      <Grid sx={gridHorizontalArticleMaxWidth(muiTheme, imageWidth, darkTheme, articlePage)}>
        {!useVideoInsteadOfImage ? (
          <Box
            component="img"
            alt="Article Cover Image"
            src={videoOrImageCover}
            sx={imageHorizontalArticleStyles(muiTheme, articlePage, mobileImageWidth, darkTheme)}
          />
        ) : disableButton() ? (
          <CardMedia
            component="iframe"
            image={videoOrImageCover}
            allowFullScreen
            sx={cardMediaArticleVideo(muiTheme, articlePage, videoHeight, mobileImageWidth, darkTheme)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <DisabledVideo
            articlePage={articlePage}
            authorSectionArticlePage={false}
            youtubeUrl={videoOrImageCover}
            carousel={false}
          />
        )}

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
  useVideoInsteadOfImage: boolean;
  section: string;
  authorsId: string;
  videoOrImageCover: string;
  articlePageList?: any;
  mobileImageWidth: string;
  videoHeight: boolean;
};

export default HorizontalArticleCardComponent;
