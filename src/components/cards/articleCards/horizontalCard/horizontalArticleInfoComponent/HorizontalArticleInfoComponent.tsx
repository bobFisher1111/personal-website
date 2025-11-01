import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Chip, Grid, Typography } from '@mui/material';
import { Link } from 'react-router';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CopyLinkComponent from '../../../../copyLinkComponent/CopyLinkComponent';
import { LinkStyles } from '../../../../../util/styles/LinkStyles';
import {
  chipNoPointer,
  chipStyle,
  iconWrapper,
  seriesPadding,
  gridHorizontalInfo,
  authorNameText,
} from './HorizontalArticleInfoComponentStyle';

const HorizontalArticleInfoComponent: React.FC<Props> = ({
  section,
  authorsId,
  articleId,
  authorPage,
  aughtorsName,
  sectionLink,
  sectionPage,
  sectionType,
  series,
  seriesId,
}) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const muiTheme = useTheme();

  return (
    <Grid container direction="row" sx={gridHorizontalInfo(muiTheme)}>
      {!authorPage ? (
        <Link to={`/author/${authorsId}`} style={LinkStyles(darkTheme)}>
          <Grid sx={iconWrapper(muiTheme)}>
            <AccountCircleOutlinedIcon color="primary" />
          </Grid>
        </Link>
      ) : (
        <Grid sx={iconWrapper(muiTheme)}>
          <AccountCircleOutlinedIcon color="primary" />
        </Grid>
      )}

      {!authorPage ? (
        <Link to={`/author/${authorsId}`} style={LinkStyles(darkTheme)}>
          <Typography color="primary" sx={authorNameText(muiTheme)}>
            {aughtorsName}
          </Typography>
        </Link>
      ) : (
        <Typography color="primary" sx={authorNameText(muiTheme)}>
          {aughtorsName}
        </Typography>
      )}

      {!sectionPage ? (
        <Link to={`/${sectionLink}`} style={LinkStyles(darkTheme)}>
          <Chip
            color="primary"
            label={section}
            variant="outlined"
            size="small"
            sx={chipStyle(muiTheme)}
          />
        </Link>
      ) : (
        <Chip
          color="primary"
          label={sectionType}
          variant="outlined"
          size="small"
          sx={chipNoPointer(muiTheme)}
        />
      )}

      {series && (
        <div style={seriesPadding()}>
          <Link to={`/series/${seriesId}`} style={LinkStyles(darkTheme)}>
            <Chip
              color="primary"
              label="Series"
              variant="outlined"
              size="small"
              sx={chipStyle(muiTheme)}
            />
          </Link>
        </div>
      )}

      {authorPage && series && sectionPage && (
        <CopyLinkComponent
          authorsId={authorsId}
          articleId={articleId}
          padding="0px 0px 0px 16px"
          email={false}
        />
      )}
    </Grid>
  );
};

export type Props = {
  section: string;
  authorsId: string;
  articleId: string;
  authorPage?: boolean;
  aughtorsName: string;
  sectionLink: string;
  sectionPage?: boolean;
  series?: boolean;
  seriesId?: string;
  sectionType?: string;
};

export default HorizontalArticleInfoComponent;
