import React from 'react';
import {
  // CardMedia,
  Card,
  CardActions,
  Button,
  Grid,
} from '@mui/material/';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { 
  ButtonSectionTtileStyle,
  CardActionsSectionNameStyle,
  // CardMediaSection,
  CardSectionCard,
  GridOverflowHeader,
  GridSectionCardRoot,
} from './SectionCardStyles';
import { LinkStyles } from '../../../../util/styles/LinkStyles';

const SectionCard: React.FC<Props> = ({
  // imgCover,
  // homePage, // later for dark and light theme
  section,
  linkTo,
}) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
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
            style={LinkStyles(theme)}
          >
            {/* <CardMedia
              component="img"
              alt="section image"
              width="200"
              height="212.5"
              image={imgCover}
              sx={CardMediaSection}
            /> */}
          </Link>
          <CardActions
            // color="primary"
            // sx={CardActionsSectionNameStyle(homePage)} // later for dark and light theme
            sx={CardActionsSectionNameStyle}
          >
            <Link 
              to={`/${linkTo}`}
              style={{
                textDecoration: 'none'
              }}
            >
              <Button 
                size="small"
                // sx={ButtonSectionTtileStyle(homePage)} // later for dark and light theme
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
};

export type Props = {
  // homePage: boolean, // later for dark and light theme
  imgCover: string,
  section: string,
  linkTo: string,
};

export default SectionCard;


