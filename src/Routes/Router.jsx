import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Register from "../Components/Register";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/",
            element: <App/>
        },
        {
          path: "/register",
          element: <Register/>,
        }
    ]
  },
]);
export default routers;
