import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const client = axios.create({
  baseURL: "http://api.competitivecoderlb.com",
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.trim()) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid";
    }
    if (!password.trim()) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "Valid";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationMessage = validateForm();

    if (validationMessage === "Valid") {
      setIsLoading(true);
      try {
        const response = await client.post("/userapi/login", {
          email: email,
          password: password,
        });
        console.log("Login successful:", response.data);
        setSuccessPopup(true);
        setErrorMessage(null);
        // Store user info in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
      } catch (error) {
        console.error("Login error:", error);
        setErrorMessage(
          error.response?.data?.error || "Login failed. Please check your credentials."
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrorMessage(validationMessage);
    }
  };

  const closePopup = () => {
    setSuccessPopup(false);
    navigate("/");
  };

  return (
    <div id="LoginWrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-container slideRight-animation">
          <h1 className="form-header">
            Welcome Back
            {errorMessage && (
              <div style={{ color: "red", marginBottom: "0px", fontSize: 14 }}>
                {errorMessage}
              </div>
            )}
          </h1>

          <div className="input-container">
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
            <span className="SPANFORM">E-mail</span>
          </div>

          <div className="input-container">
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
            <span className="SPANFORM">Password</span>
          </div>

          <div id="btm">
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <p>
              Don't have an account?{" "}
              <a href="/signup" style={{ color: "#007bff", textDecoration: "none" }}>
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </form>

      {successPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Login Successful!</h2>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
