import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router";
const JobCard = ({ job }) => {
  return (
    <div className="hover:shadow-md duration-500 hover:shadow-slate-400/30 p-4 rounded-lg bg-slate-800/40">
      <p className="text-lg font-medium">{job.title}</p>
      <p className="flex text-xs items-center gap-1">
        <CiLocationOn />
        {job.location}
      </p>
      <div className="mt-10">
        <img src={job.company_logo} alt="" className="w-10 h-10" />
        <p>{job.company}</p>
      </div>
      <div className="grid text-xs grid-cols-2 sm:grid-cols-1 gap-2 mt-3.5">
        <p>
          Salary Range: {job.salaryRange.min} - {job.salaryRange.max}{" "}
          {`(${job.salaryRange.currency})`}
        </p>

        <p className="flex items-center gap-2">
          <FaBagShopping />
          {job.jobType}
        </p>
        <ul className="col-span-2 sm:col-span-1">
          <p className="my-1">Requirements:</p>
          {job.requirements.map((req) => (
            <li className="list-inside list-disc" key={req}>
              {req}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-3 flex gap-2">
        <Link to={`/jobs/${job._id}`}>
          <button className="btn btn-sm btn-primary md:btn-md">
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};
export default JobCard;
