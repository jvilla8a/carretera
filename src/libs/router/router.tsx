import { createBrowserRouter } from "react-router-dom";

import Layout from "../../layouts";
import Home from "../../pages/Home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);

export default router;
