import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { LinkStyles } from 'src/util/styles/LinkStyles';
import {
  CardMediaVerticalCardImage,
  CardRootStyle,
  CardFooterStyle,
  CardVerticalCard,
  DivVerticalArticleRoot,
  TypographyVerticalCardNameStyleHover,
} from './SeriesCardStyles';

const SeriesCardComponent = ({ articleData }: Props) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const theme = useTheme();
  const serieslUrl = `/series/${articleData?.series_id}`;

  return (
    <div style={DivVerticalArticleRoot(theme)}>
      <Card sx={CardVerticalCard(theme, darkTheme)}>
        <Box sx={CardRootStyle}>
          <Link to={serieslUrl} rel="noreferrer">
            <CardMedia
              aria-label={`Series ${articleData?.series_title} Image`}
              component="img"
              image={articleData?.series_cover_image_or_video || articleData?.series_cover_image_or_video}
              sx={CardMediaVerticalCardImage(theme)}
              referrerPolicy="no-referrer"
            />
          </Link>
          <Box sx={CardFooterStyle}>
            <Grid container>
              <Grid size={12}>
                <Link to={serieslUrl} rel="noreferrer" style={LinkStyles(darkTheme)}>
                  <Typography sx={TypographyVerticalCardNameStyleHover(theme, darkTheme)}>
                    {articleData?.series_title}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export type Props = {
  articleData: any;
};

export default SeriesCardComponent;
