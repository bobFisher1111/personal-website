import React, { useState } from 'react';
import { appBaseURL } from '../../config';
import copyLink from '../../util/copyLink';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {
  ContentCopyIconStyle,
  EmailOutlinedIconStyles,
} from './CopyLinkComponentStyles';


const CopyLinkComponent: React.FC<Props> = ({
  authorsId,
  articalId,
  defaultColor,
  padding,
  email,
  authorsEmail,
  seriesId,
  turnOnSeries,
}) => {
  const [copyIconColor, setCopyIconColor] = useState<string>(defaultColor);
  const [emailIcon, setEmailIcon] = useState<string>(defaultColor);
  const articalUrl = `${appBaseURL}/artical/${authorsId}/${articalId}`;
  const seriesUrl = `${appBaseURL}/series/${seriesId}`;
  const copyUrls = turnOnSeries ? seriesUrl : articalUrl;
  return (
    <>
      {email ?
          <EmailOutlinedIcon
            sx={EmailOutlinedIconStyles(emailIcon)}
            id="copyEmail"
            onClick={() => copyLink(setEmailIcon, authorsEmail)}
          />
        :
          <ContentCopyIcon
            sx={ContentCopyIconStyle(copyIconColor, padding)}
            onClick={() => copyLink(setCopyIconColor, copyUrls)}
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
  seriesId?: string;
  turnOnSeries?: boolean;
};
  
export default CopyLinkComponent;
  