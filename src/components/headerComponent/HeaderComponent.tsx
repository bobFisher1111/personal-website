import React from 'react';
import { Link } from "react-router-dom";
import {
  Avatar
} from "@mui/material";
import { TypographyHeaderTitle } from '../../styles/TypographyStyles';
import {
  GridHeader, 
  GridPaddingRight, 
  GridAvatarPadding, 
  GridHeaderTitle,
} from '../../styles/GridStyles';
import { AvatarStyle } from './HeaderComponentStyles';
import { LinkStyles } from '../../styles/LinkStyles';

const HeaderComponent:  React.FC<Props> = ({
  title,
  authorAvatar,
  avatarImage,
  authorId,
  articalPage
}) => {
  const titleFunction = (item: any) => {
    return (
      <TypographyHeaderTitle>
        {item}
      </TypographyHeaderTitle>
    )
  };

  return (
      <GridHeader
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {authorAvatar ? 
        <>
          <GridPaddingRight
            item
          >
          {articalPage ? 
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
        </GridPaddingRight>
      <GridAvatarPadding
        item
      >
        {articalPage ?
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
     </GridAvatarPadding>
     </>
      :
        <GridHeaderTitle
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
         {titleFunction(title)}
        </GridHeaderTitle>
      }
      </GridHeader>
  );
}

export type Props = {
  title?: string;
  authorAvatar: boolean;
  avatarImage?: string;
  authorId?: string;
  articalPage?: boolean;
};

export default HeaderComponent;
