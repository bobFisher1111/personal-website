import { useSelector } from "react-redux";
import {
  Avatar,
  Grid,
  Typography,
} from '@mui/material';
import {
  AvatarStyle,
  GridAvatarPadding,
  GridHeader,
  GridPaddingRight,
  TypographyHeaderTitle,
} from './HeaderComponentStyles';

const HeaderComponent = ({
  title,
  avatarImage,
}: Props) => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const titleFunction = (item: any) => {
    return (
      <Typography
        color="primary"
        sx={TypographyHeaderTitle}
      >
        {item}
      </Typography>
    );
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      sx={GridHeader}
    >
      <Grid
        sx={GridPaddingRight}
      >
        <Avatar 
          alt="Authors Avatar"
          src={avatarImage}
          sx={AvatarStyle(theme)}
        />
      </Grid>
      <Grid
        sx={GridAvatarPadding}
      >
        {titleFunction(title)}
      </Grid>
    </Grid>
  );
};

export type Props = {
  title?: string;
  avatarImage?: string;
  authorId?: string;
};

export default HeaderComponent;
