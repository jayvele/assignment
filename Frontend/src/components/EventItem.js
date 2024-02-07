import { Link, useRouteLoaderData } from "react-router-dom";
import { jobsActions } from "../store/jobs";
import { useDispatch } from "react-redux";

function EventItem({ event }) {
  const token = useRouteLoaderData("root");
  const dispatch = useDispatch();

  function startDeleteHandler() {
      dispatch(jobsActions.removeJob(event));
  }

  return (
    <div className="flex justify-center">
      <article className="w-2/5 m-auto text-center border-2 border-blue-700 rounded-md p-4 bg-blue-50">
        <div className="flex justify-between mx-20 mt-6">
          <h1 className="">Job title: </h1>
          <h1 className="">{event.title}</h1>
        </div>
        <div className="flex justify-between mx-20 mt-6">
          <h1 className="">Salary: </h1>
          <h1>Rs. {event.salary}</h1>
        </div>
        <div className="flex justify-between mx-20 mt-6">
          <h1>Date:</h1>
          <time>{event.date}</time>
        </div>
        <div className="flex justify-between mx-20 my-6 gap-6">
          <h1 className="">Description:</h1>
          <p>{event.description}</p>
        </div>
        {token && (
          <menu className="flex gap-20 justify-center items-center">
            {/* <Link
              to="edit"
              className="text-white font-display font-semibold bg-blue-700 text-xs border border-tertiaryBlue-600 rounded-xl px-2.5 py-1.5 cursor-pointer"
            >
              Edit
            </Link> */}
            <Link
              onClick={startDeleteHandler}
              to="/events"
              className="text-white font-display font-semibold bg-blue-700 text-xs border border-tertiaryBlue-600 rounded-xl px-2.5 py-1.5 cursor-pointer"
            >
              Delete
            </Link>
          </menu>
        )}
      </article>
    </div>
  );
}

export default EventItem;
