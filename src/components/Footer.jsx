import React from "react";
import PhoneIcon from "../assets/FooterIcons/phone-icon.svg";
import LinkedInIcon from "../assets/FooterIcons/linkedin-icon.svg";
import InstagramIcon from "../assets/FooterIcons/instagram-icon.svg";
import WhatsappIcon from "../assets/FooterIcons/whatsapp-icon.svg";

const LINK =
  "w-[22px] h-auto hover:cursor-pointer hover:scale-[150%]  transition-all duration-[200ms] ";

function Footer() {
  return (
    <div className="bg-accent-green flex flex-col justify-center items-center text-white mt-48 pt-8">
      <div className="flex gap-10 text-center justify-center items-center">
        <div className="text-center text-xl font-normal">Find us on </div>
        <div className="flex justify-center items-center gap-8 py-12">
          <img className={`${LINK}`} src={InstagramIcon} />
          <img className={`${LINK}`} src={LinkedInIcon} />
          <a href="https://wa.me/96181698875" target="_blank">
            <img className={`${LINK}`} src={WhatsappIcon} />
          </a>
        </div>
      </div>
      <p className="pt-6 pb-6 px-2 text-md text-center">
        &copy; Copyright 2024, Competitive Coders Lb, All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
