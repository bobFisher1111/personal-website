import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material';
import { appBaseURL } from 'src/config';
import copyLink from 'src/util/copyLink';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {
  ContentCopyIconStyle,
  EmailOutlinedIconStyles,
} from './CopyLinkComponentStyles';


const CopyLinkComponent = ({
  authorsId,
  articleId,
  padding = '0px',
  email,
  authorsEmail,
  seriesId,
  turnOnSeries,
}: Props) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const theme = useTheme();

  const articleUrl = `${appBaseURL}/article/${authorsId}/${articleId}`;
  const seriesUrl = `${appBaseURL}/series/${seriesId}`;
  const copyUrl = turnOnSeries ? seriesUrl : articleUrl;

  return email ? (
    <EmailOutlinedIcon
      sx={EmailOutlinedIconStyles(theme, darkTheme)}
      id="copyEmail"
      onClick={() => copyLink(authorsEmail)}
    />
  ) : (
    <ContentCopyIcon
      sx={ContentCopyIconStyle(theme, darkTheme, padding)}
      onClick={() => copyLink(copyUrl)}
    />
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
