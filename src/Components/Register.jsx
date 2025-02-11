import Lottie from "lottie-react";
import lottieRegister from "../../public/Lottie/Animation - 1739198289081.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import AuthContext from "../Context/ContextProvider";

const Register = () => {
  const {createUser} = useState(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(name, email, password, photo);
  };
  return (
    <div className="min-h-screen max-w-5xl mx-auto gap-5 md:gap-10 flex flex-col md:flex-row items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-5">
        <div>
          <p className="text-3xl text-center font-bold">Register Yourself</p>
        </div>
        <div className="w-96 mx-auto">
          <Lottie animationData={lottieRegister}></Lottie>
        </div>
      </div>
      <div className="w-[60%] md:w-[35%]">
        <form onSubmit={handleRegister} className="flex flex-col gap-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter you name:</legend>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>

          <label className="input w-full validator">
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
          <div className="validator-hint hidden">Enter valid email address</div>

          <label className="input w-full validator">
            <p>Photo URL</p>
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
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </g>
            </svg>
            <input
              required
              type="url"
              placeholder="https://"
              name="photo"
              title="Must be valid URL"
            />
          </label>
          <p className="validator-hint">Must be valid URL</p>
          <div className="flex flex-col items-center justify-center relative gap-2">
            <label className="input validator flex items-center gap-2 relative w-full">
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
                className="flex-1 w-full p-2 rounded-md"
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
          <div className="flex items-center justify-center gap-2">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
