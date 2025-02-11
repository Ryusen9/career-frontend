import Lottie from "lottie-react";
import lottieRegister from "../../public/Lottie/Animation - 1739198289081.json";

const Register = () => {
  return (
    <div className="min-h-screen gap-5 flex flex-col md:flex-row items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-5">
        <div>
          <p className="text-3xl text-center font-bold">Register Yourself</p>
        </div>
        <Lottie animationData={lottieRegister}></Lottie>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Register;
