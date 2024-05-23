import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Menu,
  MenuItem,
  Grid,
  Typography,
} from '@mui/material';
import { LinkStyles } from '../../../util/styles/LinkStyles';
import {
  ButtonNameStyles,
  MenuStyles,
} from './SectionsDropDownStyles';

const SectionsDropDown: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
              style={LinkStyles()}
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
              style={LinkStyles()}
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
              style={LinkStyles()}
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
              style={LinkStyles()}
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
