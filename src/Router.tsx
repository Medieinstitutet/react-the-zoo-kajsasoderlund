import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Animal } from "./pages/Animal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:  <Home></Home>,
      },
      {
        path: "/animals",
        element: <Animals></Animals>, 
      },
      {
        path: "/animal/:animalId",
        element: <Animal></Animal>, 
      }
    ],
  },
]);
