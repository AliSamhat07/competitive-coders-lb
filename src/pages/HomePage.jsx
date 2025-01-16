import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-[1536px] h-[700px] relative bg-[#fdfdef]  ">
      <div className="NavBar h-[48px] relative">
        <div className="w-[95px] h-[26px] left-[556px] top-[22px] absolute text-[#cf5768] text-xl font-normal font-['Microsoft Sans Serif']">
          Home
        </div>
        <div className="w-[95px] h-[26px] left-[676px] top-[22px] absolute text-[#788183] text-xl font-normal font-['Microsoft Sans Serif']">
          Course
        </div>
        <div className="w-[60px] h-[26px] left-[796px] top-[22px] absolute text-[#788183] text-xl font-normal font-['Microsoft Sans Serif']">
          Blog
        </div>
        <div className="w-[72px] h-[26px] left-[881px] top-[22px] absolute text-[#788183] text-xl font-normal font-['Microsoft Sans Serif']">
          About
        </div>
      </div>
      <div className="flex">
        <div className="callToAction   mt-10 pt-[8%] pl-[6%] relative ">
          <div className="w-[441px] h-[143px] mt-30 mb-[5%] relative text-center text-black text-[32px] font-normal font-['Microsoft Sans Serif']">
            Lebanon's first and only Competitive Programming Academy{" "}
          </div>
          <Link to={"register"}>
            <button className="w-[296px] h-[78px] ml-[4.2vw] pl-[10%] pt-[2.3%] relative bg-[#cf4657] rounded-[46px] text-white text-4xl font-normal font-['Microsoft Sans Serif']">
              Enroll Now
            </button>
          </Link>
        </div>
        <div className="Boxes w-[70vw] h-[80vh] mt-10 relative">
          <div className="w-[165px] h-[22px] left-[271px] top-[77px] absolute text-center text-[#fdfdf7] text-[32px] font-normal font-['Microsoft Sans Serif']">
            Feel Free
          </div>
          <div className="w-60 h-[58px] left-[243px] top-[119px] absolute text-center text-white text-4xl font-normal font-['Microsoft Sans Serif']">
            Contact Us{" "}
          </div>
          <div className="w-[33px] h-8 left-[445px] top-[82px] absolute bg-[#fdfdf7]" />
          <div className="w-[274px] h-[317px] left-[230px] top-[45px] absolute bg-[#cf4657] rounded-[44px]" />
          <div className="w-[300px] h-[343px] left-[217px] top-[32px] absolute bg-[#fe8040]/0 rounded-[44px] border border-black" />
          <div className="w-[373px] h-[415px] left-[410px] top-[163px] absolute bg-[#fdfdef] rounded-[44px]" />
          <div className="w-[329px] h-[374px] left-[432px] top-[183px] absolute bg-[#297752]/50 rounded-[44px]" />
          <div className="w-[349px] h-[391px] left-[422px] top-[175px] absolute bg-[#d9d9d9]/0 rounded-[44px] border border-black" />
        </div>
      </div>
      <div className="flex">
        <div className="w-[161px] h-6 relative  text-center text-black text-2xl font-normal font-['Microsoft Sans Serif']">
          Find us on{" "}
        </div>
        <img
          className="w-9 h-[34.11px] relative "
          src="https://via.placeholder.com/36x34"
        />
        <img
          className="w-9 h-9 relative "
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="w-9 h-9 relative "
          src="https://via.placeholder.com/36x36"
        />
      </div>
    </div>
  );
}

export default HomePage;
