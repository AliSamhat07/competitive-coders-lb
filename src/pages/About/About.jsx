function About() {
  return (
    <div className="
      WrapperAbout 
      w-full min-h-screen 
      flex flex-col lg:flex-row 
      items-center lg:items-start 
      px-6 md:px-10 lg:px-16 xl:px-24 
      py-16 lg:py-24
      gap-16
    ">
      
      {/* LEFT SECTION */}
      <div className="text-section w-full lg:w-[45%]">
        <p className="
          text-justify leading-relaxed
          text-[clamp(1rem,1.2vw,1.25rem)]
          text-black/90
        ">
          At CC, we are passionate about transforming problem-solving into a craft.
          Founded by three competitive programmers with years of experience and several
          competition wins under our belts, our academy is built on a shared vision: 
          to empower Lebanon's upcoming generation of thinkers and programmers.
          <br /><br />
          Through our courses, practice sessions, and personalized feedback, we aim 
          to make advanced concepts approachable and help you achieve your goals—
          whether it’s acing a local hackathon or qualifying for the IOI or ICPC.
          <br /><br />
          We are more than just an academic institution; we are a community motivated 
          by creativity, curiosity, and a shared commitment to growth.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="
        boxes-section 
        w-full lg:w-[55%] 
        relative flex justify-center 
        min-h-[320px] lg:min-h-[420px]
      ">
        
        {/* BACK BOX */}
        <div className="
          absolute rounded-[44px]
          bg-[#297752]/40
          w-[clamp(220px,22vw,330px)]
          h-[clamp(260px,26vw,370px)]
          translate-x-[10%] translate-y-[8%]
        " />

        {/* OUTLINE BOX */}
        <div className="
          absolute rounded-[44px] border border-black
          w-[clamp(240px,24vw,350px)]
          h-[clamp(280px,28vw,390px)]
          translate-x-[5%] translate-y-[3%]
        " />

        {/* FRONT FILLED BOX */}
        <div className="
          absolute rounded-[44px]
          bg-[#cf4657]
          w-[clamp(220px,22vw,330px)]
          h-[clamp(260px,26vw,370px)]
        " />
      </div>
    </div>
  );
}

export default About;
