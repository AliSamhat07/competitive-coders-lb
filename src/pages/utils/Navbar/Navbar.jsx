import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to track the current route

const NavBar = () => {
  const location = useLocation(); // Get the current location (route/path)
  const [active, setActive] = useState(location.pathname); // Set active based on current path initially

  const navItems = [
    { label: "Home", key: "Home", route: "/" },
    { label: "Course", key: "Course", route: "/register" },
    { label: "Blog", key: "Blog", route: "/events" },
    { label: "About", key: "About", route: "/about" },
  ];

  return (
    <div className="NavBar h-[48px] flex items-center justify-center space-x-6 pt-12 pb-20">
      {navItems.map((item) => (
        <Link
          key={item.key}
          to={item.route} // Link to the corresponding route
          onClick={() => setActive(item.route)} // Update active state on click
          className={`text-xl font-['Microsoft Sans Serif'] px-4 py-1 transition-colors duration-200
                    ${
                      location.pathname === item.route
                        ? "text-[#cf5768] border-b-2 border-[#cf5768]" // Highlight the active item based on location
                        : "text-[#788183] hover:text-[#cf5768]"
                    }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
