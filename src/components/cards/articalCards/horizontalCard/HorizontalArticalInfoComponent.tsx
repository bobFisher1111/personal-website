import React from 'react';
import {
  Grid,
} from "@mui/material";
import CopyLinkComponent from '../../../copyLinkComponent/CopyLinkComponent';
import { Link } from "react-router-dom";
import { LinkStyles } from '../../../../styles/LinkStyles';
import { DivMaterialSymbolsOutlined, DivSeriesLeftPadding } from '../../../../styles/DivStyles';
import { TypographyHorizontalInfoText } from '../../../../styles/TypographyStyles';
import { ChipStyle, ChipNoPointer } from '../../../../styles/ChipStyles';

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
        >
          {!authorPage ?
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
          :
            <div 
              className={"material-symbols-outlined"}
              style={DivMaterialSymbolsOutlined()}
            >
              account_circle
            </div>
          }
          {!authorPage ? 
            <Link 
              to={`/author/${authorsId}`}
              style={LinkStyles()}
            >
              <TypographyHorizontalInfoText
                color="#2F4C69"
              >
                {aughtorsName}
              </TypographyHorizontalInfoText> 
            </Link>
          :
            <TypographyHorizontalInfoText
              color="#2F4C69"
            >
              {aughtorsName}
            </TypographyHorizontalInfoText>
          }
          {!sectionPage ?
              <Link 
                to={`/${sectionLink}`}
                style={LinkStyles()}
              >
              <ChipStyle
                color="primary"
                label={section}
                variant="outlined"
                size="small"
              />
            </Link>
          :
            <ChipNoPointer
              color="primary"
              label={section}
              variant="outlined"
              size="small"
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
              <ChipStyle
                color="secondary"
                label={'Series'}
                variant="outlined"
                size="small"
              />
            </Link>
            </div>
          }
          <CopyLinkComponent
            authorsId={authorsId}
            articalId={articalId}
            defaultColor={'#667A6E'}
            padding={'0px 0px 0px 16px'}
            email={false}
          />
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
