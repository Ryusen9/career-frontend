import Lottie from "lottie-react";
import LoginLottie from "../../public/Lottie/Animation - 1739299705283.json";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../Context/ContextProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Login Successful",
            text: "Welcome!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (!result.user) {
          Swal.fire({
            title: "Error",
            text: "Invalid credentials!",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
    e.target.reset();
    navigate(from);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col text-center justify-center items-center max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Login</h1>
        </div>
        <div className="flex flex-col">
          <div>
            <Lottie animationData={LoginLottie}></Lottie>
          </div>

          <form onSubmit={handleSignIn} action="login">
            <div className="flex flex-col gap-3 justify-center items-center">
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="mail@site.com"
                  name="email"
                  className="w-full"
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>

              <div className="flex flex-col w-full items-center justify-center relative gap-2">
                <label className="input validator flex items-center justify-center gap-2 relative">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Password"
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    className="flex-1 p-2 rounded-md"
                    aria-label="Password"
                    aria-describedby="password-requirements"
                  />

                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="absolute right-3 z-[1] text-gray-600"
                    aria-label="Toggle password visibility"
                  >
                    {passwordVisible ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </label>
                <p className="validator-hint text-xs text-red-500 hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number
                  <br />
                  At least one lowercase letter
                  <br />
                  At least one uppercase letter
                </p>
              </div>
            </div>
            <div>
              <button type="submit" className="btn mt-5">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
