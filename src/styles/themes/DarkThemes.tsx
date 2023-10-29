import {
  TextField,
  styled,
} from '@mui/material';

const DarkTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
    fontColor: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
    fontColor: '#667A6E',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#2F4C69',
      borderWidth: 'thin',
      fontColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: '#2F4C69',
      borderWidth: 'thin',
      fontColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2F4C69',
      borderWidth: 'thin',
      fontColor: 'black',
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