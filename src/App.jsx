import { Outlet } from "react-router-dom";
import NavBar from "./pages/utils/Navbar/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-poppins bg-accent-beige">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
