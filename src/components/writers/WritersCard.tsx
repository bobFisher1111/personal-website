import React from 'react';
import {
  Grid,
  Typography,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import SocialMediaComponent from '../socialMediaComponent/SocialMediaComponent';
import finalfantasy7 from '../../assets/images/finalfantasy7.jpg';

const WritersCard: React.FC<Props> = ({
}) => {
  return (
    <Grid
      container
      sx={{
        padding: '8px 16px 16px 16px',
      }}
    >
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
      >
        <CardMedia
            component="img"
            image={finalfantasy7}
            sx={{
            width: "120px",
            height: "120px",
            borderRadius: '50%',
            }}
        />
      </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
          sx={{
            paddingTop: '4px'
          }}
        >
        <Typography
          variant="h6"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {'Bob The Fisher'}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            color: 'grey',
          }}
        >
          {'Software Engineer, Writer, Game Dev'}
        </Typography>
        <Link 
          to="/author"
          style={{
            textDecoration: "none"
          }}
        >
            <Typography
               sx={{
                fontSize: '16px',
                color: "black",
                cursor: "pointer",
                "&:hover": {
                    color: "black",
                },
                margin: "0px 22px 0px 0px"
            }}
            >
              Learn more from the Author
            </Typography>
          </Link> 
        <Grid
          container
        >
        <SocialMediaComponent
          widthPadding={'8px 8px 8px 0px'}
          turnOnStyle={true}
          turnOnEmail={true}
          turnOnEmailStyle={true}
        />
        </Grid>
      </Grid>
    </Grid>
  );
}

export type Props = {
};

export default WritersCard;
