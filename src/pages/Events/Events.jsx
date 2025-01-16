import NavBar from "../utils/Navbar/Navbar";
function Events() {
    return (
        <div className="WrapperEvents w-[100vw] h-[100vh]">
            <NavBar />
            <div className="flex flex-wrap w-full ">
                <div className=" w-[20%] aspect-[5/6] relative mt-10 ml-10 bg-white border-2 rounded-[46px] overflow-hidden">
                    <img className="h-[50%] w-[100%] object-contain" src=".\C_C_LB-WHInCOLOR-FINAL_LOGO.jpg" />
                    <div className="h-[50%] w-[100%] ">Lorem Ipsum is simply dummy text of the printing and typesetting </div>
                </div>

            </div>
        </div>
    );
}

export default Events;
