import { useEffect, useState } from "react";
import JobCard from "./Jobcard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://job-portal-ten-amber.vercel.app/jobs", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="text-center">
        <p className="text-2xl font-semibold md:text-4xl md:font-bold">
          Hot Jobs Today
        </p>
        <p className="text-sm mt-2 md:text-base">
          Explore jobs around the world!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] md:max-w-7xl mx-auto gap-2">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
