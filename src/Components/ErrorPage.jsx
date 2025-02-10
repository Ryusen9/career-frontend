import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center font-light justify-center">
      <div className="flex items-center justify-center">
        <Fade direction="down">
          <img
            src="/Images/404 error with people holding the numbers-bro.png"
            alt="Error"
            className="h-[40vh] md:h-[60vh]"
          />
        </Fade>
      </div>
      <div className="flex gap-4 flex-col">
        <p className="text-center text-5xl font-bold">
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
