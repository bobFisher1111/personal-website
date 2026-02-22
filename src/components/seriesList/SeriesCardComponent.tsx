import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardMedia,
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

const SeriesCardComponent = ({ articleData, layout = 'grid' }: Props) => {
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const theme = useTheme();
  const serieslUrl = `/series/${articleData?.series_id}`;

  return (
    <Box sx={DivVerticalArticleRoot(theme)}>
      <Card sx={CardVerticalCard(theme, darkTheme, layout)}>
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
          <Box 
            sx={CardFooterStyle(darkTheme)}
          >
            <Link
              to={serieslUrl}
              rel="noreferrer"
              style={{
                ...LinkStyles(darkTheme),
                display: 'block',
                width: '100%',
                flex: '1 1 0%',
                minWidth: 0,
                overflow: 'hidden',
              }}
            >
              <Typography sx={TypographyVerticalCardNameStyleHover(theme, darkTheme)}>
                {articleData?.series_title}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export type Props = {
  articleData: any;
  layout?: 'grid' | 'scroller';
};

export default SeriesCardComponent;
