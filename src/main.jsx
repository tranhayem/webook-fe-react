import CssBaseline from "@mui/material/CssBaseline";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import theme from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CssVarsProvider theme={theme} defaultMode="system">
    <CssBaseline />
    <App />
  </CssVarsProvider>
);
