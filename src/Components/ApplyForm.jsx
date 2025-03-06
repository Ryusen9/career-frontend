import Lottie from "lottie-react";
import { useParams } from "react-router";
import formAnimation from "../../public/Lottie/Form Animation.json";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const github = form.github.value;
    const linkedin = form.linkedin.value;
    const coverLetter = form.coverLetter.value;
    const jobApplication = {
      job_id: id,
      name,
      email,
      github,
      linkedin,
      cover_letter: coverLetter,
    };
    axios
      .post(
        "https://job-portal-ten-amber.vercel.app/job-applications",
        jobApplication
      )
      .then((result) => {
        console.log(result);
        if (result.data.insertedId) {
          Swal.fire({
            title: "Application Successful",
            text: "Your application has been submitted successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    form.reset();
  };
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center">
      <div className="text-center flex flex-col gap-2">
        <p className="text-3xl font-medium md:text-4xl md:font-bold">
          Apply For The Job
        </p>
        <p className="text-sm md:text-base">
          Please fill out the form below to apply!
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center items-start md:mt-[3.25%]">
          <Lottie
            className="w-64 md:w-80"
            animationData={formAnimation}
          ></Lottie>
        </div>
        <form className="space-y-4 p-5" onSubmit={handleJobApply}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
            required
          />
          <input
            type="email"
            defaultValue={user.email}
            name="email"
            placeholder="Email Address"
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
            required
          />
          <input
            type="url"
            placeholder="GitHub Profile Link"
            name="github"
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
            required
          />
          <input
            type="url"
            placeholder="LinkedIn Profile Link"
            name="linkedin"
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
            required
          />
          <textarea
            placeholder="Cover Letter"
            name="coverLetter"
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
            rows="4"
          ></textarea>
          <div className="flex flex-col items-center gap-2 justify-center">
            <button
              type="submit"
              className="w-[50%] btn mx-auto bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg"
            >
              Submit Application
            </button>
            <button
              type="button"
              className="w-[50%] bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded-lg mt-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
