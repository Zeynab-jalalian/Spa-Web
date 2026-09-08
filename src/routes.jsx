import { createBrowserRouter, Outlet } from "react-router";
import RootLayout from "./components/Layouts/RootLayout";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "courses/:courseId",
        element: <CourseDetails />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
