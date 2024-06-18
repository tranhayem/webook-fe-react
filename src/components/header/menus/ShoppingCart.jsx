import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Tooltip, Typography } from "@mui/material";

function ShoppingCart() {
  return (
    <Box sx={{ mr: 1 }}>
      <Tooltip title={"Quản lý giỏ hàng"}>
        <Button
          sx={{
            borderRadius: "50%",
            color: "text.primary",
            minWidth: 0,
          }}
        >
          <ShoppingCartIcon />
          <Typography sx={{ py: 1 }}>(100)</Typography>
        </Button>
      </Tooltip>
    </Box>
  );
}

export default ShoppingCart;
