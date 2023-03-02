import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ALL_ROUTES } from "./router/routers";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <RouterProvider router={ALL_ROUTES} />
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
