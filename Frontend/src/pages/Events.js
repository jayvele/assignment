import EventsList from "../components/EventsList";
import { useSelector } from "react-redux";

function EventsPage() {
  const jobs = useSelector((state) => state);
  return <EventsList events={jobs} />;
}

export default EventsPage;
