import { useLoaderData } from "react-router"

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job); 
  return (
    <div className="min-h-screen flex items-center justify-center">JobDetails</div>
  )
}

export default JobDetails