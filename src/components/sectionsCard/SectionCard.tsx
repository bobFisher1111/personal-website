import React from 'react';
import {
  Button, CardActions, CardMedia, Card, Grid, Box,
} from '@mui/material/';
import { Link } from "react-router-dom";

const SectionCard: React.FC<Props> = ({
  imgCover,
  section,
  backGroundColor,
  linkTo,
}) => {
  return (
      <Grid 
        container 
        sx={{
          padding: '16px 0px 16px 0px',
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
              wordBreak: 'break-word',
              overflow: 'hidden',
              padding: 0,
              lineHeight: '1'
          }}
        >
          <Card>
          <Link 
              to={`/${linkTo}`}
              style={{
                textDecoration: "none"
              }}
            >
            <CardMedia
              component="img"
              alt="section image"
              width="200"
              height="212.5"
              image={imgCover}
            />
          </Link>
            <CardActions 
              sx={{ 
                backgroundColor: '#282c34', 
                justifyContent: 'center',
              }}
            >
              <Button 
                size="small"
                component={Link}
                to={`/${linkTo}`}
                sx={{
                  color: 'white',
                  textTransform: 'initial',
                  fontSize: '16px',
                  "&:hover": {
                    color: "#667A6E",
                  },
                }}
              >
                {section}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
  );
}

export type Props = {
  imgCover: string,
  section: string,
  backGroundColor: string,
  linkTo: string,
};

export default SectionCard;
