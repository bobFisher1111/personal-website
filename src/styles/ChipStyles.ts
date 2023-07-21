import {
  styled,
  Chip,
} from "@mui/material";
      
export const ChipStyle = styled(Chip) ({
  color: 'black',
  cursor: 'pointer',
});

export const ChipNoPointer = styled(Chip) ({
  color: 'black',
});
      
export default [
  ChipStyle,
  ChipNoPointer,
];
    