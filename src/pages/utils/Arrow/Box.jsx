import React, { useState } from "react";
import "./App.css";

function HoverEffect() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className=" bg-white hover-container w-11 h-11 left-[430px] top-[77px] absolute z-10 flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className=" arrow-wrapper flex items-center justify-center w-10 h-10 z-10 ">
                <img
                    src="./Arrow 1.svg"
                    alt="Arrow"
                    className={`arrow ${hovered ? "hovered" : ""}`}
                />
            </div>
        </div>
    );
}

export default HoverEffect;
