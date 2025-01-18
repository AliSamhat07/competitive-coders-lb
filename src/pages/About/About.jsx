function About() {
  return (
    <div className="WrapperAbout w-[100vw] h-[100vh]">
      <div className="flex">
        <div className="relative w-[30vw] mt-60 ml-40">
          {" "}
          At CC , we are passionate about transforming problem-solving into a craft. Founded by three competitive programmers with years of experience and several competition wins under our belts, our academy is built on a shared vision: to empower Lebanon's upcoming generation of thinkers and programmers.

          Through our courses, practice sessions, and personalized feedback, we aim to make advanced concepts approachable and help you achieve your goals—whether it’s acing a local hackathon or qualifying for the IOI or ICPC.

          We are more than just an academic institution; we are a community motivated by creativity, curiosity, and a shared commitment to growth.
        </div>
        <div className="Boxes w-[70vw] h-[80vh] mt-10 relative">
          <div className="w-[329px] h-[374px] left-[332px] top-[83px] absolute bg-[#297752]/50 rounded-[44px]" />
          <div className="w-[349px] h-[391px] left-[322px] top-[75px] absolute bg-[#d9d9d9]/0 rounded-[44px] border border-black" />
        </div>
      </div>
    </div>
  );
}

export default About;
