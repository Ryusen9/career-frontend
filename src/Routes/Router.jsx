import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Components/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import Register from "../Components/Register";
import Login from "../Components/Login";
import JobDetails from "../Components/JobDetails";
import PrivateRoute from "../Private/PrivateRoute";
import ApplyForm from "../Components/ApplyForm";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <Login />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4322/jobs/${params.id}`),
      },
      {
        path: "/apply/:id",
        element: <PrivateRoute><ApplyForm/></PrivateRoute>
      }
    ],
  },
]);
export default routers;
