import React from 'react';
import {
  CardMedia,
  Card,
  CardActions,
  Button,
} from '@mui/material/';
import { Link } from "react-router-dom";
import { GridSectionCardRoot, GridOverflowHeader } from '../../styles/GridStyles';
import { 
  ButtonSectionTtileStyle,
  CardActionsSectionNameStyle,
} from './SectionCardStyles';
import { CardSectionCard } from '../../styles/CardStyles';
import { CardMediaSection } from '../../styles/CardMediaStyles';
import { LinkStyles } from '../../styles/LinkStyles';

const SectionCard: React.FC<Props> = ({
  imgCover,
  section,
  linkTo,
}) => {
  return (
    <GridSectionCardRoot 
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
          <Card
            sx={CardSectionCard}
          >
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
              sx={CardMediaSection}
            />
          </Link>
            <CardActions
              sx={CardActionsSectionNameStyle}
            >
            <Link 
              to={`/${linkTo}`}
              style={{
                textDecoration: "none"
              }}
            >
              <Button 
                size="small"
                sx={ButtonSectionTtileStyle}
              >
                {section}
              </Button>
            </Link>
            </CardActions>
          </Card>
        </GridOverflowHeader>
      </GridSectionCardRoot>
  );
}

export type Props = {
  imgCover: string,
  section: string,
  linkTo: string,
};

export default SectionCard;
