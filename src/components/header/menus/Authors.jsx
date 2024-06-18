import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import React from "react";

function Authors() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        sx={{ color: "text.primary" }}
        id="basic-button-authors"
        aria-controls={open ? "basic-menu-authors" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon sx={{ ml: 0 }} />}
      >
        Tác giả
      </Button>
      <Menu
        id="basic-menu-authors"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button-authors",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemText>Bùi Nam Anh</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Đới Xuân Đạt</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Trần Hạ Yểm</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Nguyễn Mạnh Thắng</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Authors;
