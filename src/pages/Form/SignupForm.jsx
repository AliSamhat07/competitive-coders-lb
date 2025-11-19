import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
const phoneRe = /^[0-9]{8,15}$/;

const client = axios.create({
  baseURL: "http://api.competitivecoderlb.com",
});

function SignupForm() {
  const [address, setAddress] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [highSchool, setHighSchool] = useState("");
  const [middleSchool, setMiddleSchool] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successPopup, setSuccessPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function isValid(p) {
    var digits = p.replace(/\D/g, "");
    return phoneRe.test(digits);
  }

  const closePopup = () => {
    setSuccessPopup(false);
    navigate("/");
  };

  const validate = () => {
    if (!address.trim()) return "Address is required";
    if (!fullname.trim()) return "Institution name is required";
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
    if (!confirmPassword.trim()) {
      return "Please confirm your password";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match";
    }
    if (!phone.trim()) return "Phone number is required";
    if (!isValid(phone)) return "Phone number is invalid";
    if (!highSchool && !middleSchool) {
      return "It is required to register some number of students";
    } else if (highSchool < 0 || middleSchool < 0) {
      return "Cannot register a negative number of students!";
    }

    return "Valid";
  };

  function submit(e) {
    e.preventDefault();
    const validationMessage = validate();
    if (validationMessage === "Valid") {
      setIsLoading(true);
      client
        .post("/userapi/register", {
          email: email,
          password: password,
          confirm_password: confirmPassword,
          address: address,
          fullname: fullname,
          phone: phone,
          high_school: highSchool || 0,
          middle_school: middleSchool || 0,
        })
        .then((response) => {
          console.log("Registration successful:", response.data);
          setSuccessPopup(true);
          setErrorMessage(null);
        })
        .catch((error) => {
          console.error("Error during registration:", error);
          setErrorMessage(error.response?.data?.error || "Registration failed. Please try again.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setErrorMessage(validationMessage);
    }
  }

  return (
    <div id="SignupWrapper">
      <form>
        <div className="form-container slideRight-animation">
          <h1 className="form-header">
            Get started{" "}
            {errorMessage && (
              <div style={{ color: "red", marginBottom: "0px", fontSize: 14 }}>
                {errorMessage}
              </div>
            )}
          </h1>

          <div className="input-container">
            <input
              className="input"
              type="text"
              name="f-name"
              id="f-name"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={isLoading}
              required
            />
            <span className="SPANFORM">Address</span>
          </div>

          <div className="input-container">
            <input
              className="input"
              type="text"
              name="l-name"
              id="l-name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              disabled={isLoading}
              required
            />
            <span className="SPANFORM">Institution Name</span>
          </div>

          <div className="input-container">
            <input
              className="input"
              type="email"
              name="mail"
              id="mail"
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

          <div className="input-container">
            <input
              className="input"
              type="password"
              name="confirm-password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
              required
            />
            <span className="SPANFORM">Confirm Password</span>
          </div>

          <div className="input-container">
            <input
              className="input"
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isLoading}
              required
            />
            <span className="SPANFORM">Phone</span>
          </div>

          <div className="input-container">
            <input
              type="number"
              name="user-MiddleSchool"
              id="user-MiddleSchool"
              className="user-MiddleSchool input"
              value={highSchool}
              onChange={(e) => setHighSchool(e.target.value)}
              disabled={isLoading}
              required
            />
            <span className="SPANFORM">Number of Middle School Students</span>
          </div>

          <div className="input-container">
            <input
              type="number"
              name="user-HighSchool"
              id="user-HighSchool"
              className="HighSchool input"
              value={middleSchool}
              onChange={(e) => setMiddleSchool(e.target.value)}
              disabled={isLoading}
              required
            />
            <span className="SPANFORM">Number of High School Students</span>
          </div>

          <div id="btm">
            <button
              type="submit"
              onClick={submit}
              className="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <p>
              Already have an account?{" "}
              <a href="/login" style={{ color: "#007bff", textDecoration: "none" }}>
                Login here
              </a>
            </p>
          </div>
        </div>
      </form>

      {successPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Registration Successful!</h2>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupForm;

