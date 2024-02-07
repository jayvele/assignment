import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const id = useParams();
  const jobs = useSelector((state) => state);
  const event = jobs.filter((job) => job.id == id.eventId);

  return <EventForm event={event[0]} id={id.eventId} />;
}

export default EditEventPage;
