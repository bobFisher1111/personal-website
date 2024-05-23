import React from 'react';
import {
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import CopyLinkComponent from '../../../../copyLinkComponent/CopyLinkComponent';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { LinkStyles } from '../../../../../util/styles/LinkStyles';
import {
  ChipNoPointer,
  ChipStyle,
  DivMaterialSymbolsOutlined,
  DivSeriesLeftPadding,
  GridHorizontalInfo,
  TypographyHorizontalInfoText,
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
            className={'material-symbols-outlined'}
            sx={DivMaterialSymbolsOutlined()}
            color="primary"
          >
            <AccountCircleOutlinedIcon
              color="primary"
            />
          </Grid>
        </Link>
        :
        <Grid 
          className={'material-symbols-outlined'}
          style={DivMaterialSymbolsOutlined()}
        >
          <AccountCircleOutlinedIcon
            color="primary"
          />
        </Grid>
      }
      {!authorPage ? 
        <Link 
          to={`/author/${authorsId}`}
          style={LinkStyles()}
        >
          <Typography
            color="primary"
            sx={TypographyHorizontalInfoText}
          >
            {aughtorsName}
          </Typography> 
        </Link>
        :
        <Typography
          color="primary"
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
          label={sectionType}
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
                 color="primary"
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
              articleId={articleId}
              defaultColor={'#667A6E'}
              padding={'0px 0px 0px 16px'}
              email={false}
            />
      }
    </Grid>
  );
};

export type Props = {
  section: string;
  authorsId: string;
  articleId: string;
  authorPage: boolean | undefined;
  aughtorsName: string;
  sectionLink: string;
  sectionPage: boolean | undefined;
  series?: boolean | undefined;
  seriesId?: string;
  sectionType?: string;
};
    
export default HorizontalArticleInfoComponent;
