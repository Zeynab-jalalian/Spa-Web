import { createBrowserRouter, Outlet } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Home page
        <br />
        <Outlet />
        <div>Footer</div>
      </div>
    ),
    children: [
      { index: true, element: <div>Index page (Courses List)</div> },
      {
        path: "courses/:courseId",
        element: <div>Course details page</div>,
      },
      {
        path: "/*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

export default router;
