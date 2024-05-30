import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {
  Button,
  Menu,
  MenuItem,
  Grid,
  Typography,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import {
  ButtonNameStyles,
  MenuStyles,
} from './SectionsDropDownStyles';

const SectionsDropDown: React.FC = () => {
  const [openState, setOpenState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenState(true);
  };
  const handleClose = () => {
    setOpenState(false);
    setAnchorEl(null);
  };

  return (
    <>
      <Grid
        container
      >
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Typography
            color="primary"
            sx={ButtonNameStyles}
          >
            Sections
          </Typography>
          {openState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Button>
        <Menu
          id="sections-dropdown"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={MenuStyles}
        >
          <MenuItem 
            color="primary"
            onClick={handleClose}
          >
            <Link
              to={'/videoGames'}
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
              >
                Gaming
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem 
            onClick={handleClose}
          >
            <Link
              to={'/reviews'}
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
              >
                Reviews
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem 
            onClick={handleClose}
          >
            <Link
              to={'/coding'}
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
              >
                Coding
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
          >
            <Link
              to={'/stories'}
              style={LinkStyles(theme)}
            >
              <Typography
                color="primary"
              >
                Stories
              </Typography>
            </Link>
          </MenuItem>
        </Menu>
      </Grid>
    </>
  );
};

export default SectionsDropDown;
