import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation()
  const [isNav, setIsNav] = useState(location.pathname == "/register/form");

  useEffect(() => {
    setIsNav(location.pathname == "/register/form");
  }, [location]);
  return (
    <div className={`font-poppins ${isNav ? 'bg-accent-gray' : 'bg-accent-beige'}`}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
