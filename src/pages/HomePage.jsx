import React from "react";
import NavBar from "./utils/Navbar/Navbar";
import HoverEffect from "./utils/Arrow/Box";
import { Link } from "react-router-dom";
function HomePage() {
  return <div className="w-[1536px] h-[700px] relative bg-[#fdfdef]">
    <NavBar />
    <div className="flex">
      <div className="callToAction   mt-10 pt-[8%] pl-[10%] relative ">
        <div className="w-[441px] h-[143px] mt-30 mb-[15%] ml-[2vw] relative text-center text-black text-[32px] font-normal font-['Microsoft Sans Serif']">Lebanon's first and only Competitive Programming Academy </div>
        <Link to={"register"}>
          <button
            className="w-[296px] h-[78px] ml-[6.2vw] bg-[#cf4657] rounded-[46px] text-white text-4xl font-normal font-['Microsoft Sans Serif'] flex items-center justify-center
      transition-transform transform hover:scale-105 hover:bg-[#d85768] focus:outline-none"
          >
            Enroll Now
          </button>

        </Link>

      </div>
      <div className="Boxes w-[70vw] h-[80vh] mt-10 relative">
        <div className="w-[165px] h-[22px] left-[271px] top-[77px] absolute text-center text-[#fdfdf7] text-[32px] font-normal font-['Microsoft Sans Serif'] z-10">Feel Free</div>
        <div className="w-60 h-[58px] left-[243px] top-[119px] absolute text-center text-white text-4xl font-normal font-['Microsoft Sans Serif'] z-10">Contact Us </div>
        <HoverEffect />
        <div className="w-[274px] h-[317px] left-[230px] top-[45px] absolute bg-[#cf4657] rounded-[44px]" />
        <div className="w-[300px] h-[343px] left-[217px] top-[32px] absolute bg-[#fe8040]/0 rounded-[44px] border border-black" />
        <div className="w-[373px] h-[415px] left-[410px] top-[163px] absolute bg-[#fdfdef] rounded-[44px]" />
        <div className="w-[329px] h-[374px] left-[432px] top-[183px] absolute bg-[#297752]/50 rounded-[44px]" />
        <div className="w-[349px] h-[391px] left-[422px] top-[175px] absolute bg-[#d9d9d9]/0 rounded-[44px] border border-black" />
      </div>
    </div>
    <div className="flex mt-[1%] pl-[75%] ">
      <div className="w-[161px] h-6 relative  text-center text-black text-xl font-normal font-['Microsoft Sans Serif']">Find us on </div>
      <img className="w-7 h-7 relative " src="./application_15072085.png" />
      <img className="w-7 h-7 ml-5 relative " src="./facebook_1051360.png" />
      <img className="w-7 h-7 ml-5 relative " src="./linkedin_1384088.png" />
    </div>
  </div>
    ;
}

export default HomePage;
