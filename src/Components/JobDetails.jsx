import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto bg-gray-900 shadow-xl rounded-2xl p-6 border border-gray-700 text-white">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={job.company_logo}
            alt={job.company}
            className="w-16 h-16 object-contain rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold text-white">{job.title}</h2>
            <p className="text-gray-400">{job.company}</p>
          </div>
        </div>
        <p className="text-gray-300 mb-2">📍 {job.location}</p>
        <p className="text-gray-300 mb-2">
          💼 {job.jobType} | 🏷️ {job.category}
        </p>
        <p className="text-gray-300 mb-2">
          📅 Deadline: {job.applicationDeadline}
        </p>
        <p className="text-green-400 font-semibold mb-4">
          💰 Salary: {job.salaryRange.min}-{job.salaryRange.max}{" "}
          {job.salaryRange.currency.toUpperCase()}
        </p>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {job.description}
        </p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Requirements:
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Responsibilities:
          </h3>
          <ul className="list-disc list-inside text-gray-400">
            {job.responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            Contact HR: {job.hr_name} ({" "}
            <a
              href={`mailto:${job.hr_email}`}
              className="text-blue-400 hover:underline"
            >
              {job.hr_email}
            </a>
            )
          </p>
        </div>
        <div>
          <Link to={`/apply/${job._id}`}>
            <button className="bg-green-400 mt-2.5 duration-300 cursor-pointer hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
