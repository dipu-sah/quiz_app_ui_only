import { createBrowserRouter } from "react-router-dom";
import { HompePage } from "../views";

export const ALL_ROUTES = createBrowserRouter([
  { path: "/", element: <HompePage></HompePage> },
]);
