import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  CardMedia,
  Grid,
  styled,
  Typography
} from '@mui/material/';
import DisabledVideo from '../disabledVideo/DisabledVideo';
import { LinkStyles } from '../../util/styles/LinkStyles';
import {
  ArticleDateGridStyles,
  ArticleDateStyles,
  ArticleSubtitleGridStyles,
  ArticleTitleGridStyles,
  ArticleTitleStyles,
  AuthorNameStyles,
  AvatarAuthorLinkStyles,
  AvatarGridStyles,
  AvatarImageStyles,
  CardMedaiArticleVideo,
  ImageGridStyles,
  ImageVideoStyles,
  RootStyles,
} from './CarouselArticlesStyles';

const CarouselArticles: React.FC<Props> = ({
  data,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const Img = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
  });

  const disableButton = () => {
    if (localStorage.getItem('enableYouTubeVideo') === null) {
      return false;
    } else {
      return true;
    }
  };

  console.log('data', data);

  return (
    <Grid
      id={data.id.toString()}
      sx={RootStyles}
    >
      <Grid
        sx={ImageGridStyles}
      >
        {!data.useVideoInsteadOfImage ?
          <Link
            to={`/article/${data.authorId}/${data.articleId}`}
            style={LinkStyles(theme)}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              src={data.coverImageOrVideo}
              sx={ImageVideoStyles}
            />
          </Link>
          :
          disableButton() ? 
            <Link
              to={`/article/${data.authorId}/${data.articleId}`}
              style={LinkStyles(theme)}
            >
              <CardMedia
                component="iframe"
                image={data.videoOrImageCover}
                allowFullScreen
                sx={CardMedaiArticleVideo(false)}
              />
            </Link>
            :
            <DisabledVideo 
              articlePage={true}
              authorSectionArticlePage={false}
              youtubeUrl={data.coverImageOrVideo}
              carousel={true}
            />
        }
      </Grid>
      <>
        <Grid
          item
          container
          xs={12}
        >
          <Grid
            item
            xs={6}
            sm={6}
            md={8}
            lg={8}
            xl={8}
            sx={AvatarGridStyles}
          >
            <Link 
              to={`/author/${1}`}
              style={AvatarAuthorLinkStyles(false)}
            >
              <Img
                alt="complex"
                src={data.avatarImage}
                sx={AvatarImageStyles(false)}
              />
              <Typography
                color="primary"
                sx={AuthorNameStyles}
              >
                {data.authorName}
              </Typography>
            </Link>
          </Grid>
          <Grid
            item
            container
            justifyContent={'flex-end'}
            alignItems='center'
            xs={6}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            sx={ArticleDateGridStyles}
          > 
            <Typography
              color="primary"
              sx={ArticleDateStyles}
            >
              {data.Date}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={ArticleTitleGridStyles}
          >
            <Link
              to={`/article/${data.authorId}/${data.articleId}`}
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
                sx={ArticleTitleStyles}
              >
                {data.articleTitle}
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid
          sx={ArticleSubtitleGridStyles}
        >
          <Link
            to={`/article/${data.authorId}/${data.articleId}`}
            style={LinkStyles(theme)}
          >
            <Typography
              color="primary"
            >
              {data.articleSubTitle}
            </Typography>
          </Link>
        </Grid>
      </>
    </Grid>
  );
};

export type Props = {
  data: any;
};

export default CarouselArticles;
