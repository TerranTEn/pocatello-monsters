import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let theme = createTheme({
  palette: {
    primary: {
      light: "#90a4ae", // light grey
      dark: "#212121", // dark grey
      main: "#212121", // dark grey
    },
    textPrimary: {
      light: "#f5f5f5", // almost white
      dark: "#212121", // dark grey
      contrast: "#1e88e5", // dark blue
    },
    secondary: {
      main: "#1e88e5", // dark blue
    },
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
