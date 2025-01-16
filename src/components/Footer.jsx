import React from "react";

function Footer() {
  return (
    <div className="flex  py-16 text-center justify-center items-center border-t-[1px] border-[] bg-accent-beige ">
      <div className="w-[161px] h-6 relative  text-center text-black text-xl font-normal font-['Microsoft Sans Serif']">
        Find us on{" "}
      </div>
      <img className="w-7 h-7 relative " src="./application_15072085.png" />
      <img className="w-7 h-7 ml-5 relative " src="./facebook_1051360.png" />
      <img className="w-7 h-7 ml-5 relative " src="./linkedin_1384088.png" />
    </div>
  );
}

export default Footer;
