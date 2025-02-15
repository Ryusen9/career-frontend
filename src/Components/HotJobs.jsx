import { useEffect, useState } from "react";
import JobCard from "./Jobcard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4322/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="text-center">
        <p className="text-2xl font-semibold md:text-4xl md:font-bold">
          Hot Jobs Today
        </p>
        <p className="text-sm mt-2 md:text-base">Explore jobs around the world!</p>
      </div>
      <div>
        {jobs.map(job => <JobCard key={job._id} job={job}/>)}
      </div>
    </div>
  );
};

export default HotJobs;
