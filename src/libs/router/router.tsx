import { createBrowserRouter } from "react-router-dom";

import Layout from "../../layouts";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      // errorElement: <ErrorPage />,
    ],
  },
]);

export default router;
