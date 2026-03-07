import { useAppSelector } from "src/store/redux/hooks";
import { IconButton, useTheme } from "@mui/material";
import { appBaseURL } from "src/config";
import copyLink from "src/util/copyLink";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  ContentCopyIconStyle,
  EmailOutlinedIconStyles,
} from "./CopyLinkComponentStyles";

const CopyLinkComponent = ({
  authorsId,
  articleId,
  padding = "0px",
  email,
  authorsEmail,
  seriesId,
  turnOnSeries,
}: Props) => {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);
  const theme = useTheme();

  const articleUrl = `${appBaseURL}/article/${authorsId}/${articleId}`;
  const seriesUrl = `${appBaseURL}/series/${seriesId}`;
  const copyUrl = turnOnSeries ? seriesUrl : articleUrl;

  const canCopyEmail =
    typeof authorsEmail === "string" && authorsEmail.trim().length > 0;
  const canCopyUrl = typeof copyUrl === "string" && copyUrl.trim().length > 0;

  return email ? (
    <IconButton
      aria-label="Copy email address"
      type="button"
      disabled={!canCopyEmail}
      onClick={() => {
        if (!canCopyEmail) return;
        copyLink(authorsEmail);
      }}
      sx={EmailOutlinedIconStyles(theme, darkTheme)}
    >
      <EmailOutlinedIcon fontSize="inherit" />
    </IconButton>
  ) : (
    <IconButton
      aria-label="Copy link"
      type="button"
      disabled={!canCopyUrl}
      onClick={() => {
        if (!canCopyUrl) return;
        copyLink(copyUrl);
      }}
      sx={ContentCopyIconStyle(theme, darkTheme, padding)}
    >
      <ContentCopyIcon fontSize="inherit" />
    </IconButton>
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
