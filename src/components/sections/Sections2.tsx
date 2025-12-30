import React from "react";
import { Box, Button, Container, useMediaQuery, Menu, MenuItem, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import {
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
} from 'src/store/redux/theme/CONSTANTS';

const sections = [
  "Reviews",
  "Retro RPGs",
  "Modern RPGs",
  "Indie RPGs",
  "Guides & Builds",
  "Lore & Worldbuilding",
  "News",
  "Community",
];

export default function Sections2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const darkTheme = useSelector((state: any) => state.theme.darkTheme);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const navBackground = darkTheme ? COLORS.dark.appBar : COLORS.light.secondary;
  const textColor = darkTheme ? COLORS.dark.text.primary : COLORS.light.text.primary;
  const borderColor = darkTheme ? COLORS.dark.primary : COLORS.light.accent.green3;
  const hoverBg = darkTheme ? COLORS.dark.primary : COLORS.light.accent.green1;
  const hoverText = darkTheme ? COLORS.dark.text.primary : COLORS.light.text.primary;

  return (
    <Box
      component="nav"
      sx={{
        width: "100%",
        backgroundColor: navBackground,
        marginBottom: 4,
        borderRadius: 1,
        border: `1px solid ${borderColor}`,
        py: 1,
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "flex-start" : "center",
          borderRadius: 1,
        }}
      >
        {/* Mobile Dropdown */}
        {isMobile ? (
          <>
            <Button
              startIcon={<MenuIcon />}
              onClick={openMenu}
              sx={{
                textTransform: "none",
                color: textColor,
                fontSize: FONT_SIZES.body1,
                fontWeight: FONT_WEIGHTS.bold,
                "&:hover": {
                  backgroundColor: hoverBg,
                  color: hoverText,
                },
              }}
            >
              Sections
            </Button>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
              {sections.map((section) => (
                <MenuItem
                  key={section}
                  onClick={closeMenu}
                  sx={{
                    color: textColor,
                    "&:hover": {
                      backgroundColor: hoverBg,
                      color: hoverText,
                    },
                  }}
                >
                  {section}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          /* Desktop Horizontal Scrollable Nav */
          <Box
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              whiteSpace: "nowrap",
              scrollbarWidth: "thin",
              "&::-webkit-scrollbar": {
                height: 6,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: darkTheme ? COLORS.dark.primary : COLORS.light.primary,
                borderRadius: 3,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: darkTheme ? COLORS.dark.appBar : COLORS.light.secondary,
              },
            }}
          >
            {sections.map((section) => (
              <Button
                key={section}
                sx={{
                  textTransform: "none",
                  fontWeight: FONT_WEIGHTS.bold,
                  fontSize: FONT_SIZES.body1,
                  color: darkTheme ? COLORS.dark.primary : COLORS.light.primary,
                  flexShrink: 0,
                  transition: 'color 0.2s ease, background-color 0.2s ease',
                  "&:hover": {
                    color: darkTheme ? COLORS.dark.secondary : COLORS.light.secondary,
                    backgroundColor: darkTheme ? COLORS.dark.primary : COLORS.light.primary,
                    borderRadius: 1,
                  },
                }}
              >
                {section}
              </Button>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
