import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router';
import {
  Avatar,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
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
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const titleFunction = (item: any) => {
    return (
      <Typography
        color="primary"
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
      justifyContent="flex-start"
      alignItems="center"
      sx={GridHeader}
    >
      {authorAvatar ? 
        <>
          <Grid
            sx={GridPaddingRight}
          >
            {articlePage ? 
              <Link 
                to={`/author/${authorId}`}
                style={LinkStyles(theme)}
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
            sx={GridAvatarPadding}
          >
            {articlePage ?
              <Link 
                to={`/author/${authorId}`}
                style={LinkStyles(theme)}
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
          size={12}
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
