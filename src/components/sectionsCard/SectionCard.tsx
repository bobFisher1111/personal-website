import React from 'react';
import {
  CardMedia,
  Card,
  CardActions,
  Button,
  Grid,
} from '@mui/material/';
import { Link } from "react-router-dom";
import { 
  ButtonSectionTtileStyle,
  CardActionsSectionNameStyle,
  CardMediaSection,
  CardSectionCard,
  GridOverflowHeader,
  GridSectionCardRoot,
} from './SectionCardStyles';
import { LinkStyles } from '../../util/styles/LinkStyles';

const SectionCard: React.FC<Props> = ({
  imgCover,
  section,
  linkTo,
}) => {
  return (
    <Grid 
      container
      sx={GridSectionCardRoot}
    >
      <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={GridOverflowHeader}
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
        </Grid>
      </Grid>
  );
}

export type Props = {
  imgCover: string,
  section: string,
  linkTo: string,
};

export default SectionCard;
