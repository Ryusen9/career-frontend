import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { TbTrashXFilled } from "react-icons/tb";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4322/job-application?email=${user.email}`, {
        withCredentials: true,
      })
      .then((result) => setJobs(result.data))
      .catch((error) =>
        console.error("Error fetching job applications:", error)
      );
  }, [user?.email]);
  const handleDelete = (jobId) => {
    axios
      .delete(`http://localhost:4322/job-application/${jobId}`, {
        withCredentials: true,
      })
      .then((result) => {
        if (result.status === 200) {
          setJobs((prevJobs) => prevJobs.filter((job) => job.job_id !== jobId));
        }
      })
      .catch((error) =>
        console.error("Error deleting job application:", error)
      );
  };

  return (
    <div className="mt-16 min-h-screen">
      <p className="text-center text-2xl md:text-4xl font-medium">
        My Applications: {jobs.length}
      </p>
      <div className="overflow-x-auto mt-8 w-[90%] mx-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Category</th>
              <th>Job Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.job_id}>
                <th>{job.title}</th>
                <td>{job.company}</td>
                <td>{job.category}</td>
                <td>{job.jobType}</td>
                <td>
                  <button
                    onClick={() => handleDelete(job.job_id)}
                    className="btn btn-error text-white btn-sm"
                  >
                    <TbTrashXFilled />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
