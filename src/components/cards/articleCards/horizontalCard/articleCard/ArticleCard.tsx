import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Chip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DisabledVideo from '../../../../disabledVideo/DisabledVideo';
import { LinkStyles } from '../../../../../util/styles/LinkStyles';
import {
  ArticleDataGridStyles,
  ArticleImageStyles,
  ArticleVideoStyles,
  AvatarAuthorLinkStyles,
  AvatarImageStyles,
  AuthorNameStyles,
  ChipStyles,
  DateStyles,
  LinkGridRootStyles,
  LinkGridStyles,
  RootStyles,
  SeriesChipStyles,
  SubTitleStyles,
  TitleStyles,
} from './ArticleCardStyles';

const ArticleCard: React.FC<Props> = ({
  articleId,
  articleMedia,
  articlePage,
  authorId,
  authorData,
  date,
  isMediaVideo,
  section,
  series,
  seriesId,
  subtitle,
  title,
  turOnAuthorForArticle,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const rejectCookie = useSelector((state: any) => state.rejectCookie);
  const getAuthorData = authorData?.filter((item: any) => {
    return item.authorId === authorId;
  });
  const Img = styled('img')({
    maxWidth: '100%',
    maxHeight: '100%',
  });
  const Video = styled('iframe')({
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

  useEffect(() => {
    if (localStorage.getItem('enableYouTubeVideo')) {
      disableButton();
    }
  }, [rejectCookie.enabledYouTubeVideos]);

  return (
    <Grid
      container
      sx={RootStyles(theme, turOnAuthorForArticle)}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        size={12}
      >
        <Grid
          size={8}
        >
          <Link 
            to={`/author/${authorId}`}
            style={AvatarAuthorLinkStyles(theme)}
          >
            <Img
              alt="complex"
              src={getAuthorData && getAuthorData[0]?.avatarImage}
              sx={AvatarImageStyles(theme)}
            />
            <Typography
              color="primary"
              sx={AuthorNameStyles}
            >
              {getAuthorData && getAuthorData[0]?.authorName}
            </Typography>
          </Link>
        </Grid>
        <Grid
          size={4}
        >
          <Typography
            color="primary"
            sx={DateStyles}
          >
            {date}
          </Typography>
        </Grid>
      </Grid>


      <Grid 
        container
        direction="row"
        justifyContent="central"
        alignItems="central"
      >
        <Grid
          size={{
            xs: 4,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 3,
          }}
        >
          {isMediaVideo ?
            disableButton() ?
              <Video
                allowFullScreen
                src={articleMedia}
                sx={ArticleVideoStyles(theme, turOnAuthorForArticle)}
              />
              :
              <DisabledVideo
                articlePage={false}
                authorSectionArticlePage={true}
                youtubeUrl={articleMedia}
                carousel={false}
              />
            :
            <Link
              to={`/article/${authorId}/${articleId}`}
              reloadDocument={turOnAuthorForArticle ? true : false}
            >
              <Img
                alt="complex"
                src={articleMedia}
                sx={ArticleImageStyles(theme)}
              />
            </Link>
          }
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={ArticleDataGridStyles}
        >
          <Grid
            container
          >
            <Link
              to={`/article/${authorId}/${articleId}`}
              reloadDocument={turOnAuthorForArticle ? true : false}
              style={LinkStyles(theme)}
            >
              <Grid
                size={12}
              >
                <Typography
                  color="primary"
                  variant="h6"
                  sx={TitleStyles}
                >
                  {title}
                </Typography>
              </Grid>
              {!turOnAuthorForArticle &&
                <Grid
                  size={12}
                >
                  <Typography
                    color="primary"
                    sx={SubTitleStyles}
                  >
                    {subtitle}
                  </Typography>
                </Grid>
              }
            </Link>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={LinkGridRootStyles(articlePage)}
          >
            <Grid
              sx={LinkGridStyles}
            >
              <div>
                <Chip
                  color="primary"
                  label={section}
                  variant="outlined"
                  size="small"
                  sx={ChipStyles}
                />
              </div>
              {series && <Link
                to={`/series/${seriesId}`}
                style={SeriesChipStyles}
              >
                <Chip
                  color="primary"
                  label={'Series'}
                  size="small"
                  sx={ChipStyles}
                />
              </Link>}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export type Props = {
  articleId: any;
  articleMedia: any;
  articlePage: boolean;
  authorId: any;
  authorData: any;
  date: any;
  isMediaVideo: boolean;
  section: any;
  sectionLink: any;
  series: boolean;
  seriesId: any;
  subtitle: any;
  title: any;
  turOnAuthorForArticle: boolean;
};
  
export default ArticleCard;
