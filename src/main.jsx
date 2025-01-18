import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import PlanPage from "./pages/PlanPage.jsx";
import SignUp from "./pages/Form/Signup.jsx";
import About from "./pages/About/About.jsx";
import Events from "./pages/Events/Events.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} index={true} />
      <Route path="/register" element={<PlanPage />} />
      <Route path="register/form" element={<SignUp />} />
      <Route path="/About" element={<About />} />
      <Route path="/Events" element={<Events />} />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
