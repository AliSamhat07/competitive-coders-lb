import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
const phoneRe = /^[0-9]{8,15}$/; // Accepts phone numbers with 10-15 digits

const client = axios.create({
  baseURL: "https://competitive-coders-lb.onrender.com",
});

function SignupForm() {
  const [currentUser, setCurrentUser] = useState(null);
  const [address, setAddress] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [highSchool, setHighSchool] = useState("");
  const [middleSchool, setMiddleSchool] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successPopup, setSuccessPopup] = useState(false); // Success popup state

  const navigate = useNavigate();

  function isValid(p) {
    var digits = p.replace(/\D/g, "");
    return phoneRe.test(digits);
  }
  const closePopup = () => {
    setSuccessPopup(false); // Close the popup
    navigate("/"); // Redirect to the home page
  };
  const validate = () => {
    if (!address.trim()) return "first name is required";
    if (!fullname.trim()) return "last name is required";
    if (!email.trim()) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid";
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
      client
        .post("/userapi/register", {
          email: email,
          address: address,
          fullname: fullname,
          phone: phone,
          highSchool: highSchool,
          middleSchool: middleSchool,
        })
        .then((response) => {
          console.log("Registration successful:", response.data);
          setSuccessPopup(true); // Show success popup
          setErrorMessage(null); // Clear error message
        })
        .catch((error) => {
          console.error("Error during registration:", error);
          setErrorMessage("Registration failed. Please try again.");
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
              <div style={{ color: "red", marginBottom: "0px", fontSize: 23 }}>
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
              style={{ color: "black" }}
              onChange={(e) => setAddress(e.target.value)}
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
              onChange={(e) => setFullname(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="SPANFORM">E-mail</span>
          </div>

          <div className="input-container">
            <input
              className="input"
              type="tel"
              name="phone"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setHighSchool(e.target.value)}
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
              onChange={(e) => setMiddleSchool(e.target.value)}
              required
            />
            <span className="SPANFORM">Number of High School Students</span>
          </div>

          <div id="btm">
            <button type="submit" onClick={submit} className="submit-btn">
              Register
            </button>
          </div>
        </div>
      </form>

      {/* Success Popup */}
      {successPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Registration Successful!</h2>
            <button
              className="close-btn"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupForm;
