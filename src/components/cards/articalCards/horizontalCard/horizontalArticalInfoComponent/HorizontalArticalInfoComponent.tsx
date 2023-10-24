import React from 'react';
import {
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import CopyLinkComponent from '../../../../copyLinkComponent/CopyLinkComponent';
import { Link } from "react-router-dom";
import { LinkStyles } from '../../../../../util/styles/LinkStyles';
import {
  ChipNoPointer,
  ChipStyle,
  DivMaterialSymbolsOutlined,
  DivSeriesLeftPadding,
  GridHorizontalInfo,
  TypographyHorizontalInfoText,
} from './HorizontalArticalInfoComponentStyle';

const HorizontalArticalInfoComponent: React.FC<Props> = ({
  section,
  authorsId,
  articalId,
  authorPage,
  aughtorsName,
  sectionLink,
  sectionPage,
  series,
  seriesId,
}) => {
    return (
        <Grid 
          container
          direction="row"    
          sx={GridHorizontalInfo}
        >
          {!authorPage ?
            <Link 
              to={`/author/${authorsId}`}
              style={LinkStyles()}
            >
              <Grid 
                className={"material-symbols-outlined"}
                sx={DivMaterialSymbolsOutlined()}
              >
                account_circle
              </Grid>
            </Link>
          :
            <Grid 
              className={"material-symbols-outlined"}
              style={DivMaterialSymbolsOutlined()}
            >
              account_circle
            </Grid>
          }
          {!authorPage ? 
            <Link 
              to={`/author/${authorsId}`}
              style={LinkStyles()}
            >
              <Typography
                // color="#2F4C69"
                sx={TypographyHorizontalInfoText}
              >
                {aughtorsName}
              </Typography> 
            </Link>
          :
            <Typography
              // color="#2F4C69"
              sx={TypographyHorizontalInfoText}
            >
              {aughtorsName}
            </Typography>
          }
          {!sectionPage ?
              <Link 
                to={`/${sectionLink}`}
                style={LinkStyles()}
              >
              <Chip
                color="primary"
                label={section}
                variant="outlined"
                size="small"
                sx={ChipStyle}
              />
            </Link>
          :
            <Chip
              color="primary"
              label={section}
              variant="outlined"
              size="small"
              sx={ChipNoPointer}
            />
          }
          {series &&
           <div
            style={DivSeriesLeftPadding()}
          >
           <Link 
              to={`/series/${seriesId}`}
              style={LinkStyles()}
            >
              <Chip
                color="secondary"
                label={'Series'}
                variant="outlined"
                size="small"
                sx={ChipStyle}
              />
            </Link>
            </div>
          }
          {authorPage && series && sectionPage &&
            <CopyLinkComponent
              authorsId={authorsId}
              articalId={articalId}
              defaultColor={'#667A6E'}
              padding={'0px 0px 0px 16px'}
              email={false}
            />
          }
        </Grid>
    )
}

export type Props = {
  section: string;
  authorsId: string;
  articalId: string;
  authorPage: boolean | undefined;
  aughtorsName: string;
  sectionLink: string;
  sectionPage: boolean | undefined;
  series?: boolean | undefined;
  seriesId?: string;
};
    
export default HorizontalArticalInfoComponent;
