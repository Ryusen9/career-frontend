import { Link } from "react-router";
import ErrorLottie from "../../public/Lottie/ErrorAnimation - 1739299162671.json"
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center font-light justify-center">
      <div className="flex items-center justify-center">
        <Lottie animationData={ErrorLottie}></Lottie>
      </div>
      <div className="flex gap-4 flex-col">
        <p className="text-center text-3xl md:text-5xl font-bold">
          There is an <span className="text-red-500">error</span> <br />{" "}
          occurred loading this page.
        </p>
        <p className="text-center">
          Go back to{" "}
          <Link>
            <span className="text-emerald-400 font-semibold">Home Page</span>
          </Link>{" "}
          or Contact{" "}
          <Link to={"/service"}>
            <span className="text-emerald-400 font-semibold">Service</span>
          </Link>
          .{" "}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
