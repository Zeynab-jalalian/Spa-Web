import { createBrowserRouter, Outlet } from "react-router";
import RootLayout from "./components/Layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <div>Index page (Courses List)</div> },
      {
        path: "courses/:courseId",
        element: <div>Course details page</div>,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

export default router;
