import {
  TextField,
  styled,
} from '@mui/material';

const DarkTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#0C0D0D',
    fontColor: '#0C0D0D',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0C0D0D',
    fontColor: '#667A6E',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#2F4C69',
      borderWidth: 'thin',
      fontColor: '#0C0D0D',
    },
    '&:hover fieldset': {
      borderColor: '#2F4C69',
      borderWidth: 'thin',
      fontColor: '#0C0D0D',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2F4C69',
      borderWidth: 'thin',
      fontColor: '#0C0D0D',
    },
  },
  '& .MuiFormLabel-root': {
    '&.MuiInputLabel-root': {
      color: '#667A6E',
    }
  },
  '& .MuiInputBase-root': {
    '&.MuiOutlinedInput-root': {
      color: '#2F4C69',
    }
  },
});

export default DarkTextField;