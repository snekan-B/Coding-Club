import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewFaculty from "./Components/NewFaculty";
import Retirement from "./Components/Retirement";
import Mainpage from "./Components/Mainpage";
import Success from "./Components/Success";
const router = createBrowserRouter([
  {
    path: "/form",
    element: <NewFaculty />,
  },
  {
    path: "/retirement",
    element: <Retirement />,
  },
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
