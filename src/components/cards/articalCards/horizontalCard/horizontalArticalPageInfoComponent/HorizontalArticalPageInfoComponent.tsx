import React from 'react';
import { Link } from "react-router-dom";
import {
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import CopyLinkComponent from '../../../../copyLinkComponent/CopyLinkComponent';
import { LinkStyles } from '../../../../../util/styles/LinkStyles';
import {
  ChipStyle,
  DivMaterialSymbolsOutlined,
  GridArticalInfoComponent,
  HorizArticalPageInfoCompAuthor,
  HorizArticalPageInfoCompDate,
  TypographyArticalInfoRight,
  TypographyArticalInfoLeft,
} from './HorizontalArticalPageInfoComponentStyles';

const HorizontalArticalPageInfoComponent: React.FC<Props> = ({
  authorsId,
  author,
  date,
  sectionLink,
  section,
  articalID,
  series,
}) => {
  const getSeriesIdFromUrl = () => {
    const currentLocation = window.location.href;
    const seriesId = currentLocation.split("/").reverse()[0];
    return (seriesId);
  }

  return (
    <>
      <Grid 
        container 
        direction="row"
        justifyContent="center"
        sx={GridArticalInfoComponent}
      >
        <Link 
          to={`/author/${authorsId}`}
          style={LinkStyles()}
        >
          <div 
            className={"material-symbols-outlined"}
            style={DivMaterialSymbolsOutlined()}
          >
            account_circle
          </div>
        </Link>
        <Link 
          to={`/author/${authorsId}`}
          style={LinkStyles()}
        >
          <Typography
            color="#2F4C69"
            sx={HorizArticalPageInfoCompAuthor}
          >
            {author} 
          </Typography>
        </Link>
        <Typography
          color="black"
          sx={TypographyArticalInfoRight}
        >
          |
        </Typography>
        <Typography
          color="#667A6E"
          sx={HorizArticalPageInfoCompDate}
        >
          {date}
        </Typography>
        <Typography
          color="#26282c34162e"
          sx={TypographyArticalInfoRight}
        >
          |
        </Typography>
        <Link 
          to={`/${sectionLink}`}
          style={{
            textDecoration: "none"
          }}
        >
          <Chip
            color="primary"
            label={section}
            variant="outlined"
            size="small"
            sx={ChipStyle}
          />
        </Link>
        <Typography
          color="#26282c34162e"
          sx={TypographyArticalInfoLeft}
        >
          |
        </Typography>
        {series ? 
          <CopyLinkComponent
            seriesId={getSeriesIdFromUrl()}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
            turnOnSeries={true}
        />
        :
          <CopyLinkComponent
            authorsId={authorsId}
            articalId={articalID}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
          />
        }
      </Grid>
    </>
  )
};

export type Props = {
  authorsId: string;
  author: string;
  date: string;
  sectionLink: string;
  section: string;
  articalID: string;
  series: boolean | undefined;
};

export default HorizontalArticalPageInfoComponent;
