import {
  Typography,
  TextField,
  Button,
  styled,
  Checkbox,
} from "@mui/material";

const DarkTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
    fontColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
    fontColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#2F4C69',
      borderWidth: 'thin',
      fontColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#2F4C69',
      borderWidth: 'thin',
      fontColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2F4C69',
      borderWidth: 'thin',
      fontColor: 'white',
    },
  },
  '& .MuiFormLabel-root': {
    '&.MuiInputLabel-root': {
      color: 'white',
    }
  },
  '& .MuiInputBase-root': {
    '&.MuiOutlinedInput-root': {
      color: 'white',
    }
  },
});

export default DarkTextField;