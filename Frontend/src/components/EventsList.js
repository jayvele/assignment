import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function EventsList() {
  const jobs = useSelector((state) => state);

  return (
    <div className="m-8">
      <h1 className="text-2xl font-medium flex justify-center m-4">All Jobs</h1>
      <div className="flex justify-center">
        <ul className="m-4 w-2/4">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="my-4 h-32 flex rounded-md overflow-hidden border-2 border-blue-900 bg-blue-100 items-center hover:scale-102 hover:bg-blue-200 cursor-pointer"
            >
              <Link to={`/events/${job.id}`} className="w-full">
                <div className="p-1">
                  <h2 className="my-1">{job.title}</h2>
                  <time>{job.date}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventsList;
