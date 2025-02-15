import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Register from "../Components/Register";
import Login from "../Components/Login";
import JobDetails from "../Components/JobDetails";

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
        },
        {
          path: "/signIn",
          element: <Login/>,
        },
        {
          path: "/jobs/:id",
          element: <JobDetails/>,
          loader: ({params}) => fetch(`http://localhost:4322/jobs/${params.id}`)
        }
    ]
  },
]);
export default routers;
