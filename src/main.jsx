import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DeblurrPage from "./pages/deblurring.jsx";
import DenoisingPage from "./pages/denoising.jsx";
import InpaintingPage from "./pages/inpainting.jsx";
import Home from "./pages/Home.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import MainContent from "./components/MainContent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    eerrorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <MainContent />,
    eerrorElement: <ErrorPage />,
  },
  {
    path: "/denoising",
    element: <DenoisingPage />,
    eerrorElement: <ErrorPage />,
  },
  {
    path: "/deblurring",
    element: <DeblurrPage />,
    eerrorElement: <ErrorPage />,
  },
  {
    path: "/inpainting",
    element: <InpaintingPage />,
    eerrorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      {/* <Home/> */}
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </ChakraProvider>
);
