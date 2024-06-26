import React from 'react';
import { useSelector } from "react-redux";
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
  articleId,
  padding,
  email,
  authorsEmail,
  seriesId,
  turnOnSeries,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const articleUrl = `${appBaseURL}/article/${authorsId}/${articleId}`;
  const seriesUrl = `${appBaseURL}/series/${seriesId}`;
  const copyUrls = turnOnSeries ? seriesUrl : articleUrl;
  return (
    <>
      {email ?
        <EmailOutlinedIcon
          sx={EmailOutlinedIconStyles(theme)}
          id="copyEmail"
          onClick={() => copyLink(authorsEmail)}
        />
        :
        <ContentCopyIcon
          sx={ContentCopyIconStyle(theme, padding)}
          onClick={() => copyLink(copyUrls)}
        />
      }
    </>
  );
};

export type Props = {
  authorsId?: string;
  articleId?: string;
  padding?: string;
  email: boolean;
  authorsEmail?: string;
  seriesId?: string;
  turnOnSeries?: boolean;
};
  
export default CopyLinkComponent;
  