import {
  useNavigate,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { useRef } from "react";

import { jobsActions } from "../store/jobs";

function EventForm({ event, existingId }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  const title = useRef();
  const salary = useRef();
  const date = useRef();
  const description = useRef();
  // const id = useId();
  const id = Math.floor(Math.random() * 1000);
  // if (!event) {
  //   const id = temp;
  // }

  function handleSubmit(event) {
    event.preventDefault();

    const enteredTitle = title.current.value;
    const enteredSalary = salary.current.value;
    const enteredDate = date.current.value;
    const enteredDescription = description.current.value;
    const eventData = {
      title: enteredTitle,
      salary: enteredSalary,
      date: enteredDate,
      description: enteredDescription,
      id: id,
    };
    dispatch(jobsActions.addJob(eventData));
  }

  return (
    <div className="flex justify-center">
      <form
        className="w-2/5 m-8 border-2 border-blue-700 rounded-md p-4 bg-blue-50"
        onSubmit={handleSubmit}
      >
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        <p className="flex justify-between my-4 mx-8">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            required
            defaultValue={event ? event.title : ""}
            ref={title}
            className="border border-blue-500 rounded-md"
          />
        </p>
        <p className="flex justify-between my-4 mx-8">
          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            type="number"
            name="salary"
            required
            defaultValue={event ? event.salary : ""}
            ref={salary}
            min={0}
            className="border border-blue-500 rounded-md"
          />
        </p>
        <p className="flex justify-between my-4 mx-8">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            required
            defaultValue={event ? event.date : ""}
            className="border border-blue-500 rounded-md"
            ref={date}
          />
        </p>
        <p className="flex justify-between my-4 mx-8">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            required
            defaultValue={event ? event.description : ""}
            className="border border-blue-500 rounded-md"
            ref={description}
          />
        </p>
        <div className="flex gap-4 justify-center">
          <button
            type="button"
            onClick={cancelHandler}
            disabled={isSubmitting}
            className="text-white font-display font-semibold bg-blue-700 text-xs border border-tertiaryBlue-600 rounded-xl px-2.5 py-1.5 mr-6 cursor-pointer"
          >
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            className="text-white font-display font-semibold bg-blue-700 text-xs border border-tertiaryBlue-600 rounded-xl px-2.5 py-1.5 mr-6 cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
