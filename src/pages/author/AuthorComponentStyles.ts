import { Theme } from "@mui/material/styles";
import { FONT_SIZES, SIZES } from "src/store/redux/theme/CONSTANTS";

export const authorComponentGridBiography = () => ({
  padding: "8px 16px 16px 16px",
});

export const authorComponentGridBiographyTitle = (theme: Theme) => ({
  textAlign: "flex-start",
  fontSize: FONT_SIZES.sectionTitle,
  padding: "16px 0px",
});

export const authorComponentGridBiographyText = (theme: Theme) => ({
  textAlign: "flex-start",
  fontSize: FONT_SIZES.body1,
  textIndent: "15px",
});

export const gridWidth = () => ({
  width: "100%",
});
