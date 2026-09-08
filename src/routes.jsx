import { createBrowserRouter, Outlet } from "react-router";
import RootLayout from "./components/Layouts/RootLayout";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "courses/:courseId",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <NotFound />,
        handle: { hideFooter: true },
      },
    ],
  },
]);

export default router;
