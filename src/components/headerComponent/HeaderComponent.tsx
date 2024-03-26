import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Grid,
  Typography,
} from '@mui/material';
import {
  AvatarStyle,
  GridAvatarPadding,
  GridHeader,
  GridHeaderTitle,
  GridPaddingRight,
  TypographyHeaderTitle,
} from './HeaderComponentStyles';
import { LinkStyles } from '../../util/styles/LinkStyles';

const HeaderComponent:  React.FC<Props> = ({
  title,
  authorAvatar,
  avatarImage,
  authorId,
  articlePage
}) => {
  const titleFunction = (item: any) => {
    return (
      <Typography
        sx={TypographyHeaderTitle}
      >
        {item}
      </Typography>
    );
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={GridHeader}
    >
      {authorAvatar ? 
        <>
          <Grid
            item
            sx={GridPaddingRight}
          >
            {articlePage ? 
              <Link 
                to={`/author/${authorId}`}
                style={LinkStyles()}
              >
                <Avatar 
                  alt="Authors Avatar"
                  src={avatarImage}
                  sx={AvatarStyle}
                />
              </Link>
              :
              <Avatar 
                alt="Authors Avatar"
                src={avatarImage}
                sx={AvatarStyle}
              />
            }
          </Grid>
          <Grid
            item
            sx={GridAvatarPadding}
          >
            {articlePage ?
              <Link 
                to={`/author/${authorId}`}
                style={LinkStyles()}
              >
                {titleFunction(title)}
              </Link>
              :
              <>
                {titleFunction(title)}
              </>
            }     
          </Grid>
        </>
        :
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={GridHeaderTitle}
        >
          {titleFunction(title)}
        </Grid>
      }
    </Grid>
  );
};

export type Props = {
  title?: string;
  authorAvatar: boolean;
  avatarImage?: string;
  authorId?: string;
  articlePage?: boolean;
};

export default HeaderComponent;
