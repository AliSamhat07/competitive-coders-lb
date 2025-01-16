import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins bg-accent-beige min-h-screen">
      <Outlet />
    </div>
  );
}

export default App;
