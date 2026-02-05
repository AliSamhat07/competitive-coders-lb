import React from "react";
import HoverEffect from "./utils/Arrow/Box";
import { Link } from "react-router-dom";
function HomePage() {
  const handleContact = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative mx-auto flex justify-center items-start pb-32">
      <div className="
    callToAction 
    flex justify-start gap-12 mt-24 items-center flex-col 
    relative px-8 lg:px-0 lg:pl-32 w-full xl:w-[40%]
    lg:translate-x-[6vw] lg:translate-y-[2vw]
  ">
        <div className=" relative text-center text-black font-semibold text-[2.5em] leading-[1.5em]">
          Lebanon's <span className="text-accent-gree">first</span> and{" "}
          <span className="text-accent-gren">only</span> Competitive Programming
          Academy{" "}
        </div>
        <Link to={"register"}>
          <button
            className=" px-12 py-4 bg-[#cf4657] rounded-[46px] text-white text-2xl font-semibold flex items-center justify-center
    transition-transform transform hover:scale-105 hover:bg-[#d85768] focus:outline-none"
          >
            Enroll Now
          </button>
        </Link>
      </div>

      <div className="Boxes w-[65%] h-[80vh] mt-10 relative hidden xl:block lg:translate-x-[0vw] lg:translate-y-[-2vw]">
        <div className="w-[165px] h-[22px] left-[271px] top-[77px] absolute text-center text-[#fdfdf7] text-[32px] font-normal z-10">
          Feel Free
        </div>
        <div className="hover:cursor-pointer hover:opacity-[60%] transition-all duratoin-[100ms] w-60 h-[58px] left-[243px] top-[119px] absolute text-center text-white text-4xl font-normal z-10" onClick={handleContact}>
          Contact Us{" "}
        </div>
        <HoverEffect />
        <div className="w-[274px] h-[317px] left-[230px] top-[45px] absolute bg-[#cf4657] rounded-[44px]" />
        <div className="w-[300px] h-[343px] left-[217px] top-[32px] absolute bg-[#fe8040]/0 rounded-[44px] border border-black" />
        <div className="w-[373px] h-[415px] left-[410px] top-[163px] absolute bg-[#fdfdef] rounded-[44px]" />
        <div className="w-[329px] h-[374px] left-[432px] top-[183px] absolute bg-[#297752]/50 rounded-[44px]" />
        <div className="w-[349px] h-[391px] left-[422px] top-[175px] absolute bg-[#d9d9d9]/0 rounded-[44px] border border-black" />
      </div>
    </div>
  );
}

export default HomePage;
