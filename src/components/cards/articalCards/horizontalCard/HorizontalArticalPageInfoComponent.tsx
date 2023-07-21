import React from 'react';
import { Link } from "react-router-dom";
import CopyLinkComponent from '../../../copyLinkComponent/CopyLinkComponent';
import { GridArticalInfoComponent } from '../../../../styles/GridStyles';
import { LinkStyles } from '../../../../styles/LinkStyles';
import { DivMaterialSymbolsOutlined } from '../../../../styles/DivStyles';
import { TypographyArticalInfoRight, TypographyArticalInfoLeft } from '../../../../styles/TypographyStyles';
import { ChipStyle } from '../../../../styles/ChipStyles';

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
      <GridArticalInfoComponent 
        container 
        direction="row"
        justifyContent="center"
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
          <TypographyArticalInfoRight
            color="#2F4C69"
          >
            {author} 
          </TypographyArticalInfoRight>
        </Link>
        <TypographyArticalInfoRight
          color="black"
        >
          |
        </TypographyArticalInfoRight>
        <TypographyArticalInfoRight
          color="#667A6E"
        >
          {date}
        </TypographyArticalInfoRight>
        <TypographyArticalInfoRight
          color="#26282c34162e"
        >
          |
        </TypographyArticalInfoRight>
        <Link 
          to={`/${sectionLink}`}
          style={{
            textDecoration: "none"
          }}
        >
          <ChipStyle
            color="primary"
            label={section}
            variant="outlined"
            size="small"
          />
        </Link>
        <TypographyArticalInfoLeft
          color="#26282c34162e"
        >
          |
        </TypographyArticalInfoLeft>
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
      </GridArticalInfoComponent>
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
