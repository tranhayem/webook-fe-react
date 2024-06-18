import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import React from "react";

function Publishers() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mx: 2 }}>
      <Button
        sx={{ color: "text.primary" }}
        id="basic-button-categories"
        aria-controls={open ? "basic-menu-categories" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon sx={{ ml: 0 }} />}
      >
        Nhà Xuất Bản
      </Button>
      <Menu
        id="basic-menu-categories"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button-categories",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemText>Nhà xuất bản Kim Đồng</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Nhà xuất bản Tân Thời</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Nhà xuất bản Hà Nội</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>Nhà xuất bản Trẻ</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Publishers;
