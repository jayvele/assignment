import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

function MainNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header className="pt-8 px-32 p-8 flex justify-between bg-blue-100">
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-800" : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-blue-800" : undefined
              }
            >
              Events
            </NavLink>
          </li>

          {!token && (
            <li>
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive ? "text-blue-800" : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
