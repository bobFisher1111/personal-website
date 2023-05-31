import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import copyLink from '../../utilities/copyLink';


const CopyLinkComponent: React.FC<Props> = ({
  authorsId,
  articalId,
  defaultColor,
  padding,
  email,
  authorsEmail,
}) => {
  const [copyIconColor, setCopyIconColor] = useState<string>(defaultColor);
  const [emailIcon, setEmailIcon] = useState<string>(defaultColor);
  const articalUrl = `http://localhost:3000/artical/${authorsId}/${articalId}`; // need to move this to .env file
  return (
    <>
      {email ?
          <EmailOutlinedIcon
            id="copyEmail"
            fontSize="large"
            onClick={() => copyLink(setEmailIcon, authorsEmail)}
            sx={{
              color: emailIcon,
              cursor: "pointer",
              "&:hover": {
                color: "#2F4C69",
              },
            }}
          />
        :
          <ContentCopyIcon
            onClick={() => copyLink(setCopyIconColor, articalUrl)}
            sx={{
              padding: padding,
              cursor: 'pointer',
              color: copyIconColor,
              "&:hover": {
                color: "#2F4C69",
              },
            }}
          />
      }
   </>
  )
}

export type Props = {
  authorsId?: string;
  articalId?: string;
  defaultColor: string;
  padding?: string;
  email: boolean;
  authorsEmail?: string;
};
  
export default CopyLinkComponent;
  