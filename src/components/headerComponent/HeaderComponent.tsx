import React from 'react';
import { Link } from "react-router-dom";
import { TypographyHeaderTitle } from '../../styles/TypographyStyles';
import {
  GridHeader, 
  GridPaddingRight, 
  GridAvatarPadding, 
  GridHeaderTitle,
} from '../../styles/GridStyles';
import { AvatarProfile } from '../../styles/AvatarStyles';
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
           <AvatarProfile 
             alt="Authors Avatar"
             src={avatarImage}
          />
          </Link>
          :
          <AvatarProfile 
             alt="Authors Avatar"
             src={avatarImage}
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
