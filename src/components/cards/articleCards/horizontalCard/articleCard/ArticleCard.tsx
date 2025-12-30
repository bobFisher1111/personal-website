import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { Chip, Grid, Typography, useTheme, styled } from '@mui/material';
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
  GridNameDateStyles,
  GridWidthStyle,
  LinkGridRootStyles,
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
}) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  // const rejectCookie = useSelector((state: any) => state.rejectCookie);
  const theme = useTheme();
  const getAuthorData = authorData?.filter((item: any) => item.author_id === authorId);
  const Img = styled('img')({ maxWidth: '100%', maxHeight: '100%' });
  const Video = styled('iframe')({ maxWidth: '100%', maxHeight: '100%' });

  const disableButton = () => {
    return localStorage.getItem('enableYouTubeVideo') !== null;
  };
  // May need once put back cookies, but try later without useEffect
  // useEffect(() => {
  //   if (localStorage.getItem('enableYouTubeVideo')) {
  //     disableButton();
  //   }
  // }, [rejectCookie.enabledYouTubeVideos]);

  return (
    <Grid container sx={RootStyles(theme, darkTheme)}>
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" size={12} sx={GridNameDateStyles(theme)}>
        <Grid size={8}>
          <Link to={`/author/${authorId}`} style={AvatarAuthorLinkStyles(theme, darkTheme)}>
            <Img
              alt="complex"
              src={getAuthorData?.[0]?.avatar_image}
              sx={AvatarImageStyles(darkTheme)}
              referrerPolicy="no-referrer"
            />
            <Typography color="primary" sx={AuthorNameStyles(theme)}>
              {getAuthorData?.[0]?.author_name}
            </Typography>
          </Link>
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
          {isMediaVideo ? (
            disableButton() ? (
              <Video
                allowFullScreen
                src={articleMedia}
                sx={ArticleVideoStyles(theme, darkTheme)}
              />
            ) : (
              <DisabledVideo
                articlePage={false}
                authorSectionArticlePage={true}
                youtubeUrl={articleMedia}
                carousel={false}
              />
            )
          ) : (
            <Link to={`/article/${authorId}/${articleId}`} reloadDocument={false}>
              <Img
                alt="complex"
                src={articleMedia}
                sx={ArticleImageStyles(theme, darkTheme)}
                referrerPolicy="no-referrer"
              />
            </Link>
          )}
        </Grid>

        <Grid size={{ xs: 8, sm: 9, md: 9, lg: 9, xl: 9 }} sx={ArticleDataGridStyles}>
          <Link to={`/article/${authorId}/${articleId}`} reloadDocument={false} style={LinkStyles(darkTheme)}> 
            <Typography 
              color="primary" 
              // variant="h6" 
              sx={{ ...TitleStyles(theme), marginBottom: '4px' }}
            >
              {title}
            </Typography>
              <Grid size={12}>
                <Typography color="primary" sx={SubTitleStyles(theme)}>
                  {subtitle}
                </Typography>
              </Grid>
          </Link>

          <Grid container sx={LinkGridRootStyles(theme, articlePage)}>
            <Chip
              color="primary"
              label={section}
              variant="outlined"
              size="small"
              sx={ChipStyles(theme)}
            />
            {series && (
              <Link to={`/series/${seriesId}`} style={SeriesChipStyles}>
                <Chip
                  color="primary"
                  label="Series"
                  size="small"
                  sx={ChipStyles(theme)}
                />
              </Link>
            )}
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
};

export default ArticleCard;
