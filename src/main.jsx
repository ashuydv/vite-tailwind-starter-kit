import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import { Page } from "./pages/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h2>Hello World</h2>
        <Link to="page">Page</Link>
      </div>
    ),
  },
  {
    path: "page",
    element: <Page/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
