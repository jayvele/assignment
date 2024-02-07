import { NavLink, useRouteLoaderData } from "react-router-dom";

function EventsNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header className="p-8 flex justify-center">
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-400 text-gray-100 border-0 rounded-xl p-1.5"
                  : "hover:bg-blue-100 border-0 rounded-xl p-1.5"
              }
              end
            >
              All Jobs
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink
                to="/events/new"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-400 text-gray-100 border-0 rounded-xl p-1.5"
                    : "hover:bg-blue-100 border-0 rounded-xl p-1.5"
                }
              >
                New Job
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
