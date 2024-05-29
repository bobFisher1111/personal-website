import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LinkStyles } from '../../../../../util/styles/LinkStyles';
import {
  ArticleDataGridStyles,
  ArticleImageStyles,
  ArticleVideoStyles,
  AvatarAuthorLinkStyles,
  AvatarImageStyles,
  AuthorNameGridStyles,
  AuthorNameStyles,
  ChipStyles,
  DateStyles,
  ImageGridStyles,
  LinkGridRootStyles,
  LinkGridStyles,
  RootStyles,
  RootTopStyles,
  SeriesChipStyles,
  SubTitleStyles,
  TitleStyles,
} from './ArticleCardStyles';

const ArticleCard: React.FC<Props> = ({
  articleId,
  articleMedia,
  authorId,
  authorData,
  date,
  isMediaVideo,
  section,
  sectionLink,
  series,
  seriesId,
  subtitle,
  title,
  turOnAuthorForArticle,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
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

  return (
    <Grid
      container
      sx={RootStyles(theme, turOnAuthorForArticle)}
    >
      <Grid 
        item
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={RootTopStyles}
      >
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
          sx={AuthorNameGridStyles}
        >
          <Link 
            to={`/author/${authorId}`}
            style={AvatarAuthorLinkStyles}
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
          item 
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4} 
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
        item
        container
        direction="row"
        justifyContent="central"
        alignItems="central"
        spacing={2}
      >
        <Grid
          item 
          xs={4}
          sm={3}
          md={3}
          lg={3}
          xl={3}
          sx={ImageGridStyles}
        >
          <Link
            to={`/article/${authorId}/${articleId}`}
            // reloadDocument={true}
          >
            {isMediaVideo ?
              <Video
                allowFullScreen
                src={articleMedia}
                sx={ArticleVideoStyles(theme)}
              />
              :
              <Img
                alt="complex"
                src={articleMedia}
                sx={ArticleImageStyles(theme)}
              />
            }
          </Link>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          xs={8}
          sm={9}
          md={9}
          lg={9}
          xl={9}
          sx={ArticleDataGridStyles}
        >
          <Grid
            item
            container
          >
            <Link
              to={`/article/${authorId}/${articleId}`}
              // reloadDocument={true}
              style={LinkStyles()}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
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
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
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
            item
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={LinkGridRootStyles}
          >
            <Grid
              item
              sx={LinkGridStyles}
            >
              <Link
                to={`/${sectionLink}`}
                style={LinkStyles()}
              >
                <Chip
                  color="primary"
                  label={section}
                  variant="outlined"
                  size="small"
                  sx={ChipStyles}
                />
              </Link>
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