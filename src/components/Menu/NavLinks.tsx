import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  {
    name: "Today",
    path: "/today",
  },
  {
    name: "All",
    path: "/",
  },
  {
    name: "Important",
    path: "/important",
  },
  {
    name: "Done",
    path: "/completed",
  },
  {
    name: "Uncompleted",
    path: "/uncompleted",
  },
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 ${
                currentPath === link.path ? classActive : ""
              }`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
