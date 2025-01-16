import NavBar from "../utils/Navbar/Navbar";

function About() {
    return (
        <div className="WrapperAbout w-[100vw] h-[100vh]">
            <NavBar />
            <div className="flex">
                <div className="relative w-[30vw] mt-60 ml-40">          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, hic
                    tempora. Natus laboriosam tempora consequatur ipsam ullam! Eum,
                    tenetur cum voluptatibus perspiciatis molestiae recusandae velit porro
                    praesentium corporis, delectus nesciunt veritatis laborum cupiditate
                    quas ducimus cum voluptatibus perspiciatis molestiae recusandae velit porro
                    praesentium corporis, delectus nesciunt veritatis laborum cupiditate
                    quas ducimus .</div>
                <div className="Boxes w-[70vw] h-[80vh] mt-10 relative">
                    <div className="w-[329px] h-[374px] left-[332px] top-[83px] absolute bg-[#297752]/50 rounded-[44px]" />
                    <div className="w-[349px] h-[391px] left-[322px] top-[75px] absolute bg-[#d9d9d9]/0 rounded-[44px] border border-black" />
                </div>
            </div>
        </div>
    );
}

export default About;
