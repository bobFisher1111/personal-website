import { useAppSelector } from "src/store/redux/hooks";
import { Avatar, Grid, Typography } from "@mui/material";
import {
  AvatarStyle,
  GridAvatarPadding,
  GridHeader,
  GridPaddingRight,
  TypographyHeaderTitle,
} from "./HeaderComponentStyles";

const HeaderComponent = ({ title, avatarImage }: Props) => {
  const theme = useAppSelector((state) => state.theme.darkTheme);
  const titleFunction = (item: string) => {
    return (
      <Typography component="h1" color="primary" sx={TypographyHeaderTitle}>
        {item}
      </Typography>
    );
  };

  return (
    <Grid container direction="row" justifyContent="flex-start" sx={GridHeader}>
      <Grid sx={GridPaddingRight}>
        <Avatar
          alt={title ? `${title} avatar` : "Author avatar"}
          src={avatarImage}
          sx={AvatarStyle(theme)}
        />
      </Grid>
      <Grid sx={GridAvatarPadding}>{titleFunction(title)}</Grid>
    </Grid>
  );
};

export type Props = {
  title: string;
  avatarImage: string;
  authorId: number | string;
};

export default HeaderComponent;
