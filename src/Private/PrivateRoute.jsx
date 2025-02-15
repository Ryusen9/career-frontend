import { useContext } from "react";
import AuthContext from "../Context/ContextProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../Components/LoadingPage";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if(loading) {
    return <LoadingPage/>
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/signIn"} state={location?.pathname} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
