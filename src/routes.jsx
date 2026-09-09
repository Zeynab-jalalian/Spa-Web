import { createBrowserRouter } from "react-router";

import RootLayout from "./components/Layouts/RootLayout";

import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";

import PrivateRoute from "./components/PrivateRoute";

import User from "./pages/Dashboard/User";
import Products from "./pages/Dashboard/Products";
import Comments from "./pages/Dashboard/Comments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Public Route
      {
        index: true,
        element: <Home />,
      },

      // Private Routes
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "courses/:courseId",
            element: <CourseDetails />,
          },

          {
            path: "dashboard",
            children: [
              {
                index: true,
                element: <User />,
              },
              {
                path: "products",
                element: <Products />,
              },
              {
                path: "comments",
                element: <Comments />,
              },
            ],
          },
        ],
      },

      // Not Found
      {
        path: "*",
        element: <NotFound />,
        handle: {
          hideFooter: true,
        },
      },
    ],
  },
]);

export default router;
