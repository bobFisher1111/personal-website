import React from 'react';
import {
  CardMedia, Card,
} from '@mui/material/';
import { Link } from "react-router-dom";
import { GridTopAndBottom, GridOverflowHeader } from '../../styles/GridStyles';
import { CardActionsSectionName } from '../../styles/CardActionsStyles';
import { ButtonSectionTtile } from '../../styles/ButtonStyles';
import { LinkStyles } from '../../styles/LinkStyles';

const SectionCard: React.FC<Props> = ({
  imgCover,
  section,
  linkTo,
}) => {
  return (
    <GridTopAndBottom 
      container 
    >
      <GridOverflowHeader
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Card>
          <Link 
              to={`/${linkTo}`}
              style={LinkStyles()}
            >
            <CardMedia
              component="img"
              alt="section image"
              width="200"
              height="212.5"
              image={imgCover}
            />
          </Link>
            <CardActionsSectionName>
            <Link 
              to={`/${linkTo}`}
              style={{
                textDecoration: "none"
              }}
            >
              <ButtonSectionTtile 
                size="small"
              >
                {section}
              </ButtonSectionTtile>
            </Link>
            </CardActionsSectionName>
          </Card>
        </GridOverflowHeader>
      </GridTopAndBottom>
  );
}

export type Props = {
  imgCover: string,
  section: string,
  linkTo: string,
};

export default SectionCard;
