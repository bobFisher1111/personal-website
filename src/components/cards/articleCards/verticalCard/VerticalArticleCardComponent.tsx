import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { appBaseURL } from 'src/config';
import CopyLinkComponent from 'src/components/copyLinkComponent/CopyLinkComponent';
import { LinkStyles } from 'src/util/styles/LinkStyles';
import {
  CardMediaVerticalCardImage,
  CardMediaVerticalCardVideo,
  CardRootStyle,
  CardFooterStyle,
  CardVerticalCard,
  DivVerticalArticleRoot,
  GridPadding,
  GridVeriticalCardVideo,
  TypographyVerticalCardNameStyle,
  TypographyVerticalCardNameStyleHover,
} from './VerticalArticleCardComponentStyles';

/*
  - issue on writes/series when resizing around 740px mark, update later
*/
const VerticalArticleCardComponent = ({
  name,
  articleData,
  series,
  isOnArticlePage = false,
}: Props) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const theme = useTheme();
  const articleUrl = `${appBaseURL}/article/${articleData?.author_id}/${articleData?.article_id}`;
  const seriesUrl = `${appBaseURL}/series/${articleData?.series_id}`;
  const authorUrl = `${appBaseURL}/author/${articleData?.author_id}`;

  return (
    <div style={DivVerticalArticleRoot(theme)}>
      <Card sx={CardVerticalCard(theme, darkTheme)}>
        <Box sx={CardRootStyle}>
          {articleData?.use_video_instead_of_image ? (
            <Link to={series ? seriesUrl : articleUrl} rel="noreferrer">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={GridVeriticalCardVideo(theme)}
              >
                <CardMedia
                  component="iframe"
                  image={articleData?.cover_image_or_video || articleData?.series_cover_image_or_video}
                  allowFullScreen
                  sx={CardMediaVerticalCardVideo}
                  referrerPolicy="no-referrer"
                />
              </Grid>
            </Link>
          ) : (
            <Link to={series ? seriesUrl : articleUrl} rel="noreferrer">
              <CardMedia
                component="img"
                image={articleData?.cover_image_or_video || articleData?.series_cover_image_or_video}
                sx={CardMediaVerticalCardImage(theme)}
                referrerPolicy="no-referrer"
              />
            </Link>
          )}
          <Box sx={CardFooterStyle}>
            <Grid container>
              <Grid size={{ xs: 10 }}>
                {!isOnArticlePage ? (
                  <Link to={series ? authorUrl : articleUrl} rel="noreferrer" style={LinkStyles(darkTheme)}>
                    <Typography color="secondary" sx={TypographyVerticalCardNameStyleHover(theme)}>
                      by {name}
                    </Typography>
                  </Link>
                ) : (
                  <Typography color="secondary" sx={TypographyVerticalCardNameStyle(theme)}>
                    by {name}
                  </Typography>
                )}
              </Grid>
              <Grid size={{ xs: 2 }} sx={GridPadding(theme)}>
                <CopyLinkComponent
                  authorsId={articleData?.author_id}
                  articleId={articleData?.article_id}
                  padding="0px 0px 0px 0px"
                  email={false}
                  seriesId={articleData?.series_id}
                  turnOnSeries={true}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export type Props = {
  name: string | undefined;
  articleData: any;
  series?: boolean;
  isOnArticlePage?: boolean;
};

export default VerticalArticleCardComponent;
