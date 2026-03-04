import { FormControl, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import type { PopoverOrigin } from "@mui/material/Popover";
import {
  HomePageSelectFormControlSx,
  HomePageSelectMenuPaperSx,
  HomePageSelectSx,
} from "src/pages/home/HomePageSelectStyles";

export type HomePageSelectOption = {
  value: string;
  label: string;
};

export type HomePageSelectProps = {
  id: string;
  label: string;
  value: string;
  options: HomePageSelectOption[];
  onChange: (value: string) => void;
  darkTheme: boolean;
  minWidth?: number;
};

const HomePageSelect = ({
  id,
  label,
  value,
  options,
  onChange,
  darkTheme,
  minWidth = 120,
}: HomePageSelectProps) => {
  const mode = darkTheme ? "dark" : "light";

  const anchorOrigin: PopoverOrigin = {
    vertical: "bottom",
    horizontal: "left",
  };
  const transformOrigin: PopoverOrigin = {
    vertical: "top",
    horizontal: "left",
  };

  const selectMenuProps = {
    anchorOrigin,
    transformOrigin,
    PaperProps: {
      sx: {
        ...HomePageSelectMenuPaperSx(mode),
      },
    },
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={HomePageSelectFormControlSx(minWidth)}>
      <Select<string>
        id={id}
        value={value}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) return label;
          return (
            options.find((option) => option.value === selected)?.label ?? label
          );
        }}
        onChange={handleChange}
        MenuProps={selectMenuProps}
        inputProps={{ "aria-label": label }}
        sx={HomePageSelectSx(mode)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default HomePageSelect;
