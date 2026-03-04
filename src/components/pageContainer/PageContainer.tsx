import type { ReactNode } from "react";
import { Grid, useTheme } from "@mui/material";
import { PageContainerRootStyles } from "./PageContainerStyles";

export type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignContent="center"
      sx={PageContainerRootStyles(theme)}
    >
      {children}
    </Grid>
  );
};

export default PageContainer;
