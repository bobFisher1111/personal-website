import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import {
  ScrollArrowButtonStyles,
  ScrollArrowDirection,
  ScrollArrowIconStyles,
} from "./ScrollArrowButtonStyles";

type ScrollArrowButtonProps = {
  direction: ScrollArrowDirection;
  darkTheme: boolean;
  onClick: () => void;
  ariaLabel?: string;
};

const ScrollArrowButton = ({
  direction,
  darkTheme,
  onClick,
  ariaLabel,
}: ScrollArrowButtonProps) => {
  const label = ariaLabel ?? (direction === "left" ? "Scroll left" : "Scroll right");

  return (
    <IconButton
      aria-label={label}
      onClick={onClick}
      sx={ScrollArrowButtonStyles(darkTheme, direction)}
    >
      {direction === "left" ? (
        <ArrowBackIosNewIcon fontSize="small" sx={ScrollArrowIconStyles(darkTheme)} />
      ) : (
        <ArrowForwardIosIcon fontSize="small" sx={ScrollArrowIconStyles(darkTheme)} />
      )}
    </IconButton>
  );
};

export default ScrollArrowButton;
