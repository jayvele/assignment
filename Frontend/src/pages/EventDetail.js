import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
import { useSelector } from "react-redux";

function EventDetailPage() {
  const id = useParams();
  const jobs = useSelector((state) => state);
  const event = jobs.filter((job) => job.id == id.eventId);

  return <EventItem event={event[0]} />;
}

export default EventDetailPage;
