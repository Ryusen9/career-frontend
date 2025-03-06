import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-ten-amber.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log("unexpected error", error);
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then(() => console.log("logged out user"))
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxiosSecure;
