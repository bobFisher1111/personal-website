import React, { useState } from 'react';
import { appBaseURL } from '../../config';
import copyLink from '../../util/copyLink';
import { ContentCopyIconStyle, EmailOutlinedIconStyles } from '../../styles/IconStyles';

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
          <EmailOutlinedIconStyles
            prop={emailIcon}
            id="copyEmail"
            fontSize="large"
            onClick={() => copyLink(setEmailIcon, authorsEmail)}
          />
        :
          <ContentCopyIconStyle
            padding={padding}
            prop={copyIconColor}
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
  