import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import logo from "~/assets/images/logo.png";

import ModeSwitch from "../modeSwitch/ModeSwitch";
import SearchBooks from "../search/SearchBooks";

import AccountProfiles from "./menus/AccountProfiles";
import Authors from "./menus/Authors";
import Categories from "./menus/Categories";
import Publishers from "./menus/Publishers";
import ShoppingCart from "./menus/ShoppingCart";

function Navbar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Avatar
            variant="square"
            alt="Logo"
            src={logo}
            sx={{ width: "140px" }}
          />
          <Publishers />
          <Authors />
          <Categories />

          <Box sx={{ flex: 1 }} />

          <SearchBooks />
          <ModeSwitch />
          <ShoppingCart />
          <AccountProfiles />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
