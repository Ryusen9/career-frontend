import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/",
            element: <App/>
        }
    ]
  },
]);
export default routers;
