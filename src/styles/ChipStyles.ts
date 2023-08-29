import {
  styled,
  Chip,
} from "@mui/material";
      
export const ChipStyle = styled(Chip) ({
  color: 'black',
  cursor: 'pointer',
  borderRadius: '4px',
  '@media only screen and (max-width: 600px)': {
    fontSize: '10px',
    '&.MuiChip-root': {
      height: '24px',
    },
  },
});

export const ChipNoPointer = styled(Chip) ({
  borderRadius: '4px',
  color: 'black',
  '@media only screen and (max-width: 600px)': {
    fontSize: '10px',
    '&.MuiChip-root': {
      height: '24px',
    },
  },
});
      
export default [
  ChipStyle,
  ChipNoPointer,
];
    