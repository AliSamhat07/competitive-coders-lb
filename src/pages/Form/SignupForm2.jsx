import "./Signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "competitive-coders-lb.onrender.com",
});

function SignupForm2() {
  const [currentUser, setCurrentUser] = useState(null);
  const [address, setAddress] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [highSchool, setHighSchool] = useState("");
  const [middleSchool, setMiddleSchool] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const performNavigate = async () => {
      try {
        await client
          .get("/userapi/user")
          .then(() => {
            setCurrentUser(true);
            navigate("/homepage");
          })
          .catch(() => {
            setCurrentUser(false);
          });
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    performNavigate();
  }, [navigate]);

  function isValid(p) {
    var phoneRe = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var digits = p.replace(/\D/g, "");
    return phoneRe.test(digits);
  }

  const validate = () => {
    if (!address.trim()) return "Address is required";
    if (!fullname.trim()) return "Full name is required";
    if (!email.trim()) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid";
    }
    if (!phone.trim()) return "Phone number is required";
    if (!isValid(phone)) return "Phone number is invalid";
    if (!highSchool & !middleSchool) {
      return "it is required to register some number of students";
    } else if (highSchool < 0 || middleSchool < 0) {
      return "can register negative number of students!!";
    }

    return "Valid";
  };

  function submit(e) {
    if (validate() === "Valid") {
      e.preventDefault();
      client.post("/userapi/register", {
        email: email,
        address: address,
        fullname: fullname,
        phone: phone,
        highSchool: 0,
        middleSchool: 0,
      });
    } else {
      if (middleSchool) {
        e.preventDefault();
      }
      let ab = validate();
      if (
        ab === "HighSchool must be at least 8 characters" ||
        ab === "HighSchools do not match" ||
        ab === "Phone number is invalid" ||
        ab === "Email is invalid"
      ) {
        setErrorMessage(ab);
      } else {
        setErrorMessage("");
      }
    }
  }

  if (!currentUser) {
    return (
      <div id="SignupWrapper">
        <form>
          <div className="form-container slideRight-animation">
            <h1 className="form-header">
              Get started{" "}
              {errorMessage && (
                <div
                  style={{ color: "red", marginBottom: "0px", fontSize: 23 }}
                >
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
              <span className="SPANFORM">First Name</span>
              <div className="error"></div>
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
              <span className="SPANFORM">Last name</span>
              <div className="error"></div>
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
              <div className="error"></div>
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
              <div className="error"></div>
            </div>

            <div id="btm">
              <button type="submit" onClick={submit} className="submit-btn">
                Create Account
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm2;
