import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const AddJob = () => {
  const [requirements, setRequirements] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);

  const handleRequirementChange = (e) => {
    const value = e.target.value;
    const arrayValue = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    if (arrayValue.length <= 4) {
      setRequirements(arrayValue);
    }
  };

  const handleResponsibilityChange = (e) => {
    const value = e.target.value;
    const arrayValue = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    if (arrayValue.length <= 3) {
      setResponsibilities(arrayValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const finalData = {
      ...initialData,
      salaryRange: {
        min: Number(initialData.min),
        max: Number(initialData.max),
        currency: initialData.currency,
      },
      requirements,
      responsibilities,
    };
    axios
      .post("https://job-portal-ten-amber.vercel.app/jobs", finalData)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            title: "Job Posted Successfully",
            text: "Your job has been posted successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="mt-[15%] md:mt-16 min-h-screen">
      <p className="text-center font-medium text-2xl md:text-4xl">Post a Job</p>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[90%] mx-auto md:w-[75%]"
      >
        {/* Job Title */}
        <div>
          <label className="block text-gray-300">Company Name</label>
          <input
            type="text"
            name="company"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring focus:ring-blue-500"
          />
          <label className="block text-gray-300">Job Title</label>
          <input
            type="text"
            name="title"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring focus:ring-blue-500"
          />
          <label className="block text-gray-300">Logo URL</label>
          <input
            type="url"
            name="company_logo"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Location & Job Type */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300">Location</label>
            <input
              type="text"
              name="location"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-gray-300">Job Type</label>
            <select
              name="jobType"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            >
              <option value="">Select</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
              <option value="Part Time">Part Time</option>
              <option value="Contractual">Contractual</option>
            </select>
          </div>
          {/* Job Category */}
          <div>
            <label className="block text-gray-300">Job Category</label>
            <select
              name="category"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            >
              <option value="">Select</option>
              <option value="Engineering">Engineering</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Teaching">Teaching</option>
              <option value="Management">Management</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>
          <div>
            <label>Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-300">Min Salary</label>
            <input
              type="number"
              name="min"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-gray-300">Max Salary</label>
            <input
              type="number"
              name="max"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-gray-300">Currency</label>
            <input
              type="text"
              name="currency"
              required
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-gray-300">Job Description</label>
          <textarea
            name="description"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            rows="5"
          ></textarea>
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-gray-300">Requirements</label>
          <input
            type="text"
            name="requirements"
            onChange={handleRequirementChange}
            placeholder="Enter requirements separated by commas"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
        </div>

        {/* Responsibilities */}
        <div>
          <label className="block text-gray-300">Responsibilities</label>
          <input
            type="text"
            name="responsibilities"
            onChange={handleResponsibilityChange}
            placeholder="Enter responsibilities separated by commas"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
        </div>

        {/* HR Details */}
        <div>
          <label className="block text-gray-300">HR Name</label>
          <input
            type="text"
            name="hr_name"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
          <label className="block text-gray-300">HR Email</label>
          <input
            type="email"
            name="hr_email"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 p-2 rounded text-white font-semibold"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
