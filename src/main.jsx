// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );


// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
  },
  // add your custom typography, breakpoints, etc. here
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);
