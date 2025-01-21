function About() {
  return (
    <div className="WrapperAbout w-full h-[82%] flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Section */}
      <div className="text-section w-full lg:w-[40%] px-6 lg:px-20 py-10 lg:py-32 text-base lg:text-lg">
        <p className="text-justify">
          At CC, we are passionate about transforming problem-solving into a craft. Founded by three competitive programmers with years of experience and several competition wins under our belts, our academy is built on a shared vision: to empower Lebanon's upcoming generation of thinkers and programmers.
          <br />
          <br />
          Through our courses, practice sessions, and personalized feedback, we aim to make advanced concepts approachable and help you achieve your goals—whether it’s acing a local hackathon or qualifying for the IOI or ICPC.
          <br />
          <br />
          We are more than just an academic institution; we are a community motivated by creativity, curiosity, and a shared commitment to growth.
        </p>
      </div>

      {/* Right Section */}
      <div className="boxes-section w-full lg:w-[60%] flex justify-center relative py-10 lg:py-0">
        {/* Semi-transparent green box */}
        <div className="box absolute bg-[#297752]/50 rounded-[44px] w-[250px] h-[300px] sm:w-[280px] sm:h-[330px] lg:w-[329px] lg:h-[374px] top-[0px] lg:top-[83px] left-[18%] lg:left-[23%]" />
        {/* Transparent border box */}
        <div className="box absolute bg-transparent border border-black rounded-[44px] w-[270px] h-[320px] sm:w-[300px] sm:h-[350px] lg:w-[349px] lg:h-[391px] top-[-10px] lg:top-[75px] left-[15%] lg:left-[22%]" />
      </div>
    </div>
  );
}

export default About;
