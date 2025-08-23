import { Theme } from "@mui/material";

export const comingSoonText = (theme: Theme) => ({
  padding: '16px',
  fontSize: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
});

export default [comingSoonText];
