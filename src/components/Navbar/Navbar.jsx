import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/NavIcons/logo.svg";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import ServiceIcon from "../../assets/NavIcons/services-icon.svg";
// import ContactIcon from "../../assets/NavIcons/contact-icon.svg";
// import AboutIcon from "../../assets/NavIcons/about-icon.svg";
// import ConsultIcon from "../../assets/NavIcons/consult-icon.svg";
// import HomeIcon from "../../assets/NavIcons/home-icon.svg";
// import ApplyIcon from "../../assets/NavIcons/apply-icon.svg";
import {
  ServicesIcon,
  ContactIcon,
  AboutIcon,
  ConsultIcon,
  HomeIcon,
  ApplyIcon,
} from "./NavIcons";
import { useLocation, Link } from "react-router-dom";

const LINK = `whitespace-nowrap font-lexend text-center relative inline-block 
  text-xl px-4 py-1 transition-colors duration-200`;

const Navbar = () => {
  // State to manage the navbar's visibility
  const location = useLocation(); // Get the current location (route/path)
  const [nav, setNav] = useState(false);
  const navigationRef = useRef();
  const buttonRef = useRef();
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    console.log("Clicked on the button");
    setNav(!nav);
  };
  const scrollToElement = (e) => {
    if (window.location.href != "/") {
      localStorage.setItem("scrollIntoContact", "true");
      window.location.replace("/");
    } else {
      const contact = document.getElementById("contact");
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isNav, setIsNav] = useState(location.pathname == "/register/form");

  useEffect(() => {
    setIsNav(location.pathname == "/register/form");
  }, [location]);

  // Array containing navigation items
  const navItems = [
    { icon: HomeIcon, target: "/", text: "Home" },
    { icon: ServicesIcon, target: "/register", text: "Course" },
    { icon: ConsultIcon, target: "/events", text: "Blog" },
    { icon: AboutIcon, target: "/about", text: "About us" },
    // { icon: ApplyIcon, target: "/apply", text: "Apply" },
    // { icon: ContactIcon, action: scrollToElement, text: "Contact Us" },
  ];

  const handleDocumentClick = (e) => {
    if (nav && buttonRef && !buttonRef.current.contains(e.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, [nav]);

  return (
    <div
      suppressHydrationWarning={true}
      id="navigation"
      ref={navigationRef}
      className={`${
        isNav ? "bg-accent-gray border-b border-gray-300" : "bg-accent-beige"
      }  flex justify-center md:justify-center items-center py-10 pb-12 px-8 mx-auto  text-white`}
    >
      {/* Logo */}
      {/* 
      <a href="/">
        <img
          src={Logo}
          alt="swift"
          className="lg:w-[100px] w-[100px] h-auto sm:mx-auto  p-0 min-h-[80px] lg:min-h-[80px] md:min-h-[60px]  mx-auto"
        />
      </a> */}

      {/* Desktop Navigation */}
      <div className="hidden md:flex text-black font-light md:text-md lg:text-lg justify-center items-center">
        <div className="items-center min-w-fit sm:gap-4 md:gap-4 lg:gap-12 gap-12 hidden md:flex w-7/12 mr-6 xl:mr-12">
          {navItems.map((item, index) => (
            <p key={index} className="inline-block text-center mx-auto group  ">
              {item?.target ? (
                <a
                  href={item.target}
                  className={`${LINK} ${
                    location.pathname === item.target
                      ? "text-[#cf5768] border-b-2 border-[#cf5768]" // Highlight the active item based on location
                      : "text-[#788183] hover:text-accent-red group-hover:before:block before:absolute before:bottom-0 before:left-[1px] before:h-[2px] before:bg-accent-red before:transition-all before:duration-300 duration-[100] before:ease-in-out before:w-0 group-hover:before:w-full"
                  }`}
                >
                  {item.text}{" "}
                </a>
              ) : (
                <button onClick={item.action} className={LINK}>
                  {item.text}
                </button>
              )}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Icon */}
      <button
        aria-label="navigation"
        ref={buttonRef}
        onClick={handleNav}
        className="block md:hidden top-4 sm:top-7 right-3 absolute z-[100]"
      >
        <div
          onClick={(e) => {
            handleNav(e);
            e.stopPropagation();
          }}
          className=" rounded-xl space-y-1.5 duration-[0.6s] transition-all block "
        >
          <div
            className={`${
              nav && "rotate-45 translate-y-[1rem]"
            }   duration-[0.6s] transition-all line-1 rounded-xl h-0.5 w-9 bg-content bg-gray-600 `}
          ></div>

          <div
            className={`${
              nav && "-rotate-45 w-9 translate-y-[0.5rem]"
            }   duration-[0.6s] transition-all line-2 block  rounded-xl h-0.5 w-7 bg-content bg-gray-600`}
          ></div>
          <div
            className={`${
              nav && "!w-0"
            }  duration-[0.6s] transition-all line-3 block rounded-xl h-0.5 w-5 bg-content bg-gray-600`}
          ></div>
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`flex flex-col z-[101]
          ${
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900  text-accent-green bg-white ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
            `}
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold   text-accent-green m-4 pb-6">
          CD.LB
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item, index) => (
          <div key={index}>
            {item.target ? (
              <>
                <a
                  href={item.target}
                  className={`flex  font-lexend text-sm sm:text-md justify-start gap-4 group items-center p-4 py-6 border-b  hover:bg-accent-green duration-300 hover:text-white cursor-pointer border-gray-600 ${
                    index == 0 && "border-t"
                  }`}
                >
                  <item.icon width={"2em"} height={"2em"} />
                  <span className="mt-[2px]">{item.text}</span>
                </a>
              </>
            ) : (
              <>
                <button
                  onClick={item.action}
                  className={`flex w-full font-lexend text-sm sm:text-md justify-start gap-4 group items-center p-4 py-6 border-b  hover:bg-accent-green duration-300 hover:text-white cursor-pointer border-gray-600 ${
                    index == 0 && "border-t"
                  }`}
                >
                  <item.icon width={"2em"} height={"2em"} />
                  <span className="mt-[2px]">{item.text}</span>
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
